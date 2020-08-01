import reportModule from './modules/report';
const routeArr = [
    {   path: '/',
        component: () => import('@/views/report/index'),
        name : 'home',
    },
];
export default routeArr;
