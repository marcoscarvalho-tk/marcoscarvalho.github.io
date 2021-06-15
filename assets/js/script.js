
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

  