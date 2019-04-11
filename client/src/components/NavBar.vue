<template>
  <nav>
    <div id="logo">
      <router-link to="/">IdeasForest</router-link>
    </div>
    <div id="search">
      <search-bar></search-bar>
    </div>
    <div id="links">
      <div>
        <router-link v-for="(link, i) in links" :key="i" :to="link.to">{{link.label}}</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import SearchBar from "./SearchBar";
export default {
  name: "NavBar",
  components: { SearchBar },
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
          to: "/signin",
          label: "Se connecter"
        },
        {
          to: "/register",
          label: "S'inscrire"
        },
        {
          to: "/my-account",
          label: "Mon compte"
        }
      ]
    };
  }
};
</script>


