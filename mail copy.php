<?php

$nome = isset($_POST['nome'])? $_POST['nome']: '';
$email = isset($_POST['email'])? $_POST['email']: '';
$msg = isset($_POST['msg'])? $_POST['msg']: '';

if(!empty($nome) && !empty($email)){
    
    /* função email() envia os dados atraves do servidor para o email referido
    $to = "marcosdmgscarvalho@gmail.com";
    $subject = "Contato do site";
    $body = "Nome: ".$nome." - Email: ".$email." - Mensagem: ".$msg;
    $header = "From: contato@marcoscarvalho.tk"."\r\n". 
              "Rerply-To: ".$email."\r\n ". 
              "X-Mailer: PHP/".phpversion();

   if(mail($to, $subject, $body, $header)){
   */
      

       echo '<p><i class="fas fa-check-circle"></i> Sua mensagem foi enviada com sucesso!</p>';
  /* } else{
       echo '<p class="alert alert-danger text-center m-2 w-100" style="color:red"><i class="fas fa-exclamation-circle"></i> Erro ao enviar a mensagem!</p>';
   }
   */
}else{
    echo '<p><i class="fas fa-exclamation-circle"></i> Preencha todos os campos!</p>';
}
