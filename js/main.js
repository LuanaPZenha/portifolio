const clock = document.getElementById("clock");

function formatNow() {
  return new Date().toLocaleString("pt-BR", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}

if (clock) {
  clock.textContent = formatNow();
  setInterval(() => {
    clock.textContent = formatNow();
  }, 1000);
}
