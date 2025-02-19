import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart";
import AttendanceChart from "@/components/AttendanceChart";

const AdminPage = () => {
    return (
        <div className="flex flex-col md:flex-row p-4 gap-2">
          {/* Left */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            {/* User Card */}
            <div className="flex gap-4 justify-between flex-wrap">
              <UserCard type="student" />
              <UserCard type="teacher" />
              <UserCard type="parent" />
              <UserCard type="staff" />
            </div>
            {/* Middle Charts */}
            <div className="flex gap-4 flex-col lg:flex-row">
              {/* Count Chart */}
              <div className="w-full lg:w-1/3 h-[450px]">
                <CountChart />
              </div>
              {/* Attendance Chart */}
              <div className="w-full lg:w-2/3 h-[450px]">
                <AttendanceChart />
              </div>
            </div>
            {/* Bottom Chart */}
            <div></div>
          </div>
          {/* Right */}
          <div className="w-full lg:w-1/3">r</div>
        </div>
    )
}

export default AdminPage;