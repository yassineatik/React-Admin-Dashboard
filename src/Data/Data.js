// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare,
    UilMoneyWithdrawal
} from '@iconscout/react-unicons';

export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard"
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders"
    },
    {
        icon: UilUsersAlt,
        heading: "Customers"
    },
    {
        icon: UilPackage,
        heading: "Products"
    },
    {
        icon: UilChart,
        heading: "Analytics"
    },
];

export const CardsData = [
    {
        title: 'Sales',
        color: {
            background: "linear-gradient(180deg , #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "20,960",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100],

            },
        ],
    },
    {
        title: 'Revenue',
        color: {
            background: "linear-gradient(180deg , #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 80,
        value: "14,960",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Revenue",
                data: [10, 100, 50, 70, 80, 30, 40],
            },
        ],
    },
    {
        title: 'Expenses',
        color: {
            background: "linear-gradient(0deg, rgba(77, 215, 76, 1) 0%, rgba(44, 230, 95, 1) 100%)",
            boxShadow: "0px 10px 20px 0px rgba(44, 230, 95, 1)",
        },
        barValue: 60,
        value: "4,960",
        png: UilClipboardAlt,
        series: [
            {
                name: "Expenses",
                data: [10, 35, 15, 30, 12, 15, 20],

            },
        ],
    },
]