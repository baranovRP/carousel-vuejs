/* eslint-env browser */
/* eslint-disable no-console */

export default {
  data() {
    return {
      original: '',
      translation: '',
      status: '',
      resultClass: '',
    };
  },
  methods: {
    getData() {
      return new Promise((resolve) => {
        const func = 'test';
        const tagScript = document.createElement('script');
        tagScript.src = `https://glosbe.com/gapi/translate?from=eng&dest=rus&format=json&phrase=${encodeURIComponent(this.original)}&pretty=true&pageSize=1&callback=${func}`;
        window[func] = function resolveFoundTranslation(data) {
          window[func] = undefined;
          document.head.removeChild(tagScript);
          resolve(data);
        };
        document.head.appendChild(tagScript);
      }).catch(e => console.log(`Failure to get json: ${e}`));
    },
    checkTranslation() {
      const self = this;
      const word = this.translation;
      this.status = 'Checking...';

      this.getData().then(data =>
        data.tuc.some((item) => {
          if (item.phrase) {
            debugger;
            return word === item.phrase.text;
          }
        }))
        .then((result) => {
          if (result) {
            self.resultClass = 'green';
            self.status = 'Correct';
          } else {
            self.resultClass = 'red';
            self.status = 'Incorrect';
          }
        });

      this.translation = '';
    },
  },
};
