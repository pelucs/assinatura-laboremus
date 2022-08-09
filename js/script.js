
  //LIDANDO COM O INPUT
function handleValue(id){
  let element = document.getElementById(id),
      signature = document.getElementById(`${id}-signature`);

  if(id === "number"){
    if(element.value.length === 1 && element.value !== "("){
      element.value = "(" + element.value;
    }
    else if(element.value.length === 4){
      element.value = element.value + ")";
    }
  }
  
  signature.textContent = element.value;

  //LIDANDO COM VALOR VAZIO
  if(element.value.length === 0){
    if(element.id === "name"){
      signature.textContent = "Seu nome";
    } 
    else if(element.id === "office"){
      signature.textContent = "Seu cargo";
    }
    else if(element.id === "email"){
      signature.textContent = "Seu email corporativo";
    }
    else if(element.id === "number"){
      signature.textContent = "Seu número";
    }
  }
}

  //MODAL AVISO
function modalWarning(){
  let modal = document.querySelector(".warning");

  modal.style.top = "20px";

  setTimeout(() => {
    modal.style.top = "-70px";
  }, 3000);
}

  //BOTÃO DOWNLOAD
function downloadSignature(){
  let name = document.getElementById("name"),
      office = document.getElementById("office"),
      phone = document.getElementById("number"),
      email = document.getElementById("email");
  
  if(name.value.length !== 0 && office.value.length !== 0 && phone.value.length !== 0 && 
    email.value.length !== 0){
      canvasFunction(name);
    } else{
      modalWarning();
    }
}
  
  //SISTEMA DE BAIXAR IMAGEM
function canvasFunction(name){
  let screenshotSignature = document.getElementById("canvas");

  html2canvas(screenshotSignature)
  .then(canvas => {
    const base64image = canvas.toDataURL("image/png"),
          anchor = document.createElement("a");
    
    anchor.setAttribute("href", base64image);
    anchor.setAttribute("download", `Assinatura ${name.value}.png`);
    anchor.click();
    anchor.remove();

    window.location.reload();
  });
}