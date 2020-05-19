<template>
<div class="card-box">
    <CardSearch />
    <Card />
  </div>
</template>


<script>
import Card from "./Card";
import CardSearch from "./CardSearch"
export default {
  name: 'CardComparison',

  components: {
    Card,
    CardSearch
  },

  methods: {
    retrieveCardData(data) {
      if (!data['card1']) return "no card"
      let { affiliate_link } = data['card1']
      return affiliate_link || "No link"
      },
    getCardName1(data) {
      if (!data['card1']) return "no card"
      let {offer_name} = data['card1']
      return offer_name || "No Offer Name"
    },
     getCardName2(data) {
      if (!data['card2']) return "no card"
      let {offer_name} = data['card2']
      return offer_name || "No Offer Name"
    },
    getCardImage1(data) {
      if (!data['card1']) return "no card"
      let { offer_image } = data['card1']
      return offer_image || "No Image"
    },
    getCardImage2(data) {
      if (!data['card2']) return "no card"
      let { offer_image } = data['card2']
      return offer_image || "No Image"
    },
     getFees1(data) {
      if (!data['card1']) return "No Information"
        let fees = ((data.card1 || {}).annual_fee || {}).balance_transfer_fee
        return fees || "No Information"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
