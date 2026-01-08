import React from 'react';
import { LayoutDashboard, Users, Home, FileText, Settings } from 'lucide-react';
import { cn } from '../lib/utils';
import { NavLink } from 'react-router-dom';

export function Sidebar() {
    const menuItems = [
        { icon: LayoutDashboard, label: 'Tableau de bord', path: '/' },
        { icon: Users, label: 'Mes Recrutements', path: '/recrutements' },
        { icon: Home, label: 'Logements', path: '/logements' },
        { icon: FileText, label: 'Facturation', path: '/facturation' },
    ];

    return (
        <div className="w-[15%] h-screen bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0 z-50 shadow-sm">
            {/* Logo */}
            <div className="p-8 pb-10">
                <img
                    src="/manseo-logo.png"
                    alt="Manseo Corporate"
                    className="h-12 w-auto object-contain"
                />
            </div>

            {/* Menu */}
            <nav className="flex-1 flex flex-col gap-2 px-4">
                {menuItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) => cn(
                            "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer text-decoration-none",
                            isActive
                                ? "bg-manseo-green/10 text-manseo-green"
                                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                        )}
                    >
                        {({ isActive }) => (
                            <>
                                <item.icon className={cn("w-5 h-5", isActive ? "text-manseo-green" : "text-gray-400")} />
                                {item.label}
                            </>
                        )}
                    </NavLink>
                ))}
            </nav>

            {/* User Profile */}
            <div className="p-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border border-gray-100">
                        <img src="https://ui-avatars.com/api/?name=Sophie+Martin&background=random" alt="Sophie Martin" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-gray-900">Sophie Martin</span>
                        <span className="text-xs text-gray-500">DRH - L'Oréal</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
