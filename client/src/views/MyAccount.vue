<template>
  <div class="my-account">
    <h1>Mon compte</h1>
    <img src="https://au.junkfreejune.org/themes/base/production/images/default-profile.png" alt="">
    <h2>Description</h2>
    <p>Pas de descriptif pour le moment</p>
    <h2>Données personelles</h2>
    <p>Pas de descriptif pour le moment</p>
    <h2>Confidentialité</h2>
    <p>Pas de descriptif pour le moment</p>
    <h2>Mes idées publiées</h2>
    <p>Pas de descriptif pour le moment</p>
    <h2>Les idées que j'ai commentées</h2>
    <p>Pas de descriptif pour le moment</p>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "IdeaDetails",
  data() {
    return {
      ideaId: this.$route.params.id
    };
  }
};
</script>
