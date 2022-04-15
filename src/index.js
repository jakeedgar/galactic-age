import $ from 'jquery';
import Age from './js/age';


$(document).ready(function() {
  $("#calc").submit(function(event) {
  event.preventDefault();
  const userName = $("#name-input").val();
  console.log(userName);
  const ageInput = $("#age-input").val();
  console.log(ageInput);
  const lifeInput = $("#life-input").val();
  console.log(lifeInput);
  const planet = $("input:radio[name=planet]:checked").val();
  console.log(planet);
  let user;
  user = new Age(userName, ageInput, lifeInput)
  console.log(user);
  });
});