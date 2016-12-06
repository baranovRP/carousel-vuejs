<template>
  <div id="app">
    <div class="carousel">
      <button class="arrow"> &lt; </button>
      <section class="cards">
        <card v-for="card in cards"
              v-bind:original="card.word"
              v-bind:key="card.id"></card>
      </section>
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
  width: 600px;
  display: flex;
  align-items: center;
}

.cards{
  display: flex;
  width: 400px;
  padding: 0;
  margin: auto;
  overflow: hidden;
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
</style>
