'use client';
import { Canvas } from "@react-three/fiber"
import {Model} from "./Abstract_geometric_sphere"
import {OrbitControls} from "@react-three/drei";

export default function index() {
    return (
        <div>
            <div style={{ width: "50vw", height: "70vh"}} className="flex flex-col justify-center items-center">
                <Canvas >
                    <OrbitControls enableZoom={false} enablePan={false}  ></OrbitControls>
                    <ambientLight intensity={2} />
                    <directionalLight position={[2, 1, 1]} intensity={2} />
                    <Model />
                </Canvas>
            </div>
        </div>
    )
}