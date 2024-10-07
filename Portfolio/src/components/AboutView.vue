<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class = "image">
      <img alt="Me" class="logo" src="@/assets/me.jpg" width="125" height="125" />
    </div>
    <br>
    <p>
      Hi my name is Rohith Komati and I am a student at the University of Illinois Chicago. I became interested in programming back in 9th grade where I took my first intro to python class. I ended up having a 70 question final in which my ADD ass got a C- which resulted in a B+ overall (I had an A the entire semester).
      I then I took a hiatus for 1 year and got into electronics through a class in high school. I ended up liking the class alot and the people there were gas so I ended up wanting to pursue electrical engineering. I took another chance at cs and I took APCSA where I locked in so hard that I got an A and a 4 on the test. I then pivoted to computer engineering and a couple of rejections later I ended up at UIC.
    </p>
    <header class = "divider">Skills Section: </header>
    <header>Languages: </header>
    <div class="imagegroup">
      <img src="@/assets/C_logo.png" width="60" height="60">
      <img src="@/assets/C++_logo.png" width="60" height="60">
      <img src="@/assets/java-logo-1.png" width="60" height="60" class="java">
      <img src="@/assets/JavaScript-logo.png" width="60" height="60">
      <img src="@/assets/images (1).jpeg" width="60" height="60">
      <img src="@/assets/Postgresql_elephant.svg.png" width="60" height="60">
      <img src="@/assets/Sql_data_base_with_logo.png" width="120" height="60" class="java">
    </div>
    <header>Frameworks: </header>
    <div class="imagegroup">
      <img src="@/assets/images (1).png" width="60" height="60">
      <img src="@/assets/images (3).png" width="60" height="60" class="java">
      <img src="@/assets/PyTorch_logo_black.svg.png" width="200" height="60" class="java">
      <img src="@/assets/images (2).png" width="60" height="60">
    </div>
    <header>Libraries/Tools: </header>
    <div class="imagegroup">
      <img src="@/assets/images (4).png" width="100" height="60">
      <img src="@/assets/images (5).png" width="160" height="60">
      <img src="@/assets/images (6).png" width="60" height="60">
      <img src="@/assets/images (2).png" width="60" height="60">
      <img src="@/assets/97_Docker_logo_logos-512.png" width="60" height="60" class="java">
      <img src="@/assets/vmware_cloud_logo.jpg" width="80" height="60" class="java">
    </div>
</template>

<style scoped>
body{
  align-items: center;
}
.java {
  background-color: white;
}
.divider {
  background-color: rgb(22, 57, 99);
}
</style>
