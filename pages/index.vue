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
        <tr v-for="user in users" :key="user.id.value">
            <td>{{user.name.first}} {{user.name.last}}</td>
            <td>{{user.location.city}}</td>
            <td> {{user.nat}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "IndexPage",
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((response) => (this.users = response.data.results))
      .catch((error) => console.log(error));
  },
};
</script>
