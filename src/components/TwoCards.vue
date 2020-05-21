<template>
  <div class="two-card">
    <div class="card-name">
      <div class="card-image-title-container">
        <div class="card-title">{{cardOneData.offer_name}}</div>
        <div class="card-image">
          <img :src="cardOneData.offer_image" />
        </div>
      </div>
        <button v-if="cardOneData.affiliate_link" class="card-apply" v-on:click="btnClick">Apply Now</button>
        <button v-else class="card-apply" v-on:click="btnClick">Read Review</button>
        <a class="full-review" v-on:click="btnClick">Read our full review</a>
        <label class="credit-rating-title">Credit Rating</label>
        <div class="credit-rating-box">
          <div class="credit-rating">Credit Rating:</div>
          <div class="credit-rating-text">{{cardOneData.credit_rating}}</div>
        </div>
        <label class="ratings-title">Star Ratings</label>
        <div class="ratings">
          <div class="overall-rating">Overall Rating:</div>
          <div class="stars">{{cardOneData.star_rating}}/5 stars</div>
          <div class="overall-apr-rating">Overall APR Rating:</div>
          <div class="stars">{{cardOneData.aprs_rating}}/5 stars</div>
          <div class="overall-fees-rating">Overall Fees Rating:</div>
          <div class="stars">{{cardOneData.fees_rating}}/5 stars</div>
        </div>
      <label class="fees">Fees</label>
      <div class="all-fees">
        <div class="annual-fee-header">Annual: </div>
        <div class="annual-fees">{{cardOneData.annual_fee}}</div>
        <div class="balance-fee-header">Balance Transfer: </div>
        <div class="balance-fee">{{cardOneData.balance_transfer_fee}}</div>
        <div class="foreign-fee-header">Foreign Transaction: </div>
        <div class="foreign-fee">{{cardOneData.foreign_transaction_fee}}</div>
      </div>
      <label class="aprs">APRs</label>
      <div class="all-aprs">
        <div class="intro-apr-title">Intro Purchase: </div>
        <div class="intro-apr">{{cardOneData.intro_purchase_apr}}</div>
        <div class="intro-balance-title">Intro Balance Transfer: </div>
        <div class="intro-balance">{{cardOneData.intro_transfer_apr}}</div>
        <div class="regular-apr-title">Regular: </div>
        <div class="regular-apr">{{cardOneData.regular_apr}}</div>
      </div>
      <div class="bonus-content">
        <div class="bonus-title">Bonus</div>
        <div class="bonus">{{cardOneData.bonus}}</div>
        <div class="rewards-title">Rewards Program</div>
        <div class="rewards">{{cardOneData.rewards_program}}</div>
        <div class="highlights-title">Highlights</div>
        <div class="highlights-list" v-html="cardOneData.marketing_bullets"/>
        <div class="we-like">What We Like</div>
        <div v-html="cardOneData.what_we_like" class="we-like-list" />
      </div>
      <button class="card-apply" v-on:click="btnClick">Apply Now</button>
    </div>
    <div class="card-name">
      <div class="card-image-title-container">
        <div class="card-title">{{cardTwoData.offer_name}}</div>
        <div class="card-image">
          <img :src="cardTwoData.offer_image" />
        </div>
      </div>
      <button class="card-apply" v-on:click="btnClick">Apply Now</button>
      <a class="full-review" v-on:click="btnClick">Read our full review</a>
      <label class="credit-rating-title">Credit Ratings</label>
        <div class="credit-rating-box">
          <div class="credit-rating">Credit Rating:</div>
          <div class="credit-rating-text">{{cardTwoData.credit_rating}}</div>
        </div>
      <label class="ratings-title">Star Ratings</label>
      <div class="ratings">
        <div class="overall-rating">Overall Rating:</div>
        <div class="stars">{{cardTwoData.star_rating}}/5 stars</div>
        <div class="overall-apr-rating">Overall APR Rating:</div>
        <div class="stars">{{cardTwoData.aprs_rating}}/5 stars</div>
        <div class="overall-fees-rating">Overall Fees Rating:</div>
        <div class="stars">{{cardTwoData.fees_rating}}/5 stars</div>
      </div>
      <label class="fees">Fees</label>
      <div class="all-fees">
        <div class="annual-fee-header">Annual: </div>
        <div class="annual-fee">{{cardTwoData.annual_fee}}</div>
        <div class="balance-fee-header">Balance Transfer: </div>
        <div class="balance-fee">{{cardTwoData.balance_transfer_fee}}</div>
        <div class="foreign-fee-header">Foreign Transaction: </div>
        <div class="foreign-fee">{{cardTwoData.foreign_transaction_fee}}</div>
      </div>
      <label class="aprs">APRs</label>
      <div class="all-aprs">
        <div class="intro-apr-title">Intro Purchase: </div>
        <div class="intro-apr">{{cardTwoData.intro_purchase_apr}}</div>
        <div class="intro-balance-title">Intro Balance Transfer: </div>
        <div class="intro-balance">{{cardTwoData.intro_transfer_apr}}</div>
        <div class="regular-apr-title">Regular: </div>
        <div class="regular-apr">{{cardTwoData.regular_apr}}</div>
      </div>
      <div class="bonus-content">
        <div class="bonus-title">Bonus</div>
        <div class="bonus">{{cardTwoData.bonus}}</div>
        <div class="rewards-title">Rewards Program</div>
        <div class="rewards">{{cardTwoData.rewards_program}}</div>
        <div class="highlights-title">Highlights</div>
        <div class="highlights-list" v-html="cardTwoData.marketing_bullets"/>
        <div class="we-like">What We Like</div>
        <div v-html="cardTwoData.what_we_like" class="we-like-list" />
      </div>
      <button class="card-apply" v-on:click="btnClick">Apply Now</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "Card",
  props: ["cardOneData", "cardTwoData", "cardType"],

  methods: {
      btnClick: () => {
        window.open("https://www.fool.com/the-ascent/credit-cards/compare-cards/")
      }
  },

  data: () => {
    return {};
  }
};
</script>

