const routeArr = [
    {   path: '/',
        name : 'home',
        component: () => import('@/views/base/index'),
        children:[
            {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import('@/views/dashboard/index')
            },
            {
                path: '/userPortrait',
                name: 'userPortrait',
                component: () => import('@/views/userPortrait/index')
            },
        ]
    },{
        path: '*',
        name : 'default',
        component: () => import('@/views/base/index'),
    }
];
export default routeArr;
