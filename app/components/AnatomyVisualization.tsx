'use client';

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

interface AnatomyVisualizationProps {
  scrollY: number
}

function HumanBodyModel({ progress }: { progress: number }) {
  const meshRef = useRef<THREE.Group>(null)
  const [bodyParts, setBodyParts] = useState<THREE.Mesh[]>([])

  useEffect(() => {
    if (!meshRef.current) return

    const parts: THREE.Mesh[] = []

    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.8, 16, 16),
      new THREE.MeshPhongMaterial({
        color: 0x94a3b8,
        transparent: true,
        opacity: 0.1 + progress * 0.6,
        wireframe: progress < 0.3,
        emissive: 0x475569,
        emissiveIntensity: 0.1,
      })
    )
    head.position.set(0, 4, 0)
    parts.push(head)

    const torso = new THREE.Mesh(
      new THREE.CylinderGeometry(1.2, 1.5, 3, 8),
      new THREE.MeshPhongMaterial({
        color: 0xa855f7,
        transparent: true,
        opacity: 0.1 + progress * 0.6,
        wireframe: progress < 0.5,
        emissive: 0x7c3aed,
        emissiveIntensity: 0.1,
      })
    )
    torso.position.set(0, 1, 0)
    parts.push(torso)

    const armMaterial = new THREE.MeshPhongMaterial({
      color: 0x64748b,
      transparent: true,
      opacity: 0.1 + progress * 0.6,
      wireframe: progress < 0.7,
      emissive: 0x334155,
      emissiveIntensity: 0.1,
    })

    const armGeometry = new THREE.CylinderGeometry(0.3, 0.4, 2.5, 8)
    const leftArm = new THREE.Mesh(armGeometry, armMaterial)
    leftArm.position.set(-2, 1.5, 0)
    leftArm.rotation.z = Math.PI / 6
    parts.push(leftArm)

    const rightArm = new THREE.Mesh(armGeometry, armMaterial)
    rightArm.position.set(2, 1.5, 0)
    rightArm.rotation.z = -Math.PI / 6
    parts.push(rightArm)

    const legMaterial = new THREE.MeshPhongMaterial({
      color: 0xcbd5e1,
      transparent: true,
      opacity: 0.1 + progress * 0.6,
      wireframe: progress < 0.9,
      emissive: 0x94a3b8,
      emissiveIntensity: 0.1,
    })

    const legGeometry = new THREE.CylinderGeometry(0.4, 0.5, 3, 8)
    const leftLeg = new THREE.Mesh(legGeometry, legMaterial)
    leftLeg.position.set(-0.6, -2.5, 0)
    parts.push(leftLeg)

    const rightLeg = new THREE.Mesh(legGeometry, legMaterial)
    rightLeg.position.set(0.6, -2.5, 0)
    parts.push(rightLeg)

    while (meshRef.current.children.length > 0) {
      meshRef.current.remove(meshRef.current.children[0])
    }

    parts.forEach((part) => meshRef.current?.add(part))
    setBodyParts(parts)
  }, [progress])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return <group ref={meshRef} />
}

export default function AnatomyVisualization({ scrollY }: AnatomyVisualizationProps) {
  const progress = Math.min(scrollY / 2000, 1)

  return (
    <div className="fixed inset-0 z-0">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.4} />
        <HumanBodyModel progress={progress} />
      </Canvas>
    </div>
  )
}
