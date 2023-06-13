// Función para cargar los participantes desde el almacenamiento
function loadParticipants() {
    const participants = JSON.parse(localStorage.getItem('participants')) || [];
    const participantsList = document.getElementById('participantsList');
    participantsList.innerHTML = '';
  
    participants.forEach(function(participant) {
      const li = document.createElement('li');
      li.textContent = participant;
      participantsList.appendChild(li);
    });
  }
  
  // Función para guardar los participantes en el almacenamiento
  function saveParticipants(participants) {
    localStorage.setItem('participants', JSON.stringify(participants));
  }
  
  // Evento para agregar participantes
  document.getElementById('addParticipantBtn').addEventListener('click', function() {
    const participantInput = document.getElementById('participantInput');
    const participant = participantInput.value.trim();
  
    if (participant !== '') {
      const participants = JSON.parse(localStorage.getItem('participants')) || [];
      participants.push(participant);
      saveParticipants(participants);
      participantInput.value = '';
    }
  });
  
  // Evento para eliminar participantes
  document.getElementById('removeParticipantBtn').addEventListener('click', function() {
    const participantInput = document.getElementById('participantInput');
    const participant = participantInput.value.trim();
  
    if (participant !== '') {
      let participants = JSON.parse(localStorage.getItem('participants')) || [];
      participants = participants.filter(function(p) {
        return p !== participant;
      });
      saveParticipants(participants);
      participantInput.value = '';
    }
  });
  
  // Evento para mostrar los participantes
  document.getElementById('showParticipantsBtn').addEventListener('click', function() {
    loadParticipants();
  });
  
  // Evento para mostrar la cantidad total de participantes
  document.getElementById('showTotalBtn').addEventListener('click', function() {
    const participants = JSON.parse(localStorage.getItem('participants')) || [];
    const totalParticipants = document.getElementById('totalParticipants');
    totalParticipants.textContent = 'Cantidad total de participantes: ' + participants.length;
  });
  
  // Evento para realizar el sorteo
  document.getElementById('drawWinnerBtn').addEventListener('click', function() {
    const participants = JSON.parse(localStorage.getItem('participants')) || [];
    const winnerResult = document.getElementById('winnerResult');
  
    if (participants.length > 0) {
      const randomIndex = Math.floor(Math.random() * participants.length);
      const winner = participants[randomIndex];
      winnerResult.textContent = '¡El ganador es: ' + winner + '!';
    } else {
      winnerResult.textContent = 'No hay participantes para realizar el sorteo.';
    }
  });
  
  // Cargar los participantes al cargar la página
  loadParticipants();