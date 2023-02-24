var contador = 1;
var urlPost = "http://stw-uvg-23.site:3002/chat";
var urlGet = "http://stw-uvg-23.site:3002/chats";
var usuario = "Brandon";
var mensaje = "";
var usuario2 = "";
var mensaje2 = "";
window.onload = () => {
  crearCelular("transparent", 1);
  crearRead();
  crearInput();
  crearContacto();
  agregarMensajesFromAPI();
};

setInterval(agregarMensajesFromAPI, 8000);

function validarURL(str) {
  const patron = new RegExp("^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$");
  return patron.test(str);
  }

let crearCelular = (color, id) => {
  let divCirculo = document.createElement("div");
  divCirculo.id = "circulo" + id;
  divCirculo.style.position = "relative";
  divCirculo.style.width = "360px";
  divCirculo.style.height = "640px";
  divCirculo.style.border = "16px black solid";
  divCirculo.style.borderTopWidth = "60px";
  divCirculo.style.borderBottomWidth = "60px";
  divCirculo.style.borderRadius = "36px";
  divCirculo.style.width = "400px";
  divCirculo.style.height = "600px";
  document.body.appendChild(divCirculo);
};

let crearBarra = (color, id) => {
  let divBarra = document.createElement("div");
  divBarra.id = "barra" + id;
  divBarra.style.content = "";
  divBarra.style.display = "block";
  divBarra.style.width = "35px";
  divBarra.style.height = "35px";
  divBarra.style.position = "absolute";
  divBarra.style.left = "11%";
  divBarra.style.bottom = "10%";
  divBarra.style.backgroundColor = color;
  divBarra.style.borderRadius = "50%";
  document.body.appendChild(divBarra);
};

let crearBarraTop = (color, id) => {
  let divBarra = document.createElement("div");
  divBarra.id = "barra" + id;
  divBarra.style.content = "";
  divBarra.style.display = "block";
  divBarra.style.width = "60px";
  divBarra.style.height = "5px";
  divBarra.style.position = "absolute";
  divBarra.style.left = "48%";
  divBarra.style.bottom = "110%";
  divBarra.style.backgroundColor = color;
  divBarra.style.borderRadius = "10%";
  document.body.appendChild(divBarra);
};

let crearTexto = () => {
  let divTexto = document.createElement("input");
  divBarra.id = "barra" + id;
  divBarra.style.content = "";
  divBarra.style.display = "block";
  divBarra.style.width = "60px";
  divBarra.style.height = "5px";
  divBarra.style.position = "absolute";
  divBarra.style.left = "48%";
  divBarra.style.bottom = "90%";
  divBarra.style.backgroundColor = color;
  divBarra.style.borderRadius = "10%";
  document.body.appendChild(divBarra);
};

let crearInput = () => {
  let ingreso = document.createElement("input");
  ingreso.type = "text";
  ingreso.id = "submit";
  ingreso.name = "submit";
  ingreso.placeholder = " Ingresa tu mensaje!"
  ingreso.style.position = "absolute";
  ingreso.style.left = "130px";
  ingreso.style.top = "600px";
  ingreso.style.width = "230px";
  ingreso.style.height = "50px";
  ingreso.wordBreak = "Break-all";
  ingreso.style.overflowWrap = "Break-Word";
  ingreso.style.resize = "none";
  ingreso.maxLength = "140";
  ingreso.style.borderRadius = "30px"
  ingreso.style.border = "none"
  ingreso.style.boxShadow = "5px 10px 18px #888888"
  document.body.appendChild(ingreso);
  document.getElementById("submit").addEventListener("keyup", function (event) {
    if (event.code === "Enter") {
      enviarMensajeLocal();
    }
  });
};

