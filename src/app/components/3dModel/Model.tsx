import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three'
import { Center } from '@react-three/drei';
useGLTF.preload("/abstract_geometric_sphere.glb");


export default function Model() {
  const group = useRef<THREE.Group>(null)


  useFrame(({camera}) => {
    group.current?.rotateY(THREE.MathUtils.degToRad(0.2));
  });

  
  const { scene } = useGLTF(
    "/abstract_geometric_sphere.glb"
  )


    /*
    const scene = new THREE.Scene();
const torusKnot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(1, 0.4, 100, 16),
  new THREE.MeshStandardMaterial({
    color: 0x1795de,
    emissive:0x588FEF,
    roughness: 0,
    metalness:1,
  })
)
scene.add(torusKnot)
*/


  return (
    <Center>
    <group ref={group} scale={[0.006, 0.006, 0.006]} position={[0,0,0]} >
      <primitive object={scene} />
    </group>
    </Center>
  )
}