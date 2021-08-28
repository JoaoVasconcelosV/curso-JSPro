function verifyEnablement() {
  let selectedValue = document.querySelector("select").value;

  let pElement = document.getElementById("message");
  if(selectedValue == "disabled") {    
    document.querySelector("input[name='some-text']").disabled = true;    
    pElement.innerText = "DESABILITADO";
    pElement.style.color = "white";
    pElement.style.backgroundColor = "red";
  }

  if(selectedValue == "enabled") {
    document.querySelector("input[name='some-text']").disabled = false;    
    pElement.innerText = "";
    pElement.style.color = "black";
    pElement.style.backgroundColor = "transparent";
  }
}