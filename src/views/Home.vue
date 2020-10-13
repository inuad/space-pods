<template>
	<div class="home">
		<SpacePods />
		<div>Created by: <a href="https://github.com/inuad">inuad</a></div>
	</div>
</template>

<script>
// @ is an alias to /src
import SpacePods from "@/components/SpacePods.vue";

export default {
	name: "Home",
	components: {
		SpacePods,
	},
};
</script>
