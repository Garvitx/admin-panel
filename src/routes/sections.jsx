import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const AddUsersPage = lazy(() => import('src/pages/add-user-page'));
export const Benifits = lazy(() => import('src/pages/benifits'));
export const Request = lazy(() => import('src/pages/requests'));
export const Events = lazy(() => import('src/pages/manage-events'));
export const SpecialPeople = lazy(() => import('src/pages/special-people'));
export const Demographics = lazy(() => import('src/pages/demographics'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// Dummy authentication check function
const isAuthenticated = () => {
  // Replace this with your actual authentication check logic
  return localStorage.getItem('isAuthenticated') === 'true';
};

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: isAuthenticated() ? <Navigate to="/dashboard" /> : <Navigate to="/login" />,
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { path: 'dashboard', element: <IndexPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'add-users', element: <AddUsersPage /> },
        { path: 'benefits', element: <Benifits /> },
        { path: 'requests', element: <Request /> },
        { path: 'manage-events', element: <Events /> },
        { path: 'special-people', element: <SpecialPeople /> },
        { path: 'demographics', element: <Demographics /> },
      ],
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
