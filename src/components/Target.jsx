import React, { useRef } from 'react'
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// const Target = (props) => {
//     const targetRef = useRef()
//     // const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')

//     useGSAP(() => {
//         gsap.to(targetRef.current.position, {
//             y: targetRef.current.position.y + 0.5,
//             repeat: -1,
//             yoyo: true,
//             duration: 1.5
//         })
//     })

//     return (
//         <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
//             <primitive object={scene} />
//         </mesh>
//     )
// }
// export default Target


const Target = (props) => {
    const targetRef = useRef();

    // Memuat file Target.glb dari folder public
    const { scene } = useGLTF('models/Target.glb');

    useGSAP(() => {
        if (targetRef.current) {
            gsap.to(targetRef.current.position, {
                y: targetRef.current.position.y + 0.5,
                repeat: -1,
                yoyo: true,
                duration: 1.5,
                ease: 'power1.inOut'
            });
        }
    });

    return (
        <primitive
            {...props}
            ref={targetRef}
            object={scene}
            rotation={[0, Math.PI / 5, 0]}
            scale={1.5}
        />
    );
};

// Optional: Preload model agar tidak ada lag saat render pertama
useGLTF.preload('models/Target.glb');

export default Target;