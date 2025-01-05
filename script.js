let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let stop = document.querySelector('.stop'); // Nuevo botón para detener la canción

// Crear y configurar la canción
let song = new Audio('music/Kendrick Lamar, SZA - All The Stars.mp3'); // Cambia la ruta a tu archivo de audio
song.loop = true; // La canción se repetirá automáticamente cuando termine

// Variable para saber si la canción ya empezó
let isSongPlaying = false; // Si la canción está reproduciéndose
let isSongStopped = false; // Si la canción ha sido detenida

// Función para reproducir la canción una vez
function playSong() {
    if (!isSongPlaying && !isSongStopped) { // Solo reproducir si no está detenida
        song.play().then(() => {
            isSongPlaying = true; // Marcar como reproducida
        }).catch(error => {
            console.log('Error al intentar reproducir la canción:', error);
        });
    }
}

// Función para detener la canción
function stopSong() {
    song.pause();  // Detiene la canción
    song.currentTime = 0;  // Reinicia la canción al inicio
    isSongPlaying = false;  // Marca que la canción ha sido detenida
    isSongStopped = true;  // Marca que la canción ha sido detenida
}

// Función para manejar el slider
function moveSlide(direction) {
    let items = document.querySelectorAll('.item');
    let slide = document.querySelector('.slide');

    if (direction === 'next') {
        slide.appendChild(items[0]); // Mueve el primer elemento al final
    } else if (direction === 'prev') {
        slide.prepend(items[items.length - 1]); // Mueve el último elemento al inicio
    }
}

// Evento para el botón "Next"
next.addEventListener('click', function() {
    moveSlide('next');
    
    // No reproducir la canción si está detenida
    if (!isSongPlaying && !isSongStopped) {
        playSong();
    }
});

// Evento para el botón "Prev"
prev.addEventListener('click', function() {
    moveSlide('prev');
    
    // No reproducir la canción si está detenida
    if (!isSongPlaying && !isSongStopped) {
        playSong();
    }
});

// Evento para el botón "Stop"
stop.addEventListener('click', function() {
    stopSong(); // Detener la canción
});
