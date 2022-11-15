<template>
  <div
      v-editable="blok.global"
  >
    <StoryblokComponent
        v-for="component in blok.reference.content[blok.reference.content.component]" :key="component._uid"
        :blok="component"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({blok: Object})
</script>

<style scoped>

</style>
