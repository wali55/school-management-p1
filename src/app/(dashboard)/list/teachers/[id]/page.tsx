import Image from "next/image";

const SingleTeacherPage = () => {
    return (
        <div className="flex-1 p-4 flex flex-col xl:flex-row gap-4">
            {/* Left */}
            <div className="w-full xl:w-2/3">
              {/* Top */}
              <div className="flex flex-col lg:flex-row gap-4">
                {/* User Info Card */}
                <div className="bg-waliSky py-6 px-4 rounded-md flex-1 flex gap-4">
                    <div className="w-1/3">
                      <Image src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" width={144} height={144} className="size-36 rounded-full object-cover" />
                    </div>
                    <div className="w-2/3 flex flex-col justify-between gap-4">
                      <h1 className="text-xl font-semibold">Leonard Snyder</h1>
                      <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                        <div className="w-full md:w-1/3 lg:w-full 3xl:w-1/3 flex items-center gap-2">
                            <Image src="/blood.png" alt="" width={14} height={14} />
                            <span>A+</span>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-full 3xl:w-1/3 flex items-center gap-2">
                            <Image src="/date.png" alt="" width={14} height={14} />
                            <span>January 2025</span>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-full 3xl:w-1/3 flex items-center gap-2">
                            <Image src="/mail.png" alt="" width={14} height={14} />
                            <span>user@gmail.com</span>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-full 3xl:w-1/3 flex items-center gap-2">
                            <Image src="/phone.png" alt="" width={14} height={14} />
                            <span>+1 234 567</span>
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
                        <h1 className="text-xl font-semibold">2</h1>
                        <span className="text-sm text-gray-500">Branches</span>
                      </div>
                    </div>
                    {/* Card */}
                    <div className="bg-white rounded-md w-full md:w-[48%] xl:w-[47%] 3xl:w-[48%] p-4 flex gap-4">
                      <Image src="/singleLesson.png" alt="" width={24} height={24} className="size-6" />
                      <div>
                        <h1 className="text-xl font-semibold">6</h1>
                        <span className="text-sm text-gray-500">Lessons</span>
                      </div>
                    </div>
                    {/* Card */}
                    <div className="bg-white rounded-md w-full md:w-[48%] xl:w-[47%] 3xl:w-[48%] p-4 flex gap-4">
                      <Image src="/singleClass.png" alt="" width={24} height={24} className="size-6" />
                      <div>
                        <h1 className="text-xl font-semibold">6</h1>
                        <span className="text-sm text-gray-500">Classes</span>
                      </div>
                    </div>
                </div>
              </div>
              {/* Bottom */}
              <div></div>
            </div>
            {/* Right */}
            <div className="w-full xl:w-1/3">r</div>
        </div>
    )
}

export default SingleTeacherPage;