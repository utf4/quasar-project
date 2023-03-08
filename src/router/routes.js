// import MainPage from 'layouts/MainLayout.vue';
const routes = [
  {
    path: '/',
    component: () => import('layouts/LayoutPage.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/test', component: () => import('pages/Test.vue') },
      { path: '/checkout', component: () => import('pages/Checkout.vue') }
    ]
  },
  {
    path: '/rebillion',
    component: () => import('layouts/LayoutPage.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
