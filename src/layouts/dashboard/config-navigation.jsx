import SvgColor from 'src/components/svg-color';
import { Icon } from '@iconify/react';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <Icon icon="eva:pie-chart-2-fill" />,
  },
  {
    title: 'User',
    path: '/user',
    icon: <Icon icon="eva:people-fill" />,
  },
  {
    title: 'Add Users',
    path: '/add-users',
    icon: <Icon icon="eva:person-add-fill" />,
  },
  {
    title: 'Demographics',
    path: '/demographics',
    icon: <Icon icon="eva:bar-chart-fill" />,
  },
  {
    title: 'Benefits',
    path: '/benefits',
    icon: <Icon icon="eva:gift-fill" />,
  },
  {
    title: 'Special People',
    path: '/special-people',
    icon: <Icon icon="eva:award-fill" />,
  },
  {
    title: 'Requests',
    path: '/requests',
    icon: <Icon icon="eva:alert-circle-fill" />,
  },
  {
    title: 'Manage Events',
    path: '/manage-events',
    icon: <Icon icon="eva:calendar-outline" />,
  },
];

export default navConfig;
