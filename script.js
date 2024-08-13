// 3D Car Model Rendering
document.addEventListener('DOMContentLoaded', () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('car-model').appendChild(renderer.domElement);

    // Load a real 3D model
    const loader = new THREE.GLTFLoader();
    loader.load('path/to/your/car-model.glb', (gltf) => {
        const carModel = gltf.scene;
        scene.add(carModel);
        carModel.rotation.y = Math.PI; // Adjust rotation if needed
        animate();
    }, undefined, (error) => {
        console.error(error);
    });

    camera.position.z = 5;

    const animate = function () {
        requestAnimationFrame(animate);
        scene.rotation.y += 0.005; // Rotate the whole scene for a better view
        renderer.render(scene, camera);
    };

    animate();
});

// Interactive Timeline
document.addEventListener('DOMContentLoaded', () => {
    const timelineContainer = document.getElementById('timeline-container');

    const events = [
        { year: '2010', event: 'Mercedes AMG Petronas F1 Team is formed.' },
        { year: '2014', event: 'First Constructors\' Championship.' },
        { year: '2015', event: 'Lewis Hamilton wins third World Championship.' },

        { year: '2020', event: 'Lewis Hamilton wins record seventh World Championship.' },
        // Add more events as needed
    ];

    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.className = 'timeline-event';
        eventElement.innerHTML = `<h3>${event.year}</h3><p>${event.event}</p>`;
        timelineContainer.appendChild(eventElement);
    });
});

// Parallax Scrolling
document.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.querySelectorAll('.parallax').forEach(parallax => {
        parallax.style.backgroundPositionY = `${scrolled * 0.5}px`;
    });
});