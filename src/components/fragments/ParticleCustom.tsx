/* eslint-disable @typescript-eslint/no-unused-vars */
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import React, { useEffect, useMemo, useState } from "react";
import options from "@/lib/particlejs/parcticleConfig";

const ParticleCustom = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    return;
  };

  if (init) {
    return <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />;
  }

  return <></>;
};

export default ParticleCustom;
