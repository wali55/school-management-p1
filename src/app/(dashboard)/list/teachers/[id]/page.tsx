import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import BigCalendarContainer from "@/components/BigCalendarContainer";
import FormContainer from "@/components/FormContainer";
import Performance from "@/components/Performance";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Teacher } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const SingleTeacherPage = async ({params: {id}}: {params: {id: string}}) => {
    const teacher:Teacher & {_count: {subjects: number; lessons: number; classes: number}} | null = await prisma.teacher.findUnique({
      where: {
        id
      },
      include: {
        _count: {
          select: {
            subjects: true,
            lessons: true,
            classes: true,
          }
        }
      }
    })

    if (!teacher) {
      return notFound();
    }

    const {sessionClaims, userId} = await auth();
    const role = (sessionClaims?.metadata as {role?:string})?.role;

    return (
        <div className="flex-1 p-4 flex flex-col xl:flex-row gap-4">
            {/* Left */}
            <div className="w-full xl:w-2/3">
              {/* Top */}
              <div className="flex flex-col lg:flex-row gap-4">
                {/* User Info Card */}
                <div className="bg-waliSky py-6 px-4 rounded-md flex-1 flex gap-4">
                    <div className="w-1/3">
                      <Image src={teacher.img || "/noAvatar.png"} alt="" width={144} height={144} className="size-36 rounded-full object-cover" />
                    </div>
                    <div className="w-2/3 flex flex-col justify-between gap-4">
                      <h1 className="text-xl font-semibold">{teacher.name + " " + teacher.surname}</h1>
                      {role === "admin" && (
                        <FormContainer table="teacher" type="update" data={teacher} />
                      )}
                      <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                        <div className="w-full md:w-1/3 lg:w-full 3xl:w-1/3 flex items-center gap-2">
                            <Image src="/blood.png" alt="" width={14} height={14} />
                            <span>{teacher.bloodType}</span>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-full 3xl:w-1/3 flex items-center gap-2">
                            <Image src="/date.png" alt="" width={14} height={14} />
                            <span>{new Intl.DateTimeFormat("en-US").format(teacher.birthday)}</span>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-full 3xl:w-1/3 flex items-center gap-2">
                            <Image src="/mail.png" alt="" width={14} height={14} />
                            <span>{teacher.email || "-"}</span>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-full 3xl:w-1/3 flex items-center gap-2">
                            <Image src="/phone.png" alt="" width={14} height={14} />
                            <span>{teacher.phone || "-"}</span>
                        </div>
                      </div>
                    </div>
                </div>
                {/* Small Cards */}
                <div className="flex-1 flex justify-between gap-4 flex-wrap">
                    {/* Card */}
                    <div className="bg-white rounded-md w-full md:w-[48%] xl:w-[47%] 3xl:w-[48%] p-4 flex gap-4">
                      <Image src="/singleAttendance.png" alt="" width={24} height={24} className="size-6" />
                      <div>
                        <h1 className="text-xl font-semibold">90%</h1>
                        <span className="text-sm text-gray-500">Attendance</span>
                      </div>
                    </div>
                    {/* Card */}
                    <div className="bg-white rounded-md w-full md:w-[48%] xl:w-[47%] 3xl:w-[48%] p-4 flex gap-4">
                      <Image src="/singleBranch.png" alt="" width={24} height={24} className="size-6" />
                      <div>
                        <h1 className="text-xl font-semibold">{teacher._count.subjects}</h1>
                        <span className="text-sm text-gray-500">Branches</span>
                      </div>
                    </div>
                    {/* Card */}
                    <div className="bg-white rounded-md w-full md:w-[48%] xl:w-[47%] 3xl:w-[48%] p-4 flex gap-4">
                      <Image src="/singleLesson.png" alt="" width={24} height={24} className="size-6" />
                      <div>
                        <h1 className="text-xl font-semibold">{teacher._count.lessons}</h1>
                        <span className="text-sm text-gray-500">Lessons</span>
                      </div>
                    </div>
                    {/* Card */}
                    <div className="bg-white rounded-md w-full md:w-[48%] xl:w-[47%] 3xl:w-[48%] p-4 flex gap-4">
                      <Image src="/singleClass.png" alt="" width={24} height={24} className="size-6" />
                      <div>
                        <h1 className="text-xl font-semibold">{teacher._count.classes}</h1>
                        <span className="text-sm text-gray-500">Classes</span>
                      </div>
                    </div>
                </div>
              </div>
              {/* Bottom */}
              <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
                <h1 className="text-xl font-semibold">Teacher&apos;s Schedule</h1>
                <BigCalendarContainer type="teacherId" id={userId!} />
              </div>
            </div>
            {/* Right */}
            <div className="w-full xl:w-1/3 flex flex-col gap-4">
              <div className="bg-white rounded-md p-4">
                <h1 className="text-xl font-semibold">Shortcuts</h1>
                <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
                  <Link href={`/list/classes?supervisorId=${"teacher11"}`} className="p-3 rounded-md bg-waliSkyLight">Teacher&apos;s Classes</Link>
                  <Link href={`/list/students?teacherId=${"teacher2"}`} className="p-3 rounded-md bg-waliPurpleLight">Teacher&apos;s Students</Link>
                  <Link href={`/list/lessons?teacherId=${"teacher2"}`} className="p-3 rounded-md bg-waliYellowLight">Teacher&apos;s Lessons</Link>
                  <Link href={`/list/exams?teacherId=${"teacher3"}`} className="p-3 rounded-md bg-pink-50">Teacher&apos;s Exams</Link>
                  <Link href={`/list/assignments?teacherId=${"teacher3"}`} className="p-3 rounded-md bg-waliSkyLight">Teacher&apos;s Assignments</Link>
                </div>
              </div>
              <Performance />
              <Announcements />
            </div>
        </div>
    )
}

export default SingleTeacherPage;


