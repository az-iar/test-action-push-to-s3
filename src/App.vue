<!--You do not need to change anything in this file-->
<script setup>
import { ref, provide } from "vue";
import PlayGame from "@/components/PlayGame.vue";
import GameOver from "@/components/GameOver.vue";

// unstarted, playing, end
const playStatus = ref("unstarted");
const playTime = ref(15);
const score = ref(0);

function togglePlayStatus(status) {
  playStatus.value = status;
}

function start() {
  score.value = 0;
  togglePlayStatus("playing");
}

function end() {
  playTime.value = 15;
  togglePlayStatus("end");
}

provide("game-state", {
  playTime,
  score,
  start,
  end,
});
</script>

<template>
  <div class="wrapper">
    <template v-if="playStatus === 'unstarted'">
      <h1 class="title">Spelling Game</h1>
      <p class="subtitle">Test your spelling skills and have fun!</p>
      <button class="start-btn" data-test="start-btn" @click="start">
        Start Game
      </button>
    </template>
    <PlayGame v-else-if="playStatus === 'playing'" />
    <GameOver v-else />
  </div>
</template>
