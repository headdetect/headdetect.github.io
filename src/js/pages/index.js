/**
 * WhY wE dOiNg ThIs iF aLl DoMaIns ReDIreCt tO jacoy.dev??
 *
 * Because I want to. That way if anyone steals from me
 * it'll automatically work for them I guess.
 *
 * @type {HTMLElement}
 */

const domain = document.getElementById('domain');

if (domain) {
  domain.innerText = window.location.hostname;
}
