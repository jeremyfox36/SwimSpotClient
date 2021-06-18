<template>
  <div>
    <div class="well">
      <div class="row">
        <div class="col-md-3">
          <strong>Swim spot name:</strong>
        </div>
        <div class="col-md-3">
          {{ swimspot.swimmingSpotName }}
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <b-card
          v-for="comment in swimspot.comments"
          :key="comment.SwimmingSpotCommentId"
          v-bind:title="comment.swimDate | date"
          >
          <b-card-text>
            {{ comment.content }}
          </b-card-text>
        </b-card>
      </div>
    </div>
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
