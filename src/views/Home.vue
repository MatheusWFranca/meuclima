<template>
  <div>
    <Header />
    <Modal />
    <Footer />
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Modal,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  background: #f0f0f7;
}
</style>