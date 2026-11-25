const screens = [...document.querySelectorAll(".screen")];
const visited = new Set(["inicio"]);
function showScreen(id) {
  screens.forEach(s => s.classList.toggle("active", s.id === id));
  visited.add(id);
  window.scrollTo({top:0, behavior:"smooth"});
}
const audio = document.getElementById("backgroundMusic");
const musicBtn = document.getElementById("musicBtn");
const musicLabel = document.getElementById("musicLabel");

async function startMusic() {
  audio.volume = 0.28;
  try {
    await audio.play();
    musicLabel.textContent = "Trilha instrumental ligada";
  } catch {
    musicLabel.textContent = "Toque para ouvir trilha";
  }
}

document.getElementById("startBtn").addEventListener("click", () => {
  showScreen("carta");
  startMusic();
});
document.getElementById("openLetter").addEventListener("click", e => {
  document.getElementById("letterContent").classList.remove("hidden");
  e.currentTarget.classList.add("hidden");
});
document.querySelectorAll("[data-next]").forEach(btn => btn.addEventListener("click", () => showScreen(btn.dataset.next)));
document.querySelectorAll(".answer").forEach(btn => btn.addEventListener("click", () => {
  const feedback = document.getElementById("gameFeedback");
  document.querySelectorAll(".answer").forEach(a => a.classList.remove("selected"));
  btn.classList.add("selected");
  if (btn.dataset.answer === "correct") {
    feedback.textContent = "Você acertou! Essa viagem ficou guardada na nossa história. ♥";
    document.getElementById("gameStory").classList.remove("hidden");
    document.getElementById("gameContinue").classList.remove("hidden");
  } else {
    feedback.textContent = "Quase! Tente mais uma vez. Pense em um dos nossos primeiros momentos fora da rotina.";
    document.getElementById("gameStory").classList.add("hidden");
    document.getElementById("gameContinue").classList.add("hidden");
  }
}));
document.getElementById("gameContinue").addEventListener("click", () => showScreen("motivos"));

const reasons = [
"Por transformar momentos simples em lembranças especiais.",
"Pelo seu jeito único de sorrir.",
"Porque estar com você faz o tempo passar diferente.",
"Por cada conversa que eu queria que durasse mais.",
"Porque posso aprender algo novo ao seu lado.",
"Pela parceria que estamos construindo.",
"Por me fazer querer ser uma pessoa melhor.",
"Por cada detalhe seu que ainda quero descobrir.",
"Porque sua presença deixa meus dias mais leves.",
"Porque, entre tantas possibilidades, eu gosto de escolher nós dois."
];
let reasonIndex = 0;
function renderReason() {
  document.getElementById("reasonNumber").textContent = String(reasonIndex+1).padStart(2,"0")+" / 100";
  document.getElementById("reasonText").textContent = reasons[reasonIndex % reasons.length];
}
document.getElementById("nextReason").addEventListener("click", () => { reasonIndex = (reasonIndex+1)%100; renderReason(); });
document.getElementById("revealFinal").addEventListener("click", () => showScreen("final"));
document.getElementById("replayBtn").addEventListener("click", () => {
  reasonIndex=0; renderReason();
  document.getElementById("letterContent").classList.add("hidden");
  document.getElementById("openLetter").classList.remove("hidden");
  document.getElementById("gameContinue").classList.add("hidden");
  document.getElementById("gameFeedback").textContent="";
  document.getElementById("gameStory").classList.add("hidden");
  document.querySelectorAll(".answer").forEach(a=>a.classList.remove("selected"));
  showScreen("inicio");
});

musicBtn.addEventListener("click", async () => {
  if (audio.paused) {
    await startMusic();
  } else {
    audio.pause();
    musicLabel.textContent = "Música pausada";
  }
});
renderReason();
