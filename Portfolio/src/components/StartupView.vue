<template>
    <div class="name">
        <header>Rohith <span style="color: #ff0000">Komati</span></header>
      <p>Computer Engineering Student</p>
      <small>
        <a href="https://drive.google.com/file/d/1rjXl3FMsWpqsy1-doEBv4IxZp219OUn-/view?usp=sharing">Resume</a>
      </small>
    </div> 
</template>
<style>
.name {
  padding: 20%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 4.2em;
  font-weight: bold;
  text-align: center;
}

.small {
  font-size: 2.1em;
}

/*
.name header {
  overflow: hidden;
  border-right: .15em solid red;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0; 
  /*
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end;
    */
/*
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}


@keyframes blink-caret {
  from, to { border-color: black }
  50% { border-color: red; }
}

@keyframes fadeIn {
  from { opacity: 0; font-size: 0.6em;}
  to { opacity: 1; font-size: 0.7em;}
}

.name p {
  opacity: 0;
  animation: fadeIn 1s ease-in forwards;
  animation-delay: 2.75s;
}
  */

p {
  font-size: 0.6em;
  font-weight: lighter;
  
  &:hover {
        color:  red;
  }
}
.wrapper {
  margin: 0%;
}
</style>