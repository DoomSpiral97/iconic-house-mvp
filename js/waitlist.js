export function initWaitlist(){
  const form=document.querySelector('[data-waitlist]');
  const msg=document.querySelector('[data-waitlist-msg]');
  if(!form||!msg)return;
  form.addEventListener('submit',event=>{
    event.preventDefault();
    const email=form.email.value.trim();
    const valid=/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(email);
    if(!valid){
      msg.textContent='Bitte gib eine gültige E-Mail-Adresse ein.';
      msg.classList.add('is-error');
      form.email.setAttribute('aria-invalid','true');
      form.email.focus();
      return;
    }
    form.reset();
    form.email.removeAttribute('aria-invalid');
    msg.classList.remove('is-error');
    msg.textContent='✓ Danke! Du stehst auf der Warteliste des Salon Privé.';
  });
}
