<template>
  <ClientOnly>
    <Teleport to=".sub-navigation">
      <div class="w-full h-full h-12 bg-[#f7f6fd] sub-nav" v-editable="blok">
        <div v-if="blok" class="h-full w-full flex items-center ">
          <ul class="flex text-md font-bold justify-evenly flex-row w-full">
            <li v-for="link in blok.links" :key="link._uid">
              <NuxtLink :to="'/'+link.link.cached_url"
                        class="py-2 px-4 hover:text-red-800 hover:underline hover:decoration-current hover:underline-offset-4">
                {{ link.linkName }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
defineProps<{
  blok: Object
}>()
</script>

<style scoped>
.sub-nav {
  @apply sticky bg-slate-100;
  top: 96px;
  -webkit-box-shadow: 0 0 4px 0 rgb(0 0 0 / 30%);
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 30%);
  z-index: 12;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}

nav a.router-link-active {
  @apply text-red-800 underline decoration-current underline-offset-4;
}
</style>
