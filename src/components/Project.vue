<template>
  <div class="container">
    <div class="about">
      <div class="text">
        <h1>The Project</h1>
        <p>This project is a citizen science endeavor to give average people the ability to understand and advocate for their own health and safety, starting with the water they use every day. Rather than just developing the technique for detecting lead, or teaching people about lead safety, we focused on an all-in-one system.</p>
      </div>
    </div>
    <div class="subteam-wrapper">
    <div class="subteam">
      <div class="text">
        <h3>Chemistry</h3>
        <p>The backbone of our kit is the chemistry behind it. The kit was designed to involve a simple, easy-to-understand and safe chemical reaction that indicates the presence of lead in water. This built off of pre-existing research on lead detection and paper microfluidics [maybe link out to a good site on it] as well as involved a number of experiments to determine the best means of communicating the presence of lead to non-scientists. Our goals were for something simple and effective.</p>
      </div>
    </div>
    <div class="subteam">
      <div class="text">
        <h3>Software</h3>
        <p>While you can use a paper reference guide to determine the lead concentration, we also wanted to make sure there was an app for users to reference and check the detected concentration. This team focused on an accurate color-detecting app that would analyze photos taken by users and compare the unknown color value to the known colors tested before. This team also helped build this website.</p>
      </div>
    </div>
    <div class="subteam">
      <div class="text">
        <h3>Communication and Research</h3>
        <p>We wanted to make sure that every step of the process, from the development of the kit to its usage, was clearly communicated and easy-to-understand. (Not to mention, a little stylish). As such, our team dedicated time to developing clear instructions on the usage of the kit, the design of this website, and infographics that highlight how to deal with contaminated water.</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project' //this is the name of the component
}
</script>
<style>
.container {
  height: 100vh;
  background: #e5e5e5;
  text-align: center;
}

.subteam {
  text-align: left;
  padding: 10px 20px;
  margin-bottom: 15px;
}

.subteam-wrapper {
  margin: auto;
  max-width: 800px;

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
}

</style>