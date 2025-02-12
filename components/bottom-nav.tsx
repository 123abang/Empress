import Link from "next/link"
import { Home, PieChart, Activity, DollarSign, Settings } from "lucide-react"

const navItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: PieChart, label: "Portfolio", href: "/portfolio" },
  { icon: Activity, label: "Transactions", href: "/transactions" },
  { icon: DollarSign, label: "Markets", href: "/markets" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

export function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg">
      <ul className="flex justify-around">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="flex flex-col items-center p-2 text-gray-700">
              <item.icon className="h-6 w-6" />
              <span className="sr-only">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

