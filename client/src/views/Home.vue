<template>
  <div>
    <h1>Découvrez des milliers d'idées de startups</h1>
    <div class="ideas-bloc-grid">
      <idea-bloc v-for="(idea, i) in ideas" :key="i" v-bind="idea"></idea-bloc>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import IdeaBloc from "../components/IdeaBloc";

export default {
  name: "home",
  components: {
    IdeaBloc
  },
  data() {
    return {
      ideas: [
        {
          author: {
            name: "Alice",
            avatar: ""
          },
          title: "Bla bla bla bla bla bla bla bla bla bla bla",
          likes: 34,
          category: "data",
          comments: 13,
          id: 13
        },
        {
          author: {
            name: "John",
            avatar: ""
          },
          title: "Bla bla bla bla bla bla bla bla bla bla bla",
          likes: 34,
          category: "data",
          comments: 13,
          id: 14
        },
        {
          author: {
            name: "Muramasa",
            avatar: ""
          },
          title: "Bla bla bla bla bla bla bla bla bla bla bla",
          likes: 34,
          category: "data",
          comments: 13,
          id: 16
        },
        {
          author: {
            name: "Franck",
            avatar: ""
          },
          title: "Bla bla bla bla bla bla bla bla bla bla bla",
          likes: 50,
          category: "data",
          comments: 16,
          id: 19
        },
        {
          author: {
            name: "Copernick",
            avatar: ""
          },
          title: "Bla bla bla bla bla bla bla bla bla bla bla",
          likes: 14,
          category: "data",
          comments: 12,
          id: 15
        },
        {
          author: {
            name: "Mathilde",
            avatar: ""
          },
          title: "Bla bla bla bla bla bla bla bla bla bla bla",
          likes: 12,
          category: "data",
          comments: 50,
          id: 19
        },
        {}
      ]
    };
  }
};
</script>
