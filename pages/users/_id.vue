<template>
  <div>
    I am Bob
  </div>
</template>

<script>
export default {
  validate({ params }) {
    const idCheck = /^\d+$/.test(params.id);
    if (idCheck === false) {
      throw new Error("Incorrect user id");
    }

    return true;
  },
};
</script>