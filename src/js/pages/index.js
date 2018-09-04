const hex2rgb = function (hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null;
};

const rgb2hex = (rgb) => "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);

const interpolateColor = function (color1, color2, factor = 0.5) {
  if (typeof(color1) === 'string')
    color1 = hex2rgb(color1);

  if (typeof(color2) === 'string')
    color2 = hex2rgb(color2);

  const result = color1.slice();
  for (let i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
  }
  return rgb2hex(result);
};

// ------ //

const fromColor = "#3aff19";
const toColor = "#ff00ff";


const colorLines = document.querySelectorAll('.colored-icon');
const colorFactors = [];

for (let i = 0; i < colorLines.length; i++) {
  colorFactors[i] = {
    direction: 1,
    value: i / (colorLines.length - 1)
  }
}

setInterval(() => {
  for (let i = 0; i < colorLines.length; i++) {
    const factor = colorFactors[i];

    factor.value += (Math.random() / 10) * factor.direction;

    if (factor.value >= 1.0) {
      factor.value = 1;
      factor.direction *= -1;
    }

    if (factor.value <= 0.0) {
      factor.value = 0;
      factor.direction *= -1;
    }

    colorLines[i].style.color = interpolateColor(fromColor, toColor, factor.value);
  }
}, 100);

particlesJS("particles-js", {
  "particles": {
    "number": {"value": 80, "density": {"enable": true, "value_area": 800}},
    "color": {"value": "#ffffff"},
    "shape": {
      "type": "circle",
      "stroke": {"width": 0, "color": "#000000"},
      "polygon": {"nb_sides": 5},
      "image": {"src": "img/github.svg", "width": 100, "height": 100}
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
    },
    "size": {"value": 3, "random": true, "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}},
    "line_linked": {"enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1},
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {"enable": true, "mode": "repulse"},
      "onclick": {"enable": true, "mode": "push"},
      "resize": true
    },
    "modes": {
      "grab": {"distance": 400, "line_linked": {"opacity": 1}},
      "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
      "repulse": {"distance": 200, "duration": 0.4},
      "push": {"particles_nb": 4},
      "remove": {"particles_nb": 2}
    }
  },
  "retina_detect": true
});
