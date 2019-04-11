<template>
  <v-container align-center>
    <v-layout wrap justify-center row>
      <v-flex xs8>
        <v-layout wrap row>
          <v-flex xs4 :class="'column-ideas'" v-for="(idea,index) in ideasComputed" :key="index">
            <idea-bloc2 v-bind="idea"></idea-bloc2>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import IdeaBloc2 from "../components/IdeaBloc2";

export default {
  components: {
    IdeaBloc2
  },

  data: function() {
    return {
      ideas: [],
      labels: [
        "Créer une application de partage d'idées",
        "Une chaine de vente sur des soupes",
        "Changer le monde en vendant des scoubidous",
        "Un casque permettant d'amplifier certaines ondes cérébrales"
      ],
      colors: ["#21aa93", "#01676b"]
    };
  },
  computed: {
    ideasComputed() {
      return this.getIdeas();
    }
  },
  methods: {
    getIdeas() {
      var arr = [];
      for (let i = 0; i <= 80; i++) {
        arr.push({
          key: i,
          category: "categorie " + i,
          label: this.labels[
            this.randomIntFromInterval(0, this.labels.length - 1)
          ],
          author: "author " + i,
          likes: 0 + i,
          height: (i + 10) * 40 + "px",
          background: this.colors[
            this.randomIntFromInterval(0, this.colors.length - 1)
          ]
        });
      }
      return arr;
    },
    randomIntFromInterval(
      min,
      max // min and max included
    ) {
      return Math.floor(Math.random() * (max - min + 1) + min);
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

