<template>

  <div>
    <l-map
      :zoom.sync="zoom"
      :center="center"
      :min-zoom="minZoom"
      :max-zoom="maxZoom"
      style="height: 500px; width: 100%"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
        :token="token"
      />
      <l-marker
        v-for="item in markers"
        :key="item.id"
        :lat-lng="item.position"
        :visible="item.visible"
        :draggable="item.draggable"
      >
        <l-popup>
            {{ item.popup }}
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>

import {
  LMap,
  LTileLayer,
  LMarker,
  LPolyline,
  LLayerGroup,
  LPopup,
} from 'vue2-leaflet';

export default {
  name: 'MultiMap',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPolyline,
    LLayerGroup,
    LPopup,
  },
  props: ['swimspots'],
  data() {
    return {
      zoom: 10,
      center: { lat: 55.6455217723385, lng: -2.906058530106536 },
      minZoom: 1,
      maxZoom: 20,
      opacity: 0.6,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      token: 'your token if using mapbox',
    };
  },
  mounted() {
  },
  computed: {
    markers() {
      function makeSpot(item) {
        return { position: { lat: item.latitude, lng: item.longitude }, popup: `${item.swimmingSpotName}` };
      }
      return this.swimspots.map(spot => makeSpot(spot));
    },
  },
};
</script>
