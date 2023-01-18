import './style.css';
import * as THREE from 'three';

/** Scene definition */
const scene = new THREE.Scene();

/** Objects (mesh) definitions */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

/** Camera definition */
const SCREEN_WIDTH = 800; // pixels
const SCREEN_HEIGHT = 600; // pixels
const FIELD_OF_VIEW = 75; // degrees
const CAMERA_ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;
const camera = new THREE.PerspectiveCamera(FIELD_OF_VIEW, CAMERA_ASPECT_RATIO);
// move camera to be able to see mesh
camera.position.z = 3; // positive z moves backwards
camera.position.y = 1; // up
camera.position.x = 1; // right
scene.add(camera);

/** Renderer definition */
const canvasEl = document.querySelector("canvas.webgl");
const renderer = new THREE.WebGLRenderer({ canvas: canvasEl });
renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

/** Render the scene */
renderer.render(scene, camera);