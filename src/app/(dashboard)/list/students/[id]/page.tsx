import Announcements from "@/components/Announcements";
import BigCalendarContainer from "@/components/BigCalendarContainer";
import FormContainer from "@/components/FormContainer";
import Performance from "@/components/Performance";
import StudentAttendanceCard from "@/components/StudentAttendanceCard";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Class, Student } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const SingleStudentPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const { sessionClaims } = await auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;

  const student:
    | (Student & { class: Class & { _count: { lessons: number } } })
    | null = await prisma.student.findUnique({
    where: {
      id,
    },
    include: {
      class: {
        include: {
          _count: {
            select: {
              lessons: true,
            },
          },
        },
      },
    },
  });

  if (!student) {
    return notFound();
  }

  return (
    <div className="flex-1 p-4 flex flex-col xl:flex-row gap-4">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        {/* Top */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* User Info Card */}
          <div className="bg-waliSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src={student.img || "/noAvatar.png"}
                alt=""
                width={144}
                height={144}
                className="size-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">
                  {student.name + " " + student.surname}
                </h1>
                {role === "admin" && (
                  <FormContainer table="student" type="update" data={student} />
                )}
              </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 3xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>{student.bloodType}</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 3xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>
                    {new Intl.DateTimeFormat("en-US").format(student.birthday)}
                  </span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 3xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>{student.email || "-"}</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 3xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>{student.phone || "-"}</span>
                </div>
              </div>
            </div>
          </div>
          {/* Small Cards */}
          <div className="flex-1 flex justify-between gap-4 flex-wrap">
            {/* Card */}
            <div className="bg-white rounded-md w-full md:w-[48%] xl:w-[47%] 3xl:w-[48%] p-4 flex gap-4">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
              <Suspense fallback="Loading...">
                <StudentAttendanceCard id={student.id} />
              </Suspense>
            </div>
            {/* Card */}
            <div className="bg-white rounded-md w-full md:w-[48%] xl:w-[47%] 3xl:w-[48%] p-4 flex gap-4">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
              <div>
                <h1 className="text-xl font-semibold">
                  {student.class.name.charAt(0)}th
                </h1>
                <span className="text-sm text-gray-500">Grade</span>
              </div>
            </div>
            {/* Card */}
            <div className="bg-white rounded-md w-full md:w-[48%] xl:w-[47%] 3xl:w-[48%] p-4 flex gap-4">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
              <div>
                <h1 className="text-xl font-semibold">
                  {student.class._count.lessons}
                </h1>
                <span className="text-sm text-gray-500">Lessons</span>
              </div>
            </div>
            {/* Card */}
            <div className="bg-white rounded-md w-full md:w-[48%] xl:w-[47%] 3xl:w-[48%] p-4 flex gap-4">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
              <div>
                <h1 className="text-xl font-semibold">{student.class.name}</h1>
                <span className="text-sm text-gray-500">Class</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1 className="text-xl font-semibold">Student&apos;s Schedule</h1>
          <BigCalendarContainer type="classId" id={student.class.id} />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white rounded-md p-4">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link
              href={`/list/lessons?classId=${2}`}
              className="p-3 rounded-md bg-waliSkyLight"
            >
              Student&apos;s Lessons
            </Link>
            <Link
              href={`/list/teachers?classId=${2}`}
              className="p-3 rounded-md bg-waliPurpleLight"
            >
              Student&apos;s Teachers
            </Link>
            <Link
              href={`/list/exams?classId=${3}`}
              className="p-3 rounded-md bg-pink-50"
            >
              Student&apos;s Exams
            </Link>
            <Link
              href={`/list/assignments?classId=${3}`}
              className="p-3 rounded-md bg-waliSkyLight"
            >
              Student&apos;s Assignments
            </Link>
            <Link
              href={`/list/results?studentId=${"student3"}`}
              className="p-3 rounded-md bg-waliYellowLight"
            >
              Student&apos;s Results
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleStudentPage;
