"use client";

import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particlesData from "./particles.json";

// Must stay referentially stable — ParticlesProvider throws if init changes.
const initEngine = async (engine) => {
    await loadSlim(engine);
};

export default function StarBackground() {
    const options = useMemo(() => particlesData, []);

    return (
        <ParticlesProvider init={initEngine}>
            <Particles id="tsparticles" options={options} />
        </ParticlesProvider>
    );
}
