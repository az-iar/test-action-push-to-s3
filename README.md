---
difficulty: 1
tags: codechallenge, Bug Fixing Challenge, vue 3
openFiles: src/components/PlayGame.vue,src/App.vue
---

# Spelling Game Code Challenge

# Challenge Description

This application is a Spelling Game that tests your spelling skills while having fun. However, there are currently some issues.

Your task is to figure out why the issues exist and fix them!

## Requirements

- Once the game is finished, it allows you to restart. However, after restarting, the countdown timer doesn't work correctly. Fix it.

- In `PlayGame.vue` a keydown event listener is added to the document to handle processing the input characters. This logs "processing spelling word" to the console on each keystroke. However, it still logs even after the game is over. Clean up this event listener to prevent memory leaks!

- Do NOT rename any existing variables

> 💡 HINT: Both bugs exist in `PlayGame.vue`

![Screenshot of the solution](https://images.certificates.dev/spelling-game-screenshot.gif)

## Other Considerations

- If you see the `data-test` attribute in the boilerplate don't remove it. If you remove it, your code may be invalid for the certificate.
