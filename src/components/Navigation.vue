<template>
  <div>
    <nav>
      <router-link to="/home" class="title">Paper Panacea</router-link>
      <div class="link-container">
        <div class="dropdown">
          <button class="dropbtn">About<i class="fa fa-angle-down"></i></button>
          <div class="dropdown-content">
            <router-link to="/about/project">Project</router-link>
            <router-link to="/about/science">Science</router-link>
            <router-link to="/about/team">Team</router-link>
          </div>
        </div>
        <router-link to="/data">Data</router-link>
        <router-link to="/submit">Submit</router-link>

      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
    }
  }
}
</script>
<style>
nav {
  display:flex;
  background: #095768;
  width: 100%;
  height: 62px;
  justify-content: space-between;
  min-width: 800px;
  overflow: hidden;

}

.link-container {
  display:flex;
  float: right;
}

.title {
  text-transform: uppercase;
  color: white;
  padding: 16px 16px;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 1.5em;
}
i {
  padding-left: 6px;
}

.dropdown .dropbtn {
  border: none;
  outline: none;
  color: white;
  padding: 16px 16px;
  background-color: inherit;
  font-family: inherit;

}

.dropdown {
  margin-top: auto;
  margin-bottom: auto;
}

button {
  height:100%;
}

nav a{
  display: flex;
  flex-direction: column;
  color:white;
  text-align: center;
  padding: 16px 16px;
  text-decoration: none;
  margin-top: auto;
  margin-bottom: auto;

}

.dropdown-content a {
  float: none;
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}


.dropdown-content {
  display: none;
  position: absolute;
  background-color: #141948;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;

}

</style>