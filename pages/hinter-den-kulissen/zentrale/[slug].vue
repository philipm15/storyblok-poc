<script setup>
let {slug} = useRoute().params
console.log(slug)
const resolveRelations = ['globalReference.reference']

const story = await useStoryblok(
    slug ? `hinter-den-kulissen/zentrale/${slug}` : 'home',
    {
      version: 'draft',
      resolve_relations: resolveRelations,
    },
    {
      resolveRelations,
    }
)

</script>

<template>
  <div>
    <NuxtLink to="/hinter-den-kulissen/zentrale" class="text-red-600">Zurück zur Übersicht</NuxtLink>
    <StoryblokComponent v-if="story" :blok="story.content"/>
  </div>
</template>
