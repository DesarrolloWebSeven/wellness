<template>
	<div class="home">
		<img alt="Imagen rpresetativa" src="https://cdn-images-1.medium.com/fit/t/1600/480/1*4izVrbT8LE14PeLaBg9vjA.png">
		<FormImport msg="Agrege un archivo CSV que quiera importar a mongoDB"/>
	</div>
</template>

<script>
// @ is an alias to /src
import FormImport from '@/components/FormImport.vue'

export default {
	name: 'Import',
	components: {
		FormImport
	}
}
</script>

<style lang="scss" scoped>
img{
	height: 200px;
}
</style>