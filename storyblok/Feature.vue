<template>
  <div
      v-editable="blok"
      class="w-full p-12 bg-[#f7f6fd] rounded-[5px] text-center" :class="backgroundColor"
  >
    <h3 class="text-2xl text-[#1d243d] font-bold">
      {{ blok.name }}
    </h3>
  </div>
</template>

<script setup lang="ts">

import {computed} from "#imports";

interface FeatureProps {
  blok: {
    _uid: string
    name: string
    backgroundColor: 'red' | 'green'
  }
}

const props = defineProps<FeatureProps>()

const backgroundColor = computed(() => {
  return props.blok.backgroundColor === 'red' ? 'bg-red-500' : 'bg-green-500'
})
</script>
