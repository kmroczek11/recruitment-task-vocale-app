import { createMemoryHistory, createRouter } from 'vue-router'

import SearchView from '../components/views/SearchView.vue'
import ResultView from '../components/views/ResultView.vue'

const routes = [
  { path: '/', component: SearchView },
  { path: '/result/:value', component: ResultView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router