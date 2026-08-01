
window.toggleCart = function () {
  const drawer = document.getElementById("cart-drawer");
  if (drawer) {
    drawer.classList.toggle("active");
  }
};

document.addEventListener("DOMContentLoaded", () => {

  const themeBtn = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("taif_theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    if (themeBtn) themeBtn.textContent = "🌙 الوضع الداكن";
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      const isLight = document.body.classList.contains("light-mode");
      themeBtn.textContent = isLight ? "🌙 الوضع الداكن" : "☀️ الوضع الفاتح";
      localStorage.setItem("taif_theme", isLight ? "light" : "dark");
    });
  }

 



  
});