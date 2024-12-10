// Seleção de elementos
const pages = document.querySelectorAll('.page');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

let currentPage = 0;

// Função para atualizar as páginas
function updatePages() {
    pages.forEach((page, index) => {
        page.classList.toggle('active', index === currentPage);
    });

    // Atualiza estado dos botões
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === pages.length - 1;
}

// Eventos de clique nos botões
nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updatePages();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updatePages();
    }
});

// Inicia com a primeira página ativa
updatePages();
