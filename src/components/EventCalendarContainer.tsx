import Image from "next/image";
import EventList from "./EventList";
import EventCalendar from "./EventCalendar";

const EventCalendarContainer = ({searchParams}: {searchParams: {[keys:string]: string | undefined}}) => {
  const {date} = searchParams;
  return (
    <div className="bg-white w-full rounded-md p-4">
      <EventCalendar />
      <div className="flex items-center justify-between my-4">
        <h1 className="text-xl font-semibold">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        <EventList dateParam={date} />
      </div>
    </div>
  );
};

export default EventCalendarContainer;
