let index = 0;
const messageContent = "Looking back at everything we’ve shared, I am filled with so much gratitude that you walked into my life. I want you to know how deeply I value this chance to know you and to show you what you truly mean to me. Sia, I know I’m far from perfect, but I promise that I will never grow tired of taking care of you and making you feel how precious you are. My love for you isn't just found in words, it's a commitment I'm ready to prove every single day. Thank you for letting me into your world and for giving me the privilege of loving you. I will never get tired of choosing you, today and in all the tomorrows to come. I love you so much, Sia.";

function showSection(id) {
    document.querySelectorAll('.container').forEach(c => c.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');

    if (id === 'gift2') {
        const iframe = document.getElementById('ytPlayer');
        if (!iframe.src.includes("autoplay=1")) {
            iframe.src += "&autoplay=1";
        }
    }

    if (id === 'gift3') {
        document.getElementById("typewriter").innerHTML = "";
        index = 0;
        startTypewriter();
    }
}

function moveNo() {
    document.getElementById('questionText').innerText = "Try again please! 🥺";
    const btn = document.getElementById('noBtn');
    const x = Math.random() * (window.innerWidth - btn.offsetWidth - 20);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight - 20);
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

function startTypewriter() {
    const display = document.getElementById("typewriter");
    if (index < messageContent.length) {
        display.innerHTML += messageContent.charAt(index);
        index++;
        setTimeout(startTypewriter, 45);
    }
}
