<template>
  <div>
    <h2>Nav Bar</h2>
    <nav>
      <router-link v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'About',
          page:'/About'
        },
        {
          id: 1,
          text: 'Data',
          page:'/Data'
        },
        {
          id: 2,
          text: 'Home',
          page:'/Home'
        },
        {
          id: 3,
          text: 'Project',
          page:'/Project'
        },
        {
          id: 4,
          text: 'Science',
          page:'/Science'
        },
        {// this is a 
          id: 5,
          text: 'Submit',
          page:'/Submit'
        },
        {
          id: 6,
          text: 'Team',
          page:'/Team'
        }
      ]
    }
  }
}
</script>