<template>
  <main class="container">
    <Header />
    <div class="container-content">
      <slot />
      <Footer/>
    </div>
  </main>
</template>

<style scoped>
  .container-content {
    width: 100%;
    border-left: 1px solid #e2e2e2;
    border-right: 1px solid #e2e2e2;
    min-height: calc(100vh - 96px);
  }
</style>
