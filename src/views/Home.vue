<template>
  <div class="home">
    <select v-model="selected">
      <!-- インラインオブジェクトリテラル -->
      <option v-bind:value="{ number: 123 }">{ number: 123 }</option>
    </select>
    {{ selected.number }}
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",

  data: function () {
    return {
      selected: { number: 0 },
    };
  },
  computed: {},
  methods: {},
});
</script>
<style scoped></style>
