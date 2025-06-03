let timeLeft = 600; // Tempo inicial em segundos (10 minutos)
const correctCode = "PARAR"; // Palavra secreta
let attempts = 0; // ContaRdor de tentativas
let timerInterval; // Variável para armazenar o intervalo do timer

// Sons
const successSound = document.getElementById('successSound');
const timeUpSound = document.getElementById('timeUpSound');
const attempt1Sound = document.getElementById('attempt1');
const errorSound = document.getElementById('errorSound');
const clockSound = document.getElementById('clockSound');

function playClockSound() {
    clockSound.currentTime = 0; // Reinicia o som do relógio para tocar do começo
    clockSound.play(); // Toca o som
    clockSound.loop = true; // Faz o som tocar em loop
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('countdown').textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;

    if (timeLeft <= 0) {
        alert("O tempo acabou!");
        timeUpSound.play(); // Toca o som quando o tempo acabar
        clockSound.pause(); // Pausa o som do relógio quando o tempo acabar
        // Desabilitar o formulário
        document.getElementById('codeForm').elements['codigo'].disabled = true;
        document.getElementById('btn_send').disabled = true;
        clearInterval(timerInterval); // Para o timer
    } else {
        timeLeft--; // Decrementa o tempo a cada segundo
    }
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

// Função para verificar o código inserido pelo usuário
function checkCode(event) {
    event.preventDefault(); // Impede o envio do formulário

    const userCode = document.getElementById('txt_ipt').value.toUpperCase(); // Pega o código inserido e converte para maiúsculas

    // Limpar mensagens anteriores
    document.getElementById('errorMessage').style.display = 'none';
    document.getElementById('successMessage').style.display = 'none';

    // Verifica se o código inserido é correto
    if (userCode === correctCode) {
        // Se o código estiver correto, exibe a mensagem de sucesso
        document.getElementById('successMessage').style.display = 'block';
        successSound.play(); // Toca o som de sucesso
        clockSound.pause(); // Pausa o som do relógio
        clearInterval(timerInterval); // Para o timer
        attempts = 2; // Impede novas tentativas
    } else {
        // Se o código estiver errado
        if (attempts === 0) {
            // Primeira tentativa errada
            attempt1Sound.play(); // Toca o som de tentativa 1
            document.getElementById('errorMessage').style.display = 'block';
            document.getElementById('errorMessage').textContent = "❌ Código incorreto. Tente novamente. Você tem mais uma tentativa.";
        } else if (attempts === 1) {
            // Segunda tentativa errada
            errorSound.play(); // Toca o som de erro final
            clockSound.pause();
            clearInterval(timerInterval);
            document.getElementById('errorMessage').style.display = 'block';
            document.getElementById('errorMessage').textContent = "❌ Código incorreto. Você não tem mais tentativas.";
        }

        attempts++; // Aumenta o contador de tentativas

        // Desabilita o botão de enviar código após 2 tentativas
        if (attempts >= 2) {
            document.getElementById('btn_send').disabled = true;
        }
    }
}

// Inicia o jogo automaticamente quando a página for carregada
window.onload = function() {
    // Exibe o conteúdo do jogo diretamente
    document.getElementById('gameContent').style.display = 'block';

    // Inicia o timer imediatamente, mas o áudio começa após 2 segundos
    setTimeout(function() {
        playClockSound(); // Toca o som do relógio após 2 segundos
        timerInterval = setInterval(updateTimer, 1000); // Inicia o timer e salva o intervalo para poder pará-lo
    }, 2000);

    // Adiciona o ouvinte de evento para o envio do formulário
    document.getElementById('codeForm').addEventListener('submit', checkCode);
};
