<template>
	<Layout> <!-- home page -->
	<div class="homepage-container">
		<p style="text-align:center;"><a id='korean' href='#'>🇰🇷 한국어</a></p>
		
		<div class="bubble hero-img"><!-- Photo by Darren Welsh on Unsplash  -->
			<h1>Welcome to THE KOREA PET PROJECT</h1>
		</div>
		
		<div class="bubble mission"></div>

		<h3 style='padding-left:50px;' id='mission-statement'>The project's goal is to maintain an accurate listing of animal shelters in South Korea and is open to contributions from the community.</h3>

		<div class="help">
			<h2>How you can help  ❤️️</h2>
			<p>1. To add a shelter to our list, please send the url (or <i>name, phone #, address</i> if they don't have a website) to <b>lee.simon4945@yahoo.com</b>. No puppy mills please!</p>

			<p>2. If you are bilingual and would like to help with localization (translating English to Korean) please email <b>lee.simon4945@yahoo.com</b> with "translation: Korea Pet Project" in the subject line.</p>
			<p>🐶Thank you for supporting our project</p>
		</div>
	</div>
	</Layout>
</template>

<script>
export default {

}
</script>

<style scoped>
	.homepage-container {
		min-height: 120vh;
	}
	#korean {
		text-decoration: none;
	}
	#korean:hover {
		text-decoration: underline;
		font-size: 1.09rem;
		transition: 0.4s;
	}
	.help {
		width: 300px;
		padding-top: 170px;
		position: relative;
		/* background-color: salmon; */
	}
	.bubble {
		padding: 80px;
		height: 240px;
		border-radius: 50%;
		width: 240px;
		color: white;
	}
	.hero-img {
		background-image: url('../img/puppy.jpg');
		background-position: 30 70;
	}
	.mission {
		float: right;
		background-image: url('../img/kitty.jpg');
		background-position: 50% 50%;
		/* Photo by Ramiz Dedaković on Unsplash */
	}
	#mission-statement {
		transform: translateY(110px);
	}

	@media screen and (max-width: 580px) {
		.hero-img, .mission {
			width: 180px;
			height: 180px;
		}
		#mission-statement {
			transform: translateY(75px);
		}
	}

</style>