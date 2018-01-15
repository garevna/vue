const router = new VueRouter({
  props: ["id"],
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      props: true,
    },
    {
      path: '/:id',
      name: 'mainSection',
      component: MainSection,
      props: true,
      children: [
        {
          path: 'about',
          component: SectionInfo,
          name:'about'
        },
        {
          path: 'details',
          component: SectionDetails,
          name:'details'
        }
      ]
    }
  ]
})
