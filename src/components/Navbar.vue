<template>
    <b-navbar
        toggleable="md"
        type="dark"
        variant="info">
        <b-navbar-brand :to="{ name: 'Home' }">Swim Spots</b-navbar-brand>
        <b-navbar-nav>
        <b-nav-item :to="{ name: 'SwimmingSpotList' }">Swimming Spots</b-nav-item>
        </b-navbar-nav>
    </b-navbar>
</template>
<script>

export default {
  name: 'Navbar',
};
</script>
