<template>
  <p>{{ message }}</p>
</template>

<script>
export default {
  data: () => {
    console.log('Vue js is installed!');
    return {
      message: 'Hey, this is vue',
    };
  },
};
</script>

<style scoped>
p {
  color: green;
}
</style>