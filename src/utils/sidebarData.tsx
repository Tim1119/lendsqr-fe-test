import {ReactComponent as SwitchOrganisation} from "../assets/images/switch-organisations.svg"
import {ReactComponent as Dashboard} from "../assets/images/dashboard.svg"
import {ReactComponent as Users} from "../assets/images/users.svg"
import {ReactComponent as Guarantors} from "../assets/images/gurantors.svg"
import {ReactComponent as Loans} from "../assets/images/loans.svg"
import {ReactComponent as DecisionModels} from "../assets/images/decision-models.svg"
import {ReactComponent as Savings} from "../assets/images/savings.svg"
import {ReactComponent as LoanRequests} from "../assets/images/loan-requests.svg"
import {ReactComponent as Whitelist} from "../assets/images/whitelists.svg"
import {ReactComponent as Karma} from "../assets/images/karma.svg"
import {ReactComponent as Organization} from "../assets/images/organization.svg"
import {ReactComponent as LoanProducts} from "../assets/images/loan-products.svg"
import {ReactComponent as FeesAndCharges} from "../assets/images/fees-and-charges.svg"
import {ReactComponent as Transactions} from "../assets/images/transactions.svg"
import {ReactComponent as Services} from "../assets/images/services.svg"
import {ReactComponent as ServicesAccount} from "../assets/images/service-accounts.svg"
import {ReactComponent as Setttlements} from "../assets/images/settlements.svg"
import {ReactComponent as Reports} from "../assets/images/reports.svg"
import {ReactComponent as Preferences} from "../assets/images/preferences.svg"
import {ReactComponent as FeesAndPricing} from "../assets/images/fees-and-pricing.svg"
import {ReactComponent as AuditLogs} from "../assets/images/audit-logs.svg"
import {ReactComponent as SavingProducts} from "../assets/images/saving-products.svg"
 





export const sidebarNavItems = [
	{
		title: 'Switch Organization',
		icon: <SwitchOrganisation className="sidebar__icon" />,
		link: '#',
		id: 1,
	},
	{
		title: 'Dashboard',
		icon: <Dashboard className="sidebar__icon" />,
		link: '/dashboard',
		id: 2,
	},
	{
		title: 'Customers',
		header: true,
		link: '',
		id: 3,
	},
	{
		title: 'Users',
		icon:  <Users className="sidebar__icon" />,
		link: '/dashboard/users',
		id: 4,
		selected:true,
	},
	{
		title: 'Guarantors',
		icon: <Guarantors className="sidebar__icon" />,
		link: '#',
		id: 5,
	},
	{
		title: 'Loans',
		icon: <Loans className="sidebar__icon" />,
		link: '#',
		id: 6,
	},
	{
		title: 'Decision Models',
		icon: <DecisionModels className="sidebar__icon" />,
		link: '#',
		id: 7,
	},
	{
		title: 'Savings',
		icon: <Savings className="sidebar__icon" />,
		link: '#',
		id: 8,
	},
	{
		title: 'Loan Requests',
		icon: <LoanRequests className="sidebar__icon" />,
		link: '#',
		id: 9,
	},
	{
		title: 'Whitelist',
		icon: <Whitelist className="sidebar__icon" />,
		link: '#',
		id: 10,
	},
	{
		title: 'Karma',
		icon: <Karma className="sidebar__icon" />,
		link: '#',
		id: 11,
	},
	{
		title: 'Businesses',
		header: true,
		link: '',
		id: 12,
	},
	{
		title: 'Organization',
		icon:<Organization className="sidebar__icon" />,
		link: '#',
		id: 13,
	},
	{
		title: 'Loan Products',
		icon: <LoanProducts className="sidebar__icon" />,
		link: '#',
		id: 14,
	},
	{
		title: 'Savings Products',
		icon: <SavingProducts className="sidebar__icon" />,
		link: '#',
		id: 15,
	},
	{
		title: 'Fees and Charges',
		icon: <FeesAndCharges className="sidebar__icon" />,
		link: '#',
		id: 16,
	},
	{
		title: 'Transactions',
		icon: <Transactions className="sidebar__icon" />,
		link: '#',
		id: 17,
	},
	{
		title: 'Services',
		icon: <Services className="sidebar__icon" />,
		link: '#',
		id: 18,
	},
	{
		title: 'Service Account',
		icon: <Services className="sidebar__icon" />,
		link: '#',
		id: 19,
	},
	{
		title: 'Settlements',
		icon: <Setttlements className="sidebar__icon" />,
		link: '#',
		id: 20,
	},
	{
		title: 'Reports',
		icon: <Reports className="sidebar__icon" />,
		link: '#',
		id: 21,
	},
	{
		title: 'Settings',
		header: true,
		link: '',
		id: 22,
	},
	{
		title: 'Preferences',
		icon: <Preferences className="sidebar__icon" />,
		link: '#',
		id: 23,
	},
	{
		title: 'Fees and Pricing',
		icon: <Preferences className="sidebar__icon" />,
		link: '#',
		id: 24,
	},
	{
		title: 'Audit Logs',
		icon: <AuditLogs className="sidebar__icon" />,
		link: '#',
		id: 25,
	},
];

export const usersStats = [
	{
		title: 'Users',
		icon: '/images/icons/user-stat-icon-1.svg',
		count: '2,453',
	},
	{
		title: 'Active Users',
		icon: '/images/icons/user-stat-icon-2.svg',
		count: '2,453',
	},
	{
		title: 'Users with loans',
		icon: '/images/icons/user-stat-icon-3.svg',
		count: '12,453',
	},
	{
		title: 'Users with savings',
		icon: '/images/icons/user-stat-icon-4.svg',
		count: '102,453',
	},
];
