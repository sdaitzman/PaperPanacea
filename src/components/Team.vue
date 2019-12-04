<template>
  <div class="container">
    <div class="logo">
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
}

p {
  font-size: 12px;
}

.icon-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fas, .fab {
  display: flex;
  width: 50px;
  height: 50px;
  font-size: 50px;
}




</style>