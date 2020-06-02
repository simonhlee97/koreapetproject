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
  </Layout>
</template>

<page-query>
query {
	allGoogleSheet(limit: 100 sortBy: "shelterName", order: DESC) {
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
  metaInfo: {
  }
}
</script>

<style>
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
