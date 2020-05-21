<template>
  <div id="app">
    <CardSearch :onSearch="search" />
    <div v-if="this.currentResult.card1.offer_name === '' && this.currentResult.card2.offer_name === '' ">Choose options in dropdown to see what we recommend</div>
    <TwoCards v-else :cardOneData="currentResult['card1']" :cardTwoData="currentResult['card2']" />
  </div>
</template>

<script>
import axios from "axios";
import TwoCards from "./components/TwoCards";
import CardSearch from "./components/CardSearch";

export default {
  name: "App",
  components: {
    TwoCards,
    CardSearch
  },

  created() {
    this.getCardData();
  },

  methods: {
    getCardData() {
      axios
        .get("https://lucianet.s3.amazonaws.com/fool_cc_compare.json")
        .then(res => (this.tempFullList = res.data))
      },

    search(e, credit_rating, card_type) {
      // form submit so prevent default behavior
      e.preventDefault()
      let { tempFullList } = this;
      let filteredList = tempFullList; // temp holding arr
      if (credit_rating && credit_rating != '')
        filteredList = filteredList.filter(
          cardPair => cardPair.credit_rating == credit_rating
        );
      if (card_type && card_type != '')
        filteredList = filteredList.filter(
          cardPair => cardPair.card_type == card_type
        );
      if (filteredList.length > 0) {
        // for now just set to first item found
        this.currentResult.card1 = filteredList[0].card1 || { offer_name: "Sorry we do not have a card recommendation for you." }; // handle case of null cards
        this.currentResult.card2 = filteredList[0].card2 || { offer_name: "Sorry we do not have a card recommendation for you." };
      } else {
        // no matching cards found
        this.currentResult.card1 = {
          offer_name: "Sorry we do not have a card recommendation for you."
        };
        this.currentResult.card2 = {
          offer_name: "Sorry we do not have a card recommendation for you."
        };
      }
    }
  },

  data: () => {
    return {
      currentResult: {
        card1: {
          offer_name: ""
        },
        card2: {
          offer_name: ""
        }
      },
      tempFullList: []
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3E50;
  margin-top: 60px;
}
</style>
