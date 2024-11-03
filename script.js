// Seleciona os elementos a serem animados com o efeito de paralaxe
const leaf = document.getElementById("leaf");
const hill4 = document.getElementById("hill4");
const hill5 = document.getElementById("hill5");
const menu = document.getElementById("menu")

// Função para aplicar o efeito de paralaxe
function parallaxEffect() {
  const value = window.scrollY;

  // Aplica o movimento de paralaxe
  if (leaf) {
    leaf.style.top = `${value * -1.5}px`; // Move para cima com a rolagem
    leaf.style.left = `${value * 1.5}px`; // Move para a direita com a rolagem
  }
  if (hill5) {
    hill5.style.left = `${value * 1.5}px`; // Move para a direita
  }
  if (hill4) {
    hill4.style.left = `${value * -1.5}px`; // Move para a esquerda
  }
}

// Escuta o evento de rolagem da página e usa `requestAnimationFrame` para otimização
window.addEventListener("scroll", () => {
  requestAnimationFrame(parallaxEffect);
});

