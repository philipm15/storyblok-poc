<script setup>
const story = await useStoryblok('jobs', { version: 'draft' })
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<style scoped>

</style>
