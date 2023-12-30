import * as THREE from "three";
import { React, useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, TrackballControls } from "@react-three/drei";

function Word({ children, ...props }) {
    const color = new THREE.Color();
    const fontProps = {
        font: "/Inter-Bold.woff",
        fontSize: 2.5,
        letterSpacing: -0.05,
        lineHeight: 1,
        "material-toneMapped": false,
    };
    const ref = useRef();
    const [hovered, setHovered] = useState(false);
    const over = (e) => (e.stopPropagation(), setHovered(true));
    const out = () => setHovered(false);
    useEffect(() => {
        if (hovered) document.body.style.cursor = "pointer";
        return () => (document.body.style.cursor = "auto");
    }, [hovered]);
    useFrame(({ camera }) => {
        ref.current.quaternion.copy(camera.quaternion);
        ref.current.material.color.lerp(
            color.set(hovered ? "#337bff" : "white"),
            0.1
        );
    });
    return (
        <Text
            ref={ref}
            onPointerOver={over}
            onPointerOut={out}
            {...props}
            {...fontProps}
            children={children}
        />
    );
}

function Cloud({ count, radius }) {

    const mapper = ([pos, word], index) => {
        return (
            <Word key={index} position={pos} children={word} />
        );
    };

    const words = useMemo(() => {
        const temp = [];
        const tag = [
            "Computing",
            "Resuorces",
            "QKD",
            "Cyber Security",
            "Mechanics",
            "Science",
            "Security",
            "AI",
            "Communication",
            "Integration",
            "QuantumShift",
            "Engineering",
            "Research",
            "Internet",
            "Hardware",
            "Dynamics",
            "Entanglement",
            "Sensors",
            "Networking",
            "Energy",
            "Superposition",
            "Photonics",
            "Memory",
            "Energy",
            "Materials",
        ];
        const spherical = new THREE.Spherical();
        const phiSpan = Math.PI / (count + 1);
        const thetaSpan = (Math.PI * 2) / count;
        let k = 0;
        for (let i = 1; i < count + 1; i++)
            for (let j = 0; j < count; j++) {
                temp.push([
                    new THREE.Vector3().setFromSpherical(
                        spherical.set(radius, phiSpan * i, thetaSpan * j)
                    ),
                    tag[k],
                ]);
                k++;
            }
        return temp;
    }, [count, radius]);
    return words.map(mapper);
}

const Word_Cloud = () => {
    return (
        <>
            <div className="cloud">
                <Canvas>
                    <fog attach="fog" args={["#202025", 0, 80]} />
                    <Cloud count={5} radius={30} />
                    <TrackballControls minDistance={40} maxDistance={60} />
                </Canvas>
            </div>
        </>
    );
};

export default Word_Cloud;