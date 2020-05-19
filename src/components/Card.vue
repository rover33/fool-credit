<template>
  <div>
      <div class="get-card-box">
      <div class="credit-score-box">
        <label>Credit Score:</label>
        <input class="credit-score" placeholder="good"/>
      </div>
      <button class="card-button" v-on:click="submit">Get Your Card</button>
    </div>
      <div v-for="cardData in cardDataList" :key="cardData.id">
        <div class="card">
          <div class="two-card">
            <div v-if="!cardData['card1']" class="missing-card-container">
              <p>Card not found</p>
            </div>
            <div v-else class="has-card-container">
              <div class="card-name">
                  <div class="card-title">
                  {{cardData['card1']['offer_name']}}
                  </div>
              <div class="card-image">
                  <img :src="cardData['card1']['offer_image']">
              </div>
              <button class="card-apply">Apply Now</button>
            </div>
            <div class="fees">
              {{getFees1(cardData)}}
            </div>
            </div>
            <div class="card-name">
              <div class="card-title">
                {{getCardName2(cardData)}}
              </div>
              <div class="card-image">
                <img :src="getCardImage2(cardData)">
              </div>
              <button class="card-apply">Apply Now</button>
            </div>
          </div>
        </div>
        </div>
  </div>  
</template>


<script>

export default {
  name: 'Card',

  props: ['intialSearch'],

  data: function() {
      return {
        submit: this.initialSearch
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
}

.credit-score {
  width: 15em;
}

.card-button {
  width: 15em;
}

.two-card {
  display: flex;
  justify-content: space-evenly;
}

.card-name {
  padding: 1em 0;
  width: 30em;
  border: 1px solid greenyellow;
}

.card-title {
  padding-bottom: 1em;
}

.card-apply {
  background: green;
  color: white;
  font-size: 1em;
  font-weight: bold;
  width: 15em;
  margin-top: 1em;
  border-radius: 5px;
  height: 3em;
}

img {
  width: 15em;
}
</style>
