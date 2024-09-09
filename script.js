document.addEventListener('DOMContentLoaded', function() {
  const buyButtons = document.querySelectorAll('.buy-now');
  buyButtons.forEach(button => {
      button.addEventListener('click', function() {
          alert("Thank you for your interest! Please contact us for purchasing details.");
      });
  });
});
