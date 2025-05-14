// Scroll reveal animado
ScrollReveal().reveal('.section', {
  delay: 100,
  duration: 800,
  distance: '30px',
  origin: 'bottom'
});

// Validação do formulário
document.getElementById('form-contato').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
  this.reset();
});


// ROLAGEM SUAVE COM ANIMAÇÃO DE TRANSIÇÃO
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60, // ajusta para considerar a altura do menu fixo, se houver
        behavior: 'smooth'
      });
    }
  });
});

function solicitarOrcamento(servico) {
  const mensagem = `Olá! Gostaria de solicitar um orçamento para o serviço de ${servico}.`;
  const whatsappLink = `https://wa.me/558532355759?text=${encodeURIComponent(mensagem)}`;
  window.open(whatsappLink, '_blank');
}
function solicitarReboque(reboque) {
  const mensagem = `Olá! Gostaria de solicitar um orçamento para o serviço de ${reboque}.`;
  const whatsappLink = `https://wa.me/5585988564537?text=${encodeURIComponent(mensagem)}`;
  window.open(whatsappLink, '_blank');
}
ScrollReveal().reveal('.sr', {
  distance: '40px',
  duration: 1000,
  easing: 'ease-out',
  origin: 'bottom',
  interval: 200,
  reset: false // coloque como true se quiser que reanime ao voltar
});


