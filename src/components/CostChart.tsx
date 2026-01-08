
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';

const data = [
    {
        name: 'Location Classique (Paris)',
        cost: 850,
    },
    {
        name: 'Solution Manseo',
        cost: 480,
    },
];

export function CostChart() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Comparatif de Coût Mensuel</h3>
            <p className="text-sm text-gray-500 mb-6">Pour un logement T1 à Paris 17ème</p>

            <div className="flex-1 w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        barSize={60}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6b7280', fontSize: 12, fontWeight: 500 }}
                            dy={10}
                        />
                        <YAxis
                            hide
                        />
                        <Tooltip
                            cursor={{ fill: 'transparent' }}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                        />
                        <Bar dataKey="cost" radius={[8, 8, 0, 0]}>
                            {data.map((_entry, index) => (
                                <Cell key={`cell-${index}`} fill={index === 0 ? '#9CA3AF' : '#004732'} />
                            ))}
                            <LabelList
                                dataKey="cost"
                                position="top"
                                formatter={(value: any) => `${value}€`}
                                style={{ fill: '#374151', fontWeight: 'bold', fontSize: 14 }}
                            />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>

                {/* Annotation Arrow Visual Mockup - Absolute positioned overlay */}
                <div className="absolute top-[30%] left-[55%] bg-white border border-manseo-green/30 shadow-sm px-3 py-1.5 rounded-lg flex items-center gap-2 animate-bounce">
                    <span className="text-sm font-bold text-manseo-green">-43% d'économies</span>
                </div>
            </div>
        </div>
    );
}
