<script setup>
import HelloWorld from './components/HelloWorld.vue'
import ButtonGroup from './components/ButtonGroup.vue'
</script>

<template>
  <header>
    <div class = "image">
      <img alt="Me" class="logo" src="./assets/me.jpg" width="125" height="125" />
    </div>
    <div class="wrapper">
      <HelloWorld msg="Rohith Komati" />
    </div>
    <ButtonGroup />
  </header>

  <main>
  </main>
</template>

<style>
body {
  position: absolute;
  background: url("@/assets/nyc.jpg") no-repeat center center fixed;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  vertical-align: center;
  margin: 5%;
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
