const forms = document.querySelector(".forms"); 
const links = document.querySelectorAll(".link");

links.forEach(link => { link.addEventListener
    ("click", () => { forms.classList.toggle("show-signup"); }) })