var extras = require('aframe-extras');
AFRAME.registerComponent('obj-loader', require('aframe-obj-loader-component'));

// Register everything.
extras.registerAll();

var physics = require('aframe-physics-system');
physics.registerAll();

require('aframe-animation-component');
