<template>
  <div>
  </div>
</template>

<script>
  export default {
    name: 'news_list',
    props: ['source'],
    data () {
      return {
        articles: []
      }
    },
    methods: {
      updateSource: function (source) {
        this.$http.get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=d6e8ee2cb7ee4f4c81da7e9c9aeb89be')
          .then(response => {
            this.articles = response.data.articles
          })
      }
    },
    created: function () {
      this.updateSource(this.source)
    },
    watch: {
      source: function (val) {
        this.updateSource(val)
      }
    }
  }
</script>

<style scoped>
  .media-object {
    width: 128px;
    padding: 10px;
  }
  .media {
    border-top: 1px solid lightgray;
    padding-top: 20px;
  }
</style>
