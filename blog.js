function toggleContent(card) {
  const content = card.querySelector('.content');
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

function searchArticle() {
  let input = document.getElementById('searchInput').value.toLowerCase().trim();
  let cards = document.getElementsByClassName('card');

  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].querySelector('h3');
    if (!title) continue;

    let text = title.innerText.toLowerCase();

    if (text.includes(input)) {
      cards[i].style.display = ''; 
    } else {
      cards[i].style.display = 'none';
    }
  }
}

function randomTips() {
  const tips = [
    "Minum air putih sekarang! 💧",
    "Jangan lupa makan sayur hari ini 🥦",
    "Istirahat yang cukup ya 😴",
    "Luangkan waktu untuk olahraga 🚶",
    "Kurangi penggunaan HP sebelum tidur 📱"
  ];

  const random = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById('tips').innerText = random;
}
