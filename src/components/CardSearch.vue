<template>
  <div class="search-container">
    <div class="search-box">
      <form @submit="(e) => onSearch(e, selectedCredit, selectedCard)">
        <!-- <div class="credit-score-box"> -->
        <label class="search-credit-score">
            Credit Score:
        <select v-model="selectedCredit">
          <option
            v-for="option in creditOptions"
            :value="option.value"
            :key="option.value"
          >{{ option.text }}</option>
        </select>
        </label>
        <!-- </div> -->
        <!-- <div class="card-box"> -->
        <label class="search-card-type">
            Card Type:
        <select v-model="selectedCard">
          <option
            v-for="option in cardOptions"
            :value="option.value"
            :key="option.value"
            class="card-option"
          >{{ option.text }}</option>
        </select>
        </label>
        <!-- </div> -->
        <div class="input-box">
          <button class="search-button" type="submit" value="search">Search</button>
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
        { text: "--", value: "" },
        { text: "Excellent", value: "excellent" },
        { text: "GoodExcellent", value: "goodexcellent" },
        { text: "Fair", value: "fair" },
        { text: "Bad", value: "bad" }
      ],
      cardOptions: [
        { text: "--", value: "" },
        { text: "Balance Transfer", value: "balance_transfer" },
        { text: "Cash Back", value: "cash_back" },
        { text: "Travel", value: "travel" },
        { text: "Low Interest", value: "low_interest" }
      ]
    };
  }
};
</script>

<style>
.search-container {
  height: 7rem;
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

.search-card-type,
.search-credit-score {
  font-weight: bold;
  font-size: 1.3rem;
}

select {
    height: 1.5rem;
}

form {
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
    width: 35rem;
}

.input-box {
    width: 100%
}

.search-box {
    display: -webkit-box;   /* OLD - iOS 6-, Safari 3.1-6, BB7 */
    display: -ms-flexbox;  /* TWEENER - IE 10 */
    display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display: flex; 
}

.search-button {
    background: #2e842e;
    color: white;
    border: 2px solid #2e842e;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-radius: 5px;
    height: 2rem;
    width: 8rem;
}

.search-button:hover {
  background: white;
  color: #2e842e;
}

.search-button:focus {
  outline: none;
}

@media screen and (max-width: 1050px) {
    select {
        border: 1px solid blue;
    }
}


@media screen and (max-width: 450px) {
    form {
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .search-box {
        display: unset;
    }

    .search-button {
        margin-top: .5rem;
        height: unset;
    }

}
</style>