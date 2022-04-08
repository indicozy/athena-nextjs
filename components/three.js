import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from "@react-three/fiber";

function Girl(props) {
  const obj = useLoader(OBJLoader, "/final2.obj");
  return <primitive object={obj} />;
}

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += 0.01));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={0.3}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <Girl />
    </mesh>
  );
}

export default function Model() {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      {/* <spotLight position={[100, 100, 100]} angle={0.15} penumbra={1} /> */}
      <pointLight position={[-40, 30, -20]} color={0x83e5d9} />
      <pointLight position={[40, 30, 20]} color={0xf588b4} />
      <Box position={[0, 0, -60]} />
    </Canvas>
  );
}
