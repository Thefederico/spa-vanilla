import Home from '@pages/Home'
import Character from '@pages/Character'
import Header from '@templates/Header'
import Error404 from '@pages/Error404'
import { resolveRoutes } from '@utils/resolveRoutes'
import { getHash } from '@utils/getHash'

const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': '/contact'
}

export async function router () {
  const header = null || document.querySelector('#header')
  const content = null || document.querySelector('#content')

  header.innerHTML = await Header()

  const hash = getHash()
  const route = await resolveRoutes(hash)
  const render = routes[route] ? routes[route] : Error404
  content.innerHTML = await render()
}
