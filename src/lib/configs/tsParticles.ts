const educationParticlesLight = {
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      //onClick: { enable: true, mode: "push" },
      onHover: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: { particles_nb: 4 },
      repulse: { distance: 100, duration: 0.4 },
    },
  },
  particles: {
    color: { value: "#319794" },
    links: {
      color: "#319794",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      bounce: false,
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 2,
      straight: false,
    },
    number: { density: { enable: true, value_area: 400 }, value: 25 },
    opacity: { value: 1 },
    shape: { type: "circle" },
    size: { random: true, value: 5 },
  },
  detectRetina: true,
};

const educationParticlesDark = {
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      //onClick: { enable: true, mode: "push" },
      onHover: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: { particles_nb: 4 },
      repulse: { distance: 100, duration: 0.4 },
    },
  },
  particles: {
    color: { value: "#ffffff" },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      bounce: false,
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 2,
      straight: false,
    },
    number: { density: { enable: true, value_area: 400 }, value: 25 },
    opacity: { value: 1 },
    shape: { type: "circle" },
    size: { random: true, value: 5 },
  },
  detectRetina: true,
};

export default [educationParticlesLight, educationParticlesDark];
