export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      {
        name: '项目地址',
        path: '/address',
        component: './Address',
      },
      {
        name: 'card-list',
        path: '/cardlist',
        component: './CardList',
      },
      {
        name: 'table-list',
        path: '/tablelist',
        component: './TableList',
      },
      {
        name: 'table',
        path: '/list/table',
        component: './list/table',
      },
      {
        path: '/',
        name: 'welcome',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
