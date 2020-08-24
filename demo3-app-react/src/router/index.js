import Default from 'pages/Default/index'
import Login from 'pages/home'
import Home from 'pages/home/index'
import Community from 'pages/community/index'
import Column from 'pages/column/'
import ImportNews from 'pages/importNews/'
import Mine from 'pages/mine'
import loginPage from 'pages/login/'
import SearchPage from 'pages/searchPage/'

const routes = [
    {
      path:"/login",
      component:Login
    },
    {
      path:"/search",
      component:SearchPage
    },
    {
        path:"/default",
        component:Default,
        children:[
          {
            path:"/default/home",
            component:Home
          },
          {
            path:"/default/community",
            component:Community
          },
          {
            path:"/default/column",
            component:Column
          },
          {
            path:"/default/importNews",
            component:ImportNews
          },
          {
            path:"/default/mine",
            component:Mine
          },
          {
            path:"/default/loginPage",
            component:loginPage
          },
        ]
      
    },
    {
      path: '/',
      redirect: '/default/home'
    }
]

export default routes;
