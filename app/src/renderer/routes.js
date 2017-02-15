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
    path: '*',
    redirect: '/'
  }
]
