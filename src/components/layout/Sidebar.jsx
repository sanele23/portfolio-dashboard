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
      className={`hidden lg:flex flex-col bg-google-grey-50 dark:bg-google-grey-900 transition-all duration-200 border-r border-google-grey-200 dark:border-google-grey-700 ${
        collapsed ? "w-[56px]" : "w-[240px]"
      }`}
    >
      {/* Logo area */}
      <div className="flex items-center justify-between h-14 px-3 border-b border-google-grey-200 dark:border-google-grey-700">
        {!collapsed && (
          <span className="text-base font-semibold text-google-grey-900 dark:text-google-grey-50 tracking-tight truncate">
            SK's Portfolio
          </span>
        )}
        <button
          onClick={onToggleCollapse}
          className="p-1.5 rounded-full hover:bg-google-grey-200 dark:hover:bg-google-grey-700 transition-colors text-google-grey-700 dark:text-google-grey-300"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <ChevronLeft
            size={20}
            className={`transition-transform duration-200 ${collapsed ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Nav links */}
      <nav className="flex-1 py-1.5 px-1.5 space-y-0.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex items-center w-full rounded-lg px-2.5 py-2 text-sm font-medium transition-colors gap-2.5 ${
                isActive
                  ? "bg-blue-50 dark:bg-blue-900/30 text-google-blue"
                  : "text-google-grey-700 dark:text-google-grey-300 hover:bg-google-grey-200 dark:hover:bg-google-grey-700"
              } ${collapsed ? "justify-center px-0" : ""}`}
              title={item.label}
            >
              <Icon
                size={20}
                className="shrink-0"
                strokeWidth={isActive ? 2.2 : 1.8}
              />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="p-3 border-t border-google-grey-200 dark:border-google-grey-700 text-xs text-google-grey-500 dark:text-google-grey-400">
          © 2026, Sanele Krakra
        </div>
      )}
    </aside>
  );
}
