document.addEventListener("DOMContentLoaded", () => {
  const copyright = document.getElementById("copyright");

  if (copyright) {
    copyright.textContent = `© ${new Date().getFullYear()}`;
  }
});