let crearContacto = () => {
  let contacto = document.createElement("div");
  contacto.id = "contact";
  contacto.style.position = "absolute";
  contacto.style.left = "24px";
  contacto.style.top = "67px";
  contacto.style.width = "400px";
  contacto.style.height = "83px";
  contacto.style.backgroundColor = "white";
  contacto.style.marginBottom = "10px";
  document.body.appendChild(contacto);
  let photo = document.createElement("div");
  photo.style.width = "70px";
  photo.style.height = "70px"; 
  photo.style.top = "5px"; 
  photo.style.borderRadius = "50%";
  photo.style.position = "absolute"
  photo.style.left = "30px"
  photo.style.backgroundImage = "url(https://res.cloudinary.com/webuvg/image/upload/f_auto,q_auto,w_164,c_scale,fl_lossy,dpr_2.63/f_auto,q_auto,fl_lossy,c_scale,w_200/v1641327930/WEB/Nosotros/Imagen%20Institucional/Logotipo%20UVG/Logotipo%20UVG/Logo-UVG-cuadrado.jpg)";
  photo.style.backgroundSize = "contain"
  contacto.appendChild(photo);
  let contactName = document.createElement("div");
  contactName.style.width = "170px";
  contactName.style.height = "40px"; 
  contactName.style.position = "absolute"
  contactName.style.left = "110px"
  contactName.innerText = "Clase de la sección 10\nHoy a las 13:00"
  contactName.style.top = "15px"
  contacto.appendChild(contactName);
  let camera = document.createElement("div");
  camera.id = "camera"
  camera.style.width = "35px";
  camera.style.height = "35px"; 
  camera.style.top = "610px"; 
  camera.style.position = "absolute"
  camera.style.left = "30px"
  camera.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/45/45010.png)";
  camera.style.backgroundSize = "contain"
  document.body.appendChild(camera);
  let emoji = document.createElement("div");
  emoji.id = "emoji"
  emoji.style.width = "35px";
  emoji.style.height = "35px"; 
  emoji.style.top = "610px"; 
  emoji.style.position = "absolute"
  emoji.style.left = "75px"
  emoji.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/3634/3634325.png)";
  emoji.style.backgroundSize = "contain"
  document.body.appendChild(emoji);
  let voice = document.createElement("div");
  voice.id = "voice"
  voice.style.width = "35px";
  voice.style.height = "35px"; 
  voice.style.top = "610px"; 
  voice.style.position = "absolute"
  voice.style.left = "375px"
  voice.style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/25/25682.png)";
  voice.style.backgroundSize = "contain"
  document.body.appendChild(voice);
}

let crearRead = (text) => {
  let read = document.createElement("div");
  read.readOnly = true;
  read.id = "reader";
  read.name = "reader";
  read.style.position = "absolute";
  read.style.left = "25px";
  read.style.top = "150px";
  read.style.width = "399px";
  read.style.height = "440px";
  read.style.resize = "none";
  // read.style.border = "solid black";
  read.style.backgroundColor = "#f1f1f1";
  read.style.overflowY = "auto";
  read.style.overflowX = "hidden";
  read.style.maxHeight = "100vh";
  document.body.appendChild(read);
  let typing = document.createElement("div");
  typing.id = "typing"
  typing.style.width = "399px";
  typing.style.borderColor = "red"
  read.appendChild(typing);
};

async function getUsers() {
  let response = await fetch(urlGet);
  let data = await response.json();
  return data;
}

