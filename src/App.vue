<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">

body {
	background-color: rgb(26, 27, 27);
	position: relative;
	z-index: 1;
	margin: 0;
	padding: 0;
}
body:after{
	content: "";
	position: fixed;
	top: 0; 
	left: 0;
	width: 100%; 
	height: 100%;  
	opacity: .2; 
	z-index: -1;
	background: url('./assets/space.jpg') ;
	background-size: 50% 100%;
}

#app {
	font-size: 20px;
	font-family: monospace;
	color: #CCC;
	text-shadow: 0 0 5px #CCC;
}

a {
	&:link, &:active, &:visited, &:hover {
		color: #CCC;
	}

}

</style>
