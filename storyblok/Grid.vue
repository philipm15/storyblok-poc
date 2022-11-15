<template>
  <div
      v-editable="blok"
      class="grid md:grid-cols-2 gap-4 my-4"
  >
    <StoryblokComponent
        v-for="blok in blok.columns"
        :key="blok._uid"
        :blok="blok"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
