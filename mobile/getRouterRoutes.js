import App from './onboarding/containers/App';
import Dashboard from './onboarding/containers/Dashboard';
import Inbox from './onboarding/containers/Inbox';

export default () => {
  return [
    {
      path: '/',
      component: App,
      indexRoute: { component: Dashboard },
      childRoutes: [
        {
          path: 'inbox',
          component: Inbox,
        },
      ]
    }
  ];
}