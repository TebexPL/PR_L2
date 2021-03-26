
let navbar = document.getElementsByClassName("navbar");
let navContents = `
<span class="navElement">
  <a href="index.html">Strona główna</a>
</span>
<span class="navElement">
  <a href="contact.html">Kontakt</a>
</span>
`;

navbar[0].innerHTML = navContents;
