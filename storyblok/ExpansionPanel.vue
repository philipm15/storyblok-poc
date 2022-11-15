<template>
  <div class="block w-full px-8">
    <button type="button" class="p-4 bg-slate-200 border border-gray-200 w-full text-left" :class="classes"
         v-editable="blok" @click="toggle"
    >
      {{ blok.title }}
    </button>
    <div v-if="open" class="p-6">
      <StoryblokComponent
          v-for="blok in blok.content"
          :key="blok._uid"
          :blok="blok"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({blok: Object})

const open = ref(false);

const toggle = () => {
  open.value = !open.value;
};

const classes = computed(() => {
  return {
    'text-white': open.value,
    'bg-[#8b0e28]': open.value,
  }
});
</script>
