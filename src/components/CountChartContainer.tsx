import { prisma } from "@/lib/prisma";
import Image from "next/image";
import CountChart from "./CountChart";

const CountChartContainer = async () => {
    const data = await prisma.student.groupBy({
        by:["sex"],
        _count:true
    })

    const boys = data.find((item) => item.sex === "MALE")?._count || 0;
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
              {/* TITLE */}
              <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Students</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
              </div>
              <CountChart />
              {/* BOTTOM */}
              <div className="flex justify-center gap-16">
                <div className="flex flex-col gap-1">
                  <div className="w-5 h-5 bg-waliSky rounded-full" />
                  <h1 className="font-bold">1,234</h1>
                  <h2 className="text-xs text-gray-300">Boys (50%)</h2>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-5 h-5 bg-waliYellow rounded-full" />
                  <h1 className="font-bold">1,234</h1>
                  <h2 className="text-xs text-gray-300">Girls (50%)</h2>
                </div>
              </div>
            </div>
    )
}

export default CountChartContainer;