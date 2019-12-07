<template>
  <div class="container">
    <div class="logo">
      <h1>Team Commitments</h1>
      <div class="icon-container">
        <div class="icon-group">
            <i class="fas fa-exclamation-triangle"></i>
            <p>Create a safe and welcoming environment for our team members and community</p>
          </div>
          <div class="icon-group">
            <i class="fas fa-chalkboard-teacher"></i>
            <p>Prioritize learning and the opportunity to explore learning goals</p>
            </div>
            <div class="icon-group">
            <i class="fas fa-users fas-lg"></i>
            <p>Weekly standup to seek feedback and help from fellow teammates</p>
              </div>
              <div class="icon-group">
                <i class="fas fa-calendar-alt"></i>
                <p>Set clear deliverable goals to be completed on a two week agile framework</p>
                </div>
                <div class="icon-group">
                    <i class="fab fa-slack"></i>
                    <p>Communicate with eachother through Slack</p>
                  </div>
        </div>
    </div>
    <div class="content">
      <h1>Technical Project Goals</h1>
      <div class="overview">
        <ul>
          <li>We are committed to building on the progress made last year by developing a paper microfluidic device that measures lead content in water.</li>
            <li>In order to succeed, we have self organized into four teams: software, chemistry,  design/communication, and project management. </li>
          </ul>
        </div>
        <div class="subteam">
          <h3>Software</h3>
            <ul>
              <li>Create an accessible online database.</li>
              <li>Develop a system for discerning data from images.</li>
              <li>Analyze the existing architecture to determine additional objectives.</li>
              </ul>
          </div>
          <div class="subteam">
            <h3>Chemistry</h3>
            <ul>
              <li>Understand, replicate and document the data collection and calibration processes from last year.</li>
              <li>Explore pathways to increase accuracy of the measurements. </li>
              <li>Design the microfluidic pad to house the reaction. </li>
            </ul>
          </div>
          <div class="subteam">
            <h3>Design and Communication</h3>
            <ul>
              <li>Create usability documentation targeted towards using our device and interpreting its results.</li>
              <li>Design and work with the software team to create a website that educates the public and is used in tandem with the physical kit to find and report results.</li>
              <li>Create assets to help communicate both internally and externally about the project in an effective way.</li>
              </ul>
          </div>
          <div class="subteam">
            <h3>Project Management</h3>
            <ul>
              <li>The project management team will lead the coordination between the aforementioned teams. </li>
              <li>The project management team will ensure that the final deliverable meets the goals listed above.</li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Team' //this is the name of the component
}
</script>
<style>

.icon-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 800px;
  margin: auto;
}

p {
  font-size: 12px;
}


.content {
  background: #f9f9f9;
  padding: 10px 20px;
  margin-bottom: 30px;
  text-align: left;
}

.subteam {
  text-align: left;
  padding: 10px 10px;
}

.overview, .subteam {
  max-width: 800px;
  align-items: center;
  margin: auto;
}

.logo {
  padding-top: 20px;
  padding-bottom: 50px;
}

.icon-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100px;
}

.fas, .fab {
  display: flex;
  width: 50px;
  height: 50px;
  font-size: 50px;
}

.container {
  height: 100%;
  min-width: 800px;
  background: #e5e5e5;
}

h1 {
  text-align: center;
}

li {
  margin-bottom: 5px;
}




</style>