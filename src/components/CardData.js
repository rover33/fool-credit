import axios from "axios"

export default {
  name: 'CardData',
  data() {
    return {
      cardDataList: []
    };
  },

  methods: {
        getCardData() {
        axios.get("fool_cc_compare.json").then(res => (this.cardDataList = res.data))
        },
    }
}