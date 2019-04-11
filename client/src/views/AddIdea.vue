<template>
  <div class="add-idea">
    <h1>Ajoutez une idée</h1>

    <label for="idea-title">Titre</label>
    <input type="text">
        <label for="idea-content">Description</label>
    <textarea name="idea-content" id="icea-content" cols="30" rows="10"></textarea>
    <label for="idea-categories">Tags</label>

    <div class="button-submit">Valider</div>
 
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "IdeaDetails",
  data() {
    return {
      ideaId: this.$route.params.id,
      categories: ["data", "santé", "énergie", "social", "écologie", "finance"]
    };
  }
};
</script>
