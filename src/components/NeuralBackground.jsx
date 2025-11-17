import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

export default function NeuralBackground() {
    const vantaRef = useRef(null);
    const effectRef = useRef(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!effectRef.current) {
                effectRef.current = NET({
                    el: vantaRef.current,
                    THREE,
                    color: 0x4da6ff,
                    backgroundColor: 0x000000,
                    points: 15.0,
                    maxDistance: 25.0,
                    spacing: 18.0,
                    showDots: true,
                    mouseControls: false,
                    touchControls: false,
                    gyroControls: false,
                });

                // Y-axis rotation
                let rotation = 0;
                const animate = () => {
                    rotation += 0.001; // slow, professional
                    if (effectRef.current?.scene) {
                        effectRef.current.scene.rotation.y = rotation;
                    }
                    requestAnimationFrame(animate);
                };
                animate();
            }
        }, 50);

        return () => {
            clearTimeout(timeout);
            if (effectRef.current) {
                effectRef.current.destroy();
                effectRef.current = null;
            }
        };
    }, []);

    return (
        <div
            ref={vantaRef}
            className="absolute inset-0 w-full h-full z-0"
            style={{ minWidth: "100%", minHeight: "100%" }}
        ></div>
    );
}

