<script setup>
</script>

<template>
  <header>
    <nav class="h-full w-full flex flex-col">
      <div class="main-nav w-full bg-[#f7f6fd] flex items-center justify-between bg-white p-4">
        <NuxtLink to="/">
          <img src="https://rewe-group.jobs/themes/default/images/rewe-gr-rgb-mit-schutzraum.png"
               alt="REWE Logo - Zur Startseite" class="logo">
        </NuxtLink>
        <div>
          <ul class="flex space-x-8 text-lg font-bold">
            <li>
              <NuxtLink to="/jobs" class="py-2 px-4 hover:text-red-500 hover:border-red-600 hover:border-2">Jobs
              </NuxtLink>
              <NuxtLink to="/hinter-den-kulissen/zentrale"
                        class="py-2 px-4 hover:text-red-500 hover:border-red-600 hover:border-2">Hinter den Kulissen
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="sub-navigation"></div>
    </nav>
  </header>
</template>

<style scoped>
nav a.router-link-active {
  @apply border-red-600 text-red-800 border-2;
}

header {
  @apply sticky;
  top: 0;
  background-color: #fff;
  -webkit-box-shadow: 0 0 4px 0 rgb(0 0 0 / 30%);
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 30%);
  overflow: hidden;
  z-index: 11;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
</style>
