import './style.css';
import * as THREE from 'three';

/** Scene definition */
const scene = new THREE.Scene();

/** Objects (mesh) definitions */
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);

// move cubes to distinct places
cube1.position.set(-1, 0, 0);
cube2.position.set(0, -1, 0);

// rotate cubes
cube1.rotation.x = Math.PI * 0.25
cube2.rotation.y = - Math.PI * 0.25

/** Groups */
const group = new THREE.Group();
group.position.y = 1;
scene.add(group);

group.add(cube1, cube2);

/** Axes helper */
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

/** Camera definition */
const SCREEN_WIDTH = 800; // pixels
const SCREEN_HEIGHT = 600; // pixels
const FIELD_OF_VIEW = 75; // degrees
const CAMERA_ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;
const camera = new THREE.PerspectiveCamera(FIELD_OF_VIEW, CAMERA_ASPECT_RATIO);
// move camera to be able to see mesh
camera.position.z = 3; // positive z moves backwards
scene.add(camera);

/** Renderer definition */
const canvasEl = document.querySelector("canvas.webgl");
const renderer = new THREE.WebGLRenderer({ canvas: canvasEl });
renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

/** Render the scene */
renderer.render(scene, camera);
