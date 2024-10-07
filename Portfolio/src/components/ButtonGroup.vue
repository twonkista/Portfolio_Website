<script setup>
import AboutView from './AboutView.vue'
import ExperienceView from './ExperienceView.vue'
import ProjectView from './ProjectsView.vue'
import { ref } from 'vue'
const exp = ref(false)
const about = ref(true)
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
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
<div class="group">
    <button v-if="exp" class="button" @click="show_exp(false); show_about(true)">Close Experience</button>
    <button v-else class="button" @click="show_proj(false); show_exp(true); show_about(false)">Experience</button>
    <button v-if="about" class="button" @click="show_about(false); show_exp(true)">Close About</button>
    <button v-else class="button" @click="show_proj(false); show_exp(false); show_about(true)">About</button>
    <button v-if="proj" class="button" @click="show_proj(false); show_about(true)">Close Projects</button>
    <button v-else class="button" @click="show_proj(true); show_exp(false); show_about(false)">Projects</button>
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
</div>
</template>

<style scoped>
body {
  position: absolute;
  margin: 0%;
}
.group {
  background-color: black;
}
.button {
    display: inline-block;
    background-color: black;
    color: whitesmoke;
    border-color: white;
    padding: 5px 10px;
    margin: 0%;
    border: none;
    cursor: pointer;
    outline: none;
    font-size: 1.2em;
    box-shadow: 0 0 5px #444;
    transition: all 0.3s ease;
    &:hover {
        box-shadow: 0 0 30px grey;
        background-color: gray;
        padding: 7px 12px;
        font-size: 1.4em;
    }
}
</style>