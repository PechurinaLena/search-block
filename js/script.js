window.onload = function() {
  let openForm = document.querySelector(".date-form");
  let btn = document.querySelector(".modal");
  let anotherBtn = document.querySelector(".modal-close");

  btn.onclick = function() {
    openForm.style.display = "none";
  };

  anotherBtn.onclick = function() {
    openForm.style.display = "block";
  };

  var link = document.querySelector(".modal");

  var popup = document.querySelector(".modal-login");
  var close = popup.querySelector(".modal-close");

  var form = popup.querySelector("form");
  var date = popup.querySelector("[name=date]");
  var amount = popup.querySelector("[name=amount]");

  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  });

  close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");

    if (storage) {
      date.value = storage;
      amount.focus();
    } else {
      date.focus();
    }

    date.focus();
  });

  form.addEventListener("submit", function(evt) {
    if (!date.value || !amount.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("date", date.value);
      }
    }
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });
};
