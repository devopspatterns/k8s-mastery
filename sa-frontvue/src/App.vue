<template>
  <div id="app">
    <img src="./assets/sentiment.jpg">
    <h1>{{ title }}</h1>
    <h2>Type a sentence to discover the sentiment</h2>
    <input type="text" v-model="query" v-on:keyup.enter="onEnterClick" class="search-input">
    <p>{{ result }}</p>
  </div>
</template>

<script>
import { HTTP } from './services/sentiment.js'

export default {
  name: 'app',
  methods: {
    onEnterClick: function() {
      HTTP.post('/sentiment', JSON.stringify({
        sentence: this.query
      })).then(response => this.result = response.data.polarity)
    },
  },
  data () {
    return {
      msg: "Welcome to " + process.env.NAME + "'s App",
      query: '',
      title: process.env.APP_TITLE,
      url: process.env.SENTIMENT_URL,
      result: '' 
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.search-input {
  width: 40%;
  padding: 1em 1em;
  font-size: 1.3em;
  outline: 0px;
  border: 5px solid #41B883;
  border-radius: 0.75em;
}

img {
  width: 50%;
  height: auto;
  border-radius: 1em;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
