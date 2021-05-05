<template>
  <div class="home">
    <div>
      <transition name="fade" mode="out-in">
        <button v-if="isShow === true" @click="isShow = !isShow" key="delete">
          delete
        </button>
        <button v-else @click="isShow = !isShow" key="appear">appear</button>
      </transition>
      <transition name="bounce" @enter="enter">
        <p v-show="isShow">abc</p>
      </transition>
    </div>
    <div>
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>
      <transition-group name="list-complete" tag="p">
        <span v-for="item in items" :key="item" class="list-complete-item">
          {{ item }}
        </span>
      </transition-group>
    </div>
    <p>合計：{{ sum }}</p>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",

  data: function () {
    return {
      isShow: true,
      // items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
    };
  },
  computed: {
    items: function () {
      return this.$store.state.items;
    },
    sum: function () {
      return this.$store.state.items.reduce(
        (acc: number, cur: number) => acc + cur,
        0
      );
    },
  },
  methods: {
    enter: function () {
      console.log("enter");
    },
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function () {
      this.$store.dispatch("delayAdd", {
        idx: this.randomIndex(),
        newItem: this.nextNum++,
      });
      // this.$store.commit("add", {
      //   idx: this.randomIndex(),
      //   newItem: this.nextNum++,
      // });
    },
    remove: function () {
      this.$store.commit("remove", { idx: this.randomIndex() });
    },
  },
});
</script>
<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(100px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
