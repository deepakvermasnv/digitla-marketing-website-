const leadForm = document.getElementById('lead-form');
const formMessage = document.getElementById('form-message');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

leadForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(leadForm);
  const name = data.get('name');

  formMessage.textContent = `Thanks, ${name}! Your audit request was received.`;
  leadForm.reset();
});
