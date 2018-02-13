<template>
  <div id="app">
    <SourceSelection v-on:sourceChanged="sourceChanged"></SourceSelection>
    <NewsList v-bind:source="source"></NewsList>
    <router-view></router-view>
  </div>
</template>

<script>
  import NewsList from './components/NewsList'
  import SourceSelection from './components/SourceSelection'

export default {
    name: 'app',
    components: {
      NewsList,
      SourceSelection
    },
    data () {
      return {
        source: ''
      }
    }
}
</script>

<style>

</style>
