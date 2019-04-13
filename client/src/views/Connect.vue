<template>
  <div class="login">
    <h1>Connectez-vous</h1>
    <label for="user-pseudo-email">pseudo ou email</label>
    <input type="text" name="user-pseudo-email" id="user-pseudo-email" >
    <label for="user-password">Mot de passe</label>
    <input type="text" name="user-password" id="user-password" >
    <div class="button-sumbit">Valider</div>
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
