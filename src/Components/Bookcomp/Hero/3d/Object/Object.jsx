import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react';
import './Object.css'
import Loader from '../Loader/Loader.jsx'
import Model from '../model/model'


const Object = () =>{
    const cameraRef = useRef();
    const scene = useRef(null);

    const handleMouseMove = (e) => {
      // const windowHalfX = window.innerWidth / 2;
      // const windowHalfY = window.innerHeight / 2;
  
      // const mouseX = (e.clientX - windowHalfX);
      // const mouseY = (e.clientY - windowHalfY);
  
      const mouseX = (e.clientX / window.innerWidth) *7 - 10;
      const mouseY = -(e.clientY / window.innerHeight) *7  + 10;
  
      if (cameraRef.current) {
        cameraRef.current.position.x += (mouseX - cameraRef.current.position.x) * 0.2;
        cameraRef.current.position.y += (mouseY - cameraRef.current.position.y) * 0.2;
        cameraRef.current.lookAt(0, 0, 0);
  
        console.log('Mouse Position:', { mouseX, mouseY });
        console.log('Camera Position:', {
          x: cameraRef.current.position.x,
          y: cameraRef.current.position.y,
          z: cameraRef.current.position.z,
        });
      }
    };
    useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove);
    
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);


    // Speaker
    

return (
 
    <Canvas style={{ width: '800px', height: '800px' }} className='draww' camera={{ position: [1, 2, 8], near: 0.1, far: 5000 }}
    onPointerMove={handleMouseMove}
    onCreated={({ gl }) => {
  
    }}>
    <Suspense fallback={<Loader/>}>
     {/* Reduce the intensity of the lights to make the scene darker */}
     <ambientLight intensity={0.5} color="#a38bf8" />
      <spotLight intensity={10} color="#a38bf8" position={[5, 1, 10]} angle={Math.PI / 4} penumbra={0.05} />
      <hemisphereLight skyColor="#b1e1ff" intensity={0.3} groundColor="#ff8c00" />
      <pointLight intensity={100} color="#a38bf8" position={[-5, 1, -10]} distance={20} />
      
      {/* Add an additional PointLight for the purple glow */}
      <pointLight intensity={100} color="#8a2be2" position={[0, 1, 0]} distance={5} />
  

        <Model/>

    </Suspense>
  </Canvas>
  
)
}
export default Object ;