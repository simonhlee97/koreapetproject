<template>
  <Layout>
    <h1>Animal Shelters - South Korea</h1>

	<table>
		<tr>
			<th>Shelter Name</th>
			<th>City</th>
			<th>Phone</th>
			<th>Email</th>
			<th>Animals</th>
		</tr>
		
		<tr v-for="page in $page.allGoogleSheet.edges" :key="page.id">
			<td><g-link to='/'>{{page.node.shelter_name}}</g-link></td>
			<td>{{page.node.city}}</td>
			<td>{{page.node.phone}}</td>
			<td>{{page.node.email}}</td>
			<td>{{page.node.animals}}</td>
		</tr>
	</table>


	<p>🐶Thank you for supporting our project</p>
	<div class="gridcontainer">
		<div v-for="item in pups" :key="item.index" class="tile"><img :src="item" alt="pup"></div>
	</div>
	
  </Layout>
</template>


<page-query>
query {
	allGoogleSheet(limit: 100 sortBy: "shelter_name", order: DESC) {
		edges {
			node {
				shelter_name
				city
				phone
				email
				animals
				link
			}
		}
	}
}
</page-query>

<script>
	export default {
		data() {
			return {
				pups: []
			}
		},
		beforeMount(){
			this.getItems();
		},
		methods: {
			async getItems(){
				const res = await fetch('https://dog.ceo/api/breeds/image/random/9');
				const items = await res.json();
				this.pups = items.message;
			}
		}
	}
</script>

<style>
.gridcontainer {
	display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 0.5rem;
}
.tile img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.tile:nth-child(1){
    grid-column: span 4;
    grid-row: span 2;
}

.tile:nth-child(2),
.tile:nth-child(3){
    grid-column: span 2;
}

.tile:nth-child(4),
.tile:nth-child(5), .tile:nth-child(6),
.tile:nth-child(7), .tile:nth-child(8),
.tile:nth-child(9){
    grid-column: span 3;
}

@media screen and (max-width: 650px){
    .gridcontainer{
        display: block;
    }
    .tile{
        margin-bottom: 1rem;
    }
}


.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
}
/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2);
}
/* Add some padding inside the card container */
.container {
  padding: 10px 10px 10px 10px;
  max-height: 10em;
  overflow: hidden;
}


table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 4px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
