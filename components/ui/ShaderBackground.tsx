"use client"

import { Canvas, useThree } from "@react-three/fiber"
import { ShaderPlane } from "./background-paper-shaders"
import { cn } from "@/lib/utils"

interface ShaderBackgroundProps {
  className?: string
  color1?: string
  color2?: string
}

function FullScreenPlane({ color1, color2 }: { color1: string, color2: string }) {
  const { viewport } = useThree()
  return (
    <group scale={[viewport.width / 2, viewport.height / 2, 1]}>
      <ShaderPlane position={[0, 0, 0]} color1={color1} color2={color2} />
    </group>
  )
}

export function ShaderBackground({
  className,
  color1 = "#000000",
  color2 = "#1a1a1a"
}: ShaderBackgroundProps) {
  return (
    <div className={cn("fixed inset-0 -z-10 w-full h-full pointer-events-none", className)}>
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        <FullScreenPlane color1={color1} color2={color2} />
      </Canvas>
    </div>
  )
}
