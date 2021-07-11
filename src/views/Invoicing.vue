<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-12 col-sm-12 col-lg-8">
				<p style="max-width:800px">
					<b>Seleccione como quiere organizar los datos: </b>
				</p>
				<div class="col-2 btn"><button @click="agregar" class="btn btn-outline-dark">Fecha</button></div>
				<div class="col-2 btn"><button @click="agregar" class="btn btn-outline-dark">Hora</button></div>
				<div class="col-2 btn"><button @click="agregar" class="btn btn-outline-dark">Consumo</button></div>
				<div class="col-2 btn"><button @click="agregar" class="btn btn-outline-dark">Precio</button></div>
				<div class="col-2 btn"><button @click="agregar" class="btn btn-outline-dark">Coste/Hora</button></div>
				<Table />
			</div>
		</div>
	</div> 
</template>

<script>
import axios from 'axios'
import Table from '@/components/Table'
import { reactive, ref, provide, watchEffect } from 'vue'
export default {
		name: 'Invoicing',
		components: {
			Table
		},
		setup() {
			let registers = ref([])
			provide('registers', registers)
			const showOrders = async () => {
				const res = await axios.get(`public/listAll`)
				res.data.forEach(element => {
					registers.value.push(element)
				});
			}
				showOrders()
				watchEffect(()=>{
					console.log(registers.value.length)
				})
			return {

			}
		}
}
</script>

<style lang="scss" scoped>

</style>