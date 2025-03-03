// Initialize Sortable for the drag-and-drop puzzle
var sortable = Sortable.create(document.getElementById('sortable'));

// Check if the puzzle order is correct
function checkOrder() {
    var items = document.querySelectorAll('#sortable li');
    var order = Array.from(items).map(item => item.textContent);
    if (order[0] === 'Spread butter on bread' && order[1] === 'Add cheese' && 
        order[2] === 'Add ham' && order[3] === 'Put another slice of bread on top') {
        alert('Correct! You’ve mastered this algorithm.');
    } else {
        alert('Try again. Hint: Think about the logical sequence.');
    }
}

// Set up Three.js for a rotating cube
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Square aspect ratio
var renderer = new THREE.WebGLRenderer();
renderer.setSize(200, 200);
document.getElementById('three-container').appendChild(renderer.domElement);
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green cube
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;

// Animation loop for the cube
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();