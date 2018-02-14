<template>
  <div class="sourceselection">
    <div class="container">
      <div class="jumbotron">
        <h3><span class="glyphicon glyphicon-list-alt"></span>&nbsp;Sycon News List</h3>
        <h4>Select News Source</h4>
        <select class="form-control" v-on:change="sourceChanged">
          <option value="">Please Select News Source</option>
          <option v-for="source in sources" v-bind:value="source.id">{{source.name}}</option>
        </select>
        <div v-if="source">
          <h6>{{source.description}}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'source_selection',
    data () {
      return {
        sources: [],
        source: ''
      }
    },
    methods: {
      sourceChanged: function (e) {
        for (let i = 0; i < this.sources.length; i++) {
          if (this.sources[i].id === e.target.value) {
            this.source = this.sources[i]
          }
        }
        this.$emit('sourceChanged', e.target.value)
      }
    },
    created: function () {
      this.$http.get('https://newsapi.org/v1/sources?language=en')
        .then(response => {
          this.sources = response.data.sources
        })
    }
  }
</script>

<style scoped>

</style>
