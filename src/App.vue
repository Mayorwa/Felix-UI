<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<script>
import defaultLayout from '@/components/layouts/default'
export default {
  name: 'App',
  computed: {
    layoutComponent() {
      let currentLayout = ''
      const routeLayout = this.$route.meta.layout?.toLowerCase()
      switch (routeLayout) {
        case 'default':
          currentLayout = defaultLayout
          break
      }
      return currentLayout
    },
  },
}
</script>
<style lang="scss">
@import 'assets/sass/main.scss';
</style>
