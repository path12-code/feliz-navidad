// Música de fondo
const music = document.getElementById('music');
const musicButton = document.getElementById('musicButton');
let musicPlaying = false;

// Función para reproducir/pausar música
function toggleMusic() {
    if (musicPlaying) {
        music.pause();
        musicPlaying = false;
        musicButton.textContent = '🔇';
    } else {
        music.play().catch(error => {
            console.log('Error al reproducir música:', error);
        });
        musicPlaying = true;
        musicButton.textContent = '🔊';
    }
}

// Crear nieve abundante
const snowContainer = document.getElementById('snow');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';
    snowflake.style.left = Math.random() * 100 + '%';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random() * 0.7 + 0.3;
    snowflake.style.fontSize = Math.random() * 1 + 0.5 + 'em';
    
    snowContainer.appendChild(snowflake);
    
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Crear copos de nieve constantemente
setInterval(createSnowflake, 100);

// Crear copos iniciales
for (let i = 0; i < 50; i++) {
    setTimeout(createSnowflake, i * 50);
}

// Función para abrir el regalo
function openGift() {
    const giftAnimation = document.getElementById('giftAnimation');
    const giftLid = document.getElementById('giftLid');
    const giftBox = document.querySelector('.gift-box');
    const specialMessage = document.getElementById('specialMessage');
    
    // Mostrar la animación del regalo
    giftAnimation.style.display = 'block';
    
    // Después de la animación de shake, abrir la tapa y la caja
    setTimeout(() => {
        giftLid.classList.add('open');
        giftBox.classList.add('opening');
        createConfetti();
    }, 500);
    
    // Ocultar completamente el regalo
    setTimeout(() => {
        giftBox.classList.add('opened');
    }, 1100);
    
    // Mostrar mensaje especial
    setTimeout(() => {
        specialMessage.style.display = 'block';
    }, 1000);
}

// Función para crear confeti
function createConfetti() {
    const confettiSymbols = ['⭐', '✨', '🎊', '🎉', '💫', '🌟', '❄️', '🎁'];
    const colors = ['#ffd700', '#ff6b6b', '#4ecdc4', '#fff', '#ffa500'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.innerHTML = confettiSymbols[Math.floor(Math.random() * confettiSymbols.length)];
            confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = '50%';
            confetti.style.top = '50%';
            confetti.style.animation = `confettiFall ${Math.random() * 2 + 2}s ease-out forwards`;
            
            // Dirección aleatoria
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 300 + 200;
            const xMovement = Math.cos(angle) * velocity;
            const yMovement = Math.sin(angle) * velocity;
            
            confetti.style.setProperty('--x-movement', xMovement + 'px');
            confetti.style.transform = `translate(${xMovement}px, ${yMovement}px)`;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 4000);
        }, i * 20);
    }
}

// Función para cerrar la animación
function closeAnimation() {
    const giftBox = document.querySelector('.gift-box');
    const giftLid = document.getElementById('giftLid');
    document.getElementById('giftAnimation').style.display = 'none';
    document.getElementById('specialMessage').style.display = 'none';
    giftLid.classList.remove('open');
    giftBox.classList.remove('opened', 'opening');
}