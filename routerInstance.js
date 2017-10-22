const router = new VueRouter({
  props: ["id"],
  routes: [
    { 
      path: '/:id',
      name: 'user',
      component: User,
      props: true,
      children: [
        { 
          path: 'home', 
          component: UserHome, 
          params: true,
          name:'home'
        },
        { 
          path: 'profile', 
          component: UserProfile,
          name:'profile'
        },
        { 
          path: 'posts',
          component: UserPosts,
          name:'posts'
        }
      ]
    }
  ]
})
