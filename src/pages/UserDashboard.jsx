import Announcements from "../components/userdashboard/DashboardComponents/Announcements";
import MeetingsToday from "../components/userdashboard/DashboardComponents/MeetingsToday";
import StatsCard from "../components/userdashboard/DashboardComponents/StatsCard";
import TaskList from "../components/userdashboard/DashboardComponents/TaskList";

export default function UserDashboard() {
  const statsData = [
    {
      title: "Due Today",
      value: 4,
      percentage: "+12%",
      iconBg: "bg-blue-50",
      percentageBg: "bg-blue-200",
      percentageText: "text-blue-700",
    },
    {
      title: "Pending Tasks",
      value: 12,
      percentage: "+12%",
      iconBg: "bg-orange-50",
      percentageBg: "bg-orange-200",
      percentageText: "text-orange-500",
      iconColor: "text-orange-400",
    },
    {
      title: "Completed Tasks",
      value: 26,
      percentage: "+12%",
      iconBg: "bg-green-50",
      percentageBg: "bg-green-100",
      percentageText: "text-green-600",
      iconColor: "text-green-600",
    },
  ];

  return (
    <div className="w-full  flex flex-col items-center justify-center">
      <div
        className="
      grid grid-cols-1     
      sm:grid-cols-1       
      md:grid-cols-3       
      lg:grid-cols-3        
      gap-6 p-4 justify-items-end-safe w-full 2xl:w-9/10 place-items-center 
  "
      >
        {statsData.map((item, idx) => (
          <div
            key={idx}
            className="
    w-full flex justify-center
    min-w-[220px]
    sm:min-w-60
    md:min-w-[250px] md:max-w-[280px]
    lg:min-w-[220px] lg:max-w-[350px]
    xl:min-w-[300px] xl:max-w-[380px]
    2xl:min-w-[320px] 2xl:max-w-[420px]
  "
          >
            <StatsCard {...item} />
          </div>
        ))}
      </div>
      <div className="grid w-full 2xl:w-9/10 grid-cols-1 lg:grid-cols-20 gap-6 p-4">

  {/* LEFT SIDE — Task List */}
  <div className="  col-span-1 lg:col-span-14">
    <TaskList />
  </div>

  {/* RIGHT SIDE — Announcements + Meetings */}
 <div className="col-span-1 lg:col-span-6 w-full">
  <div className="flex w-full flex-col sm:flex-row lg:flex-col gap-4">

    {/* Make them stretch to full width in both layouts */}
    <div className="w-full sm:w-1/2 lg:w-full">
      <Announcements />
    </div>

    <div className="w-full sm:w-1/2 lg:w-full">
      <MeetingsToday />
    </div>

  </div>
</div>


</div>

    </div>
  );
}
