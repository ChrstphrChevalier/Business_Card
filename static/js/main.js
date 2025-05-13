let count = 0;
let index = 0;
let currentText = '';
let currentTexts = '';
let letter = '';
let typingTimeout = null;

const lightTexts = [
  "Ingénieur IT Junior",
  "Développeur C | C++ | Python",
  "Ingénieur MultiCloud Azure/AWS Junior",
  "Disponible Immédiatement"
];

const darkTexts = [
  "déterminé à atteindre l'excellence",
  "toujours en quête de nouveaux défis",
  "engagé à repousser mes limites",
  "et je resterai fidèle à mes objectifs"
];

function type() {
  if (count === currentTexts.length) count = 0;
  currentText = currentTexts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById('typing-text').textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => {
      erase();
    }, 1500);
  } else {
    typingTimeout = setTimeout(type, 100);
  }
}

function erase() {
  letter = currentText.slice(0, --index);
  document.getElementById('typing-text').textContent = letter;

  if (letter.length === 0) {
    count++;
    setTimeout(type, 500);
  } else {
    setTimeout(erase, 50);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Démarre directement avec le texte du mode clair par défaut
  currentTexts = lightTexts;
  type();
});

document.getElementById('dark-mode-toggle').addEventListener('change', function () {
  const body = document.body;
  const profileImg = document.querySelector('.profile-img');
  const section = document.querySelector('.full-screen-section');
  const name = document.getElementById('name');
  const quote = document.getElementById('quote');
  const githubButton = document.getElementById('github-button');
  const linkedinButton = document.getElementById('linkedin-button');
  const emailButton = document.getElementById('email-button');
  const cvButton = document.getElementById('cv-button');


  body.classList.toggle('dark-mode');

  // Arrêter l'animation précédente et réinitialiser
  clearTimeout(typingTimeout);
  document.getElementById('typing-text').textContent = '';  // Clear the text
  count = 0; // Réinitialise le compteur
  index = 0; // Réinitialise l'index pour repartir à zéro

  if (body.classList.contains('dark-mode')) {
    // Si mode sombre, changer l'image et le texte du mode sombre
    currentTexts = darkTexts;
    profileImg.src = 'static/img/profile-dark.avif';
    section.style.backgroundImage = "url('static/img/bg-dark.jpeg')";
    name.textContent = '756.XXX3.8XXX.76';
    quote.textContent = "-.. . -- .- .. -. / ... . .-. .- / .. -. . ...- .. - .- -... .-.. . -- . -. - / -.. .. ..-. ..-. . .-. . -. -";

    // Modifier le texte des boutons pour le mode sombre
    githubButton.textContent = "100DaysOfCode - Python";
    linkedinButton.textContent = "DataScience & MachineLearning";
    emailButton.textContent = "Azure";
    cvButton.textContent = "AWS";

    // Modifier les liens des boutons pour les rendre spécifiques au mode sombre
    githubButton.href = 'https://www.udemy.com/course/100-days-of-code/?srsltid=AfmBOoqqihRtxZhUJ-eg_2UfV02wZlbAhNW7iWHfZRcmwr82uR6mJt3F&couponCode=ST2MT130525';
    linkedinButton.href = 'https://www.udemy.com/course/data-science-et-machine-learning-masterclass-python/';
    emailButton.href = 'https://learn.microsoft.com/fr-fr/credentials/certifications/azure-administrator/?practice-assessment-type=certification';
    cvButton.href = 'https://aws.amazon.com/fr/certification/certified-solutions-architect-associate/';

    // 👉 ouvrir dans un nouvel onglet
    emailButton.setAttribute('target', '_blank');
    cvButton.setAttribute('target', '_blank');

  } else {
    // Si mode clair, revenir aux paramètres par défaut
    currentTexts = lightTexts;
    profileImg.src = 'static/img/profile.jpeg';
    section.style.backgroundImage = "url('static/img/bg.jpg')";
    name.textContent = 'CHEVALIER Christopher';
    quote.textContent = "Les rêves deviennent réalité grâce à la passion et à la persévérance.";

    // Revenir aux liens par défaut
    githubButton.href = 'https://github.com/ChrstphrChevalier';
    linkedinButton.href = 'https://linkedin.com/in/christopher-chevalier-21bab7297';
    emailButton.href = 'mailto:chrstphr.chevalier@gmail.com';
    cvButton.href = 'static/CV_CC.pdf';

    // Revenir au texte par défaut des boutons
    githubButton.textContent = "GitHub";
    linkedinButton.textContent = "LinkedIn";
    emailButton.textContent = "Email";
    cvButton.textContent = "Voir le CV";
  }

  // Démarre la nouvelle animation avec le texte du mode sombre ou clair
  type(); // Recommence immédiatement l'animation du texte
});
