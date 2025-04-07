import Announcements from "@/components/Announcements";
import BigCalendarContainer from "@/components/BigCalendarContainer";
import "react-big-calendar/lib/css/react-big-calendar.css";

const TeacherPage = () => {
    return (
        <div className="flex flex-col xl:flex-row p-4 gap-4 flex-1">
            {/* Left */}
            <div className="w-full xl:w-[72%]">
              <div className="h-full bg-white rounded-md p-4">
                <h1 className="text-xl font-semibold">Schedule</h1>
                <BigCalendarContainer />
              </div>
            </div>
            {/* Right */}
            <div className="w-full xl:w-[28%] flex flex-col gap-8">
              <Announcements />
            </div>
        </div>
    )
}

export default TeacherPage;