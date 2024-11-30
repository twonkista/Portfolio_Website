<script setup>
import { ref } from 'vue'
import { FaBeer } from "react-icons/fa";
</script>

<template>

  <div class="skillbio">
      <p>
        Hi my name is Rohith Komati and I am a student at the  <span style="color: #ff0000; font-weight: bold">University of Illinois Chicago</span> pursuing a bachelor's in  <span style="color: #ff0000; font-weight: bold">Computer Engineering</span>.
      </p>
  </div>
<div class="skillsandstuff">
  <div class="skills">
  <div class="listView">
    <div class="languages">
    <header>Languages: </header>
  </div>
    <ul class="hlist">
      <li>C</li> 
      <li>C++</li> 
      <li>Java</li> 
      <li>JavaScript</li> 
      <li>TypeScript</li> 
      <li>Python</li>
    </ul>
  </div>
  <br>
  <div class="listView">
    <div class="languages">
    <header>Frameworks: </header>
  </div>
    <ul class="hlist">
      <li>React</li> 
      <li>Vuejs</li> 
      <li>Pytorch</li> 
      <li>Arduino</li> 
      <li>Flask</li> 
      <li>Express</li>
    </ul>
  </div>
  <br>
  <div class="listView">
    <div class="languages">
    <header>Libraries/Tools: </header>
  </div>
    <ul class="hlist">
      <li>Numpy</li> 
      <li>Pandas</li> 
      <li>Git</li> 
      <li>Docker</li> 
      <li>VS Code</li> 
      <li>Linux</li> 
      <li>VMWare</li> 
      <li>Visual Studio</li>
      <li>Arduino IDE</li>
    </ul>
  </div>
  </div>
</div>
<div class="biotext">
    <p style="width: 100%; position: absolute; padding-bottom: 1%;">
      Just a lonely loner who frees his mind at night. I wanna pursue embedded software engineering/robotcs(if the job is still there when i graduate).
    </p>
  </div>
</template>

<style scoped>
.skillbio{
  display: inline-block;
  padding: 15%;
}
.skills {
  display: inline-block;
  margin-right: 10%;
  margin-left: 10%;
}
.languages {
  font-size: 25px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
  display: inline-block;
  justify-content: center;
  margin-right: 20%;
}
.hlist {
  display: flex;
  flex-wrap: wrap;
  padding: 2%; margin: 0;
}
.hlist li { list-style-type: none; }

.biotext {
  display: inline-block;
  text-align: center;
  left:50%
}

.biotext p{
  width: 50%;
  font-size: 15px;
  text-align: center;
}

p {
  font-size: 25px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.hlist li{
  margin: 5px; padding: 10px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 5px;
  color: #fff; background: #ff3636;
}
.skillsandstuff{
  background-color: rgb(255, 255, 255);
  margin-right: 10%;
  margin-left: 10%;
  padding: 3%;
  border-style: solid;
  border-color: black;
  border-radius: 1em;
  box-shadow: 10px 5px 5px;
}
.listView{
  background-color: #ffa5a5;
  padding-left: 5%;
  border-radius: 1em;
}
</style>

<!--
<div style="width: 225px; float: left;"> 
  <img alt="Me" class="logo" src="../assets/me.jpg" width="225" height="225"/> 
</div>
 <div style="margin-left: 225;">
  <p>
    Hi my name is Rohith Komati and I am a student at the  <span style="color: #ff0000; font-weight: bold">University of Illinois Chicago</span> pursuing a bachelor's in  <span style="color: #ff0000; font-weight: bold">Computer Engineering</span>.
  </p>
 </div>
</div>
<div class = "skills">
<header class = "divider">Skills Section: </header>
<header>Languages: </header>
<header>Frameworks: </header>
<header>Libraries/Tools: </header>
</div>
</template>

<style scoped>
body{
margin: 0%;
}
.logo {
margin: 0%;
}
.skillbio {
display: block;
margin: 2%;
}
p {
margin: 2%;
font-size: 25px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.java {
background-color: white;
}
.divider {
display: block;
}
-->
