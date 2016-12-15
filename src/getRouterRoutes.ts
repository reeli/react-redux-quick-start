import App from './home/containers/App';
import Dashboard from './home/containers/Dashboard';
import Inbox from './home/containers/Inbox';
import TodoApp from './main/App';

export default () => [
    {
        path: '/',
        component: TodoApp,
        indexRoute: {component: Dashboard},
        childRoutes: [
            {
                path: 'inbox',
                component: Inbox,
            },
            {
                path: 'todo',
                component: TodoApp,
            }
        ],
    },
];

