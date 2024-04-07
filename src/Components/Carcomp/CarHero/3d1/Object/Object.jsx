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
 
    <Canvas style={{ width: '520px', height: '800px' }} className='draww' camera={{ position: [1, 2, 8], near: 0.1, far: 5000 }}
    onPointerMove={handleMouseMove}
    onCreated={({ gl }) => {
  
    }}>
    <Suspense fallback={<Loader/>}>
    <ambientLight intensity={0.8} color="#ffffff" /> {/* Set ambient light to a high intensity white */}
<spotLight intensity={12} color="#ffffff" position={[10, 10, 10]} angle={Math.PI / 4} penumbra={0.05} /> {/* Set intensity to 12 and color to white, positioned at a high angle */}
<hemisphereLight skyColor="#ffffff" intensity={0.8} groundColor="#ffffff" /> {/* Set skyColor and groundColor to white, and intensity to 0.8 */}
<pointLight intensity={25} color="#ffffff" position={[0, 5, 0]} distance={20} /> {/* Set intensity to 25 and color to white, positioned at the center of the scene */}
<pointLight intensity={15} color="#ff0000" position={[0, 2, 0]} distance={5} /> {/* Set intensity to 15 and color to red, positioned slightly above the car */}

{/* Additional PointLight for extra brightness */}
<pointLight intensity={20} color="#ffffff" position={[0, 5, -5]} distance={10} /> {/* Set intensity to 20 and color to white, positioned above and behind the car */}

{/* Additional PointLight specifically for the tires */}
<pointLight intensity={15} color="#ffffff" position={[0, 0.5, 0]} distance={5} /> {/* Set intensity to 15 and color to white, positioned lower for better visibility of the tires */}

{/* Directional light from outside */}
<directionalLight intensity={0.6} color="#ffffff" position={[5, 10, 5]} /> {/* Set intensity to 0.6 and color to white, positioned outside to simulate sunlight */}

{/* Spotlight for upper front shine */}
<spotLight intensity={5} color="#ffffff" position={[0, 5, 5]} angle={Math.PI / 6} penumbra={0.1} /> {/* Set intensity to 5 and color to white, positioned at upper front */}

{/* Red light coming from inside the model */}
<pointLight intensity={10} color="#ff0000" position={[0, 1, 0]} distance={5} /> {/* Set intensity to 10 and color to red, positioned inside the model */}





        <Model/>

    </Suspense>
  </Canvas>
  
)
}
export default Object ;