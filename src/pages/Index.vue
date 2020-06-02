<template>
	<Layout> <!-- home page -->
	<div class="homepage-container">
		<p style="text-align:center;">🇰🇷 한국어</p>
		<div class="bubble hero-img"><!-- Photo by Darren Welsh on Unsplash  -->
			<h2>Welcome to The Korea Pet Project</h2>
		</div>
		<div class="bubble mission">
		</div>
		<h4 style='padding-left:50px;' id='mission-statement'>The project's goal is to maintain an accurate listing of animal shelters in South Korea and is open to contributions from the community.</h4>


		<div class="help">
			<h2>Here's how you can help  ❤️️</h2>
			<p>If you'd like to add a shelter to our list, please send the url (or <i>name, phone #, address</i> if they don't have a website) to <b>koreapetproject@gmail.com</b></p>
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
	.help {
		width: 300px;
		padding-top: 170px;
		position: relative;
		/* background-color: salmon; */
	}
	.bubble {
		padding: 90px;
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