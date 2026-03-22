import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Truck() {
  const group = useRef();

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={group} position={[0, -0.5, 0]}>
      {/* Cab */}
      <mesh position={[-1.8, 0.7, 0]}>
        <boxGeometry args={[1.4, 1.4, 2.2]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Sleeper */}
      <mesh position={[-0.7, 0.55, 0]}>
        <boxGeometry args={[1.0, 1.1, 2.0]} />
        <meshStandardMaterial color="#222222" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Trailer */}
      <mesh position={[2.2, 0.35, 0]}>
        <boxGeometry args={[4.8, 0.7, 2.0]} />
        <meshStandardMaterial color="#333333" metalness={0.5} roughness={0.5} />
      </mesh>

      {/* Oversized load on trailer (wireframe accent) */}
      <mesh position={[2.2, 1.05, 0]}>
        <boxGeometry args={[4.4, 1.2, 1.8]} />
        <meshStandardMaterial color="#00ff88" wireframe={true} />
      </mesh>

      {/* Wheels — front axle */}
      <mesh position={[-2.0, -0.35, 1.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.38, 0.38, 0.28, 16]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-2.0, -0.35, -1.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.38, 0.38, 0.28, 16]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Wheels — drive axle */}
      <mesh position={[-0.2, -0.35, 1.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.38, 0.38, 0.28, 16]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-0.2, -0.35, -1.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.38, 0.38, 0.28, 16]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Wheels — trailer front axle */}
      <mesh position={[1.0, -0.35, 1.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.38, 0.38, 0.28, 16]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[1.0, -0.35, -1.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.38, 0.38, 0.28, 16]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Wheels — trailer rear axle */}
      <mesh position={[3.5, -0.35, 1.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.38, 0.38, 0.28, 16]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[3.5, -0.35, -1.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.38, 0.38, 0.28, 16]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

export default function TruckScene() {
  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <Suspense fallback={<div className="w-full h-full bg-card" />}>
      <Canvas
        className="w-full h-full"
        camera={{ position: [6, 3, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
        <directionalLight position={[-8, 4, -6]} intensity={0.6} color="#00ff88" />
        <directionalLight position={[0, -5, 0]} intensity={0.2} color="#334455" />
        <Truck />
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.8}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </Suspense>
  );
}
