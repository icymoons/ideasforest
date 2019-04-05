<template>
  <v-container align-center>
    <v-layout wrap justify-center row>
      <v-flex xs4>
        <v-navigation-drawer permanent>
          <v-toolbar flat>
            <v-list>
              <v-list-tile>
                <v-list-tile-title class="title">Application</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-toolbar>

          <v-divider></v-divider>

          <v-list dense class="pt-0">
            <v-list-tile v-for="item in items" :key="item.title">
              <v-list-tile-action>
                <v-icon>mdi-chart</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>why</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
      </v-flex>
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
      ideas: [],
      labels: [
        "Créer une application de partage d'idées",
        "Une chaine de vente sur des soupes",
        "Changer le monde en vendant des scoobidous",
        "Un casque permettant d'amplifier certaines ondes cérébrales"
      ],
      colors: ["#21aa93", "#01676b"]
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

