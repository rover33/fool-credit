<template>
    <div class="get-card-box">
      <div class="credit-score-box">
        <label>Credit Score:</label>
        <input class="credit-score" placeholder="good"/>
      </div>
      <button class="card-button" v-on:click="getCardData">Get Your Card</button>
    </div>
</template>


<script>
// import CardData from "./CardData";
export default {
  name: 'CardSearch'
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.credit-score {
  width: 15em;
}

.card-button {
  width: 15em;
}

</style>
