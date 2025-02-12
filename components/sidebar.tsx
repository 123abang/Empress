import Link from "next/link"
import { Home, PieChart, Activity, DollarSign, Settings, TrendingUp } from "lucide-react"

const navItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: PieChart, label: "Portfolio", href: "/portfolio" },
  { icon: Activity, label: "Transactions", href: "/transactions" },
  { icon: DollarSign, label: "Markets", href: "/markets" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

export function Sidebar() {
  return (
    <div className="hidden md:block w-64 bg-white h-full shadow-lg">
      <nav className="mt-4">
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

