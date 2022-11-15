<template>
  <div class="flex flex-row">
    <div class="w-1/4 h-full">
      <img
          :src="blok.image.filename + '/m/1600x0'"
          :alt="blok.image.alt"
          class="w-full h-[360px] lg:h-[450px] object-cover object-top"
      />
    </div>
    <div class="w-3/4 h-full">
      <div v-editable="blok" class="p-8">
        <StoryblokComponent v-for="blok in blok.content" :key="blok._uid" :blok="blok" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

interface BannerContentProps {
  _uid: string;
  image: {
    id: number;
    filename: string;
    alt: string;
  }
  content: Object[];
}

defineProps<{
  blok: BannerContentProps
}>()
</script>

<style scoped>

</style>
