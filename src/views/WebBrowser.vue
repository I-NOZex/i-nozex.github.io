<template>
  <div class="webbrowser-page">
        <input type="text" :value="currentUrl"  @keyup.enter="e => currentUrl = e.target.value"/>
      <iframe ref="myiFrame" :src="currentUrl | proxify"></iframe>
  </div>
</template>

<script>
export default {

    data() {
        return {
            currentUrl: this.url,
        }
    },

    filters: {
        proxify: function (value) {
            return value.startsWith('mailto') ? value : `https://geekproxy.com/browse.php?u=${encodeURI(value)}&b=4`;
        }
    },

    props: {
        url: {
            type: String,
            required: true
        }
    },

    mounted() {
        this.currentUrl = this.url
    },

    methods: {
    }
}
</script>

<style>

.webbrowser-page {
    background-color: #1e1e1e;
    color: white;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    box-sizing: border-box;
}


iframe {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>