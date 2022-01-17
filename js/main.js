var menu = document.querySelector(".left-container");
function interactMenuMobile() {
  const checkbox = document.querySelector("#check-menu");
  let porcentWidth = 50;

  checkbox.onclick = (event) => {
    if (event.target.checked) {
      menu.style.position = "absolute";
      menu.style.display = "block";
      menu.style.width = `${porcentWidth}%`;
    } else {
      menu.style.position = "relative";
      menu.style.display = "none";
    }
  };
}
interactMenuMobile();
