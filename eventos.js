function getEventos() {
    const url = "https://xp41-soundgarden-api.herokuapp.com/events";
    fetch(url)
      .then((response) => response.json())
      .then((data) => listarEventos(data))
      .catch((err) => console.log(err));
  }
  
  function listarEventos(eventos) {
    eventos.forEach((evento) => {
      let article = document.createElement("article");
      article.classList.add("evento", 'card', "p-5", "m-3", 'col-sm-12', 'col-md-6', 'col-lg-3', 'justify-content-between');
      const data = new Date(evento.scheduled).toLocaleString().slice(0,-3);
      const attractionsStr = evento.attractions.toString();
      article.innerHTML = 
       `<h2>${evento.name} - ${data}</h2>
        <h4>${attractionsStr}</h4>
        <p>${evento.description}</p>
        <button id=${evento._id} onclick='abrirModal()' class="btn btn-primary">Reservar ingresso no ${evento.name.bold()}!</button>`;
      document.querySelector("#articleEvento").appendChild(article);
    });
  }
  
  getEventos();
  
  const modal = document.getElementById("meuModal");
  
  function abrirModal() {
    event.preventDefault();
    modal.style.display = "block";
    modal.setAttribute("id_evento", event.target.id);
  }
  
  
  const form = document.querySelector("#meuModal form");
  form.addEventListener("submit", reservarIngresso);
  
  async function reservarIngresso() {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const id = modal.getAttribute("id_evento");
    console.log("🚀 ~ file: reservas.js ~ line 21 ~ reservarIngresso ~ id", id);
  
    const url = "https://xp41-soundgarden-api.herokuapp.com/bookings";
  
    const reserva = {
      owner_name: nome,
      owner_email: email,
      number_tickets: 1,
      event_id: id,
    };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(reserva),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
  
      if (response.ok) {
        alert("reserva feita com sucesso!");
      } else {
        console.log(response);
        throw new Error(`${response.status}`);
      }
  
      const result = await response.json();
      return result;
    } catch (err) {
      if (err.message === "400") alert("insira um email válido");
      console.log(err);
    }
  }
  
  
  const span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    modal.style.display = "none";
  };
  
  
  window.onclick = function (event) {
    if (event.target == modal) modal.style.display = "none";
  };
  