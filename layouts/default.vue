<template>
  <div>
    <nav class="navbar">
      <div class="navbar-brand">
        <nuxt-link
          to="/"
          class="navbar-item"
        >
          <img
            src="/images/logo.png"
            alt="Logo"
            class="logo_img"
          >
        </nuxt-link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link
            to="about"
            class="navbar-item"
          >
            О нас
          </nuxt-link>
          <nuxt-link
            to="contacts"
            class="navbar-item"
            no-prefetch
          >
            Контакты
          </nuxt-link>
        </div>
      </div>
    </nav>
    <nuxt />
  </div>
</template>

<style scoped>
.logo_img {
  width: 80px;
  max-height: initial;
}
</style>