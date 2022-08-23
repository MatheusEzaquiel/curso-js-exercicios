<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Esconder div</title>
	<style>
		body{
			font: normal 12pt arial;
			color: #fff;
		}
		div{
			background: darkred;
			width: 250px;
			height: 150px;
			padding: 15px;
			margin-top: 15px;
			border-radius: 5%;
		}
		#d2{
			background: grey;
		}

		#d3{
			background: orange;
		}

	</style>
</head>
<body>

		<button onclick="mostrarD1()">1</button>
		<button onclick="mostrarD2()">2</button>
		<button onclick="mostrarD3()">3</button>

		<!-- <button onclick="mostrar(document.getElementById('d1'))">1</button>
		<button onclick="mostrar(document.getElementById('d2'))">2</button>
		<button onclick="mostrar(document.getElementById('d3'))">3</button> -->

	<div id="d1">
		<h1>Tipo 1</h1>
		<p>Primeira opção selecionada!</p>
	</div>
	<div id="d2">
		<h1>Tipo 2</h1>
		<p>Segunda opção selecionada!</p>
	</div>
	<div id="d3">
		<h1>Tipo 3</h1>
		<p>Terceira opção selecionada!</p>
	</div>

	<script>
		let div1 = document.getElementById("d1")
		let div2 = document.getElementById("d2")
		let div3 = document.getElementById("d3")

		div1.style.display = 'none';
		div3.style.display = 'none';
		div2.style.display = 'none';

		function mostrarD1(){
			div1.style.display = ''
			div2.style.display = 'none'
			div3.style.display = 'none'
		}
		function mostrarD2(){
			div1.style.display = 'none'
			div2.style.display = ''
			div3.style.display = 'none'
		}
		function mostrarD3(){
			div1.style.display = 'none'
			div2.style.display = 'none'
			div3.style.display = ''
		}

		// function mostrar(id){
		// 	 return id.style.display = '';
		// 	 if(id == 1)
		// }
		
	</script>
</body>
</html>