<template>
  <div id="app">
    <SourceSelection v-on:sourceChanged="sourceChanged"></SourceSelection>
    <NewsList v-bind:source="source"></NewsList>
    <!--<router-view></router-view>-->
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
    },
    methods: {
      sourceChanged: function (source) {
        this.source = source
      }
    }
}
</script>

<style>
  #app{
    padding-top: 20px;
  }
</style>
