<template>
  <div class="container">
		<div class="row justify-content-center">
			<div class="col-12 col-sm-12 col-lg-8">
				<Table />
			</div>
		</div>
	</div> 
</template>

<script>
import axios from 'axios'
import Table from '@/components/Table'
import { ref, provide, watchEffect } from 'vue'
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
				console.log(res)
				res.data.forEach(element => {
					registers.value.push(element)
				});
			}
				showOrders()
				watchEffect(() => {
					console.log(registers.value.length)
				})
			return {

			}
		}
}
</script>

<style lang="scss" scoped>

</style>