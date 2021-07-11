<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <form action="http://localhost:8083/" method="POST" encType="multipart/form-data">
        <input class="btn btn-outline-secondary" type="file" name="file" accept="*.csv" />
        <input class="btn btn-outline-primary" type="submit" value="Upload" />
    </form> 
  </div>
</template>

<script>
export default {
  name: 'FormImport',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
    padding: 10px;
  }
  input {
    padding-right: 10px;
    margin-left: 10px;
  }
</style>
