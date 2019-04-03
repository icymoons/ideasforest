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
      ideas: [],
      labels: [
        "label dsf sd hhsdf osdf hdsf sdfo sdfdshsdf sdfhsdf sdfsdh dsf",
        "afsdfsd fsdfsaaaaaaaaaaaaa oooooooo pppppppppppppaaaa afsdfsd fsdfsaaaaaaaaaaaaa oooooooo pppppppppppppaaaa afsdfsd fsdfsaaaaaaaaaaaaa oooooooo pppppppppppppaaaa ",
        "sdfsdfs  lorer msdf a ezrrz nc dsfdsfdoierhhzef",
        "dsfsdfsdf hhhhhhhhhhhhhhh sdfdsf iiiiiiiiiiiiiii sdfsdfooooo dsfds",
        "dsfdsfffffffffff iiiiiiii sdfdsfsd     sdfdsfdsfsdf jjjjjjjjjjj"
      ],
      colors: ["#0170B7", "#FFB17C", "#F61DC4", "#FED82F", "#00BEF2"]
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

