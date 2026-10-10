import "./Dashboard.css";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import SkillOverview from "./SkillOverview";
import SkillComparison from "./SkillComparison";
import SkillGaps from "./SkillGaps";
import CareerRoadmap from "./CareerRoadmap";
import RecentAnalysis from "./RecentAnalysis";
import QuickActions from "./QuickActions";
import Profile from "./Profile"; 

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <DashboardHeader />
        <SkillOverview />
        <SkillComparison />
        <SkillGaps />
        <CareerRoadmap />
        <RecentAnalysis />
        <QuickActions />
        <Profile />
      </main>
    </div>
  );
}

export default Dashboard;