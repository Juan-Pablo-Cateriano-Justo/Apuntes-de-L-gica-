/**
 * NEON-NET CORP. OS v4.0.4 - Core Interface Animations
 * Sistema de animación unificado para Notas de Estudio Cyberpunk
 */

document.addEventListener("DOMContentLoaded", () => {
    console.log(" %c [SISTEMA] %c Inicializando interfaz Cyberpunk v4.0.4...", "color: #fcee0a; background: #000; font-weight: bold;", "color: #00f0ff;");
    
    // ==========================================
    // 1. EFECTO GLITCH ALEATORIO EN LOS TÍTULOS
    // ==========================================
    const titulosH1 = document.querySelectorAll('header h1');
    const titulosH2 = document.querySelectorAll('h2');
    
    function aplicarGlitch(elemento) {
        if (!elemento) return;
        // Simula interferencia digital modificando la sombra del texto y sesgándolo levemente
        elemento.style.textShadow = "3px 3px 0px #ff0055, -3px -3px 0px #00f0ff, 0 0 10px #ffffff";
        elemento.style.transform = "skew(" + (Math.random() * 4 - 2) + "deg)";
        
        setTimeout(() => {
            elemento.style.textShadow = "3px 3px 0px #000, 0 0 10px rgba(255,255,255,0.2)";
            elemento.style.transform = "skew(0deg)";
        }, 120);
    }

    // Bucle para activar distorsiones de manera aleatoria en la interfaz
    setInterval(() => {
        if (Math.random() > 0.75 && titulosH1.length > 0) {
            aplicarGlitch(titulosH1[Math.floor(Math.random() * titulosH1.length)]);
        }
        if (Math.random() > 0.85 && titulosH2.length > 0) {
            aplicarGlitch(titulosH2[Math.floor(Math.random() * titulosH2.length)]);
        }
    }, 800);


    // ==========================================
    // 2. EFECTO MÁQUINA DE ESCRIBIR (TYPEWRITER)
    // ==========================================
    // Detecta automáticamente el texto del <p> dentro del header y lo escribe solo al cargar
    const subtituloHeader = document.querySelector('header p');
    
    if (subtituloHeader) {
        const textoOriginal = subtituloHeader.textContent || "CONSOLA DE APRENDIZAJE: LOGIC_CORE_LOADED...";
        subtituloHeader.textContent = ""; // Vacía el contenido para empezar a escribirlo
        subtituloHeader.style.borderRight = "2px solid #fcee0a"; // Cursor parpadeante inicial
        subtituloHeader.style.display = "inline-block";
        
        let indiceLetra = 0;
        const velocidadEscritura = 45; // Milisegundos por letra

        function escribirCaracter() {
            if (indiceLetra < textoOriginal.length) {
                subtituloHeader.textContent += textoOriginal.charAt(indiceLetra);
                indiceLetra++;
                setTimeout(escribirCaracter, velocidadEscritura);
            } else {
                // Al terminar, añade un parpadeo infinito al cursor de consola
                subtituloHeader.style.animation = "parpadeoCursor 0.8s infinite alternate";
            }
        }
        
        // Inyecta el keyframe de animación dinámicamente
        const estiloCursor = document.createElement("style");
        estiloCursor.innerHTML = "@keyframes parpadeoCursor { from { border-color: transparent } to { border-color: #fcee0a } }";
        document.head.appendChild(estiloCursor);
        
        setTimeout(escribirCaracter, 300); // Pequeño retraso de arranque táctico
    }


    // ==========================================
    // 3. SINTETIZADOR DE AUDIO RETRO (SND_FX)
    // ==========================================
    // Genera microondas sonoras nativas (sin archivos de audio externos)
    function generarSonidoCibernetico(frecuencia, tipoWave, duracion, volumen) {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            
            const audioCtx = new AudioContext();
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();

            oscillator.type = tipoWave; // 'sine', 'square', etc.
            oscillator.frequency.setValueAtTime(frecuencia, audioCtx.currentTime);
            
            gainNode.gain.setValueAtTime(volumen, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + duracion);

            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            oscillator.start();
            oscillator.stop(audioCtx.currentTime + duracion);
        } catch (e) {
            // Previene errores si las políticas del navegador bloquean el sonido autoejecutado
        }
    }

    // Engancha sonidos a botones y enlaces automáticamente
    const elementosInteractivos = document.querySelectorAll('nav a, .container a, button');
    
    elementosInteractivos.forEach(elemento => {
        // Hover: sonido suave de datos flotantes
        elemento.addEventListener('mouseenter', () => {
            generarSonidoCibernetico(950, 'sine', 0.04, 0.015);
        });
        // Clic: Confirmación de comando ejecutado
        elemento.addEventListener('click', () => {
            generarSonidoCibernetico(320, 'square', 0.12, 0.03);
        });
    });

    console.log(" %c [SISTEMA] %c Red Cyberpunk en línea y operando perfectamente.", "color: #00f0ff; background: #000; font-weight: bold;", "color: #ff0055;");
});
