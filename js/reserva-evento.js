const SOUND_URL = "https://xp41-soundgarden-api.herokuapp.com/bookings/event/";

const findID = () => {
    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');
    return id
}

const exibirReservas = async () => {
    const reservasEvento = await fetch(SOUND_URL + findID(),
    {method: 'GET', mode: 'cors', headers: {'Content-Type': 'application/json'}})
    .then((response) => response.json())
    .then((data) => listarReservas(data))
    
}

function listarReservas(reservas) {
    const titulo = reservas[0].event.name;
    document.getElementById("titulo-evento").innerHTML = `Reservas referentes ao evento ${titulo.bold()}`;
    reservas.forEach((reserva, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<th scope="row">${index + 1}</th>
          <td>${reserva.owner_name}</td>
          <td>${reserva.owner_email}</td>
          <td>${reserva.number_tickets}</td>`;
  
      document.querySelector("table tbody").appendChild(tr);
    });
  }
  
  // chamando a function
  
  exibirReservas();