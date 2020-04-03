// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [{
        path: '/home',
        redirect: '/'
    },
    {
        // path: '/app/:id', // /app/xxx
        path: '/',
        // props: true,
        // props: (route) => ({ id: route.query.b }),
        component: () =>
            import ( /* webpackChunkName: "home-view" */ '../pages/home.vue'),
        // component: Login
        name: 'home',
        meta: {
            title: 'this is app',
            description: 'asdasd'
        },
        beforeEnter(to, from, next) {
            console.log('app route before enter')
            next()
        }
        // children: [
        //   {
        //     path: 'test',
        //     component: Login
        //   }
        // ]
    },
    {
        path: '/login',
        component: () =>
            import ( /* webpackChunkName: "login-view" */ '../pages/login.vue')
            // component: Login
    },
    {
        path: '/about',
        component: () =>
            import ( /* webpackChunkName: "about-view" */ '../pages/about.vue')
            // component: Login
    }
]
