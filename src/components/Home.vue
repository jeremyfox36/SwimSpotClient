<template>
    <p class="homeText">
        Welcome to my outdoor swimming spot list.  This is where I'm logging all my outdoor swims.
        At the moment it's just me who can write comments, but I'll be adding the ability for other
        people to register and add their own soon.
    </p>
</template>
<script>
import SwimmingSpotService from '@/api-services/swimmingspot.service';

export default {
  name: 'Home',
  created() {
    SwimmingSpotService.getAll().then((response) => {
      // eslint-disable-next-line no-console
      console.log(response.data);
    }).catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error.response.data);
    });
  },
};
</script>
<style scoped>
.homeText {
    font-size: 25px;
    color: rgb(17, 0, 255);
    text-align: center;
    position: relative;
    top: 30px;
}
</style>
