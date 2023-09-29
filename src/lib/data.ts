import DashboardOff from "@/assets/Dashboard_off.svg";
import DashboardOn from "@/assets/Dashboard_on.svg";
import HelpOff from "@/assets/Help_off.svg";
import HelpOn from "@/assets/Help_on.svg";
import InvoicesOff from "@/assets/Invoices_off.svg";
import InvoicesOn from "@/assets/Invoices_on.svg";
import LogoutOff from "@/assets/Logout_off.svg";
import LogoutOn from "@/assets/Logout_on.svg";
import WalletsOff from "@/assets/My_Wallets_off.svg";
import WalletsOn from "@/assets/My_Wallets_on.svg";
import SettingsOff from "@/assets/Settings_off.svg";
import SettingsOn from "@/assets/Settings_on.svg";
import TransactionsOff from "@/assets/Transactions_off.svg";
import TransactionsOn from "@/assets/Transactions_on.svg";

import BitcoinImg from "@/assets/BitcoinMaglo.png";
import CityBankImg from "@/assets/CityBankMaglo.png";
import FigmaImg from "@/assets/FigmaMaglo.png";
import InstagramImg from "@/assets/InstagramMaglo.png";
import IphoneImg from "@/assets/IphoneMaglo.png";
import NetflixImg from "@/assets/NetflixMaglo.png";
import SajibRahmanImg from "@/assets/SajibRahmanMaglo.png";
import UiHutImg from "@/assets/UIhutMaglo.png";

import DelowarImg from "@/assets/DelowarHossainMaglo.svg";
import JakirImg from "@/assets/JakirAlpMaglo.svg";
import JubedImg from "@/assets/JubedAhmed.svg";
import MoinulImg from "@/assets/MoinulHasan.svg";
import SalehImg from "@/assets/SalehAhmedMaglo.svg";

import PayoneerIcon from "@/assets/Payoneer-logo.png";
import PaypalIcon from "@/assets/Paypal-logo.png";
import RemitlyIcon from "@/assets/Remitly-logo.png";
import WiseIcon from "@/assets/Wise-logo.png";
import FaceboonIcon from "@/assets/facebook-logo.png";
import LinkedinIcon from "@/assets/linkedin-logo.png";

export const sidebar_above_links = [
  {
    icon: DashboardOff,
    icon_active: DashboardOn,
    name: "Dashboard",
    href: "/",
  },
  {
    icon: TransactionsOff,
    icon_active: TransactionsOn,
    name: "Transactions",
    href: "/transactions",
  },
  {
    icon: InvoicesOff,
    icon_active: InvoicesOn,
    name: "Invoices",
    href: "/invoices",
  },
  {
    icon: WalletsOff,
    icon_active: WalletsOn,
    name: "Wallets",
    href: "/wallets",
  },
  {
    icon: SettingsOff,
    icon_active: SettingsOn,
    name: "Settings",
    href: "/settings",
  },
];

export const sidebar_below_links = [
  {
    icon: HelpOff,
    icon_active: HelpOn,
    name: "Help",
    href: "/  ",
  },
  {
    icon: LogoutOff,
    icon_active: LogoutOn,
    name: "Logout",
    href: "/",
  },
];

export const total_card_data = [
  {
    title: "Total Balance",
    amount: 5240.21,
  },
  {
    title: "Total Spending",
    amount: 250.8,
  },
  {
    title: "Total Saved",
    amount: 550.25,
  },
];

export const chartData = [
  { date: "Apr 14", income: 4000, expense: 2000 },
  { date: "Apr 15", income: 6000, expense: 9500 },
  { date: "Apr 16", income: 8000, expense: 10000 },
  { date: "Apr 17", income: 10000, expense: 2000 },
  { date: "Apr 18", income: 2000, expense: 4000 },
  { date: "Apr 19", income: 4000, expense: 6000 },
  { date: "Apr 20", income: 2000, expense: 10000 },
];

export type TransactionsType = {
  product_name: string;
  company_name: string;
  product_type: string;
  product_amount: number;
  transaction_date: string;
  invoiceId: string;
  product_img: string;
};

export const recentTransactions: TransactionsType[] = [
  {
    product_name: "Iphone 15 Pro",
    company_name: "Apple. Inc",
    product_type: "mobile",
    product_amount: 1500,
    transaction_date: "12 Apr 2023 at 10:00 AM",
    invoiceId: "MGL0124877",
    product_img: IphoneImg,
  },
  {
    product_name: "Netflix Subscription",
    company_name: "Netflix",
    product_type: "entertainment",
    product_amount: 100,
    transaction_date: "4 Apr 2023 at 07:00 PM",
    invoiceId: "MGL0124585",
    product_img: NetflixImg,
  },
  {
    product_name: "Figma Subscription",
    company_name: "Figma. Inc",
    product_type: "software",
    product_amount: 244.2,
    transaction_date: "2 Apr 2023 at 11:00 AM",
    invoiceId: "MGL0124124",
    product_img: FigmaImg,
  },
  {
    product_name: "Bitcoin Transaction",
    company_name: "Coinbase",
    product_type: "technology",
    product_amount: 520.84,
    transaction_date: "1 Apr 2023 at 09:00 AM",
    invoiceId: "MGL0128544",
    product_img: BitcoinImg,
  },
  {
    product_name: "Sajib Rahman",
    company_name: "Appsumo",
    product_type: "withdraw",
    product_amount: 500,
    transaction_date: "30 Mar 2023 at 01:32 PM",
    invoiceId: "MGL0122143",
    product_img: SajibRahmanImg,
  },
  {
    product_name: "Instagram Ads",
    company_name: "Meta",
    product_type: "entertainment",
    product_amount: 100,
    transaction_date: "28 Mar 2023 at 12:06 PM",
    invoiceId: "MGL0124877",
    product_img: InstagramImg,
  },
  {
    product_name: "UIHUT Subscription",
    company_name: "UIHUT",
    product_type: "payment",
    product_amount: 85,
    transaction_date: "24 Mar 2023 at 08:40 AM",
    invoiceId: "MGL0124244",
    product_img: UiHutImg,
  },
  {
    product_name: "City Bank Ltd.",
    company_name: "City Bank",
    product_type: "withdraw",
    product_amount: 400.11,
    transaction_date: "15 Mar 2023 at 10:05 AM",
    invoiceId: "MGL0127749",
    product_img: CityBankImg,
  },
];

