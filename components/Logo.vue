<template>
  <v-img
    width="280px"
    height="64px"
    alt="Riamco Logo"
    src="/img/riamco-logo-lr.png"
  />
</template>

<style>
.Riamco-logo {
  height: 280px;
  width: 280px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
