import Vue from 'vue'
import Router from 'vue-router'
import Seat from '@/components/seat/Seat.vue'
import SeatZoom from '@/components/seat/SeatZoom.vue'
import SeatBindClick from '@/components/seat/SeatBindClick.vue'
import SeatContentFill from '@/components/seat/SeatContentFill.vue'
import Seatend from '@/components/seat/Seatend.vue'

import Detail from '@/components/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Seat',
      component: Seat
    },
    {
      path: '/zoom',
      name: 'SeatZoom',
      component: SeatZoom
    },
    {
      path: '/bindclick',
      name: 'SeatBindClick',
      component: SeatBindClick
    },
    {
      path: '/fill',
      name: 'SeatContentFill',
      component: SeatContentFill
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/end',
      name: 'Seatend',
      component: Seatend
    }
  ]
})
