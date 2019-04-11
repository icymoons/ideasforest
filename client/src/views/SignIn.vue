<template>
  <div class="login">
    <h1>Connectez-vous</h1>
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
