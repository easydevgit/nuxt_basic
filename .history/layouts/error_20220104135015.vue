<template>
  <div>
    <div id="error">
      <div class="error_status">{{error.statusCode}}</div>
      <div class="error_message">{{error.message}}</div>
    </div>
  </div>
</template>

<script>
export default {
    layout: 'error-la'
  props: ["error"],
};
</script>

<style scoped>
#error {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

.error_status {
  font-size: 48px;
}

.error_message {
  font-size: 24px;
}
</style>