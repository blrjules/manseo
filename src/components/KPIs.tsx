import React from 'react';
import { TrendingUp, Users, CheckCircle, Award } from 'lucide-react';
import { cn } from '../lib/utils';

interface KPIProps {
    title: string;
    value: string;
    subtext: string;
    trend?: string;
    icon: React.ElementType;
    className?: string;
    iconColor?: string;
}

function KPICard({ title, value, subtext, trend, icon: Icon, className, iconColor }: KPIProps) {
    return (
        <div className={cn("bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-36", className)}>
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-medium text-gray-500">{title}</p>
                    <h3 className="text-3xl font-bold text-gray-900 mt-1">{value}</h3>
                </div>
                <div className={cn("p-2 rounded-lg bg-gray-50", iconColor)}>
                    <Icon className="w-5 h-5 text-current" />
                </div>
            </div>
            <div className="flex items-center gap-2">
                {trend && <span className="text-xs font-semibold text-manseo-green bg-green-50 px-2 py-0.5 rounded-full">{trend}</span>}
                <span className="text-xs text-gray-400">{subtext}</span>
            </div>
        </div>
    );
}

export function StatsRow() {
    return (
        <div className="grid grid-cols-4 gap-6 mb-8">
            <KPICard
                title="Alternants Logés"
                value="42"
                trend="+8 ce mois"
                subtext="Total actifs"
                icon={Users}
                iconColor="text-manseo-green"
            />
            <KPICard
                title="Désistements Évités"
                value="5"
                trend="15k€ Gain"
                subtext="Estimé sur la période"
                icon={CheckCircle}
                iconColor="text-manseo-green"
            />
            <KPICard
                title="Économie / Alternant"
                value="240€"
                trend="-40%"
                subtext="vs Moyenne Marché"
                icon={TrendingUp}
                iconColor="text-manseo-green"
            />
            <KPICard
                title="Satisfaction Candidat"
                value="4.9/5"
                subtext="Label Top Employer"
                icon={Award}
                iconColor="text-gold-accent"
            />
        </div>
    );
}
