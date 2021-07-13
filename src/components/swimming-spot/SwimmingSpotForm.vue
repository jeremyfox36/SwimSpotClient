<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Swimspot name"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.swimspot_name"
          placeholder="Enter a name for your swimming spot"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Swimspot latitude"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.latitude"
          placeholder="Enter a latitude for your swimming spot"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Swimspot longitude"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model="form.longitude"
          placeholder="Enter a longitude for your swimming spot"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        swimspot_name: '',
        latitude: '',
        longitude: '',
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.swimspot_name = '';
      this.form.latitude = '';
      this.form.longitude = '';
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
