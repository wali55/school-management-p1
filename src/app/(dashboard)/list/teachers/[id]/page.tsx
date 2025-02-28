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
                      
                    </div>
                </div>
                {/* Small Cards */}
                <div className="flex-1"></div>
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