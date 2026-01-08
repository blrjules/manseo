import React from 'react';
import { Sidebar } from './Sidebar';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-[#F5F7FA]">
            <Sidebar />
            <main className="ml-[15%] w-[85%] p-8 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
