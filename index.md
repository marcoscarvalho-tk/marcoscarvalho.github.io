<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<title>OaksMark</title>
	<meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins&display=swap">
	<link rel="stylesheet" href="assets/css/style.css">
	
</head>
  <div class="container-fluid">
	<body>
		<div class="row">
			<nav id="navbar">
				<a href="index.html" id="logo"></a>
				<div id="navbar-right">
					<a class="#active" href="#home">Home</a>
					<a href="#about">Sobre</a>
					<a href="#contact">Contato</a>
				</div>
			</nav>			
		</div>
			<div class="row header fst-header fullheight-fst" id="home">
				<h1><span id="typed"></span></h1>			
			</div>
		<div class="row area py-5 my-5" id="about">
			<div class="py-5 mx-auto text-center">
				<img class="mx-auto py-5 d-block" src="assets/images/me2.png" alt="image">
				<h2>Marcos D. Carvalho</h2>
				<h3>Estudante de Análise e Desenvolvimento de Sistemas, afixionado por tecnologia e afins.</h3>
			</div>
			<div class="row w-100 mx-auto justify-content-center">
				<div class="item m-2 neumorphism">					
					<i class="text-center"><i class="fab fa-html5"></i><br/>HTML5</i>
				</div>
				 <div class="item m-2 neumorphism">
					<i class="text-center"><i class="fab fa-css3-alt"></i><br/>CSS3</i>
				</div>
				 <div class="item m-2 neumorphism">
					<i class="text-center"><i class="fab fa-js-square"></i><br/>Javascript</i>					
				</div>
				<div class="item m-2 neumorphism">
					<i class="text-center"><i class="fab fa-php"></i><br/>PHP</i>					
			    </div>
			    <div class="item m-2 neumorphism">
					<i class="text-center"><i class="fab icon-mysql"></i><br/>MySQL</i>				    
			    </div> 
			    <div class="item m-2 neumorphism">
					<i class="text-center"><i class="fab fa-bootstrap"></i><br/>Bootstrap</i>				   
			    </div>  
			</div>
		</div>
		<div class="row header scd-header fullheight-scd pt-5 my-5" id="contact">
			<div class="form form-group py-5 pr-4 m-auto text-center">
				<form id="my_form" onsubmit="submitForm(); return false;">
					<h2 class="m-0"><strong>CONTATO</strong><br/><i class="fas fa-envelope fa-2x"></i></h2>
					<label for="name">Nome</label>		
					<input id="n"  type="text" name="name" class="form-control m-2" required="">
					<label for="email">Email</label>
					<input id="e"  type="email" name="email" class="form-control m-2" required="">
					<label for="msg">Mensagem</label>
					<textarea  id="m" name="msg" rows="3" class="form-control m-2" required="" style="resize: none;"></textarea>
					<button id="mybtn" type="submit" name="submit" class="gradient-buttons btn btn-dark m-2">Enviar</button>
					<p id="status"></p>		
				</form>
			</div>
		</div>
		<div class="row area py-5 my-5">
				<div class="p-3 mx-auto text-center">					
					<h2><strong>PROJETOS</strong></h2>
				</div>
			<div class="row w-100 mx-auto justify-content-center">
				<div class="item m-2 neumorphism-1 text-center">
					<img class="mx-auto p-3 d-block" src="assets/images/work.png" alt="image">
					<h4>ARTISTA</h4>
					<i class="fa fa"></i>
					<a href="http://marcoscarvalho.tk/wrk1.html" target="blank">
						<button class="gradient-buttons btn btn-dark m-2">Visitar</button></a> 
				</div>
				 <div class="item m-2 neumorphism-1 text-center">
					<img class="mx-auto p-3 d-block" src="assets/images/siteshop2.png" alt="image">
					<h4>ECOMMERCE</h4>
					<i class="fa fa"></i>
					<a href="http://marcoscarvalho.tk/classificados/_index.php" target="blank">
						<button class="gradient-buttons btn btn-dark m-2">Visitar</button></a> 
				</div>
				 <div class="item m-2 neumorphism-1 text-center">
					<img class="mx-auto p-3 d-block" src="assets/images/calendar.png" alt="image">
					<h4>UTILIDADE</h4>
					<i class="fa fa"></i>
					<a href="http://marcoscarvalho.tk/calendariophp/" target="blank">
						<button class="gradient-buttons btn btn-dark m-2">Visitar</button></a> 
				</div>
			</div>
		</div>

		<div class="row">
			<footer class="footer">
				<span>2019-<script type="text/javascript"> document.write(new Date().getFullYear()) 
				</script> Desenvolvido por: <a href="">Marcos Carvalho </a></span>
			</footer>
		</div>
		<script src="assets/js/bootstrap.min.js"></script>
		<script src="assets/js/jquery-3.4.1.min.js"></script>
		<script src="assets/js/typed.min.js"></script>
		<script src="assets/js/script.js"></script>
		<script>
			var typed5 = new Typed('#typed', {
				strings: ['Desenvolver.', 'Envolver -se.', 'Desenvolver -se.'],
				typeSpeed: 80,
				backSpeed: 60,
				shuffle: true,
				smartBackspace: false,
				loop: true
			  });
		</script>
	</body>	  
  </div>
</html>