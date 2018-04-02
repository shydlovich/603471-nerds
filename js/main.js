var link = document.querySelector(".link-modal");

var popup = document.querySelector(".modal-window");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector(".modal-form");
var login = popup.querySelector("[name=user]");
var password = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
storage = localStorage.getItem("user");
  } catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-exhibition");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-exhibition");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("user", user.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-exhibition")) {
      popup.classList.remove("modal-spow");
      popup.classList.remove("modal-error");
    }
  }
});
