<template>
  <div class="register">
    <h1>Inscrivez vous</h1>
      <label for="user-firstname">Prénom</label>
      <input type="text" name="user-firstname" id="user-firstname">
      <label for="user-lastname">Nom</label>
      <input type="text" name="user-lastname" id="user-lastname">
      <label for="user-pseudo">Pseudo</label>
      <input type="text" name="user-pseudo" id="user-pseudo">
      <label for="user-mail">mail</label>
      <input type="text" name="user-mail" id="user-mail">
      <label for="user-password">Mot de passe</label>
      <input type="password" name="user-password" id="user-password">
      <div class="button-form">valider</div>
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
