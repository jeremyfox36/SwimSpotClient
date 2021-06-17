<template>
  <tr>
    <td>{{ swimspot.swimmingSpotId }}</td>
    <td>{{ swimspot.latitude }}</td>
    <td>{{ swimspot.longitude }}</td>
    <td>
      <b-button variant="default"
      @click="onDetailsClick">Details</b-button>
    </td>
    <td>
      <b-button variant="success"
      @click="onUpdateClick">Update</b-button>
    </td>
    <td>
      <b-button variant="danger"
      @click="onDeleteClick">Delete</b-button>
    </td>
</tr>
</template>
<script>
export default {
  name: 'SwimmingSpotListRow',
  props: ['swimspot'],
  methods: {
    onDetailsClick() {
      this.$emit('details', this.swimspot.swimmingSpotId);
    },
    onUpdateClick() {
      this.$emit('update', this.swimspot.swimmingSpotId);
    },
    onDeleteClick() {
      this.$emit('delete', this.swimspot.swimmingSpotId);
    },
  },
};
</script>
