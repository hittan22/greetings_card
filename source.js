const sparkleContainer = document.getElementById('sparkle');

for (let i = 0; i < 90; i++) {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.top = `${Math.random() * 100}%`;
  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.animationDelay = `${Math.random() * 5}s`;
  sparkleContainer.appendChild(sparkle);
}