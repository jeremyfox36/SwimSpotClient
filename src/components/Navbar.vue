<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info"
  style="padding-left: 10px; padding-right: 10px; margin-bottom: 10px;">
    <b-navbar-brand :to="{ name: 'Home' }">Home</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mr-auto">
        <b-nav-item v-if="$auth.isAuthenticated"
        :to="{ name: 'SwimmingSpotList' }">Swimming Spots</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ms-auto">
        <b-nav-item v-if="!$auth.isAuthenticated" @click="login">Login</b-nav-item>
        <b-nav-item v-if="$auth.isAuthenticated" :to="{ name: 'profile' }">User profile</b-nav-item>
        <b-nav-item v-if="$auth.isAuthenticated" @click="logout">Logout</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>

export default {
  name: 'Navbar',
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
};
</script>
