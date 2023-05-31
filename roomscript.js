
  document.addEventListener("DOMContentLoaded", function () {
    var taskList = document.getElementById("taskList");
    var addTaskForm = document.getElementById("addTaskForm");
    var taskInput = document.getElementById("taskInput");
    var userList = document.getElementById("userList");
    var userCount = 0;

    addTaskForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Предотвращаем отправку формы и перезагрузку страницы

      var taskText = taskInput.value.trim();
      if (taskText !== "") {
        var taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = ""; // Очищаем поле ввода
      }
    });

    var cardContainer = document.getElementById("cardContainer");
    var calculateButton = document.getElementById("calculateButton");
    var averageResult = document.getElementById("averageResult");
    var selectedCards = [];

    var cards = cardContainer.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", function (event) {
        var card = event.target;
        var value = card.dataset.value;

        if (card.classList.contains("selected")) {
          card.classList.remove("selected");
          selectedCards = selectedCards.filter(function (cardValue) {
            return cardValue !== value;
          });
        } else {
          card.classList.add("selected");
          selectedCards.push(value);
        }
      });
    }

    calculateButton.addEventListener("click", function () {
      if (selectedCards.length > 0) {
        var sum = selectedCards.reduce(function (total, value) {
          return total + parseInt(value);
        }, 0);
        var average = sum / selectedCards.length;
        averageResult.textContent = "Средняя оценка: " + average.toFixed(2);
      } else {
        averageResult.textContent = "Нет выбранных оценок";
      }
    });

    function addUser() {
      var userItem = document.createElement("li");
      userItem.textContent = "Пользователь " + (++userCount);
      userList.appendChild(userItem);
    }

    function removeUser() {
      if (userCount > 0) {
        userList.lastElementChild.remove();
        userCount--;
      }
    }

    addUser(); // Добавляем первого пользователя

    var roomInfo = document.getElementById("roomInfo");
    roomInfo.textContent = "Пользователей в комнате: " + userCount;

    var addUserButton = document.getElementById("addUserButton");
    addUserButton.addEventListener("click", function () {
      addUser();
      roomInfo.textContent = "Пользователей в комнате: " + userCount;
    });

    var removeUserButton = document.getElementById("removeUserButton");
    removeUserButton.addEventListener("click", function () {
      removeUser();
      roomInfo.textContent = "Пользователей в комнате: " + userCount;
    });
  });