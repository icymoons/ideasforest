<template>
  <div class="my-account">
    <h1>Mon compte</h1>
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
