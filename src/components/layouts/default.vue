<template>
  <main>
    <navigation></navigation>
    <router-view />
    <Footer></Footer>
  </main>
</template>
<script>
import navigation from '@/components/navigation/navigation'
import Footer from '@/components/navigation/footer'

export default {
  name: 'Default',
  components: {
    Footer,
    navigation,
  },
}
</script>
