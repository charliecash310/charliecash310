const modal = document.querySelector('#campaignModal');
const openModal = () => { modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); };
const closeModal = () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); };

document.querySelector('#newCampaign').addEventListener('click', openModal);
document.querySelector('#modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal(); });

document.querySelectorAll('.modal-options button').forEach((button) => {
  button.addEventListener('click', () => {
    const discipline = button.querySelector('b').textContent;
    closeModal();
    document.querySelector('#newCampaign').textContent = `${discipline.toUpperCase()} SELECTED`;
    setTimeout(() => { document.querySelector('#newCampaign').innerHTML = '<span>＋</span> NEW CAMPAIGN'; }, 1800);
  });
});

const ranges = ['Last 30 days', 'Last 90 days', 'Last 12 months'];
let rangeIndex = 0;
document.querySelector('#rangeButton').addEventListener('click', (event) => {
  rangeIndex = (rangeIndex + 1) % ranges.length;
  event.currentTarget.innerHTML = `${ranges[rangeIndex]} <b>⌄</b>`;
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.main-nav a').forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
  });
});
