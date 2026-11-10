const gameContainer = document.getElementById("game");
const errorMessage = document.getElementById("game-error");
const ruffle = window.RufflePlayer.newest();
const player = ruffle.createPlayer();

function resizePlayer() {
  const width = Math.min(player.parentElement.clientWidth, 960);
  const height = Math.min(width * 501 / 610, Math.max(window.innerHeight - 100, 1));
  player.style.width = `${width}px`;
  player.style.height = `${height}px`;
}

gameContainer.replaceWith(player);
resizePlayer();
window.addEventListener("resize", resizePlayer);

player.load(gameContainer.dataset.swf).catch((error) => {
  console.error("Không thể tải game:", error);
  errorMessage.hidden = false;
  errorMessage.textContent = "Không tải được game. Hãy kiểm tra các tệp trong thư mục assets và runtime Ruffle.";
});
