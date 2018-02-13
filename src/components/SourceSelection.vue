<template>
  <div class="sourceselection">
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
    method: {
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
          this.source = response.data.sources
        })
    }
  }
</script>

<style scoped>

</style>
