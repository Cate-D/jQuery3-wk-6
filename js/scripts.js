$(document).ready(function() {
  const age = parseInt(prompt("How old are you?"));

  if (age > 17) {
    $('#ofage').show();
  } else if (age === 18) {
    alert("Now don't go crazy!");
    $('#ofage').show();
  } else {
    $('#notofage').show();
  }
});