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
        { year: '1963', event: 'Bruce McLaren founded McLaren' },
        { year: '1966', event: 'The McLaren team enters F1' },
        { year: '1974', event: "McLaren wins first Driver's and Constructor's championship with Emerson Fittipaldi" },
        { year: '1988', event: "Aryton Senna joins McLaren also winning the Constructor's and Driver's championships" },
        { year: '1990-1991', event: "Aryton Senna wins successive Driver's Championships with Mclaren" },
        { year: '1998', event: "Yet another Constructor's Championship for McLaren and Mika Hakkinen wins the Driver's championship" },
        { year: '1998', event: "Mika Hakkinen wins the Driver's championship again " },
        { year: '2007', event: 'Lewis Hamilton joins McLaren in his rookie year' },
        { year: '2008', event: "Lewis Hamilton wins the Driver's championship with McLaren" },
        { year: '2019', event: 'Lando joins McLaren in his rookie year' },
        { year: '2023', event: 'Oscar Piastri joins McLaren' },
        { year: '2024', event: 'Lando Norris wins his first race in Miami' },
        { year: '1998', event: 'Oscar Piastri wins his first race in Hungary' },
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
