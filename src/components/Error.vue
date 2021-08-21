<template>
  <div>
    <p>
      Oh não! Uma catástrofe aconteceu<br />
      Error 404, digite um valor valido.
    </p>
    <img src="../assets/error.svg" alt="404" />
  </div>
</template>

<script>
export default {
  name: "Error",
};
</script>

<style scoped>
p {
  margin-top: 50px;
  color: #e54;
}

img {
  max-width: 100%;
}
</style>