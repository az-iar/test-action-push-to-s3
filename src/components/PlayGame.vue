<script setup>
import { ref, onMounted, inject, onUnmounted, computed } from "vue";

import { words } from "@/datasource";

const { score, playTime, end } = inject("game-state");

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

const currentSpellWord = ref(getRandomWord());
const spellingWord = ref("");

const wordComplete = computed(() => {
  return spellingWord.value === currentSpellWord.value;
});

function checkSpellTextColor(index) {
  if (wordComplete.value) {
    return "complete";
  }
  if (!spellingWord.value[index]) {
    return "";
  }
  if (spellingWord.value[index] === currentSpellWord.value[index]) {
    return "right";
  } else {
    return "wrong";
  }
}

function prcoessSpellingWord(event) {
  console.log("processing spelling word");
  const key = event.key;
  if (key === "Delete" || key === "Del" || key === "Backspace") {
    spellingWord.value = spellingWord.value.slice(0, -1);
  } else {
    spellingWord.value += key;
  }

  spellingWord.value = spellingWord.value.slice(
    0,
    currentSpellWord.value.length,
  );

  if (spellingWord.value === currentSpellWord.value) {
    handleWordComplete();
  }
}

function handleWordComplete() {
  setTimeout(() => {
    currentSpellWord.value = getRandomWord();
    spellingWord.value = "";
    score.value += 10;
  }, 300);
}

let interval;

onMounted(() => {
  document.addEventListener("keydown", prcoessSpellingWord);

  interval = setInterval(() => {
    playTime.value -= 1;
    if (playTime.value === 0) {
      end();
    }
  }, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
  document.removeEventListener("keydown", prcoessSpellingWord);
});
</script>

<template>
  <h1 class="title">Spell the Words</h1>
  <div class="subtitle">
    <p>
      Score: <span>{{ score }}</span>
    </p>
    <p>
      Time:
      <span>{{ playTime >= 10 ? playTime : "0" + playTime }} seconds</span>
    </p>
  </div>
  <h1 class="spell-words">
    <span
      v-for="(item, index) in currentSpellWord"
      :key="index"
      :class="checkSpellTextColor(index)"
      >{{ item }}</span
    >
  </h1>
</template>
