import AdminLayout from './layouts/admin/AdminLayout.vue';
import UserLayout from './layouts/user/UserLayout.vue';

const routes = [
    // {
    //     path: '/',
    //     component: UserLayout,
    //     name: 'home'
    // },
    {
        path: '/admin/',
        component: AdminLayout ,
        children: [
            {
                path: 'dashboard',
                name: 'admin-dashboard',
                component: () => import("@/views/admin/Dashboard")
            },
            {
                path: 'users',
                name: 'admin-users',
                component: () => import("@/views/admin/Users")
            },
        ]
    },
    {
        path: '/user/',
        component: UserLayout ,
        children: [
            {
                path: 'dashboard',
                name: 'user-dashboard',
                component: () => import("@/views/user/Dashboard")
            },
            
        ]
    },
    
    
  ];

  export default routes;