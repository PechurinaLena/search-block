window.onload = function() {
  let openForm = document.querySelector(".date-form");
  let btn = document.querySelector(".modal");

  btn.onclick = function() {
    if (openForm.style.display == "block") {
      openForm.style.display = "none";
    } else {
      (openForm.style.display = "block"), openForm.classList.add("modal-show");
    }
  };

  let popup = document.querySelector(".modal-login");
  let close = popup.querySelector(".modal-close");

  let form = popup.querySelector("form");
  let date = popup.querySelector("[name=date]");
  let amount = popup.querySelector("[name=amount]");

  let isStorageSupport = true;
  let storage = "";

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

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
      if (popup.classList.contains("modal-show")) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
      }
    }
  });
};
