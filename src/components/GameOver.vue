<!--You do not need to change anything in this file-->
<script setup>
import { inject } from "vue";

const { score, start } = inject("game-state");
</script>

<template>
  <h1 class="title">Game Over</h1>
  <div class="subtitle">
    <p>
      Congratulations! You scored <span>{{ score }}</span> points.
    </p>
  </div>
  <button class="start-btn" @click="start" data-test="restart-btn">
    Restart Game
  </button>
</template>
