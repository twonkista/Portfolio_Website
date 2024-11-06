<script setup>
import { ref } from 'vue'
const info_1 = ref([{ message: 'Took part in assisting discussion sections which involved taken attendance, passing out papers, and answering student questions'},{message:'Conducted office hours in the cs learning center and assisted in helping student’s homework/exam prep'}]);
const items = ref([{ message: 'Developed test automation solutions using typescript with the cypress framework for the web interface of the PXC4 HVAC regulation module' }, { message: 'Implemented report portal visualization tool to further evaluate test cases using the report portal API using typescript' }, {message : 'Configured and updated newer firmwares to various PXC4 devices using a Windows VM and the ABTSite service'}]);
const info_2 = ref([{ message: 'Lead a classroom of children aged 8-12 to teach beginner programming principles'},{message: 'Corrected and debugged JavaScript code made by children and tutored children one on one'},{message: 'Maintained and debugged laptop issues and fixed Unity project templates'}]);
</script>

<template>
  <div class="greetings">
    <header style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
      Projects:
    </header>
    <div class = "project_container">
      <div class = "title_container">
        <div class="title">
          AegisRx Medication Tracker
        </div>
        <img src="@/assets/medium.png" width="120" height="80">
        <div class = "date">
          <p> Feb 2024</p>
        </div>
        <a href="https://github.com/yvvijay121/SparkHacks2024">Link to Repository</a>
        <br>
        <a href="https://github.com/twonkista/MedicationTracker-">Link to alternate Repository</a>
      </div>
      <div class ="description" style="width: 60%;">
        This was a hackathon project I made with some friends and it is a full stack web application where you can log users in and check for upcoming medications. The UI was made in Vue.js and it uses a backend in flask to fetch data from the SQL database. In addition, it also makes use of the OpenFDA database where it fetches all the drug info and dosage data for a singular medication. 
      </div>
    </div>
    <div class = "project_container">
      <div class = "title_container">
        <div class="title">
          Wurtzify
        </div>
        <img src="@/assets/wurtzify.png" width="150" height="60">
        <div class = "date">
          <p>Jan 2024</p>
        </div>
        <a href="https://github.com/twonkista/Wurtzify">Link to Repository</a>
      </div>
      <div class ="description" style="width: 60%;">
        This is a smaller mini challenge application I made which scrapes data from billwurtz.com and created a search function that is able to parse the html and post it as the output. The project was done in flask and the web scraping was done with beutifulsoup.
      </div>
    </div>
    <div class = "project_container">
      <div class = "title_container">
        <div class="title">
          Pneumonia Detection Models
        </div>
        <div class = "date">
          <p>Started Dec 2021 restarted in Dec 2023</p>
        </div>
        <a href="https://github.com/twonkista/PneumoniaDetection">Link to Repository</a>
      </div>
      <div class ="description" style="width: 60%;">
        This is a demonstration of an old scikit learn model I developed back in high school and it analyzes different xray images of Pneumonia and non Pneumonia patients. The new demonstration was made in pytorch in two ways one with a model from scratch and the other with a pretrained resnet15 model.
      </div>
    </div>
  </div>
  <div class = "project_container">
      <div class = "title_container">
        <div class="title">
          Pop Smoke Bot
        </div>
        <img src="@/assets/popsmokebot.png" width="220" height="100">
        <div class = "date">
          <p>June 2023</p>
        </div>
        <a href="https://github.com/twonkista/PopSmokeBot">Link to Repository</a>
      </div>
      <div class ="description" style="width: 60%;">
        This as a troll project I made in high school and it is a discord bot that uses the ffmpeg library to concat the mp3 files of all Pop Smoke Songs made at the time and sends it via discord chat.
      </div>
    </div>
    <div class = "project_container">
      <div class = "title_container">
        <div class="title">
          Manhattan Rest API
        </div>
        <div class = "date">
          <p>March 2023</p>
        </div>
        <a href="https://github.com/twonkista/ManhattanDBRestAPI">Link to Repository</a>
      </div>
      <div class ="description" style="width: 60%;">
        This project makes use of a Postgres database and it is a CRUD api for various statistics of manhattan neighborhoods such as crime, rent, median household, etc.
      </div>
    </div>
    <div class = "project_container">
      <div class = "title_container">
        <div class="title">
          Smart Car Security System
        </div>
        <div class = "date">
          <p>October 2022 - May 2023</p>
        </div>
        <p>Repo not found :/</p>
      </div>
      <div class ="description" style="width: 60%;">
        This is an embedded systems project where it mimics a car security system. I used magnetic reed switches to read if the door has been opened or not and I used a breadboard with LEDs to flash the light if it was unwantedly opened. If it was not intentionally opened, it would sound a loud alarm and it begins to track the location of the cars whereabouts. The security was programmed using an arduino and a NEO6M GPS module for tracking the car in C++.
      </div>
    </div>
    <div class = "project_container">
      <div class = "title_container">
        <div class="title">
          Power Man
        </div>
        <div class = "date">
          <p>May 2021</p>
        </div>
        <a href="https://github.com/twonkista/Power-Man">Link to Repository</a>
      <br>
      <a href="https://power-man-git-master-winrarck221s-projects.vercel.app/">You can still play it if you wanna</a>
      </div>
      <div class ="description" style="width: 60%;">
        This project kinda started it all. I was bored during the pandemic and decided to elaborate on a project that I developed in a hackathon that year. It it an incremental clicker game made with vanilla html/css/js where the units are Watts and the upgrades are various ways to generate energy.
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
p {
  font-size: large;
}
</style>
