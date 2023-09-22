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
