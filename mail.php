<?php
if(!empty($_POST['n']) && !empty($_POST['e']) && !empty($_POST['m'])){

    echo '<p class="alert alert-light text-center m-2 p-1 w-100" style="color:green"><i class="fas fa-check-circle"></i> Obrigado, '.$_POST['n'].'. Sua mensagem foi enviada com sucesso!</p>';

}else{

    echo '<p class="alert alert-light text-center m-2 w-100" style="color:red"><i class="fas fa-exclamation-circle"></i> Erro ao enviar a mensagem!</p>';
}
?>