<template>
  <div>
    <b-row>
      <b-col
        md="2"
        offset-md="10">
        <swimming-spot-add></swimming-spot-add>
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
import SwimmingSpotAdd from '@/components/swimming-spot/SwimmingSpotAdd';

export default {
  components: { SwimmingSpotListRow, SwimmingSpotMap, SwimmingSpotAdd },
  name: 'SwimmingSpot',
  data() {
    return {
      swimmingspots: [],
      token: null,
    };
  },
  async created() {
    this.token = await this.$auth.getTokenSilently();
    this.getAllSwimmingspots();
  },
  methods: {
    async getAllSwimmingspots() {
      const data = await SwimmingSpotService.getAll(this.token).then(res => res.data);
      this.swimmingspots = data;
    },
    detailsSwimmingSpot(swimmingSpotId) {
      this.$router.push({ name: 'SwimmingSpotDetails', params: { id: swimmingSpotId, token: this.token } });
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
