<template>
  <section :class="resultClass">
    <div class="card">
      <h3 v-text="original"></h3>
      <form>
        <input type="text"
               placeholder="translation..."
               v-model.trim="translation"
               autofocus>
        <button @click="checkTranslation" type="button">OK</button>
      </form>
      <span v-text="status"></span>
    </div>
  </section>
</template>

<script src="./Card.js">
</script>

<style>
.green {
  background-color: lightgreen;
}

.red {
  background-color: pink;
}

.card {
  border: 1px solid grey;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}
</style>
