import Announcements from "@/components/Announcements";
import BigCalendarContainer from "@/components/BigCalendarContainer";
import EventCalendar from "@/components/EventCalendar";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import "react-big-calendar/lib/css/react-big-calendar.css";

const StudentPage = async () => {
    const {userId} = await auth();

    const classItem = await prisma.class.findMany({
      where: {
        students: {
          some: {
            id: userId!
          }
        }
      }
    })

    return (
        <div className="flex flex-col xl:flex-row p-4 gap-4 flex-1">
            {/* Left */}
            <div className="w-full xl:w-[72%]">
              <div className="h-full bg-white rounded-md p-4">
                <h1 className="text-xl font-semibold">Schedule (4A)</h1>
                <BigCalendarContainer type="classId" id={classItem[0].id} />
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