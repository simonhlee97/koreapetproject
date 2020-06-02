<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
		
		<g-link class="nav__link" to="/directory/">Animal Shelters List</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>

    <slot />

	<footer>
		<div class="footer">
			<p>koreapetproject@gmail.com</p>
			<p>copyright 2020 | Korea Pet Project</p>
			<p>website: Simon Lee</p>
		</div>
	</footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Helvetica Neue",Roboto,Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 860px;
  min-height: 100vh;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}
.footer {
	line-height: 1.0;
	background-color: black;
	color: white;
	height: 170px;
	text-align: center;
	padding-top: 4em;
	margin-top: 2em;
}

.nav__link {
  margin-left: 10px;
}
</style>
