import React, { useEffect, useState } from "react";
import * as THREE from "three";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Canvas } from "@react-three/fiber";
import Sphere from "components/earth/Sphere";
import CameraController from "components/earth/Camera";

const markdown = `
### **A map of all the place I have been :D**

Green dot are where I've been, you can rotate the map.
`;

type Props = {};

// Map in 3D
const Index: React.FC<Props> = () => {
  const [worldTexture, setWorldTexture] = useState<THREE.Texture>();
  const [cloudTexture, setCloudTexture] = useState<THREE.Texture>();

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load("/small-world.jpeg", (texture) => setWorldTexture(texture));
    loader.load("/small-world-clouds.png", (texture) =>
      setCloudTexture(texture)
    );
  }, []);

  if (!worldTexture || !cloudTexture) return <></>;

  return (
    <div className="h-96 md:w-1/3">
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      <Canvas
        className="rounded mt-3"
        style={{
          background:
            "radial-gradient(circle at center, white, rgba(113,129,191,0.5) 50%)",
        }}
        camera={{
          fov: 30,
          aspect: window.innerWidth / window.innerHeight,
          near: 0.1,
          far: 60,
          position: [6, 0, 0],
        }}
      >
        <ambientLight />
        <CameraController />
        <pointLight color={0xffffff} intensity={3} />
        <Sphere
          texture={worldTexture}
          rotationY={0.0005}
          radius={1}
          widthSegments={40}
          heightSegments={40}
        />
        <Sphere
          texture={cloudTexture}
          transparent={true}
          rotationY={-0.001}
          radius={1.01}
          widthSegments={40}
          heightSegments={40}
        />
      </Canvas>
    </div>
  );
};

export default Index;
