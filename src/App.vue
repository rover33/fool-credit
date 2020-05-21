<template>
  <div id="app">
    <CardSearch :onSearch="search"/>
    <TwoCards
        :cardOneData="currentResult['card1']"
        :cardTwoData="currentResult['card2']"
      />
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
    CardSearch,
  },
  created() {
    this.getCardData();
  },
  methods: {
    getCardData() {
      axios.get("https://lucianet.s3.amazonaws.com/fool_cc_compare.json").then(res => (this.tempFullList = res.data))
      .then(() => {
        // fake search for now, just add random item to 'current result'
        this.currentResult = this.tempFullList[Math.floor(Math.random()*this.tempFullList.length)];
        // check for null cards and add placeholder data where missing
        // add other missing fields such as a placeholder image
        // etc
        if (!this.currentResult.card1) {
          this.currentResult.card1 = {
            offer_name: 'Sorry we do not have a card recommendation for you'
          }
        }
        if (!this.currentResult.card2) {
          this.currentResult.card2 = {
            offer_name: 'Sorry we do not have a card recommendation for you'
          }
        }
        console.log(this.currentResult)
      })
    },
    search() {
        return this.tempFullList.filter( data => {
          return !this.selectedCard ||
            data.value.toLowerCase().indexOf(this.selectedCard.toLowerCase()) > -1
      })
    }
  },
  data: () => {
    return {
      currentResult: {
        card1: {
          offer_name: ''
        },
        card2: {
          offer_name: ''
        },
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