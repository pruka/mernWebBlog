import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import DashSidebar from "./DashSidebar"
import DashProfile from "./DashProfile"


function Dashboard() {
  const location = useLocation()
  const [tab, setTab] = useState("")
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFormUrl = urlParams.get("tab")
    if (tabFormUrl) {
      setTab(tabFormUrl)
    }
  }, [location.search])
  return (

    <div className="min-h-screen flex flex-col md:flex-row">
      {/*sidebar*/}
      <div className="md:w-56">
        <DashSidebar/>
      </div>
      {/* profile... */}
      {tab === "profile" && <DashProfile/>}
    </div>

  )
}

export default Dashboard