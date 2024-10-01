<script setup>
</script>

<template>
  <Transition appear>
    <div class="title">
          <h1 class="h1 is-3">Rohith Komati</h1>
          <h1 class="smalls">Sophomore/Junior at University of Illinois - Chicago<br>Former Software Engineer Intern at Siemens</h1>
    </div>
  </Transition>
</template>

<style>
body {
  background: url("@/assets/bg_image.jpg") no-repeat center center fixed;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
.title {
  position: absolute;
  text-align: left;
  float: left;
  color: White;
  margin: auto;
  width: 100%;
  height: 100%;
  padding: 5px;
}
.h1{
  font-size: 80px;
  font-family: Arial, Helvetica, sans-serif;
}
.smalls{
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease, transform 1s ease-in-out;
  transform: translateY(0px);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
</style>