export type ScheduleTransferType = {
  username: string;
  amount: number;
  schedule_date: string;
  userImg: string;
};

export const scheduleTransferData: ScheduleTransferType[] = [
  {
    username: "Saleh Ahmed",
    schedule_date: "April 28, 2022 at 11:00",
    amount: -435.0,
    userImg: SalehImg,
  },
  {
    username: "Delowar Hossain",
    schedule_date: "April 25, 2022 at 11:00",
    amount: -132.0,
    userImg: DelowarImg,
  },
  {
    username: "Moinul Hasan Nayem",
    schedule_date: "April 25, 2022 at 11:00",
    amount: -826.0,
    userImg: MoinulImg,
  },
  {
    username: "Dr. Jubed Ahmed",
    schedule_date: "April 16, 2022 at 11:00",
    amount: -435.0,
    userImg: JubedImg,
  },
  {
    username: "AR. Jakir Alp",
    schedule_date: "April 14, 2022 at 11:00",
    amount: -228.0,
    userImg: JakirImg,
  },
];

export type InvoicesType = {
  client_name: string;
  invoiceId: string;
  invoice_date: string;
  orders: number;
  invoice_amount: number;
  invoice_status: "pending" | "paid" | "unpaid";
  client_img: string;
};

export const invoicesData: InvoicesType[] = [
  {
    client_name: "Iphone 15 Pro",
    invoice_amount: 1500,
    invoice_date: "12 Apr 2023 at 10:00 AM",
    invoiceId: "MGL0124877",
    client_img: IphoneImg,
    orders: 8,
    invoice_status: "pending",
  },
  {
    client_name: "Netflix Subscription",
    invoice_amount: 100,
    invoice_date: "4 Apr 2023 at 07:00 PM",
    invoiceId: "MGL0124585",
    client_img: NetflixImg,
    orders: 7,
    invoice_status: "paid",
  },
  {
    client_name: "Figma Subscription",
    invoice_amount: 244.2,
    invoice_date: "2 Apr 2023 at 11:00 AM",
    invoiceId: "MGL0124124",
    client_img: FigmaImg,
    orders: 16,
    invoice_status: "unpaid",
  },
  {
    client_name: "Bitcoin Transaction",
    invoice_amount: 520.84,
    invoice_date: "1 Apr 2023 at 09:00 AM",
    invoiceId: "MGL0128544",
    client_img: BitcoinImg,
    orders: 28,
    invoice_status: "paid",
  },
  {
    client_name: "Sajib Rahman",
    invoice_amount: 500,
    invoice_date: "30 Mar 2023 at 01:32 PM",
    invoiceId: "MGL0122143",
    client_img: SajibRahmanImg,
    orders: 2,
    invoice_status: "unpaid",
  },
  {
    client_name: "Instagram Ads",
    invoice_amount: 100,
    invoice_date: "28 Mar 2023 at 12:06 PM",
    invoiceId: "MGL0124877",
    client_img: InstagramImg,
    orders: 5,
    invoice_status: "pending",
  },
  {
    client_name: "UIHUT Subscription",
    invoice_amount: 85,
    invoice_date: "24 Mar 2023 at 08:40 AM",
    invoiceId: "MGL0124244",
    client_img: UiHutImg,
    orders: 18,
    invoice_status: "paid",
  },
  {
    client_name: "City Bank Ltd.",
    invoice_amount: 400.11,
    invoice_date: "15 Mar 2023 at 10:05 AM",
    invoiceId: "MGL0127749",
    client_img: CityBankImg,
    orders: 15,
    invoice_status: "paid",
  },
];

export const upcomingPayment: ScheduleTransferType[] = [
  {
    username: "Facebook Ads",
    schedule_date: "20 Apr 2022, 06:55 PM",
    amount: 400.0,
    userImg: FaceboonIcon,
  },
  {
    username: "LinkedIn Ads",
    schedule_date: "18 Apr 2022, 08:58 PM",
    amount: 200.5,
    userImg: LinkedinIcon,
  },
];

export const regularPayment: ScheduleTransferType[] = [
  {
    username: "Payoneer",
    schedule_date: "20 Apr 2022, 06:55 PM",
    amount: 4350.24,
    userImg: PayoneerIcon,
  },
  {
    username: "Remitly",
    schedule_date: "18 Apr 2022, 08:58 PM",
    amount: 1327.29,
    userImg: RemitlyIcon,
  },
  {
    username: "Wise",
    schedule_date: "15 Apr 2022, 02:55 AM",
    amount: -24.32,
    userImg: WiseIcon,
  },
  {
    username: "Paypal",
    schedule_date: "14 Apr 2022, 07:40 PM",
    amount: -400.65,
    userImg: PaypalIcon,
  },
];
