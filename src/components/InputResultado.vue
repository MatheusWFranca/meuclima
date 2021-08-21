<template>
  <div class="resultado">
    <form class="busca">
      <input type="text" id="searchInput" v-model="input" />
      <button @click.prevent="fetchApi">Buscar</button>
    </form>
    <div v-if="data">
      <h2>{{ data.name }}</h2>
      <div class="info">
        <div class="temp">
          <p>Temperatura</p>
          <p class="tempInfo">{{ data.main.temp }}<sup>ºC</sup></p>
          <img :src="require(`@/assets/${icon}.png`)" />
        </div>
        <div class="umidade">
          <h2>Umidade</h2>
          <p>{{ data.main.humidity }}<span>%</span></p>
        </div>
      </div>
      <div class="tempDesc">
        {{ data.weather[0].description }}
      </div>
    </div>
    <div v-if="data === undefined"><Error /></div>
  </div>
</template>

<script>
import Error from "../components/Error.vue";

export default {
  name: "Resultado",
  components: {
    Error,
  },
  data() {
    return {
      data: null,
      input: null,
      icon: null,
    };
  },
  methods: {
    async fetchApi() {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
          this.input
        )}&appid=d06cdb298fafc83c520d5ab677fc477e&units=metric&lang=pt_br`
      )
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          if (json.cod === 200) {
            this.data = json;
            this.icon = json.weather[0].icon;
          } else {
            this.data = undefined;
          }
        });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

input {
  padding: 10px 10px;
  margin-right: 10px;
  width: 200px;
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
  transition: 0.3s;
}

button:hover {
  filter: brightness(0.9);
}
</style>