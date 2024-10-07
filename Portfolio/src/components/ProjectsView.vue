<script setup>
import { ref } from 'vue'

</script>

<template>
    <div class = "project_container">
      <div class = "title_container">
        <div class="name">
          Aegis Rx - Medication Tracker
        </div>
        <div class="description">
            <p>
                This was a hackathon project I made with some friends and it is a full stack web application where you can log users in and check for upcoming medications. The UI was made in Vue.js and it uses a backend in flask to fetch data from the SQL database. In addition, it also makes use of the OpenFDA database where it fetches all the drug info and dosage data for a singular medication. 
            </p>
        </div>
        <div class = "date">
          <p> Feb 2024 - Present</p>
        </div>
      </div>
      <a href="https://github.com/yvvijay121/SparkHacks2024">Link to Repository</a>
      <br>
      <a href="https://github.com/twonkista/MedicationTracker-">Link to alternate Repository</a>
    </div>
    <div class = "project_container">
      <div class = "title_container">
        <div class="name">
          Wurtzify
        </div>
        <div class="description">
            <p>
                This is a smaller mini challenge application I made which scrapes data from billwurtz.com and created a search function that is able to parse the html and post it as the output. The project was done in flask and the web scraping was done with beutifulsoup.
            </p>
        </div>
        <div class = "date">
          <p>Jan 2024</p>
        </div>
      </div>
      <a href="https://github.com/twonkista/Wurtzify">Link to Repository</a>
    </div>
    <div class = "project_container">
      <div class = "title_container">
        <div class="name">
          Pneumonia Detection Models
        </div>
        <div class="description">
            <p>
                This is a demonstration of an old scikit learn model I developed back in high school and it analyzes different xray images of Pneumonia and non Pneumonia patients. The new demonstration was made in pytorch in two ways one with a model from scratch and the other with a pretrained resnet15 model.
            </p>
        </div>
        <div class = "date">
          <p>Started Dec 2021 restarted in Dec 2023</p>
        </div>
      </div>
      <a href="https://github.com/twonkista/PneumoniaDetection">Link to Repository</a>
    </div>
    <div class = "project_container">
      <div class = "title_container">
        <div class="name">
          Pop Smoke Bot
        </div>
        <div class="description">
            <p>
                This as a troll project I made in high school and it is a discord bot that uses the ffmpeg library to concat the mp3 files of all Pop Smoke Songs made at the time and sends it via discord chat.
            </p>
        </div>
        <div class = "date">
          <p>June 2023</p>
        </div>
      </div>
      <a href="https://github.com/twonkista/PopSmokeBot">Link to Repository</a>
    </div>
    <div class = "project_container">
      <div class = "title_container">
        <div class="name">
          Manhattan Rest API
        </div>
        <div class="description">
            <p>
                This project makes use of a Postgres database and it is a CRUD api for various statistics of manhattan neighborhoods such as crime, rent, median household, etc.
            </p>
        </div>
        <div class = "date">
          <p>March 2023</p>
        </div>
      </div>
      <a href="https://github.com/twonkista/ManhattanDBRestAPI">Link to Repository</a>
    </div>
    <div class = "project_container">
      <div class = "title_container">
        <div class="name">
          Smart Car Security System
        </div>
        <div class="description">
            <p>
                This is an embedded systems project where it mimicks a car security system. I used magnetic reed switches to read if the door has been opened or not and I used a breadboard with LEDs to flash the light if it was unwantedly opened. If it was not intentionally opened, it would sound a loud alarm and it begins to track the location of the cars whereabouts. The security was programmed using an arduino and a NEO6M GPS module for tracking the car in C++.
            </p>
        </div>
        <div class = "date">
          <p>October 2022 - May 2023</p>
        </div>
      </div>
      <p>Repo not found :/</p>
    </div>
    <div class = "project_container">
      <div class = "title_container">
        <div class="name">
          Power Man
        </div>
        <div class="description">
            <p>
                This project kinda started it all. I was bored during the pandemic and decided to elaborate on a project that I developed in a hackathon that year. It it an incremental clicker game made with vanilla html/css/js where the units are Watts and the upgrades are various ways to generate energy.
            </p>
        </div>
        <div class = "date">
          <p>May 2021</p>
        </div>
      </div>
      <a href="https://github.com/twonkista/Power-Man">Link to Repository</a>
      <br>
      <a href="https://power-man-git-master-winrarck221s-projects.vercel.app/">You can still play it if you wanna</a>
    </div>
</template>

<style scoped>
.name {
    margin: 2%;
}
.project_container {
    display: block;
    background-color: rgb(130, 128, 128);
    border: solid 0.1em;
    border-color: black;
    border-radius: 10px;
    margin: 3%;
    padding: 2%;
}
.description {
    font-size: 20px;
}
</style>