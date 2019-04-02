<template>
  <v-container align-center>
    <v-layout wrap justify-center row>
      <v-flex xs9>
        <v-layout wrap row>Filter</v-layout>
        <v-layout wrap row>
          <v-flex xs4 v-for="(idea,index) in ideasComputed" :key="index" :class="'column-ideas'">
            <idea-bloc v-bind="idea"></idea-bloc>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import IdeaBloc from "../components/IdeaBloc";

export default {
  components: {
    IdeaBloc
  },

  data: function() {
    return {
      ideas: [
        {
          label: "idee",
          author: "author",
          likes: 0
        }
      ]
    };
  },
  computed: {
    ideasComputed() {
      var arr = [];
      for (let i = 0; i < 50; i++) {
        arr.push({
          label: "idee" + i,
          author: "author" + i,
          likes: 0 + i
        });
      }
      return arr;
    }
  }
};
</script>
<style>
.column-ideas {
  padding-left: 6px;
  padding-right: 6px;
}
</style>

