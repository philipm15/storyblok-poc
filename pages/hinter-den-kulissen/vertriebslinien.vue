<script setup>
const story = await useStoryblok('hinter-den-kulissen/vertriebslinien', { version: 'draft', resolve_relations: ['globalReference.reference'], })
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<style scoped>

</style>
