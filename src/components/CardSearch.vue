<template>
  <div class="search-container">
    <div class="search-box">
      <form @submit="onSearch(selectedCredit, selectedCard)">
        <!-- <div class="credit-score-box"> -->
        <label class="credit-score">Credit Score:</label>
        <select v-model="selectedCredit">
          <option
            v-for="option in creditOptions"
            :value="option.value"
            :key="option.value"
          >{{ option.text }}</option>
        </select>
        <!-- </div> -->
        <!-- <div class="card-box"> -->
        <label class="card-type">Card Type:</label>
        <select v-model="selectedCard">
          <option
            v-for="option in cardOptions"
            :value="option.value"
            :key="option.value"
            class="card-option"
          >{{ option.text }}</option>
        </select>
        <!-- </div> -->
        <div class="input-box">
          <button type="submit" value="search">Search</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSearch",
  props: ["onSearch"],
  data: () => {
    return {
      selectedCredit: "",
      selectedCard: "",
      creditOptions: [
        { text: "Excellent", value: "Excellent" },
        { text: "GoodExcellent", value: "GoodExcellent" },
        { text: "Fair", value: "Fair" },
        { text: "NewFair", value: "NewFair" },
        { text: "Bad", value: "Bad" }
      ],
      cardOptions: [
        { text: "Balance Transfer", value: "Balance Transfer" },
        { text: "Cash Back", value: "Cash Back" },
        { text: "Travel", value: "Travel" },
        { text: "Low Interest", value: "Low Interst" }
      ]
    };
  }
};
</script>

<style>
.search-container {
  height: 6rem;
  display: flex;
  justify-content: center;
}
.credit-score-box,
.card-box {
  text-align: left;
}
.card-option {
  padding-left: 1rem;
}
.card-type,
.credit-score {
  font-weight: bold;
}
input {
  margin-top: 1rem;
}
.search-box {
  border: 1px solid red;
}
</style>