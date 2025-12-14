import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key is missing. AI features will not work.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = (): Chat | null => {
  const client = getClient();
  if (!client) return null;

  try {
    chatSession = client.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize chat:", error);
    return null;
  }
};

export const sendMessageStream = async function* (message: string) {
  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) {
    yield "I'm sorry, I cannot connect to the AI service at the moment. Please check your API key configuration.";
    return;
  }

  try {
    const result = await chatSession.sendMessageStream({ message });
    
    for await (const chunk of result) {
       // Type assertion as per guidelines
       const c = chunk as GenerateContentResponse;
       if (c.text) {
         yield c.text;
       }
    }
  } catch (error) {
    console.error("Error sending message:", error);
    yield "An error occurred while communicating with the AI. Please try again later.";
  }
};
