<script setup lang="ts">
import '@unocss/reset/tailwind.css'
</script>

<template>
  <main
    h-100dvh h-screen w-screen of-hidden
  >
    <div
      flex flex-row items-center justify-center
    >
      <h1 font-bold>CP's Nuxt 3 Starter</h1>
      <ColorSchemeToggle />
    </div>
  </main>
</template>

<style lang="css">
html,
body {
  height: 100vh;
  overflow: hidden;
  --uno: bg-base font-sans;
}

.dark {
  color-scheme: dark;
}
</style>
