const themeToggleBtn = document.getElementById("theme-toggle");
const bookList = document.getElementById("book-list");

const books = [
    {
        title: "É Assim Que Acaba",
        author: "Collen Hoover",
        image: "imagens/livro01.jpg",
        price: "45,70",
        desc: "Um relacionamento em que companheirismo e cumplicidade não são prioridades. E o sexo parece ser o único objetivo"
    },
    {
        title: "É Assim Que Começa",
        author: "Collen Hoover",
        image: "imagens/livro02.jpg",
        price: "45,70",
        desc: "Um relacionamento em que companheirismo e cumplicidade não são prioridades. E o sexo parece ser o único objetivo"
    },
    {
        title: "O Lado Feio do Amor",
        author: "Collen Hoover",
        image: "imagens/livro03.jpg",
        price: "45,70",
        desc: "Um relacionamento em que companheirismo e cumplicidade não são prioridades. E o sexo parece ser o único objetivo"
    },
    {
        title: "Layla",
        author: "Collen Hoover",
        image: "/",
        price: "45,70",
        desc: "Um relacionamento em que companheirismo e cumplicidade não são prioridades. E o sexo parece ser o único objetivo"
    },
];

themeToggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        themeToggleBtn.textContent = 'Tema Claro';
    } else {
        themeToggleBtn.textContent = 'Tema Escuro';
    }
});

books.forEach(book => {
    const bookHTML = `
        <div class="book">
            <img src="${book.image}" alt="${book.title}">
            <h2 class="title">${book.title}</h2>
            <p class="author">Autor: ${book.author}</p>
            <p class="price">Preço: ${book.price}</p>
            <p class="desc">${book.desc}</p>
            <button>Comprar</button>
        </div>
    `;

    bookList.innerHTML += bookHTML;
});

/* <p class="desc">${book.desc}</p> */