
// import BudgetByPlatform from "@/components/BudgetByPlatform"
import AcquisitionChart from "@/components/marketing/acquisition-cost"
import BudgetByPlatform from "@/components/marketing/budget-platform"
import StatsCardContainer from "@/components/marketing/statistics"
import TimelineTab from "@/components/marketing/timeline-tab"
import TrafficSource from "@/components/marketing/traffic-source"
import { TimelineProvider } from "@/contexts/TimelineContext"

function Marketing() {
  return (
    <TimelineProvider>
      <div className="">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <h1 className="text-sm md:text-2xl font-bold text-gray-900">Marketing Dashboard</h1>
          <div className="">
            <TimelineTab/>
          </div>
        </div>
        
        <section id="dashboard-content" className="mt-4" aria-labelledby="stats-heading">
          <h2 id="stats-heading" className="sr-only">Marketing Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
            <div className="">

            <StatsCardContainer />
            </div>

            <div className="">
              <AcquisitionChart/>
            </div>

            <div className="">
              <TrafficSource/>
            </div>

            <div className="">
              <BudgetByPlatform/>
            </div>
          </div>
        </section>
      </div>
    </TimelineProvider>
  )
}

export default Marketing
