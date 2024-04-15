const tokenButton = document.querySelector('.main-info__token-button');
const tokenCodeNumber = document.querySelector('.main-info__token-number');

if (tokenButton && tokenCodeNumber) {
  tokenButton.addEventListener('click', () => {
    navigator.clipboard.writeText(tokenCodeNumber.innerText);
    tokenButton.classList.add('active');
  });
}
