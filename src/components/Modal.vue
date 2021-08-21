<template>
  <div class="containerAll">
    <div class="container">
      <h2>Clima Diário</h2>
      <form class="busca">
        <input type="text" id="searchInput" v-model="input" />
        <button @click="buscarApi">Buscar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      api: null,
      input: null,
    };
  },
  methods: {
    buscarApi(event) {
      event.preventDefault();
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
          this.input
        )}&appid=d06cdb298fafc83c520d5ab677fc477e&units=metric&lang=pt_br`
      )
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log(json);
        });
    },
  },
};
</script>

<style scoped>
.containerAll {
  display: flex;
  border-radius: 15px;
  justify-content: center;
  margin: -50px;
  z-index: 999;
}

.container {
  max-width: 500px;
  border-radius: 15px;
  text-align: center;
  padding: 15px;
  height: 300px;
  background: #fff;
}

.container h2 {
  font-size: 32px;
  font-weight: bold;
  color: #32264d;
  margin-bottom: 10px;
}

input {
  padding: 10px;
  outline: 0;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #e6e6f0;
  background: #f8f8fc;
}

button {
  padding: 10px;
  font-size: 16px;
  border: 0;
  background: #04d361;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  transition: 0.3s;
}

button:hover {
  filter: brightness(0.9);
}
</style>