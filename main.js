import '@styles/style.css'
import { router } from '@routes'

window.addEventListener('load', router)
window.addEventListener('hashchange', () => {
  router()
  console.log('oeee')
})