<style>


.credit-score {
  width: 15rem;
}
.card-button {
  width: 15rem;
}
.two-card {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
}

.card-name {
    border-radius: 4px;
    box-shadow: 0 0 6px 2px rgba(0,0,0,0.2);
    max-width: 30%;
    padding: 1rem;
    flex-direction: column;
    display: flex
}

.card-image-title-container {
  display: grid;
  grid-template-rows: 6rem 10rem;
}

.card-title {
  font-size: 1.5rem;
  color: #AC145A;
  font-weight: bold;
  padding-bottom: 1rem;
}

.full-review {
  margin-top: 1rem;
  text-decoration: none;
  color: #AC145A;
}

.card-apply {
  background: #2e842e;
  border: 2px solid #2e842e;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-radius: 5px;
  height: 3rem;
}

.card-apply:hover {
  background: white;
  color: #2e842e;
}

.card-apply:focus {
  outline: none;
}

.full-review {
  cursor: pointer;
}

.fees, 
.aprs,
.ratings-title,
.credit-rating-title {
  display: flex;
  font-weight: bold;
  font-size: 1.25rem;
  width: 93%;
  padding-top: 1rem;
  text-align: left;
}

.all-fees, 
.all-aprs,
.ratings,
.credit-rating-box{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #EDEEEE;
  padding: .5rem;
  width: 90%;
  overflow-wrap: break-word;
}

.bonus-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: .5rem;
  width: 90%;
  word-break: break-word;
}

.annual-fee-header, 
.balance-fee-header,
.foreign-fee-header, 
.intro-apr-title,
.intro-balance-title,
.regular-apr-title,
.bonus-title,
.rewards-title,
.overall-rating,
.overall-apr-rating,
.overall-fees-rating,
.credit-rating,
.we-like,
.highlights-title  {
  font-weight: bold;
  text-decoration: underline;
  padding-top: .5rem;
  padding-bottom: .5rem;
  text-align: left;
}

.annual-fees,
.balance-fee,
.foreign-fee,
.intro-apr,
.intro-balance,
.regular-apr,
.bonus,
.rewards,
.stars ,
.we-like {
  text-align: left;
  width: 90%;
}

.we-like-list,
.highlights-list {
  text-align: left;
}

ul {
  padding-left: 1rem;
  margin-top: 0;
}

img {
  object-fit: cover;
  width: 15rem;
}

@media screen and (max-width: 800px) {
  .card-title {
    font-size: 1rem;
  }

  img {
    width: 100%;
  }
}

@media screen and (max-width: 460px) {
 .card-title {
    font-size: .8rem;
  }

  .credit-rating-box {
    word-break: break-word;
    text-align: left;
  }

  img {
    width: 100%;
  }
}
</style>