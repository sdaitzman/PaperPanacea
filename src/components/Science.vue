<template>
  <div class="container">
    <div class="about">
      <div class="text">
        <h1>The Science</h1>
        <p>Our kit uses a paper microfluidic device, which is a small sheet of paper printed with wax ink that directs the flow of a solution (a liquid with chemicals in it) through it. Paper microfluidic devices are cheap to produce, easy to understand, and less risky than chemical reactions with higher concentrations of chemicals. You also can run tests with them at home, rather than in a lab.</p>

        <p>The reaction that occurs in your kit is between sodium rhodizonate (C6Na2O6) and lead ions in water (Pb2+). Sodium rhodizonate turns from a reddish brown to a brighter red, which may appear as pink, when it reacts with the lead and forms Pb(II)-rhodizonate. You will be able to see this and take a photo of it to determine how much lead there is.</p>

        <p>The sodium rhodizonate on the paper can stay, untouched, without reacting with the air. As such, this kit doesn’t expire quickly, and can be used for several tests.</p>

        <p>The chemical is also inside a buffer solution, which resists changes to its pH or acidity. This means that regardless of the color-changing reaction between the sodium rhodizonate and lead, the solution it’s in won’t have a notable effect on the color.</p>

        <p>After finding the right concentrations to cause a visible reaction, our team created a calibration curve where they figured out what color appears for what known concentration of lead. From this, we developed an app that analyzes the color of the device from a photo and identifies the approximate lead concentration based off of our known data.</p>
      </div>
    </div>
    <div class="lead-infographic">
      <img id="lead" src="../assets/leadinfographic.jpg" alt="lead infographic" width="800">
      </div>
  </div>
</template>

<script>
export default {
  name: 'Science' //this is the name of the component
}
</script>
<style>

.container {
  height: 100%;
  width: 100%;
  min-width: 800px;
  background: #e5e5e5;
  text-align: center;
  display: inline-block;
}


#lead {
  margin-bottom: 30px;

}

.about {
  background: #f9f9f9;
  padding: 10px 20px;
  margin-bottom: 30px;
}


.about p {
  font-family: "Open Sans", sans-serif;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  font-weight: medium;
}

</style>