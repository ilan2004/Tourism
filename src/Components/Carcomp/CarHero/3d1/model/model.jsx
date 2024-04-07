import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import models from '../../../../../assets/3d/bugatti.glb'
import {a} from '@react-spring/three';
import gsap from "gsap";
const Model = (props) => {
  const modelsRef = useRef();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const rotationAngle = scrollPos * 0.008;
      gsap.to(modelsRef.current.rotation, {
        y: rotationAngle / 2,
        duration: 0.7
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  const { nodes, materials } = useGLTF(models);

  return (
<a.group onClick={handleAnimation} ref={modelsRef}  {...props} >
  
  <group  name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0.5]} scale={1.3}>
          <group
            name="52aff99bfd004f2496a312f6a4038675fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.025}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Cylinder110" position={[0, 31.059, -96.59]} scale={0.981}>
                  <mesh
                    name="Cylinder110_01_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Cylinder110_01_-_Default_0'].geometry}
                    material={materials['01_-_Default']}
                  />
                  <group
                    name="Box039"
                    position={[0, 29.812, 46.224]}
                    rotation={[-1.134, 0, 0]}
                    scale={1.019}>
                    <mesh
                      name="Box039_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Box039_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                    <group
                      name="Plane011"
                      position={[1.685, -6.002, -3.731]}
                      rotation={[1.134, 0, 0]}>
                      <mesh
                        name="Plane011_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane011_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                      <group
                        name="Box040"
                        position={[0.009, -2.01, -0.034]}
                        rotation={[-0.77, -0.086, 0.175]}
                        scale={[1, 1, 0.564]}>
                        <mesh
                          name="Box040_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Box040_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="Object057"
                    position={[21.376, 1.065, -5.463]}
                    rotation={[0, 0, Math.PI]}
                    scale={-0.548}>
                    <mesh
                      name="Object057_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object057_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                  </group>
                  <group
                    name="Box041"
                    position={[18.617, -0.302, -4.229]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1.019}>
                    <mesh
                      name="Box041_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Box041_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                    <group
                      name="Sphere014"
                      position={[2.706, 1.211, 1.341]}
                      rotation={[Math.PI / 2, 0, Math.PI]}
                      scale={-0.538}>
                      <mesh
                        name="Sphere014_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Sphere014_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                      <group name="Sphere015" position={[0, 0, 0.73]} scale={0.476}>
                        <mesh
                          name="Sphere015_02_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Sphere015_02_-_Default_0'].geometry}
                          material={materials['02_-_Default']}
                        />
                      </group>
                    </group>
                    <group
                      name="Sphere016"
                      position={[-3.523, 3.149, 1.341]}
                      rotation={[Math.PI / 2, 0, -Math.PI]}
                      scale={-0.538}>
                      <mesh
                        name="Sphere016_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Sphere016_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Sphere017"
                    position={[21.376, 1.065, -3.99]}
                    rotation={[Math.PI, 0, 0]}
                    scale={0.176}>
                    <mesh
                      name="Sphere017_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Sphere017_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                  </group>
                  <group
                    name="Object058"
                    position={[15.026, 1.065, -7.439]}
                    rotation={[0, 0, Math.PI]}
                    scale={-0.548}>
                    <mesh
                      name="Object058_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object058_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                  </group>
                  <group name="Object059" position={[12.784, 12.522, 65.969]}>
                    <group name="Object_27" position={[-12.784, -12.872, -65.967]}>
                      <mesh
                        name="Object059_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Object059_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                    <group name="Object060">
                      <group name="Object_30" position={[-12.784, -12.872, -65.967]}>
                        <mesh
                          name="Object060_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Object060_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="Cylinder111"
                    position={[30.013, 22.541, 92.372]}
                    rotation={[-3.142, 0, -Math.PI]}
                    scale={1.019}>
                    <mesh
                      name="Cylinder111_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Cylinder111_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                  </group>
                  <group name="Object061" position={[0, 28.685, 33.881]} scale={1.01}>
                    <group name="Object_35" position={[0, -28.476, -33.52]}>
                      <mesh
                        name="Object061_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Object061_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                    <group
                      name="Cylinder112"
                      position={[0, -1.648, -6.458]}
                      rotation={[-0.262, 1.571, 0]}
                      scale={1.01}>
                      <mesh
                        name="Cylinder112_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Cylinder112_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                    <group
                      name="Tube014"
                      rotation={[-2.443, -Math.PI / 2, 0]}
                      scale={[0.743, 0.743, 1.185]}>
                      <group name="Object_40" position={[-3.931, 0.688, -1.909]}>
                        <mesh
                          name="Tube014_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Tube014_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                    </group>
                    <group
                      name="Cylinder113"
                      position={[-12.533, -9.974, -11.531]}
                      rotation={[-1.222, 1.571, 0]}
                      scale={1.01}>
                      <mesh
                        name="Cylinder113_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Cylinder113_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                    <group
                      name="Plane012"
                      position={[0, -21.473, -43.625]}
                      rotation={[-2.269, 0, Math.PI]}
                      scale={0.02}>
                      <mesh
                        name="Plane012_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane012_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Object062">
                    <mesh
                      name="Object062_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object062_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                    <group
                      name="Box042"
                      position={[-10.634, 8.58, 140.344]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={1.019}>
                      <group name="Object_49" position={[16.136, 0, 0]}>
                        <mesh
                          name="Box042_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Box042_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                      <group
                        name="Sphere018"
                        position={[25.598, -5.077, 1.491]}
                        rotation={[0, 0, -0.175]}
                        scale={[0.062, 0.062, 0.171]}>
                        <mesh
                          name="Sphere018_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Sphere018_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                    </group>
                  </group>
                  <group name="Object063" position={[0, 29.94, 96.942]}>
                    <group name="Object_54" position={[0, -29.94, -95.353]}>
                      <mesh
                        name="Object063_02_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Object063_02_-_Default_0'].geometry}
                        material={materials['02_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Object064" position={[0, 6.726, 84.373]} scale={0.963}>
                    <group name="Object_57" position={[0, -7.216, -84.373]}>
                      <mesh
                        name="Object064_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Object064_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                    <group
                      name="Box043"
                      position={[0.013, 1.404, -5.701]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={-0.769}>
                      <group name="Object_60" position={[-1.388, 3.769, -1.393]}>
                        <mesh
                          name="Box043_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Box043_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                      <group
                        name="Cylinder114"
                        position={[-2.421, 3.68, -8.073]}
                        rotation={[-Math.PI, 0, 0]}
                        scale={-1}>
                        <mesh
                          name="Cylinder114_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Cylinder114_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                      <group
                        name="Cylinder115"
                        position={[1.703, -1.15, -1.174]}
                        rotation={[Math.PI / 3, 1.571, 0]}
                        scale={1.118}>
                        <mesh
                          name="Cylinder115_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Cylinder115_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="Box044"
                    position={[6.169, -5.983, -14.938]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1.019}>
                    <mesh
                      name="Box044_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Box044_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                    <group
                      name="Box045"
                      position={[-6.052, 0.731, 2.756]}
                      rotation={[Math.PI / 2, 0, 0]}>
                      <mesh
                        name="Box045_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Box045_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                      <group
                        name="Text030"
                        position={[-0.126, -4.378, 0.195]}
                        rotation={[Math.PI, 0, -Math.PI]}
                        scale={0.104}>
                        <mesh
                          name="Text030_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Text030_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="Plane013"
                    position={[0, -6.218, 1.19]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1.019}>
                    <mesh
                      name="Plane013_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Plane013_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                    <group name="Box046" position={[0, -3.829, 0.464]}>
                      <mesh
                        name="Box046_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Box046_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                    <group name="Box047" position={[0, -1.622, 0.464]} scale={[0.878, 0.878, 1]}>
                      <mesh
                        name="Box047_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Box047_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                    <group name="Box048" position={[0, 0.303, 0.464]} scale={[0.772, 0.772, 1]}>
                      <mesh
                        name="Box048_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Box048_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                    <group name="Box049" position={[0, 2.029, 0.464]} scale={[0.671, 0.671, 1]}>
                      <mesh
                        name="Box049_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Box049_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                    <group
                      name="Cylinder116"
                      position={[-4.623, 3.639, 0.464]}
                      rotation={[0, Math.PI / 2, 0]}>
                      <mesh
                        name="Cylinder116_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Cylinder116_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                    <group name="Plane014" position={[0, 0, 1.305]}>
                      <mesh
                        name="Plane014_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane014_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Tube015" position={[11.683, 34.838, 39.495]} scale={0.861}>
                    <mesh
                      name="Tube015_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Tube015_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                  </group>
                  <group name="Object065">
                    <mesh
                      name="Object065_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object065_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                  </group>
                  <group
                    name="Cylinder117"
                    position={[-10.509, 8.501, -1.605]}
                    rotation={[0, 1.571, 0]}
                    scale={1.019}>
                    <mesh
                      name="Cylinder117_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Cylinder117_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                    <group name="Cylinder118" rotation={[-1.487, -1.413, 1.675]}>
                      <mesh
                        name="Cylinder118_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Cylinder118_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Cylinder119"
                    position={[-23.441, 9.702, 120.474]}
                    rotation={[0, 0.262, 0]}
                    scale={1.019}>
                    <mesh
                      name="Cylinder119_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Cylinder119_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                  </group>
                  <group
                    name="Text031"
                    position={[9.977, 23.607, 91.432]}
                    rotation={[-3.132, 0.02, -2.921]}
                    scale={0.048}>
                    <mesh
                      name="Text031_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Text031_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                  </group>
                  <group name="Sphere019" position={[27.398, 3.985, 113.913]} scale={0.062}>
                    <mesh
                      name="Sphere019_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Sphere019_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                  </group>
                  <group
                    name="Cylinder120"
                    position={[9.836, 23.844, 36.914]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1.019}>
                    <mesh
                      name="Cylinder120_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Cylinder120_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                    <group name="Cylinder121" position={[0, 0, 5.739]} scale={1.295}>
                      <mesh
                        name="Cylinder121_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Cylinder121_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Object066" position={[0, -1.011, 0]}>
                    <mesh
                      name="Object066_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object066_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                  </group>
                  <group name="Object067">
                    <mesh
                      name="Object067_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object067_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                    <group name="Object068">
                      <mesh
                        name="Object068_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Object068_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                      <group name="Object069">
                        <mesh
                          name="Object069_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Object069_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                    </group>
                    <group
                      name="Box050"
                      position={[25.348, 1.518, 55.234]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={1.019}>
                      <mesh
                        name="Box050_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Box050_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                    <group
                      name="Box051"
                      position={[25.058, -5.104, 81.504]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={1.019}>
                      <mesh
                        name="Box051_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Box051_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Object070"
                    position={[0, 19.054, 113.932]}
                    scale={[1.141, 1.126, 1.126]}>
                    <group name="Object_117" position={[0, -19.054, -128.762]}>
                      <mesh
                        name="Object070_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Object070_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Object071"
                    position={[0, 19.054, 113.932]}
                    scale={[1.141, 1.126, 1.126]}>
                    <group name="Object_120" position={[0, -19.054, -128.762]}>
                      <mesh
                        name="Object071_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Object071_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Plane015" position={[-0.005, 3.199, 182.018]} scale={1.019}>
                    <mesh
                      name="Plane015_02_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Plane015_02_-_Default_0'].geometry}
                      material={materials['02_-_Default']}
                    />
                    <group
                      name="Tube016"
                      position={[0, 0, 0.021]}
                      rotation={[Math.PI, 0, -Math.PI / 4]}
                      scale={[0.877, 0.877, 0.775]}>
                      <mesh
                        name="Tube016_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Tube016_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                      <group
                        name="Cylinder122"
                        position={[0, 0, 3.42]}
                        rotation={[Math.PI, 0, Math.PI]}>
                        <mesh
                          name="Cylinder122_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Cylinder122_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                    </group>
                  </group>
                  <group name="Object072">
                    <mesh
                      name="Object072_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Object072_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                    <group
                      name="Plane016"
                      position={[0, 21.776, 186.693]}
                      rotation={[0.175, 0, 0]}
                      scale={0.018}>
                      <mesh
                        name="Plane016_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane016_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                    <group
                      name="Box052"
                      position={[0, 23.988, 184.333]}
                      rotation={[0, 1.571, 0]}
                      scale={0.064}>
                      <group name="Object_133" position={[-4.672, -16.594, -16.993]}>
                        <mesh
                          name="Box052_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Box052_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                      <group
                        name="Box053"
                        position={[-11.642, 14.425, 6.204]}
                        rotation={[-1.523, 0.111, -0.405]}
                        scale={[1, 1, 0.413]}>
                        <group name="Object_136" position={[0.486, -16.754, 0.143]}>
                          <mesh
                            name="Box053_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Box053_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="Plane017" position={[-0.005, 3.199, 183.482]} scale={1.019}>
                      <mesh
                        name="Plane017_02_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Plane017_02_-_Default_0'].geometry}
                        material={materials['02_-_Default']}
                      />
                      <group
                        name="Text032"
                        position={[1.229, -2.184, -0.166]}
                        rotation={[0, 0, Math.PI / 9]}
                        scale={0.161}>
                        <mesh
                          name="Text032_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Text032_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                    </group>
                    <group
                      name="Cylinder123"
                      position={[0.439, -10.195, 182.675]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={1.019}>
                      <mesh
                        name="Cylinder123_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Cylinder123_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                  </group>
                  <group name="Cylinder124" position={[-0.242, -5.923, 151.744]} scale={1.019}>
                    <mesh
                      name="Cylinder124_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Cylinder124_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                  </group>
                  <group
                    name="Box054"
                    position={[-12.316, -9.078, 152.311]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={1.019}>
                    <mesh
                      name="Box054_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Box054_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                    <group
                      name="Cylinder125"
                      position={[-0.504, 66.671, 32.801]}
                      rotation={[-1.222, 0, -Math.PI / 3]}
                      scale={0.554}>
                      <mesh
                        name="Cylinder125_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Cylinder125_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                      <group
                        name="Tube017"
                        position={[0, 0, 3.2]}
                        rotation={[Math.PI, 0, 0]}
                        scale={0.731}>
                        <mesh
                          name="Tube017_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Tube017_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                        <group name="Object073">
                          <mesh
                            name="Object073_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Object073_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="Cylinder126"
                      position={[-4.571, 2.78, -0.055]}
                      rotation={[1.571, 0, 0]}>
                      <mesh
                        name="Cylinder126_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Cylinder126_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                    <group
                      name="Cylinder127"
                      position={[3.784, 2.78, -0.333]}
                      rotation={[1.571, 0, 0]}>
                      <mesh
                        name="Cylinder127_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Cylinder127_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                    <group
                      name="Cylinder128"
                      position={[13.866, 2.78, 0.248]}
                      rotation={[1.571, 0, 0]}>
                      <mesh
                        name="Cylinder128_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Cylinder128_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Cylinder129"
                    position={[-23.979, 9.748, 120.578]}
                    rotation={[-Math.PI, 1.309, -2.269]}
                    scale={1.019}>
                    <mesh
                      name="Cylinder129_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Cylinder129_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                  </group>
                  <group
                    name="Cylinder130"
                    position={[-12.83, 21.483, 92.249]}
                    rotation={[-2.793, 0, 0]}
                    scale={0.511}>
                    <mesh
                      name="Cylinder130_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Cylinder130_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                    <group
                      name="Cylinder131"
                      position={[4.93, 0.04, 7.213]}
                      rotation={[0.444, 1.325, 2.364]}
                      scale={0.817}>
                      <group name="Object_165" position={[0, 0, -14.008]}>
                        <mesh
                          name="Cylinder131_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Cylinder131_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="Cylinder132"
                    position={[-4.939, 1.109, 111.943]}
                    rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                    scale={0.683}>
                    <mesh
                      name="Cylinder132_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Cylinder132_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                    <group
                      name="Cylinder133"
                      position={[0, 0, 10.455]}
                      rotation={[0, 0, -Math.PI / 6]}>
                      <mesh
                        name="Cylinder133_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Cylinder133_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                      <group
                        name="Box055"
                        position={[-8.984, 0.721, 1.929]}
                        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                        scale={0.554}>
                        <mesh
                          name="Box055_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Box055_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                      <group
                        name="Cylinder134"
                        position={[-7.561, -2.656, 2.031]}
                        rotation={[Math.PI / 2, Math.PI / 9, -Math.PI]}
                        scale={0.266}>
                        <group name="Object_174" position={[0, 1.757, -3.756]}>
                          <mesh
                            name="Cylinder134_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Cylinder134_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                        <group
                          name="Spring005"
                          position={[0, -0.016, 16.527]}
                          rotation={[Math.PI, 0, -Math.PI]}>
                          <mesh
                            name="Spring005_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Spring005_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                        <group
                          name="Cylinder135"
                          position={[0, 1.757, 18.047]}
                          rotation={[-Math.PI, 0, -Math.PI]}>
                          <mesh
                            name="Cylinder135_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Cylinder135_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="Cylinder136"
                      position={[0, 0, 3.43]}
                      rotation={[0, 0, -Math.PI / 6]}>
                      <mesh
                        name="Cylinder136_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Cylinder136_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                      <group
                        name="Box056"
                        position={[-8.984, 0.721, 1.929]}
                        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                        scale={0.554}>
                        <mesh
                          name="Box056_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Box056_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                        <group
                          name="Cylinder137"
                          position={[-0.162, -2.571, -6.101]}
                          rotation={[2.793, 0, -Math.PI / 2]}
                          scale={0.48}>
                          <group name="Object_185" position={[0, 1.757, -3.756]}>
                            <mesh
                              name="Cylinder137_01_-_Default_0"
                              castShadow
                              receiveShadow
                              geometry={nodes['Cylinder137_01_-_Default_0'].geometry}
                              material={materials['01_-_Default']}
                            />
                          </group>
                          <group
                            name="Cylinder138"
                            position={[0, 1.757, 18.047]}
                            rotation={[-Math.PI, 0, Math.PI]}>
                            <mesh
                              name="Cylinder138_01_-_Default_0"
                              castShadow
                              receiveShadow
                              geometry={nodes['Cylinder138_01_-_Default_0'].geometry}
                              material={materials['01_-_Default']}
                            />
                          </group>
                          <group
                            name="Spring006"
                            position={[0, -0.016, 16.527]}
                            rotation={[-Math.PI, 0, Math.PI]}>
                            <mesh
                              name="Spring006_01_-_Default_0"
                              castShadow
                              receiveShadow
                              geometry={nodes['Spring006_01_-_Default_0'].geometry}
                              material={materials['01_-_Default']}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group
                    name="Text033"
                    position={[-26.168, 11.953, 98.842]}
                    rotation={[-1.319, -1.105, -1.284]}
                    scale={0.064}>
                    <mesh
                      name="Text033_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Text033_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                  </group>
                  <group
                    name="Box057"
                    position={[0, -19.47, 129.532]}
                    rotation={[0, 1.571, 0]}
                    scale={1.019}>
                    <mesh
                      name="Box057_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Box057_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                    <group name="Cylinder139" position={[-52.219, 20.37, 14.355]}>
                      <mesh
                        name="Cylinder139_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Cylinder139_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                      <group
                        name="Sphere020"
                        position={[-8.485, -8.589, 0.988]}
                        rotation={[0, -1.571, 0]}
                        scale={1.493}>
                        <group name="Object_198" position={[4.241, 9.154, 2.305]}>
                          <mesh
                            name="Sphere020_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Sphere020_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                        <group name="Sphere021" position={[0, 0, 1.079]} scale={0.241}>
                          <mesh
                            name="Sphere021_02_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Sphere021_02_-_Default_0'].geometry}
                            material={materials['02_-_Default']}
                          />
                        </group>
                        <group name="Sphere022" position={[0, 0, -0.155]} scale={0.116}>
                          <mesh
                            name="Sphere022_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Sphere022_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="Box058" position={[-64.819, 1.127, 0]} rotation={[0, -1.571, 0]}>
                      <mesh
                        name="Box058_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Box058_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                      <group name="Text034" position={[-5.643, -1.709, 0.418]} scale={0.076}>
                        <mesh
                          name="Text034_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Text034_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                      <group
                        name="Text035"
                        position={[5.406, -0.672, 0.525]}
                        rotation={[-0.011, -0.003, -0.016]}
                        scale={0.059}>
                        <mesh
                          name="Text035_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Text035_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                    </group>
                    <group name="Box059" position={[-54.464, 4.979, 17.275]}>
                      <mesh
                        name="Box059_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Box059_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                      <group name="Object074" position={[2.244, 19.736, -2.92]}>
                        <mesh
                          name="Object074_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Object074_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                      <group name="Cylinder140" position={[2.244, 19.736, -2.92]}>
                        <mesh
                          name="Cylinder140_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Cylinder140_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                        <group
                          name="Sphere023"
                          position={[-3.391, 10.784, 7.321]}
                          rotation={[0, -1.571, 0]}
                          scale={1.493}>
                          <mesh
                            name="Sphere023_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Sphere023_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                          <group name="Sphere024" position={[0, 0, 0.71]} scale={0.481}>
                            <mesh
                              name="Sphere024_02_-_Default_0"
                              castShadow
                              receiveShadow
                              geometry={nodes['Sphere024_02_-_Default_0'].geometry}
                              material={materials['02_-_Default']}
                            />
                          </group>
                          <group name="Object075">
                            <mesh
                              name="Object075_01_-_Default_0"
                              castShadow
                              receiveShadow
                              geometry={nodes['Object075_01_-_Default_0'].geometry}
                              material={materials['01_-_Default']}
                            />
                            <group name="Sphere025" position={[0, 0, -3.246]} scale={0.224}>
                              <mesh
                                name="Sphere025_01_-_Default_0"
                                castShadow
                                receiveShadow
                                geometry={nodes['Sphere025_01_-_Default_0'].geometry}
                                material={materials['01_-_Default']}
                              />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group
                        name="Cylinder141"
                        position={[9.315, 13.721, -0.598]}
                        rotation={[0.873, 0, -Math.PI / 2]}>
                        <mesh
                          name="Cylinder141_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Cylinder141_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                        <group
                          name="Cylinder142"
                          position={[0, 0, 16.484]}
                          rotation={[-Math.PI, 0, Math.PI]}>
                          <mesh
                            name="Cylinder142_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Cylinder142_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                        <group
                          name="Spring007"
                          position={[0, -1.773, 14.679]}
                          rotation={[-Math.PI, 0, -Math.PI]}>
                          <mesh
                            name="Spring007_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Spring007_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                      </group>
                      <group
                        name="Cylinder143"
                        position={[1.694, 18.091, -1.77]}
                        rotation={[0.087, 0, -Math.PI / 2]}>
                        <mesh
                          name="Cylinder143_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Cylinder143_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                        <group
                          name="Box060"
                          position={[0.374, 158.786, 16.313]}
                          rotation={[-Math.PI, -1.396, -Math.PI]}>
                          <mesh
                            name="Box060_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Box060_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                          <group name="Cylinder144" position={[-0.125, 0.745, -16.994]}>
                            <group name="Object_235" rotation={[0, 0.087, 0]}>
                              <mesh
                                name="Cylinder144_01_-_Default_0"
                                castShadow
                                receiveShadow
                                geometry={nodes['Cylinder144_01_-_Default_0'].geometry}
                                material={materials['01_-_Default']}
                              />
                            </group>
                            <group
                              name="Object076"
                              position={[6.221, -0.03, 8.074]}
                              rotation={[-Math.PI, 1.484, -Math.PI / 2]}
                              scale={[1, 1, 0.701]}>
                              <group name="Object_238" position={[0, -0.439, 1.374]}>
                                <mesh
                                  name="Object076_01_-_Default_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes['Object076_01_-_Default_0'].geometry}
                                  material={materials['01_-_Default']}
                                />
                              </group>
                              <group
                                name="Cylinder145"
                                position={[9.195, 25.653, 5.75]}
                                rotation={[Math.PI, -Math.PI / 2, 0]}
                                scale={[-1.427, -1, -1]}>
                                <mesh
                                  name="Cylinder145_01_-_Default_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes['Cylinder145_01_-_Default_0'].geometry}
                                  material={materials['01_-_Default']}
                                />
                              </group>
                            </group>
                            <group
                              name="Box061"
                              position={[4.4, 0, 8.233]}
                              rotation={[Math.PI, 1.484, Math.PI]}>
                              <group name="Object_243" position={[0, 7.744, 0]}>
                                <mesh
                                  name="Box061_01_-_Default_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes['Box061_01_-_Default_0'].geometry}
                                  material={materials['01_-_Default']}
                                />
                              </group>
                            </group>
                            <group
                              name="Cylinder146"
                              position={[5.382, -0.03, 8.147]}
                              rotation={[-Math.PI, 1.484, -Math.PI / 2]}
                              scale={[1.135, 1.135, 0.901]}>
                              <mesh
                                name="Cylinder146_01_-_Default_0"
                                castShadow
                                receiveShadow
                                geometry={nodes['Cylinder146_01_-_Default_0'].geometry}
                                material={materials['01_-_Default']}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="Box062"
                          position={[0.374, 5.861, 16.313]}
                          rotation={[-Math.PI, -1.396, -Math.PI]}>
                          <mesh
                            name="Box062_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Box062_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                          <group
                            name="Object077"
                            position={[-66.231, 0.788, -11.039]}
                            rotation={[0, 0.175, 0]}>
                            <group
                              name="Object_250"
                              position={[66.135, 0.004, 5.615]}
                              rotation={[0, -0.087, 0]}>
                              <mesh
                                name="Object077_01_-_Default_0"
                                castShadow
                                receiveShadow
                                geometry={nodes['Object077_01_-_Default_0'].geometry}
                                material={materials['01_-_Default']}
                              />
                            </group>
                            <group
                              name="Object078"
                              position={[-6.159, 0.004, 7.908]}
                              rotation={[0, 1.484, -Math.PI / 2]}
                              scale={[-1, -1, -0.701]}>
                              <group name="Object_253" position={[0, -0.439, 1.374]}>
                                <mesh
                                  name="Object078_01_-_Default_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes['Object078_01_-_Default_0'].geometry}
                                  material={materials['01_-_Default']}
                                />
                              </group>
                              <group
                                name="Cylinder147"
                                position={[-10.993, 25.653, -116.086]}
                                rotation={[-Math.PI, 1.571, 0]}
                                scale={[-1.427, -1, -1]}>
                                <mesh
                                  name="Cylinder147_01_-_Default_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes['Cylinder147_01_-_Default_0'].geometry}
                                  material={materials['01_-_Default']}
                                />
                              </group>
                            </group>
                            <group
                              name="Object079"
                              position={[69.039, 0.004, 14.487]}
                              rotation={[0, 1.484, 0]}>
                              <group name="Object_258" position={[0, 7.744, 0]}>
                                <mesh
                                  name="Object079_01_-_Default_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes['Object079_01_-_Default_0'].geometry}
                                  material={materials['01_-_Default']}
                                />
                              </group>
                            </group>
                            <group
                              name="Cylinder148"
                              position={[-5.355, 0.004, 7.978]}
                              rotation={[0, 1.484, -Math.PI / 2]}
                              scale={[-1.135, -1.135, -0.901]}>
                              <mesh
                                name="Cylinder148_01_-_Default_0"
                                castShadow
                                receiveShadow
                                geometry={nodes['Cylinder148_01_-_Default_0'].geometry}
                                material={materials['01_-_Default']}
                              />
                            </group>
                          </group>
                          <group name="Cylinder149" position={[-0.125, 0.793, -16.994]}>
                            <group name="Object_263" rotation={[0, 0.087, 0]}>
                              <mesh
                                name="Cylinder149_01_-_Default_0"
                                castShadow
                                receiveShadow
                                geometry={nodes['Cylinder149_01_-_Default_0'].geometry}
                                material={materials['01_-_Default']}
                              />
                            </group>
                            <group
                              name="Object080"
                              position={[6.345, 0, 8.063]}
                              rotation={[-Math.PI, 1.484, -Math.PI / 2]}
                              scale={[1, 1, 0.701]}>
                              <group name="Object_266" position={[0, -0.439, 1.374]}>
                                <mesh
                                  name="Object080_01_-_Default_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes['Object080_01_-_Default_0'].geometry}
                                  material={materials['01_-_Default']}
                                />
                              </group>
                              <group
                                name="Object081"
                                position={[-10.993, 25.653, 5.572]}
                                rotation={[0, -1.571, 0]}
                                scale={[1.427, 1, 1]}>
                                <mesh
                                  name="Object081_01_-_Default_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes['Object081_01_-_Default_0'].geometry}
                                  material={materials['01_-_Default']}
                                />
                              </group>
                            </group>
                            <group
                              name="Box063"
                              position={[4.4, 0, 8.233]}
                              rotation={[Math.PI, 1.484, Math.PI]}>
                              <group name="Object_271" position={[0, 7.744, 0]}>
                                <mesh
                                  name="Box063_01_-_Default_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes['Box063_01_-_Default_0'].geometry}
                                  material={materials['01_-_Default']}
                                />
                              </group>
                            </group>
                            <group
                              name="Cylinder150"
                              position={[5.54, 0, 8.133]}
                              rotation={[Math.PI, 1.484, -0.436]}
                              scale={[1.135, 1.135, 0.901]}>
                              <mesh
                                name="Cylinder150_01_-_Default_0"
                                castShadow
                                receiveShadow
                                geometry={nodes['Cylinder150_01_-_Default_0'].geometry}
                                material={materials['01_-_Default']}
                              />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group name="Cylinder151" position={[13.597, 9.958, -17.275]}>
                        <mesh
                          name="Cylinder151_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Cylinder151_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                        <group name="Cylinder152" position={[0, 1.029, 0]} rotation={[0.087, 0, 0]}>
                          <mesh
                            name="Cylinder152_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Cylinder152_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="Box064" position={[98.407, 4.979, 17.275]}>
                      <mesh
                        name="Box064_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Box064_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                      <group
                        name="Plane018"
                        position={[0.986, 18.516, 0]}
                        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
                        <mesh
                          name="Plane018_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Plane018_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                        <group name="Box065" position={[-3.488, 4.602, 0.615]}>
                          <mesh
                            name="Box065_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Box065_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                          <group name="Cylinder153" position={[-0.599, 4.433, 7.475]} scale={0.6}>
                            <mesh
                              name="Cylinder153_01_-_Default_0"
                              castShadow
                              receiveShadow
                              geometry={nodes['Cylinder153_01_-_Default_0'].geometry}
                              material={materials['01_-_Default']}
                            />
                          </group>
                          <group name="Cylinder154" position={[-0.599, -4.344, 7.475]} scale={0.6}>
                            <mesh
                              name="Cylinder154_01_-_Default_0"
                              castShadow
                              receiveShadow
                              geometry={nodes['Cylinder154_01_-_Default_0'].geometry}
                              material={materials['01_-_Default']}
                            />
                          </group>
                          <group
                            name="Loft008"
                            position={[-13.787, 6.919, 1.353]}
                            rotation={[Math.PI / 2, -1.571, 0]}>
                            <mesh
                              name="Loft008_01_-_Default_0"
                              castShadow
                              receiveShadow
                              geometry={nodes['Loft008_01_-_Default_0'].geometry}
                              material={materials['01_-_Default']}
                            />
                          </group>
                          <group name="Loft009" position={[-2.353, -10.762, 7.971]}>
                            <mesh
                              name="Loft009_01_-_Default_0"
                              castShadow
                              receiveShadow
                              geometry={nodes['Loft009_01_-_Default_0'].geometry}
                              material={materials['01_-_Default']}
                            />
                          </group>
                        </group>
                      </group>
                      <group
                        name="Cylinder155"
                        position={[7.665, 13.721, -0.598]}
                        rotation={[0.873, 0, -Math.PI / 2]}>
                        <mesh
                          name="Cylinder155_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Cylinder155_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                        <group
                          name="Cylinder156"
                          position={[0, 0, 16.484]}
                          rotation={[-Math.PI, 0, Math.PI]}>
                          <mesh
                            name="Cylinder156_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Cylinder156_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                        <group
                          name="Spring008"
                          position={[0, -1.773, 14.679]}
                          rotation={[-Math.PI, 0, -Math.PI]}>
                          <mesh
                            name="Spring008_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Spring008_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                      </group>
                      <group
                        name="Cylinder157"
                        position={[1.701, 18.091, -1.77]}
                        rotation={[0.087, 0, -Math.PI / 2]}>
                        <mesh
                          name="Cylinder157_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Cylinder157_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                    </group>
                    <group
                      name="Box066"
                      position={[97.202, 20.793, -2.284]}
                      rotation={[-Math.PI, 0, -0.087]}
                      scale={-0.692}>
                      <mesh
                        name="Box066_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Box066_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                      <group
                        name="Cylinder158"
                        position={[3.997, 5.575, 5.184]}
                        rotation={[-Math.PI, -Math.PI / 2, 0]}
                        scale={[-0.891, -0.891, -1.445]}>
                        <mesh
                          name="Cylinder158_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Cylinder158_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                      <group
                        name="Cylinder159"
                        position={[-7.635, -10.157, 0]}
                        rotation={[0, 0, Math.PI / 2]}
                        scale={-1.445}>
                        <mesh
                          name="Cylinder159_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Cylinder159_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                      <group
                        name="Cylinder160"
                        position={[8.297, -9.179, 0]}
                        rotation={[Math.PI, 0, -1.745]}
                        scale={[-0.634, -0.634, -1.201]}>
                        <mesh
                          name="Cylinder160_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Cylinder160_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                      <group
                        name="Cylinder161"
                        position={[-0.353, -10.157, 0]}
                        rotation={[-Math.PI, 0, -Math.PI / 2]}
                        scale={-1.445}>
                        <mesh
                          name="Cylinder161_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Cylinder161_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                      <group
                        name="Cylinder162"
                        position={[-13.096, -14.874, 0]}
                        rotation={[-Math.PI, 0, -0.087]}
                        scale={-1.445}>
                        <mesh
                          name="Cylinder162_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Cylinder162_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                      <group
                        name="Cylinder163"
                        position={[-20.964, -10.225, 2.796]}
                        rotation={[Math.PI, 0, -1.658]}
                        scale={-1.934}>
                        <mesh
                          name="Cylinder163_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Cylinder163_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                        <group
                          name="Box067"
                          position={[4.052, -6.509, 0.733]}
                          rotation={[0, 0, 1.658]}
                          scale={0.747}>
                          <mesh
                            name="Box067_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Box067_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                        <group
                          name="Cylinder164"
                          position={[-0.715, -1.921, 0.261]}
                          rotation={[0.087, 0.087, Math.PI / 2]}
                          scale={0.747}>
                          <mesh
                            name="Cylinder164_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Cylinder164_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                        <group
                          name="Cylinder165"
                          position={[0, 0, 3.973]}
                          rotation={[0, 0, -0.087]}
                          scale={[0.458, 0.458, 0.747]}>
                          <mesh
                            name="Cylinder165_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Cylinder165_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                      </group>
                      <group
                        name="Cylinder166"
                        position={[-12.124, -10.424, 10.481]}
                        rotation={[Math.PI, 0, -1.658]}
                        scale={[-0.278, -0.278, -1.442]}>
                        <mesh
                          name="Cylinder166_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Cylinder166_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                        <group
                          name="Tube018"
                          position={[-3.486, 31.612, -0.077]}
                          scale={[5.361, 5.361, 1.483]}>
                          <mesh
                            name="Tube018_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Tube018_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                      </group>
                      <group
                        name="Cylinder167"
                        position={[-7, -1.262, 13.362]}
                        rotation={[-Math.PI / 2, 1.484, Math.PI / 4]}
                        scale={-1.445}>
                        <mesh
                          name="Cylinder167_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Cylinder167_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                        <group
                          name="Loft010"
                          position={[0.727, 0.769, -8.094]}
                          rotation={[Math.PI / 2, Math.PI / 4, 0]}>
                          <mesh
                            name="Loft010_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Loft010_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                        <group
                          name="Loft011"
                          position={[0.593, 0.635, -9.04]}
                          rotation={[Math.PI / 2, Math.PI / 4, 0]}>
                          <mesh
                            name="Loft011_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Loft011_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                      </group>
                      <group
                        name="Cylinder168"
                        position={[-5.752, 12.005, 6.169]}
                        rotation={[0, Math.PI / 2, 0]}
                        scale={-0.867}>
                        <mesh
                          name="Cylinder168_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Cylinder168_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                      <group
                        name="Cylinder169"
                        position={[-5.752, 12.005, -7.304]}
                        rotation={[0, Math.PI / 2, 0]}
                        scale={-0.867}>
                        <mesh
                          name="Cylinder169_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Cylinder169_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                      <group
                        name="Loft012"
                        position={[-6.031, 12.055, 6.451]}
                        rotation={[Math.PI / 2, 0.087, -Math.PI / 2]}
                        scale={-1.445}>
                        <mesh
                          name="Loft012_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Loft012_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                      <group
                        name="Loft013"
                        position={[-7.69, 11.931, 9.148]}
                        rotation={[Math.PI / 2, 0.087, -Math.PI / 2]}
                        scale={-1.445}>
                        <mesh
                          name="Loft013_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Loft013_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                      <group
                        name="Cylinder170"
                        position={[15.209, 0.496, 14.587]}
                        rotation={[0, Math.PI / 2, 0]}
                        scale={-0.867}>
                        <mesh
                          name="Cylinder170_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Cylinder170_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                    </group>
                    <group
                      name="Cylinder171"
                      position={[-52.77, 4.847, 19.065]}
                      rotation={[0.087, 0, -Math.PI / 2]}>
                      <mesh
                        name="Cylinder171_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Cylinder171_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                      <group
                        name="Box068"
                        position={[-0.373, 158.786, 14.249]}
                        rotation={[0, 1.484, 0]}>
                        <mesh
                          name="Box068_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Box068_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                      <group
                        name="Box069"
                        position={[-0.373, 5.861, 14.249]}
                        rotation={[0, 1.484, 0]}>
                        <mesh
                          name="Box069_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Box069_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                    </group>
                    <group
                      name="Cylinder172"
                      position={[100.108, 4.847, 19.065]}
                      rotation={[0.087, 0, -Math.PI / 2]}>
                      <mesh
                        name="Cylinder172_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Cylinder172_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Cylinder173"
                    position={[-5.623, 19.625, 180.975]}
                    rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                    scale={1.197}>
                    <mesh
                      name="Cylinder173_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Cylinder173_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                    <group
                      name="Object082"
                      position={[0, 0, 4.698]}
                      rotation={[Math.PI / 2, 0, Math.PI / 2]}
                      scale={0.836}>
                      <group name="Object_352" position={[0, -19.625, -180.975]}>
                        <mesh
                          name="Object082_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Object082_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                      <group
                        name="Tube019"
                        position={[-1.975, 0, 0]}
                        rotation={[-2.007, Math.PI / 2, 0]}
                        scale={1.197}>
                        <group name="Object_355" position={[-3.931, 0.688, -0.259]}>
                          <mesh
                            name="Tube019_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Tube019_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                      </group>
                      <group
                        name="Box070"
                        position={[-0.001, 9.196, -41.579]}
                        rotation={[0, 1.571, 0]}
                        scale={1.019}>
                        <mesh
                          name="Box070_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Box070_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                      <group
                        name="Cylinder174"
                        position={[-16.278, -2.647, -40.401]}
                        rotation={[-0.96, Math.PI / 2, 0]}
                        scale={1.019}>
                        <mesh
                          name="Cylinder174_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Cylinder174_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="Text036"
                    position={[26.191, 11.953, 98.842]}
                    rotation={[-1.266, 1.098, 1.258]}
                    scale={0.064}>
                    <mesh
                      name="Text036_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Text036_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                  </group>
                  <group
                    name="Cylinder175"
                    position={[0.013, 28.876, 91.457]}
                    rotation={[-3.043, 0, 0]}
                    scale={[0.837, 0.837, 0.947]}>
                    <mesh
                      name="Cylinder175_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Cylinder175_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                    <group
                      name="Box071"
                      position={[0, 3.759, -0.329]}
                      rotation={[-0.087, 0, 0]}
                      scale={[1.132, 1.132, 1]}>
                      <mesh
                        name="Box071_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Box071_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                      <group
                        name="Cylinder176"
                        position={[0, 3.584, -0.003]}
                        rotation={[0.099, 0, 0]}
                        scale={[0.884, 0.884, 1]}>
                        <mesh
                          name="Cylinder176_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Cylinder176_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                        <group
                          name="Text037"
                          position={[-0.706, -1.143, 0.336]}
                          rotation={[-0.01, 0, Math.PI]}
                          scale={[1.218, 1.218, 1.077]}>
                          <mesh
                            name="Text037_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Text037_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                        <group
                          name="Text038"
                          position={[-1.107, -0.823, 0.332]}
                          rotation={[-0.01, 0, Math.PI]}
                          scale={[1.218, 1.218, 1.077]}>
                          <mesh
                            name="Text038_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Text038_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                        <group
                          name="Cylinder177"
                          rotation={[-0.01, 0, 0]}
                          scale={[1.132, 1.132, 1]}>
                          <mesh
                            name="Cylinder177_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Cylinder177_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                        <group
                          name="Cylinder178"
                          position={[0.001, -0.001, -0.201]}
                          rotation={[-0.003, -0.01, 1.222]}
                          scale={[1.079, 1.079, 0.954]}>
                          <mesh
                            name="Cylinder178_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Cylinder178_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                        <group
                          name="Text039"
                          position={[1.435, 0.747, 0.317]}
                          rotation={[-0.01, 0, Math.PI]}
                          scale={[1.218, 1.218, 1.077]}>
                          <mesh
                            name="Text039_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Text039_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                        <group
                          name="Text040"
                          position={[0.307, -1.342, 0.338]}
                          rotation={[-0.01, 0, Math.PI]}
                          scale={[1.218, 1.218, 1.077]}>
                          <mesh
                            name="Text040_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Text040_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                        <group
                          name="Text041"
                          position={[-0.249, -1.342, 0.338]}
                          rotation={[-0.01, 0, Math.PI]}
                          scale={[1.218, 1.218, 1.077]}>
                          <mesh
                            name="Text041_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Text041_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                        <group
                          name="Text042"
                          position={[1.502, 0.174, 0.322]}
                          rotation={[-0.01, 0, Math.PI]}
                          scale={[1.218, 1.218, 1.077]}>
                          <mesh
                            name="Text042_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Text042_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                        <group
                          name="Text043"
                          position={[0.774, -1.143, 0.336]}
                          rotation={[-0.01, 0, Math.PI]}
                          scale={[1.218, 1.218, 1.077]}>
                          <mesh
                            name="Text043_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Text043_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                        <group
                          name="Text044"
                          position={[-1.426, -0.353, 0.328]}
                          rotation={[-0.01, 0, Math.PI]}
                          scale={[1.218, 1.218, 1.077]}>
                          <mesh
                            name="Text044_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Text044_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                        <group
                          name="Text045"
                          position={[1.41, -0.353, 0.328]}
                          rotation={[-0.01, 0, Math.PI]}
                          scale={[1.218, 1.218, 1.077]}>
                          <mesh
                            name="Text045_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Text045_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                        <group
                          name="Text046"
                          position={[-1.458, 0.174, 0.322]}
                          rotation={[-0.01, 0, Math.PI]}
                          scale={[1.218, 1.218, 1.077]}>
                          <mesh
                            name="Text046_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Text046_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                        <group
                          name="Text047"
                          position={[1.155, -0.823, 0.332]}
                          rotation={[-0.01, 0, Math.PI]}
                          scale={[1.218, 1.218, 1.077]}>
                          <mesh
                            name="Text047_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Text047_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                        <group
                          name="Text048"
                          position={[-1.399, 0.747, 0.317]}
                          rotation={[-0.01, 0, Math.PI]}
                          scale={[1.218, 1.218, 1.077]}>
                          <mesh
                            name="Text048_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Text048_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                      </group>
                      <group name="Box072" position={[0, 0, -0.045]}>
                        <mesh
                          name="Box072_01_-_Default_0"
                          castShadow
                          receiveShadow
                          geometry={nodes['Box072_01_-_Default_0'].geometry}
                          material={materials['01_-_Default']}
                        />
                        <group
                          name="Cylinder179"
                          position={[-0.991, 0, 0.507]}
                          rotation={[-0.436, 0, 0]}
                          scale={0.363}>
                          <mesh
                            name="Cylinder179_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Cylinder179_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                        <group
                          name="Cylinder180"
                          position={[-2.995, 0, 0.507]}
                          rotation={[-0.436, 0, 0]}
                          scale={0.363}>
                          <mesh
                            name="Cylinder180_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Cylinder180_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                        <group name="Cylinder181" position={[0, 0, 0.909]} scale={1.077}>
                          <mesh
                            name="Cylinder181_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Cylinder181_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                        <group
                          name="Cylinder182"
                          position={[0.999, 0, 0.507]}
                          rotation={[-0.436, 0, 0]}
                          scale={0.363}>
                          <mesh
                            name="Cylinder182_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Cylinder182_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                        <group
                          name="Cylinder183"
                          position={[2.988, 0, 0.507]}
                          rotation={[-0.436, 0, 0]}
                          scale={0.363}>
                          <mesh
                            name="Cylinder183_01_-_Default_0"
                            castShadow
                            receiveShadow
                            geometry={nodes['Cylinder183_01_-_Default_0'].geometry}
                            material={materials['01_-_Default']}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="Cylinder184"
                      rotation={[-0.01, -0.002, 0.175]}
                      scale={[1.132, 1.132, 1]}>
                      <mesh
                        name="Cylinder184_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Cylinder184_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                    <group
                      name="Text049"
                      position={[1.336, 0.968, 0.316]}
                      rotation={[-0.01, 0, Math.PI]}
                      scale={[1.218, 1.218, 1.077]}>
                      <mesh
                        name="Text049_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Text049_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                    <group
                      name="Text050"
                      position={[1.546, -0.102, 0.327]}
                      rotation={[-0.01, 0, Math.PI]}
                      scale={[1.218, 1.218, 1.077]}>
                      <mesh
                        name="Text050_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Text050_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                    <group
                      name="Text051"
                      position={[1.008, -1.027, 0.336]}
                      rotation={[-0.01, 0, Math.PI]}
                      scale={[1.218, 1.218, 1.077]}>
                      <mesh
                        name="Text051_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Text051_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                    <group
                      name="Text052"
                      position={[0.01, -1.395, 0.34]}
                      rotation={[-0.01, 0, Math.PI]}
                      scale={[1.218, 1.218, 1.077]}>
                      <mesh
                        name="Text052_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Text052_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                    <group
                      name="Text053"
                      position={[-0.977, -1.02, 0.336]}
                      rotation={[-0.01, 0, Math.PI]}
                      scale={[1.218, 1.218, 1.077]}>
                      <mesh
                        name="Text053_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Text053_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                    <group
                      name="Text054"
                      position={[-1.511, -0.098, 0.327]}
                      rotation={[-0.01, 0, Math.PI]}
                      scale={[1.218, 1.218, 1.077]}>
                      <mesh
                        name="Text054_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Text054_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                    <group
                      name="Text055"
                      position={[-1.354, 1.002, 0.316]}
                      rotation={[-0.01, 0, Math.PI]}
                      scale={[1.218, 1.218, 1.077]}>
                      <mesh
                        name="Text055_01_-_Default_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['Text055_01_-_Default_0'].geometry}
                        material={materials['01_-_Default']}
                      />
                    </group>
                  </group>
                  <group
                    name="Cylinder185"
                    position={[-5.623, 28.685, 33.881]}
                    rotation={[-0.087, Math.PI / 2, 0]}
                    scale={[0.75, 0.75, 1.197]}>
                    <mesh
                      name="Cylinder185_01_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Cylinder185_01_-_Default_0'].geometry}
                      material={materials['01_-_Default']}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      </a.group>
    );
  };
  
  export default Model;