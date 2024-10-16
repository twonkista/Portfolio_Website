<script setup>
import AboutView from './AboutView.vue'
import ExperienceView from './ExperienceView.vue'
import ProjectView from './ProjectsView.vue'
import StartView from './StartupView.vue'
import { ref } from 'vue'
const start = ref(true)
const exp = ref(false)
const about = ref(false)
const proj = ref(false)

const show_exp = (e) => {
    exp.value = e
}
const show_about = (j) => {
    about.value = j
}
const show_proj = (j) => {
    proj.value = j
}
const show_start = (j) => {
    start.value = j
}
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
<div class = "nav">
    <div class="group">
        <button v-if="exp" class="button" @click="show_exp(false); show_start(true)">Close Experience</button>
        <button v-else class="button" @click="show_proj(false); show_exp(true); show_about(false); show_start(false)">Experience</button>
        <button v-if="about" class="button" @click="show_about(false); show_start(true)">Close About</button>
        <button v-else class="button" @click="show_proj(false); show_exp(false); show_about(true); show_start(false)">About</button>
        <button v-if="proj" class="button" @click="show_proj(false); show_start(true)">Close Projects</button>
        <button v-else class="button" @click="show_proj(true); show_exp(false); show_about(false); show_start(false)">Projects</button>
        <div class = "socials">
            <a href="https://www.worldcubeassociation.org/persons/2019KOMA03" target="_blank">
                <img src="../assets/wca.png" width="40" height="40"/>
            </a>
            <a href="https://github.com/twonkista" target="_blank">
                <img src="../assets/git2hub.png" width="40" height="40"/>
            </a>
            <a href="https://www.linkedin.com/in/rohith-k-b24104284" target="_blank">
                <img src="../assets/lined2din.png" width="40" height="40"/>
            </a>
        </div>
    </div>
</div>
<div class="My_data">
    <div v-if="exp" id="exp">
        <ExperienceView />
    </div>
    <div v-if="about" id="abo">
        <AboutView />
    </div>
    <div v-if="proj" id="pro">
        <ProjectView />
    </div>
    <div v-if="start" id="start">
        <StartView />
    </div>
</div>
</template>

<style scoped>
body {
  position: absolute;
  display: flex;
  align-items: left;
  margin:0%;
}
.nav {
    background-color: #f2f0ef;
    width: 100%;
    display: inline;
    float: left;
    
}
.socials {
    display: inline;
    float: right;
    margin: 1%;
    &:hover {
        opacity: 50%;
    }
}
.button {
    display: inline-block;
    background-color: white;
    color: black;
    border-color: white;
    padding: 2%;
    margin: 0%;
    border: none;
    cursor: pointer;
    outline: none;
    font-size: 0.8em;
    transition: all 0.3s ease;
    font-weight: bold;
    &:hover {
        background-color: rgb(255, 109, 109);
        color: navy;
    }
}
</style>