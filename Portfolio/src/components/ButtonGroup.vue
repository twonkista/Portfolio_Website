<script setup>
import AboutView from './AboutView.vue'
import ExperienceView from './ExperienceView.vue'
import { ref } from 'vue'
const exp = ref(false)
const about = ref(false)

const show_exp = (e) => {
    exp.value = e
}
const show_about = (j) => {
    about.value = j
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
    <button v-if="exp" class="button" @click="show_exp(false)">Close Experience</button>
    <button v-else class="button" @click="show_exp(true); show_about(false)">Experience</button>

    <button v-if="about" class="button" @click="show_about(false)">Close About</button>
    <button v-else class="button" @click="show_about(true); show_exp(false)">About</button>
</div>
<div class="My_data">
    <div v-if="exp">
        <ExperienceView />
    </div>
    <div v-if="about">
        <AboutView />
    </div>
</div>
</template>

<style scoped>
.button {
    display: block;
    background-color: black;
    color: whitesmoke;
    border-color: white;
    padding: 5px 10px;
    margin: 2%;
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
.My_data {
    position: absolute;
    top: 0px;
    right: 0px;
}
</style>