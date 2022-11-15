<template>
  <div v-editable="blok" :style="style">
    {{ blok.value }}
  </div>
</template>

<script setup lang="ts">
import {computed} from "#imports";

interface TextProps {
  _uid: string
  value: string;
  fontSize: number;
  fontWeight: number;
  color: {
    color: string;
  };
}

const props = defineProps<{ blok: TextProps }>();

const style = computed(() => {
  return {
    color: props.blok.color.color,
    fontSize: `${props.blok.fontSize}rem`,
    fontWeight: props.blok.fontWeight,
  }
})
</script>

<style scoped>

</style>
