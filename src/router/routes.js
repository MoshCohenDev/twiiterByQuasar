const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '', component: () => import('pages/LoginPage.vue'),
        name: 'Login'
      },
      {
        path: '/home', component: () => import('pages/PageHome.vue'),
        name: 'Home'
      },
      {
        path: '/about', component: () => import('pages/PageAbout.vue'),
        name: 'About'
      },
      {
        path: '/auth',
        component: () => import('pages/LoginPage.vue')
      },
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
