const canvas = document.createElement('canvas');
canvas.id = 'particle-canvas';
Object.assign(canvas.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
    zIndex: '-1' 
});
document.body.prepend(canvas);

const ctx = canvas.getContext('2d');
let width, height;
let particles = [];

// Large radius for a massive fluid ripple effect
const mouse = { x: -1000, y: -1000, radius: 220 }; 

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    init(); // Reset positions seamlessly on resize
}
window.addEventListener('resize', resize);

window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

window.addEventListener('mouseout', () => {
    mouse.x = -1000;
    mouse.y = -1000;
});

// Mobile / Touch support (Android, iOS)
window.addEventListener('touchstart', (e) => {
    if(e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
    }
}, {passive: true});

window.addEventListener('touchmove', (e) => {
    if(e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
    }
}, {passive: true});

window.addEventListener('touchend', () => {
    mouse.x = -1000;
    mouse.y = -1000;
});

const colorsLight = ['#00b894', '#0984e3', '#fdcb6e', '#d63031', '#6c5ce7', '#e84393'];
const colorsDark = ['#00e6b8', '#74b9ff', '#ffeaa7', '#ff7675', '#a29bfe', '#fd79a8'];

class Particle {
    constructor(x, y) {
        this.x = x + (Math.random() * 20 - 10);
        this.y = y + (Math.random() * 20 - 10);
        this.originX = this.x;
        this.originY = this.y;
        this.vx = 0;
        this.vy = 0;
        this.size = Math.random() * 1.5 + 1;
        this.colorIndex = Math.floor(Math.random() * colorsLight.length);
        
        // Physics variables for velvety smoothness
        this.friction = Math.random() * 0.03 + 0.88; // Heavier damping for slower speeds
        this.ease = Math.random() * 0.01 + 0.01;     // Softer, slower return to origin
    }
    
    draw() {
        const isDark = document.body.dataset.theme === 'dark';
        ctx.fillStyle = isDark ? colorsDark[this.colorIndex] : colorsLight[this.colorIndex];
        
        ctx.beginPath();
        ctx.lineWidth = this.size;
        ctx.lineCap = 'round';
        
        // The stroke length stretches dynamically when traveling fast
        let speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        let lineLength = speed * 2.5; 
        if(lineLength < this.size * 2) lineLength = this.size * 2; 

        // Point the stroke in the direction of its origin to create a magnetic field orientation
        let angle = Math.atan2(this.y - this.originY, this.x - this.originX);
        if (Math.abs(this.x - this.originX) < 1 && Math.abs(this.y - this.originY) < 1) {
            angle = Math.atan2(this.y - height/2, this.x - width/2); // Default center radiant 
        }
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(angle);
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.min(lineLength, 25), 0); // Cap max stretch
        ctx.strokeStyle = ctx.fillStyle;
        ctx.stroke();
        ctx.restore();
    }
    
    update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        // Physics 1: Repel from mouse seamlessly via force
        if (distance < mouse.radius) {
            let force = (mouse.radius - distance) / mouse.radius; // 0 to 1
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            
            // Apply much softer push AWAY from mouse
            let pushX = forceDirectionX * force * -1.2;
            let pushY = forceDirectionY * force * -1.2;
            
            this.vx += pushX;
            this.vy += pushY;
        }
        
        // Physics 2: A beautiful global ocean drift (Sine wave time drift)
        let time = Date.now() * 0.0002;
        this.vx += Math.cos(time + this.originY * 0.01) * 0.03;
        this.vy += Math.sin(time + this.originX * 0.01) * 0.03;

        // Physics 3: Rubber-band spring force pulling back to original spot
        this.vx += (this.originX - this.x) * this.ease;
        this.vy += (this.originY - this.y) * this.ease;
        
        // Physics 4: Kinetic Friction (smooth stop)
        this.vx *= this.friction;
        this.vy *= this.friction;
        
        // Apply position
        this.x += this.vx;
        this.y += this.vy;
    }
}

function init() {
    particles = [];
    // We'll place particles in a uniform grid pattern
    let spacing = 45; // Pixel gap between particles
    let cols = Math.floor(width / spacing);
    let rows = Math.floor(height / spacing);
    
    // Start array filling with padding so they reach off edge seamlessly
    for (let i = -1; i <= cols + 1; i++) {
        for (let j = -1; j <= rows + 1; j++) {
            particles.push(new Particle(i * spacing, j * spacing));
        }
    }
}

function animate() {
    // Perfectly clear rect so CSS grids underneath are visible
    ctx.clearRect(0, 0, width, height);
    
    for(let i=0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
    requestAnimationFrame(animate);
}

resize();
animate();
