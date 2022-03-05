import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SecondPage from '../views/SecondPage.vue'
import PokemonPikachu from '../views/PokemonPikachu.vue'
import PokemonHitokage from '../views/PokemonHitokage.vue'
import PokemonZenigame from '../views/PokemonZenigame.vue'
import PokemonFushigidane from '../views/PokemonFushigidane.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/secondpage',
    name: 'SecondPage',
    component: SecondPage,
    children: [
      {
        path: 'pikachu',
        name: 'PokemonPikachu',
        component: PokemonPikachu
      },
      {
        path: 'hitokage',
        name: 'PokemonHitokage',
        component: PokemonHitokage
      },
      {
        path: 'zenigame',
        name: 'PokemonZenigame',
        component: PokemonZenigame
      },
      {
        path: 'fushigidane',
        name: 'PokemonFushigidane',
        component: PokemonFushigidane
      },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router