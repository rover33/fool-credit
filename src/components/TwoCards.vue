<template>
  <div class="card">
    <div class="two-card">
      <div class="card-name">
        <div class="card-container">
          <div class="card-title">{{cardOneData.offer_name}}</div>
          <div class="card-image">
            <img :src="cardOneData.offer_image" />
          </div>
          <button class="card-apply">Apply Now</button>
          <a class="full-review" href="#">Read our full review</a>
          <label class="ratings-title">Star Ratings</label>
          <div class="ratings">
            <div class="overall-rating">Overall Rating:</div>
            <div class="stars">{{cardOneData.star_rating}}/5 stars</div>
            <div class="overall-apr-rating">Overall APR Rating:</div>
            <div class="stars">{{cardOneData.aprs_rating}}/5 stars</div>
            <div class="overall-fees-rating">Overall Fees Rating:</div>
            <div class="stars">{{cardOneData.fees_rating}}/5 stars</div>
          </div>
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
        </div>
        <button class="card-apply">Apply Now</button>
      </div>
      <div class="card-name">
        <div class="card-container">
          <div class="card-title">{{cardTwoData.offer_name}}</div>
          <div class="card-image">
            <img :src="cardTwoData.offer_image" />
          </div>
        </div>
        <button class="card-apply">Apply Now</button>
        <a class="full-review" href="#">Read our full review</a>
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
        </div>
        <button class="card-apply">Apply Now</button>
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
}
.credit-score {
  width: 15rem;
}
.card-button {
  width: 15rem;
}
.two-card {
  display: flex;
  justify-content: space-evenly;
}
.card-name {
    border-radius: 4px;
    box-shadow: 0 0 6px 2px rgba(0,0,0,0.2);
    /* grid-auto-rows: auto;
    grid-template-rows: auto auto 110px 240px 260px auto auto 1fr auto 40px; */
    flex-basis: 33%;
    max-width: 30%;
    width: 60%;
    padding: 1rem;
    flex-direction: column;
    display: flex
}

.card-container {
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 24px;
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
  background: green;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-radius: 5px;
  height: 3rem;
}

.fees, 
.aprs,
.ratings-title {
  display: flex;
  font-weight: bold;
  font-size: 1.25rem;
  width: 93%;
  padding-top: 1rem;
}

.all-fees, 
.all-aprs,
.ratings {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #EDEEEE;
  padding: .5rem;
  width: 90%;
}

.bonus-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: .5rem;
  padding: .5rem;
  width: 90%;
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
.overall-fees-rating  {
  font-weight: bold;
  text-decoration: underline;
  padding-top: .5rem;
  padding-bottom: .5rem;
}

.annual-fees,
.balance-fee,
.foreign-fee,
.intro-apr,
.intro-balance,
.regular-apr,
.bonus,
.rewards,
.stars {
  text-align: left;
  width: 90%;
}

img {
  width: 15rem;
}
</style>