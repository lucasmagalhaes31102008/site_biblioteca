const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

// Criar overlay
const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

// Abrir/fechar menu
btn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("ativo");
    overlay.classList.toggle("ativo");
    
    if (menu.classList.contains('ativo')) {
        btn.innerHTML = '✕';
        btn.style.transform = 'rotate(90deg)';
    } else {
        btn.innerHTML = '☰';
        btn.style.transform = 'rotate(0deg)';
    }
});

// Fechar ao clicar no overlay
overlay.addEventListener('click', () => {
    menu.classList.remove('ativo');
    overlay.classList.remove('ativo');
    btn.innerHTML = '☰';
    btn.style.transform = 'rotate(0deg)';
});

// Fechar com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('ativo')) {
        menu.classList.remove('ativo');
        overlay.classList.remove('ativo');
        btn.innerHTML = '☰';
        btn.style.transform = 'rotate(0deg)';
    }
});

// Impedir fechamento ao clicar dentro do menu
menu.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Animação dos cards (opcional)
const cards = document.querySelectorAll('.game-card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
            card.style.transform = '';
        }, 200);
    });
});

document.querySelectorAll(".achievements").forEach(box => {
    const texto = box.querySelector(".achievements-top span").textContent;

    const numeros = texto.match(/\d+/g);
    const atual = parseInt(numeros[0]);
    const total = parseInt(numeros[1]);

    const porcentagem = (atual / total) * 100;

    box.querySelector(".progress").style.width = porcentagem + "%";
});