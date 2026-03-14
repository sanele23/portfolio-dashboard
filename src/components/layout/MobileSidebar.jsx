import { X } from "lucide-react";
import { navItems } from "../../data";

export default function MobileSidebar({
  open,
  onClose,
  activeSection,
  onNavigate,
}) {
  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[280px] bg-white border-r border-google-grey-300 shadow-google-modal transform transition-transform duration-200 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-google-grey-200">
          <span className="text-lg font-semibold text-google-grey-900 tracking-tight">
            Portfolio
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-google-grey-200 transition-colors text-google-grey-700"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="py-2 px-2 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  onClose();
                }}
                className={`flex items-center w-full rounded-full px-3 py-2.5 text-sm font-medium transition-colors gap-3 ${
                  isActive
                    ? "bg-blue-50 text-google-blue"
                    : "text-google-grey-700 hover:bg-google-grey-200"
                }`}
              >
                <Icon size={20} strokeWidth={isActive ? 2.2 : 1.8} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
