<template>
  <div class="idea-details">
    <h1>Titre de l'idée n {{ideaId}}</h1>
    <h2>Résumé</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ipsum? Expedita voluptatum totam laudantium dignissimos exercitationem voluptate blanditiis quibusdam officia, hic repudiandae voluptatem, culpa ab quos. Rerum atque corrupti autem.</p>
    <h2>Domaines</h2>
    <ul>
      <li>dsfds</li>
      <li>dsfds</li>
      <li>dsfds</li>
    </ul>
    <h2>Commentaires</h2>
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
