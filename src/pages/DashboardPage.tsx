
import { DashboardLayout } from '../components/DashboardLayout';
import { Header } from '../components/Header';
import { StatsRow } from '../components/KPIs';
import { GanttMatching } from '../components/GanttMatching';
import { CostChart } from '../components/CostChart';
import { RecruitmentTable } from '../components/RecruitmentList';

export default function DashboardPage() {
    return (
        <DashboardLayout>
            <Header />

            <StatsRow />

            <div className="grid grid-cols-2 gap-8 h-96">
                <GanttMatching />
                <CostChart />
            </div>

            <RecruitmentTable />
        </DashboardLayout>
    );
}
