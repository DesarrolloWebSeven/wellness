<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-12 col-lg-8">
          <p style="max-width:800px">
            <b>EJERCICIO5:</b> Sobre el componente del ejercicio anterior,
            añadir un formulario para poder agregar conceptos a la lista.</p>
            <Table />
        </div>
      </div>
    </div> 
</template>

<script>
import Table from '@/components/Table'
export default {
    name: 'Ejercicio5',
    components: {
      Table
    }
}
</script>

<style lang="scss" scoped>

</style>