<script setup>
import { ref } from 'vue'
const info_1 = ref([{ message: 'Took part in assisting discussion sections which involved taken attendance, passing out papers, and answering student questions'},{message:'Conducted office hours in the cs learning center and assisted in helping student’s homework/exam prep'}]);
const items = ref([{ message: 'Developed test automation solutions using typescript with the cypress framework for the web interface of the PXC4 HVAC regulation module' }, { message: 'Implemented report portal visualization tool to further evaluate test cases using the report portal API using typescript' }, {message : 'Configured and updated newer firmwares to various PXC4 devices using a Windows VM and the ABTSite service'}]);
const info_2 = ref([{ message: 'Lead a classroom of children aged 8-12 to teach beginner programming principles'},{message: 'Corrected and debugged JavaScript code made by children and tutored children one on one'},{message: 'Maintained and debugged laptop issues and fixed Unity project templates'}]);
</script>

<template>
  <div class="greetings">
    <header style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
      Previous Experiences:
    </header>
    <div class = "project_container">
      <div class = "title_container">
        <div class="title">
          Undergraduate Teaching Assistant
        </div>
        <img src="@/assets/university_of_Illinois_at_Chicago_circle_logo.svg.png" width="80" height="80">
        <div class = "date">
          <p> August 2024 - Present</p>
        </div>
      </div>
      <div class ="description" style="width: 60%;">
        <li v-for="(info_1, index) in info_1">
          {{ info_1.message }}
        </li>
      </div>
    </div>
    <div class = "project_container">
      <div class = "title_container">
        <div class="title">
          Software Engineering Intern
        </div>
        <img src="@/assets/siemens-logo.svg.png" width="150" height="60">
        <div class = "date">
          <p> May 2024 - August 2024</p>
        </div>
      </div>
      <div class ="description" style="width: 60%;">
        <li v-for="(item, index) in items">
          {{ item.message }}
        </li>
      </div>
    </div>
    <div class = "project_container">
      <div class = "title_container">
        <div class="title">
          Code Instructor
        </div>
        <img src="@/assets/images (7).png" width="80" height="80">
        <div class = "date">
          <p> May 2022 - Jan 2023</p>
        </div>
      </div>
      <div class ="description" style="width: 60%;">
        <li v-for="(info, index) in info_2">
          {{ info.message }}
        </li>
      </div>
    </div>
  </div>
</template>

<style scoped>
.greetings {
  display: block;
  text-align: center;
}
.project_container {
  display: inline-flex;
  background-color: whitesmoke;
  margin: 5%;
  padding: 5%;
  box-shadow:  0.3em 0.3em 1em rgb(200 0 0 / 60%);
}
.title_container {
  display: block;
}
.title {
  padding: 7%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.date {
  font-size: 30px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.description {
  float: left;
  margin: 4%;
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
header {
  padding-top: 2%;
  font-size: 50px;
}
</style>
