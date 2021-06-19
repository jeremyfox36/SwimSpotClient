<template>
  <div>
    <b-jumbotron bg-variant="info" :header="swimspot.swimmingSpotName">
        <div v-for="comment in swimspot.comments" :key="comment.SwimmingSpotCommentId">
          <h2>{{ comment.swimDate | date }}</h2>
            <div>{{ comment.content }}</div>
        </div>
    </b-jumbotron>
  </div>
</template>
<script>
import SwimmingSpotService from '@/api-services/swimmingspot.service';

export default {
  name: 'SwimmingSpotDetails',
  data() {
    return {
      swimspot: {},
    };
  },
  created() {
    SwimmingSpotService.get(this.$router.currentRoute.params.id).then((response) => {
      this.swimspot = response.data;
    });
  },
};
</script>