function agregarMensajesFromAPI() {
  const myNode = document.getElementById("reader");
  while (myNode.lastElementChild) {
    myNode.removeChild(myNode.lastElementChild);
  }
  
  let divEscribiendo = document.createElement("div");
  divEscribiendo.id = "typing";
  divEscribiendo.style.width = "200px";
  divEscribiendo.style.height = "5  0px";
  divEscribiendo.style.resize = "none";
  divEscribiendo.style.position = "absolute"
  divEscribiendo.style.top = "95%";
  divEscribiendo.innerText = "Escribiendo..."
  myNode.appendChild(divEscribiendo);
  setTimeout(() => {
    divEscribiendo.remove();
    getUsers().then((data) =>
    data.slice().reverse().forEach((element) => {
      if (element.user == "Brandon") {
        let nuevoDiv = document.createElement("div");
        nuevoDiv.class = "container-black";
        nuevoDiv.style.border = "2px solid #ccc;";
        nuevoDiv.style.color = "white"
        nuevoDiv.style.padding = "1px";
        nuevoDiv.style.margin = "10px 0";
        var textoIngresado = element.chat;
        if (validarURL(textoIngresado)){
          let divLink = document.createElement("iframe");
          divLink.class = "container";
          divLink.src = textoIngresado;
          divLink.style.alignContent = "right"
          nuevoDiv.appendChild(divLink);
        }else {
          let divTexo = document.createElement("div");
          divTexo.class = "container";
          divTexo.wordBreak = "Break-all";
          divTexo.style.backgroundColor = "#272b28";
          divTexo.style.width = "70%"
          divTexo.style.position = "relative"
          divTexo.style.left = "27%"
          divTexo.style. padding = "6px"
          divTexo.style.borderRadius = "1.125rem 1.125rem 0 1.125rem"
          divTexo.style.overflowWrap = "Break-Word";
          divTexo.innerText = textoIngresado;
          divTexo.style.textAlign = "right"
          nuevoDiv.appendChild(divTexo);
        }
        document.getElementById("reader").appendChild(nuevoDiv);
      } else {
        let nuevoDiv = document.createElement("div");
        nuevoDiv.class = "container";
        nuevoDiv.style.border = "2px solid #dedede;";
        nuevoDiv.style.padding = "10px";
        nuevoDiv.style.margin = "10px 0";
        var textoIngresado = element.chat;
        if (validarURL(textoIngresado)){
          let divLink = document.createElement("iframe");
          divLink.class = "container";
          divLink.wordBreak = "Break-all";
          divLink.style.overflowWrap = "Break-Word";
          divLink.src = textoIngresado;
          divLink.style.alignContent = "right"
          nuevoDiv.appendChild(divLink);
        }else {
          let divTexo = document.createElement("div");
          divTexo.class = "container";
          divTexo.wordBreak = "Break-all";
          divTexo.style.backgroundColor = "white";
          divTexo.style.width = "70%"
          divTexo.style.position = "relative"
          divTexo.style.left = "1%"
          divTexo.style. padding = "6px"
          divTexo.style.borderRadius = "1.125rem 1.125rem 1.125rem 0"
          divTexo.style.overflowWrap = "Break-Word";
          divTexo.innerText = textoIngresado;
          nuevoDiv.appendChild(divTexo);
        }
        document.getElementById("reader").appendChild(nuevoDiv);
        
      }
      var element = document.getElementById("reader");
      element.scrollTop = element.scrollHeight;
    })
  );
    
  }, 2000);
}

function enviarMensajeLocal(){
      event.preventDefault();
      let nuevoDiv = document.createElement("div");
      nuevoDiv.class = "container";
      nuevoDiv.id = "div"+contador
      nuevoDiv.style.border = "2px solid #ccc;";
      nuevoDiv.style.padding = "10px";
      nuevoDiv.style.color = "white"
      nuevoDiv.style.margin = "10px 0";
      var textoIngresado = document.getElementById("submit").value;
      if (validarURL(textoIngresado)){
        let divLink = document.createElement("iframe");
        divLink.class = "container";
        divLink.src = textoIngresado;
        nuevoDiv.appendChild(divLink);
      }else {
        let divTexo = document.createElement("div");
        divTexo.class = "container";
        divTexo.wordBreak = "Break-all";
        divTexo.style.backgroundColor = "#272b28";
          divTexo.style.width = "70%"
          divTexo.style.position = "relative"
          divTexo.style.left = "27%"
          divTexo.style. padding = "6px"
          divTexo.style.borderRadius = "1.125rem 1.125rem 0 1.125rem"
        divTexo.style.overflowWrap = "Break-Word";
        divTexo.innerText = textoIngresado;
        divTexo.style.textAlign = "right"
        nuevoDiv.appendChild(divTexo);
      }
      document.getElementById("reader").appendChild(nuevoDiv);
      document.getElementById("submit").value = "";
      var element = document.getElementById("reader");
      element.scrollTop = element.scrollHeight;
      contador++;
      var data = { user: usuario, chat: textoIngresado };
      fetch(urlPost, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
}

function enviarMensajeFromAPI(){

}
