<template>
  <div>
    <b-row>
      <b-col
        md="2"
        offset-md="10">
        <b-button @click="addSwimmingSpot" variant="primary">Add new spot</b-button>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col md="12">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Details</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <swimming-spot-list-row
                v-for="swimspot in swimmingspots"
                :key="swimspot.swimmingSpotId"
                :swimspot="swimspot"
                @details="detailsSwimmingSpot"
                @update="updateSwimmingSpot"
                @delete="deleteSwimmingSpot"/>
            </tbody>
          </table>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <swimming-spot-map :swimspots="swimmingspots"></swimming-spot-map>
    </b-row>
  </div>
</template>
<script>
import SwimmingSpotService from '@/api-services/swimmingspot.service';
import SwimmingSpotListRow from '@/components/swimming-spot/SwimmingSpotListRow';
import SwimmingSpotMap from '@/components/swimming-spot/SwimmingSpotMap';

export default {
  components: { SwimmingSpotListRow, SwimmingSpotMap },
  name: 'SwimmingSpot',
  data() {
    return {
      swimmingspots: [],
    };
  },
  mounted() {
    this.getAllSwimmingspots();
  },
  methods: {
    async getAllSwimmingspots() {
      const token = await this.$auth.getTokenSilently();
      const { data } = SwimmingSpotService.getAll(token);
      this.swimmingspots = data;
    },
    detailsSwimmingSpot(swimmingSpotId) {
      this.$router.push({ name: 'SwimmingSpotDetails', params: { id: swimmingSpotId } });
    },
    addSwimmingSpot() {
      this.$router.push({ name: 'SwimmingSpotForm' });
    },
    updateSwimmingSpot(swimmingSpotId) {
    },
    deleteSwimmingSpot(swimmingSpotId) {
    },
  },
};
</script>
