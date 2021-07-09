<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form action="http://localhost:8083/" method="POST" encType="multipart/form-data">
        <input type="file" name="file" accept="*.csv" /><br/><br/>
        <input type="submit" value="Upload" />
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
