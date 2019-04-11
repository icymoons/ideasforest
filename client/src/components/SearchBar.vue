<template>
  <div class="search-bar">
    <input type="text" v-model="content" placeholder="Recherchez une idée, une thématique">
    <div @click="search">Rechercher</div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",

  data() {
    return {
      content: ""
    };
  },

  methods: {
    search() {
      if (this.content) alert(this.content);
      else alert("Erreur");
    }
  }
};
</script>