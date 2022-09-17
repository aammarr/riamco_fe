<template>
  <h1 id="title" class="t-text-5xl font-weight-bold primary--text">
    {{ text }}
  </h1>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
  },
};
</script>

<style>
</style>