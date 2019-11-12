<template>
  <div id="camerafeed">
    <img id="imageSrc" alt="No Image" />
    <div class="caption">imageSrc<input type="file" id="fileInput" name="file" /></div>
  </div>
</template>

<script>
  let imgElement = document.getElementById("imageSrc")
  let inputElement = document.getElementById("fileInput");
  inputElement.addEventListener("change", (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
  }, false);

  export default {
    props: {}
  }

</script>

  <style scoped>

</style>
