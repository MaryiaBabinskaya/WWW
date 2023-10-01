const express = require('express')

const PORT = process.env.PORT || 3002
const app = express()
app.listen(PORT, () => {
	console.log('Server starting on port ${PORT}')
})
app.get('/api',(req,res)=>{
	res.json({
		/* message: "Hello from backend express.js" */
		<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- dla telefona -->
	<title>Project</title>
<!-- podkluczajem biblioteku, plagin -->
<!-- tak kak my delaem eto nie w body, dopisywajem defer -->
	<script src="libs/gsap/gsap.min.js" defer></script>
	<script src="libs/gsap/ScrollTrigger.min.js" defer></script> <!-- dla animacii -->
	<script src="libs/gsap/ScrollSmoother.min.js" defer></script> <!-- plawnyj scroll -->
<!-- podkluczajem nasze, pomnim pro defer -->
<!-- defer - zagruzhajutsa posle zagruzki wsego doka -->
	<link rel="stylesheet" href="css/main.css"> 
	<script src="js/app.js" defer></script>
</head>
<body>
	<div class="wrapper"> <!-- plawnaja scroll -->
		<div class="content">
			<header class="Grodno-section">
				<img data-lag=".5" data-speed=".6" class="Grodno" src="img/Grodno.jpg" alt="Alt" > <!-- data-lag dla reziny -->
				<div class="container">
					<div data-speed=".75" class="main-header">
						<h1 class="main-title">Grodno</h1>
					</div>
				</div>
			</header>
			<div class="portfolio">
				<div class="container">
					<main class="gallery">
	                     <!-- delim na 2 czasti -->
						<div data-speed=".9" class="gallery__left">
							<img class="gallery__item" src="img/work/1.jpg" alt="Alt">
							<img class="gallery__item" src="img/work/2.jpg" alt="Alt">
							<div class="text-block gallery__item">
								<h2 class="text-block__h">TEXT</h2>
								<p class="text-block__p">text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>
							</div>
							<img class="gallery__item" src="img/work/3.jpg" alt="Alt">
						</div>
						<div data-speed="1.1" class="gallery__right">
							<div class="text-block gallery__item">
								<h2 class="text-block__h">TEXT</h2>
								<p class="text-block__p">text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>
							</div>
							<img class="gallery__item" src="img/work/4.jpg" alt="Alt">
							<img class="gallery__item" src="img/work/5.jpg" alt="Alt">
							<img class="gallery__item" src="img/work/6.jpg" alt="Alt">
						</div>
					</main>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
	})
})