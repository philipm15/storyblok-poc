<template>
  <NuxtLink :to="'/' + blok.link.cached_url" class="text-red-600">{{ blok.linkText }} >></NuxtLink>
</template>

<script setup lang="ts">

interface TextProps {
  _uid: string
  linkText: string;
  link: {
    cached_url: string;
  };
}

defineProps<{ blok: TextProps }>();

</script>

<style scoped>

</style>
