export default [
    {
        path: '/reportMenu',
        name: 'report',
        meta: {
            title: "Report",
            isMenu : true
        },
        component: () => import('@/views/report/index')
    },
    {
        path: '/test',
        name: 'test',
        meta: {
            title: "test",
            isMenu : true
        },
        component: () => import('@/views/report/test')
    }
]
