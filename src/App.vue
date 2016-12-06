<template>
  <div id="app">
    <div class="carousel">
      <button class="arrow"> &lt; </button>
      <card v-for="card in cards"
            v-bind:original="card.word"
            v-bind:key="card.id"></card>
      <button class="arrow"> &gt; </button>
    </div>
  </div>
</template>

<script src="./App.js">
</script>

<style>
* {
  box-sizing: border-box;
}

.carousel {
  display: flex;
  align-items: center;
}

.arrow {
  width: 35px;
  height: 35px;
  border: 1px solid grey;
  border-radius: 20px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.itemsList {
  display: flex;
}
</style>
