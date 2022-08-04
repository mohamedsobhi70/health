
window.onload = function () {
  document.documentElement.style.setProperty(
    "--primary-color",
    localStorage.getItem("--primary-color") || "#018e9f"
  );
  document.documentElement.style.setProperty(
    "--secondary-color",
    localStorage.getItem("--secondary-color") || "#8E8769"
  );
  document.documentElement.style.setProperty(
    "--bg-color",
    localStorage.getItem("--bg-color") || "#f1f3f9"
  );
};