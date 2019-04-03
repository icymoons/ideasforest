<template>
  <v-container align-center>
    <v-layout wrap justify-center row>
      <v-flex xs8>
        <v-layout wrap row>
          <v-flex xs4 :class="'column-ideas'">
            <idea-bloc v-for="(idea,index) in ideasComputed.left" :key="index" v-bind="idea"></idea-bloc>
          </v-flex>
          <v-flex xs4 :class="'column-ideas'">
            <idea-bloc v-for="(idea,index) in ideasComputed.center" :key="index" v-bind="idea"></idea-bloc>
          </v-flex>
          <v-flex xs4 :class="'column-ideas'">
            <idea-bloc v-for="(idea,index) in ideasComputed.right" :key="index" v-bind="idea"></idea-bloc>
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
      var ideas = this.getIdeas(),
        sort = { left: [], center: [], right: [] };
      for (let i = 0; i < ideas.length; i++) {
        const idea = ideas[i];
        if (i % 3 == 0) {
          sort.left.push(idea);
        } else if (i % 3 == 2) {
          sort.right.push(idea);
        } else {
          sort.center.push(idea);
        }
      }
      return sort;
    }
  },
  methods: {
    getIdeas() {
      var arr = [];
      for (let i = 0; i <= 80; i++) {
        arr.push({
          key: i,
          category: "categorie " + i,
          label: "idee " + i,
          author: "author " + i,
          likes: 0 + i,
          height: (i + 10) * 40 + "px",
          background: "#32A"
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

