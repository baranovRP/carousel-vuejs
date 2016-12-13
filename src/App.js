import Card from './components/Card.vue';

/* eslint-env browser */
/* eslint-disable no-console */

export default {
  name: 'app',
  components: {
    Card,
  },
  data() {
    return {
      currentIdx: 0,
      isPrevDisable: true,
      isNextDisable: false,
      cards: [],
      url: 'https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=idiom&limit=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
    };
  },
  mounted() {
    fetch(this.url)
      .then(r => r.json())
      .then((data) => {
        this.cards = data;
      });
  },
  methods: {
    next() {
      if (this.currentIdx < this.cards.length - 1) {
        this.isPrevDisable = false;
        this.currentIdx += 1;
        if (this.currentIdx === this.cards.length - 1) this.isNextDisable = true;
        return;
      }
      this.isNextDisable = true;
    },
    prev() {
      if (this.currentIdx > 0) {
        this.isNextDisable = false;
        this.currentIdx -= 1;
        if (this.currentIdx === 0) this.isPrevDisable = true;
        return;
      }
      this.isPrevDisable = true;
    },
  },
};
