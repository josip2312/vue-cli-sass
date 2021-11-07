<template>
	<div class="example">
		<HelloWorld />
	</div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld';
export default {
	name: 'App',
	components: {
		HelloWorld,
	},
};
</script>

<style lang="scss">
@use "./styles/main.scss";
.example {
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
