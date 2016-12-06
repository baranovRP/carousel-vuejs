import Card from './components/Card';

export default {
  name: 'app',
  components: {
    Card,
  },
  data() {
    return {
      cards: [],
      url: 'http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=idiom&limit=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
    };
  },
  mounted() {
    fetch(this.url)
      .then(r => r.json())
      .then((data) => {
        this.cards = data;
      });
  },
};
