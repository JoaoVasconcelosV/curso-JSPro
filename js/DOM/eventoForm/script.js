function save() {
  event.preventDefault(); //Tira o comportamento padrão do evento
  let name = document.querySelector("input[name='name']").value;
  let programmingLang = document.querySelector("select[name='programming-lang']").value;
  alert(`Nome: ${name}\nLinguagem de programação: ${programmingLang}`);
}