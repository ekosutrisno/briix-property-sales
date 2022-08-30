import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/app.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  head.script.push({
    src: '/script.js',
    body: true
  })

}