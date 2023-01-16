import Dashboard from "../../views/admin/dashboard";
import Department from "../../views/admin/department";
import Employee from "../../views/admin/employee";
import Payroll from "../../views/admin/payroll";
import SalaryStructure from "../../views/admin/salaryStructure";
import Settings from "../../views/admin/settings";

export default [
    {
        element: <Dashboard />,
        key: 'dashboard',
        path: '/dashboard',
        title: 'Dashboard',
        isRoot: true,
        icon: '',
        roles: ['admin'],
        items: []
    },
    {
        element: <Department />,
        key: 'departments',
        path: '/departments',
        title: 'Departments',
        isRoot: false,
        icon: '',
        roles: ['admin'],
        items: []
    },
    {
        element: <Employee />,
        key: 'employee',
        path: '/employee',
        title: 'Employee',
        isRoot: false,
        icon: '',
        roles: ['admin'],
        items: []
    },
    {
        element: <Payroll />,
        key: 'payroll',
        path: '/payroll',
        title: 'Payroll',
        isRoot: false,
        icon: '',
        roles: ['admin'],
        items: []
    },
    {
        element: <SalaryStructure />,
        key: 'salaryStructure',
        path: '/salaryStructure',
        title: 'Salary Structure',
        isRoot: false,
        icon: '',
        roles: ['admin'],
        items: []
    },
    {
        element: <Settings />,
        key: 'settings',
        path: '/settings',
        title: 'Settings',
        isRoot: false,
        icon: '',
        roles: ['admin'],
        items: []
    },
]