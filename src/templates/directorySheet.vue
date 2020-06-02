<template>
  <layout>
    <!-- <div>{{$page.googleSheet.shelterName}} | {{$page.googleSheet.city}} | {{$page.googleSheet.phone}} | {{$page.googleSheet.email}}</div>
<div>{{$page.googleSheet.animals}} | {{$page.googleSheet.link}}</div> -->
  </layout>
</template>

<page-query>
query Shelter ($path: String!) {
  googleSheet (path: $path) {
    shelter_name
	city
	phone
	email
	animals
	link
  }
}
</page-query>