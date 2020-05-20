<template>
  <div class="card">
    <div class="two-card">
      <div class="card-name">
        <div class="card-title">{{cardOneData.offer_name}}</div>
        <div class="card-image">
          <img :src="cardOneData.offer_image" />
        </div>
        <button class="card-apply">Apply Now</button>
        <div class="fees">{{cardOneData.annual_fee}}</div>
        <div class="balance-fee">{{cardOneData.balance_transfer_fee}}</div>
      </div>
      <div class="card-name">
        <div class="card-title">{{cardTwoData.offer_name}}</div>
        <div class="card-image">
          <img :src="cardTwoData.offer_image" />
        </div>
        <button class="card-apply">Apply Now</button>
        <div class="fees">{{cardTwoData.annual_fee}}</div>
        <div class="balance-fee">{{cardTwoData.balance_transfer_fee}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: ["cardOneData", "cardTwoData"],
  data: () => {
    return {};
  }
};
</script>

<style>
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