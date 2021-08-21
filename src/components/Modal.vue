<template>
  <div class="containerAll">
    <div class="container">
      <h2>Clima Diário</h2>
      <Resultado />
    </div>
  </div>
</template>


<script>
export default {
  name: "Modal",
  components: {
    Resultado: () => import("./InputResultado.vue"),
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  max-width: 400px;
  flex-direction: column;
  border-radius: 15px;
  text-align: center;
  padding: 10px;
  min-height: 300px;
  background: #fff;
  margin: -50px auto;
  z-index: 999;
}

.container h2 {
  font-size: 32px;
  font-weight: bold;
  color: #32264d;
  margin-bottom: 10px;
}
</style>