import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import models from '../../../../../assets/3d/hotel_room.glb'
import {a} from '@react-spring/three';
import gsap from "gsap";
const Model = (props) => {
  const modelsRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const rotationAngle = scrollPos * 0.008; // Adjust the multiplier as needed
      gsap.to(modelsRef.current.rotation, {
        x: rotationAngle,
        duration: 0.7 // Adjust the duration as needed
      });
    };

    const rotateMesh = () => {
      gsap.to(modelsRef.current.rotation, {
        y: Math.PI * 2, // Full rotation (adjust as needed)
        duration: 10, // Adjust the duration as needed
        repeat: -1, // Repeat indefinitely
        ease: "linear" // Use linear easing for consistent speed
      });
    };

    window.addEventListener("scroll", handleScroll);
    rotateMesh(); // Call rotateMesh function

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { nodes, materials } = useGLTF(models);

  return (
    <a.group ref={modelsRef} {...props}>
      <group {...props}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={1.2}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.material_0}
            />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.material_1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.material_2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials.material_3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials.material_4}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14.geometry}
            material={materials.material_5}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials.material_6}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_18.geometry}
            material={materials.material_7}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_20.geometry}
            material={materials.material_8}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_22.geometry}
            material={materials.material_9}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_24.geometry}
            material={materials.material_10}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_26.geometry}
            material={materials.material_11}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_28.geometry}
            material={materials.material_12}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_30.geometry}
            material={materials.material_13}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_32.geometry}
            material={materials.material_14}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_34.geometry}
            material={materials.material_15}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_36.geometry}
            material={materials.material_16}
          />
        </group>
      </group>
    </group>
      </a.group>
    );
  };
  
  export default Model;