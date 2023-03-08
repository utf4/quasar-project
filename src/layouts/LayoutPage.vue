<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="text-white">
      <q-toolbar>
        <q-toolbar-title>
          <img src="~assets/logo.svg" />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup() {
    const state = reactive({
      imageUrl: '~/assets/logo.svg'
    })

    return {
      imageUrl: state.imageUrl
    }
  }
}
</script>

<style scoped lang="scss">
header.q-header {
  background-color: #050824;

  .q-toolbar {
    max-width: 1200px;
    min-height: 80px;
    margin: 0 auto;
  }
}
</style>
