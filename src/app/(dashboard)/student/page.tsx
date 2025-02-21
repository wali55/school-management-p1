import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const StudentPage = () => {
    return (
        <div className="flex flex-col xl:flex-row p-4 gap-4">
            {/* Left */}
            <div className="w-full xl:w-[72%]">
              <div className="h-full bg-white rounded-md p-4">
                <h1 className="text-xl font-semibold">Schedule (4A)</h1>
                <BigCalendar />
              </div>
            </div>
            {/* Right */}
            <div className="w-full xl:w-[28%] flex flex-col gap-8">
              <EventCalendar />
              <Announcements />
            </div>
        </div>
    )
}

export default StudentPage;