export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('components/LandingPageView')
  },
  {
    path: '/sb',
    name: 'speed-boulder',
    component: require('components/SpeedBoulderView')
  },
  {
    path: '/sb/roster',
    name: 'sb-roster',
    component: require('components/SBRosterView')
  },
  {
    path: '/sb/route',
    name: 'sb-route',
    component: require('components/SBRouteView')
  },
  {
    path: '*',
    redirect: '/'
  }
]
