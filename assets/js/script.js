
	window.onscroll = function() {scrollFunction()};
	function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("logo").style.backgroundSize = "156px 50px";
    document.getElementById("logo").style.width = "156px";
    document.getElementById("logo").style.height = "50px";
    document.getElementById("navbar-right").style.padding = "10px";
    document.getElementById("logo").style.marginLeft = "auto";
    document.getElementById("logo").style.marginRight = "auto";
    
  } else {

    document.getElementById("navbar").style.padding = "25px 10px";
    document.getElementById("logo").style.backgroundSize = "250px 80px";
    document.getElementById("logo").style.width = "250px";
    document.getElementById("logo").style.height = "80px";
    document.getElementById("navbar-right").style.padding = "26px 10px";
   
  }
}



//Função jquery para envio de msg
$(function(){
  $('#contact-form').on('submit', function(e){
      e.preventDefault();         
          $('#info1').addClass('alert alert-secondary text-center m-2 w-100 size-16')
          .html('<p class="size-16 text-center"><i class="fas fa-sync fa-spin size-16"></i> Enviando...</p>')
          $('#bt').attr('disabled', 'disabled');
      setTimeout(function(){
        emailjs.sendForm('default_service', 'contact_form', '#contact-form')
            .then(function() {
              $('#info1').css('color', 'green')
              .html('<p class="size-16 text-center">Mensagem enviada com sucesso!</p>');
              $('.field').val('');
              $('#bt').removeAttr('disabled');
            }, function(error) {
              $('#info1').css('color', 'red')
              .html('<p class="size-16 text-center">Ops! Erro: '+error['status']+'. Não foi possível enviar sua mensagem.</p>');
              $('.field').val('');
              $('#bt').removeAttr('disabled');
            });
      }, 3000);
  });
});