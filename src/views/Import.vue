<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <FormImport msg="Agrege el archivo CSV que necesite"/>
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
