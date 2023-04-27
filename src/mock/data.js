export const streamSmmary = [
    {
        title: 'Ndiwenu',
        value: 300
    },
    {
        title: 'Abakachimfya',
        value: 1455
    },
    {
        title: 'Twalaya',
        value: 266
    },
    {
        title: 'Umusumba',
        value: 777
    },
    {
        title: 'Bakwesu',
        value: 999
    },
    {
        title: 'Yawe',
        value: 574
    },
]

// areal chart data
export const summaryChart = {
    data: [45, 52, 38, 45, 19, 23, 2, 45, 52, 38, 45, 19, 23, 2],
    labels: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
        "08 Jan",
        "09 Jan",
        "10 Jan",
        "11 Jan",
        "12 Jan",
        "13 Jan",
        "14 Jan"
    ]

}

// table data
export const pendingSubscriptions = [
    {
        "sn": 1,
        "txn": 106140,
        "names": "Gohier",
        "package": "Jordon",
        "network": "F",
        "amount": 67.23,
        "status": "F",
        "action": "M"
    },
    {
        "sn": 2,
        "txn": 103303,
        "names": "Cuchey",
        "package": "Delaney",
        "network": "M",
        "amount": 97.03,
        "status": "M",
        "action": "F"
    },
    {
        "sn": 3,
        "txn": 106332,
        "names": "Briztman",
        "package": "Charlton",
        "network": "F",
        "amount": 78.45,
        "status": "F",
        "action": "F"
    },
    {
        "sn": 4,
        "txn": 102418,
        "names": "Gingle",
        "package": "Dicky",
        "network": "M",
        "amount": 95.43,
        "status": "F",
        "action": "M"
    },
    {
        "sn": 5,
        "txn": 107217,
        "names": "Hollingsbee",
        "package": "Patrice",
        "network": "M",
        "amount": 60.08,
        "status": "F",
        "action": "F"
    }
]


export const payrollData = [
    { "year": 2022, "month": "September", "gross": 83340.84, "net": 3223.19, "alloances": 2254.47, "deductions": 96.12 },
    { "year": 2022, "month": "October", "gross": 5544.29, "net": 3944.79, "alloances": 2215.23, "deductions": 38.57 },
    { "year": 2022, "month": "November", "gross": 9844.89, "net": 6822.32, "alloances": 2187.76, "deductions": 48.22 },
    { "year": 2022, "month": "December", "gross": 1843.59, "net": 729.56, "alloances": 1237.5, "deductions": 95.24 },
    { "year": 2023, "month": "January", "gross": 3598.57, "net": 247.97, "alloances": 2218.99, "deductions": 35.73 }
]

export const departmentData = [
    { "department": "Support", "total_employee": 26, "total_projects": 42, "total_expense": 1546.26, "total_income": 2569.16 },
    { "department": "Training", "total_employee": 18, "total_projects": 74, "total_expense": 1002.83, "total_income": 3847.14 },
    { "department": "Legal", "total_employee": 7, "total_projects": 89, "total_expense": 1642.44, "total_income": 3701.92 },
    { "department": "Sales", "total_employee": 13, "total_projects": 51, "total_expense": 1670.65, "total_income": 3736.58 },
    { "department": "Sales", "total_employee": 28, "total_projects": 94, "total_expense": 1476.74, "total_income": 2118.74 },
    { "department": "Human Resources", "total_employee": 30, "total_projects": 28, "total_expense": 1223.75, "total_income": 2665.73 }
]


export const mockModule = {
    "modules": [
        {
            "module_name": "Premium Accounting",
            "module": "Accounts",
            "sub_modules": [
                {
                    "module": "Assets",
                    "module_title": "Asset Management",
                    "module_price": 7500
                },
                {
                    "module": "Stock",
                    "module_title": "Stock Management",
                    "module_price": 4000
                }
            ],
            "module_price": "11500",
            "icon_title": "accounts"
        },
        {
            "module_name": "Asset Management",
            "module": "Assets",
            "sub_modules": [],
            "module_price": "2500",
            "icon_title": "assets"
        },
        {
            "module_name": "Full HR",
            "module": "HR",
            "sub_modules": [
                {
                    "module": "Payroll",
                    "module_title": "Payroll",
                    "module_price": 500
                }
            ],
            "module_price": "5500",
            "icon_title": "hr"
        }
    ],
    "common_settings": {
        "name": "Common Settings",
        "owner": "Administrator",
        "modified": "2022-11-14 02:42:09.118095",
        "modified_by": "Administrator",
        "docstatus": 0,
        "idx": "0",
        "price_per_user": 50,
        "tot_rate": 4,
        "total_number_of_free_users": 4,
        "discount": 0,
        "vat_rate": 16,
        "apply_discount_on_first_month": 0,
        "apply_vat": 0,
        "apply_discount_on_first_year": 1,
        "apply_discount_on_users": 1,
        "enable_recurrying_annual_discount": 0,
        "doctype": "Common Settings"
    }
}


export const pricingData = [
    {
        // "sn": 1,
        "module": "Full Accounting",
        "frequency": 'Annually',
        "users": 2,
        "amount": 746889.01
    },
    {
        // "sn": 2,
        "module": "HR",
        "frequency": 'Annually',
        "users": 2,
        "amount": 15899.56
    },
    {
        // "sn": 3,
        "module": "Payroll",
        "frequency": 'Annually',
        "users": 2,
        "amount": 535284.21
    },
    {
        // "sn": 4,
        "module": "Project Management",
        "frequency": 'Annually',
        "users": 2,
        "amount": 931446.62
    },
    {
        // "sn": 5,
        "module": "Stock Management",
        "frequency": 'Annually',
        "users": 2,
        "amount": 608089.93
    },
    {
        // "sn": 6,
        "module": "Assets Management",
        "frequency": 'Annually',
        "users": 2,
        "amount": 873420.45
    }
]