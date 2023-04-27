
import Dashboard from "views/admin/dashboard";
export default [

    {
        element: <Dashboard />,
        path: '/dbd',
        title: 'Dashboard',
        isRoot: true,
        icon: '',
        roles: ['admin'],
        items: []
    },


]