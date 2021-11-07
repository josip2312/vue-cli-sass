<template>
	<h1 class="h1 hello">
		Hello world
	</h1>
</template>

<script>
export default {
	name: 'HelloWorld',
};
</script>

<style scoped lang="scss">
.hello {
	color: $primary;

	@include mq(small) {
		font-size: 7rem;
	}
}
</style>
