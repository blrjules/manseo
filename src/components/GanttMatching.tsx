

export function GanttMatching() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Optimisation du Logement #402 (Paris 17)</h3>

            <div className="space-y-6">
                {/* Timeline Header */}
                <div className="flex text-xs text-gray-400 border-b border-gray-100 pb-2">
                    <div className="w-1/4">Alternant</div>
                    <div className="w-3/4 flex justify-between px-2">
                        <span>Semaine 1</span>
                        <span>Semaine 2</span>
                        <span>Semaine 3</span>
                        <span>Semaine 4</span>
                    </div>
                </div>

                {/* Row 1: Marketing */}
                <div className="flex items-center">
                    <div className="w-1/4">
                        <div className="font-semibold text-sm text-gray-800">Alternant Marketing</div>
                        <div className="text-xs text-gray-500">Nantes / Paris</div>
                    </div>
                    <div className="w-3/4 h-8 bg-gray-50 rounded-full flex relative overflow-hidden">
                        {/* Weeks 2 & 4 active */}
                        <div className="absolute left-[25%] w-[25%] h-full bg-indigo-100 border-l-2 border-indigo-500 flex items-center justify-center text-[10px] text-indigo-700 font-medium">Présent</div>
                        <div className="absolute left-[75%] w-[25%] h-full bg-indigo-100 border-l-2 border-indigo-500 flex items-center justify-center text-[10px] text-indigo-700 font-medium">Présent</div>
                    </div>
                </div>

                {/* Row 2: Finance */}
                <div className="flex items-center">
                    <div className="w-1/4">
                        <div className="font-semibold text-sm text-gray-800">Alternant Finance</div>
                        <div className="text-xs text-gray-500">Lyon / Paris</div>
                    </div>
                    <div className="w-3/4 h-8 bg-gray-50 rounded-full flex relative overflow-hidden">
                        {/* Weeks 1 & 3 active */}
                        <div className="absolute left-0 w-[25%] h-full bg-amber-100 border-l-2 border-amber-500 flex items-center justify-center text-[10px] text-amber-700 font-medium">Présent</div>
                        <div className="absolute left-[50%] w-[25%] h-full bg-amber-100 border-l-2 border-amber-500 flex items-center justify-center text-[10px] text-amber-700 font-medium">Présent</div>
                    </div>
                </div>

                {/* Result Bar */}
                <div className="mt-8 pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-sm font-medium text-gray-700">Taux d'occupation Logement Manseo #402</span>
                        <span className="text-sm font-bold text-manseo-green">100%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-manseo-green rounded-full shadow-[0_0_10px_rgba(0,71,50,0.3)]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
