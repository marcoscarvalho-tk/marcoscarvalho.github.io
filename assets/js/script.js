
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

function _(id){return document.getElementById(id);}
function submitForm(){
  _("mybtn").disabled = true;
  _("status").innerHTML = 'Enviando...';
  var formdata = new FormData();
  formdata.append("n", _("n").value);
  formdata.append("e", _("e").value);
  formdata.append("m", _("m").value);
  var ajax = new XMLHttpRequest();
  ajax.open("POST", "mail.php");
  ajax.onreadystatechange = function(){
    if(ajax.readyState == 4 && ajax.status == 200) {
      _("status").innerHTML = ajax.responseText;
      _("mybtn").disabled = false;
    }
  }
  ajax.send(formdata);
}
/*Função ajax para envio de msg via email*/ 
$(function(){
  $('form').on('submit', function(e){
      e.preventDefault();
      dados = $(this).serialize();           
          $('#info1').html('<p><i style="font-size:15px" class="fas fa-sync fa-spin text-center"></i> Enviando...</p>')
          .css('color', 'white');
          $('#bt').attr('disabled', 'disabled');
      setTimeout(function(){
          $.ajax({
              type: "POST",
              url:  "mail.php",
              data: dados,
              success:function(resp){
                  $('#info1').addClass('alert alert-secondary text-center m-2 w-100')
                  .css('color', 'green')
                  .html(resp);
                  $('.field').val('');
                  $('#bt').removeAttr('disabled');
              },
              error:function(error){
                  alert("Erro "+error['status']);
                  $('#bt').removeAttr('disabled');
              }
          }); 
      }, 3000);
  });
});
  