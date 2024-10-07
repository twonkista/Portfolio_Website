<script setup>
import ButtonGroup from './components/ButtonGroup.vue'
</script>

<template>
  <header>
    <ButtonGroup />
  </header>

  <main>
  </main>
</template>

<style>

body {
  background: url("../assets/nyc.jpg") no-repeat center center fixed;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  vertical-align: center;
  margin: 0%;
  text-align: center;
}
header {
  font-size: 25px;
  color:azure;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.wrapper {
  margin: 0%;
}
</style>
