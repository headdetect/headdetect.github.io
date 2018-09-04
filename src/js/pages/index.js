const particles = Particles.init({

  // normal options
  selector: '#particles',
  maxParticles: 100,
  connectParticles: true,
  color: '#FFFFFF',

  responsive: [
    {
      breakpoint: 768,
      options: {
        maxParticles: 55
      }
    },
    {
      breakpoint: 375,
      options: {
        maxParticles: 30
      }
    }
  ]
});
