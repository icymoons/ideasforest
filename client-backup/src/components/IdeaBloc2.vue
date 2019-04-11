<template>
  <v-hover>
    <v-card
      class="mx-auto"
      max-width="400"
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
    >
      <v-card-title>{{category}}</v-card-title>

      <v-card-text class="central-text">{{label}}</v-card-text>

      <v-card-actions>
        <v-list-tile class="grow">
          <v-list-tile-avatar color>
            <v-img
              class="elevation-6"
              src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg"
            ></v-img>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{author}}</v-list-tile-title>
          </v-list-tile-content>

          <v-layout align-center justify-end>
            <v-icon class="mr-1">mdi-heart</v-icon>

            <v-btn color="success" small>Voir +</v-btn>
          </v-layout>
        </v-list-tile>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    label: String,
    category: String,
    author: String,
    likes: Number,
    height: String,
    background: String
  },
  data: () => ({
    hover: false
  }),
  methods: {
    toIdea() {
      alert("oj");
    },
    mouseOver() {
      this.hover = true;
    },
    mouseLeave() {
      this.hover = false;
    }
  }
};
</script>

<style>
.column-ideas {
  margin-top: 10px;
}
.central-text {
  font-size: 1.3rem;
}
</style>
