import { initNavigation } from './navigation.js';
import { initReveal } from './reveal.js';
import { initWaitlist } from './waitlist.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initReveal();
  initWaitlist();
});
