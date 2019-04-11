<template>
  <div class="idea-bloc">
    <div class="top">
      <div class="left">{{category}}</div>
      <div class="right">{{likes}}</div>
    </div>
    <div class="center">{{title}}</div>
    <div class="bottom">
      <div class="left">{{author.name}}</div>
      <div class="right">
        <router-link :to="'/ideas/'+ id">Voir +</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IdeaBloc",
  props: {
    id: Number,
    author: Object,
    title: String,
    likes: Number,
    category: String,
    comments: Number
  },
  data() {
    return {
      links: [
        {
          to: "/",
          label: "Parcourir"
        },
        {
          to: "/add-idea",
          label: "Ajouter une idée"
        },
        {
          to: "/connect",
          label: "Se connecter"
        },
        {
          to: "/register",
          label: "S'inscrire"
        }
      ]
    };
  }
};
</script>