<template>
  <div class="container">
    <div class="logo">
      <img src="../assets/PaperlogoFinal.png" alt="logo" width="500">
    </div>
    <div class="what-we-do">
      <div class="text">
        <h1>What We Do</h1>
        <p>We provide citizen science kits that allow for in-home lead detection. Our kits are non-toxic and designed for ease of use, even by those with little or no chemistry background. Included in our kit are paper detection pads that are dosed with a chemical that will react with lead in water and darken color depending on how much lead there is. Using our app, you can analyze the photo and get an approximation of how much lead is in your water--as well as if it’s safe to drink or bathe with. We also provide citizens with resources on how to deal with contaminated water.</p>
      </div>
      <div class="button">
        <p>Read More<p>
        </div>
    </div>
    <div class="map-container">
      <h2>Live Data Map</h2>
      <div class="live-map-container">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Home" //this is the name of the component
};
</script>

<style>
.logo {
  padding-top: 50px;
  padding-bottom: 50px;
}

.container {
  height: 100vh;
  min-width: 800px;
  background: #e5e5e5;
  text-align: center;
}

.what-we-do, .map-container {
  background: #f9f9f9;
  padding: 10px 20px;
  margin-bottom: 30px;
}


.what-we-do p {
  font-family: "Open Sans", sans-serif;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.button {
  background: #2595ad;
  color: white;
  width: 9em;
  height: 4em;
  margin: auto;

}

.live-map-container {
  height: 300px;
}
.button p {
  padding-top: 24px;
  text-transform: uppercase;
  font-weight: 700;
}
</style>