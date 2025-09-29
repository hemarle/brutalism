
// import BudgetByPlatform from "@/components/BudgetByPlatform"
import AcquisitionChart from "@/components/marketing/acquisition-cost"
import BudgetByPlatform from "@/components/marketing/budget-platform"
import StatsCard from "@/components/marketing/stats-card"
import TimelineTab from "@/components/marketing/timeline-tab"
import TrafficSource from "@/components/marketing/traffic-source"
import {
  TrendingUp,
  Users,
  MessageSquare,
  User,
  Banknote,
  CircleDollarSign,
  Check,
} from "lucide-react"

function Marketing() {
  return (
    <div className="" >
      <div className="flex items-center justify-between ">
<h3>Marketing</h3>
<div className="">
    <TimelineTab/>
</div>

      </div>
<div className="mt-4 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
  <StatsCard
    title="Total Spend"
    value="$12,000"
    previousValue="$10,000"
    change={2000}
    icon={<Banknote color="#7cda31" size={24} /> }
    />
  <StatsCard
    title="Visitor"
    value="1,200"
    previousValue="1,000"
    change={200}
    icon={<Users color="#7cda31" size={24} />}
    />
 
  <StatsCard
    title="Acquisition"
    value="2.5%"
    previousValue="2.0%"
    change={0.5}
    icon={<Check color="#7cda31" className="rounded-full border-2 stroke-2 border-green-500" size={24} />}
    />
  <StatsCard
    title="Revenue"
    value="95%"
    previousValue="90%"
    change={-5}
    icon={<CircleDollarSign color="#7cda31" size={24} />}
  />

  {/* This div spans cols 3–4 and rows 1–2 */}
  <div className=" col-span-2 lg:col-start-3 lg:col-span-2 lg:row-start-1 lg:row-span-2 ">
   <AcquisitionChart/>
   </div>

  <div className="col-span-2">
<TrafficSource/>
  </div>

<div className="col-span-2"><BudgetByPlatform/></div>
</div>
    </div>
  )
}

export default Marketing
