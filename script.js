document.getElementById("roomForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Предотвращаем отправку формы

  // Получаем введенное имя пользователя
  var usernameInput = document.getElementById("username");
  var username = usernameInput.value;

  // Генерируем случайный идентификатор комнаты
  var roomId = generateRoomId();

  // Перенаправляем пользователя в комнату
  window.location.href = "room.html?room=" + roomId + "&username=" + encodeURIComponent(username);
});

function generateRoomId() {
  // Генерируем случайный идентификатор комнаты
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var roomId = "";
  for (var i = 0; i < 6; i++) {
    roomId += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return roomId;
}

