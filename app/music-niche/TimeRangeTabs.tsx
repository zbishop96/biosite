'use client'
import { Tabs, Tab } from "@nextui-org/react"

export default function TimeRangeTabs() {

  return <Tabs className="my-3">
    <Tab key="short_term" title="Short term"></Tab>
    
    <Tab key="medium_term" title="Medium Term"></Tab>
    
    <Tab key="long_term" title="Long Term"></Tab>
  </Tabs>
  
}