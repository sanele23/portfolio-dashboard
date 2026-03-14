import { ChevronLeft } from "lucide-react";
import { navItems } from "../../data";

export default function Sidebar({
  activeSection,
  onNavigate,
  collapsed,
  onToggleCollapse,
}) {
  return (
    <aside
      className={`hidden lg:flex flex-col border-r border-google-grey-300 bg-google-grey-50 transition-all duration-200 ${
        collapsed ? "w-[68px]" : "w-[260px]"
      }`}
    >
      {/* Logo area */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-google-grey-200">
        {!collapsed && (
          <span className="text-lg font-semibold text-google-grey-900 tracking-tight truncate">
            SK's Portfolio
          </span>
        )}
        <button
          onClick={onToggleCollapse}
          className="p-2 rounded-full hover:bg-google-grey-200 transition-colors text-google-grey-700"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <ChevronLeft
            size={20}
            className={`transition-transform duration-200 ${collapsed ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Nav links */}
      <nav className="flex-1 py-2 px-2 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex items-center w-full rounded-full px-3 py-2.5 text-sm font-medium transition-colors gap-3 ${
                isActive
                  ? "bg-blue-50 text-google-blue"
                  : "text-google-grey-700 hover:bg-google-grey-200"
              } ${collapsed ? "justify-center px-0" : ""}`}
              title={item.label}
            >
              <Icon size={20} strokeWidth={isActive ? 2.2 : 1.8} />
              {!collapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="p-4 border-t border-google-grey-200 text-xs text-google-grey-500">
          © 2026, Sanele Krakra
        </div>
      )}
    </aside>
  );
}
