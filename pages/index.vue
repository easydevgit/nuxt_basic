<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Nat</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id.value"
        >
          <td>{{user.name.first}} {{user.name.last}}</td>
          <td>{{user.location.city}}</td>
          <td> {{user.nat}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  computed: {
    users() {
      return this.$store.getters["getUsers"];
    },
  },
};
</script>
