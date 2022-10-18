<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <Course />
  </div>
</template>

<script>

import Course from './views/course/index.vue'
export default {
  name: 'App',
  components: {
    Course
  }
}
</script>
