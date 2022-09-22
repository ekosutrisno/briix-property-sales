import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/app.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  // Add a meta tag
  head.meta.push({
    name: 'keywords',
    content: 'Property,Investments,Accomodations,Villa,Lombok Island, Moto GP'
  })
}
