export default {
  data() {
    return {
      api: null,
      input: null,
    };
  },
  methods: {
    fetchApi() {
      fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
        this.input
      )}&appid=d06cdb298fafc83c520d5ab677fc477e&units=metric&lang=pt_br`
        )
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          this.api = json
        });
    },
  },
}