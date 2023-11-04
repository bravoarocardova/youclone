import { useSearchParams } from "react-router-dom"
import { CategoryPills } from "components/CategoryPills"
import { VideoPlay } from "components/VideoPlay"
import { WatchNextItem } from "components/WatchNextItem"
import { categories, videos } from "data/home"
import { useState } from "react"
import { Sidebar } from "layouts/Sidebar"
import { useSidebarContext } from "contexts/SidebarContexts"

export const WatchPage = () => {
  const {isLargeOpen} = useSidebarContext()

  const [param] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  const id = param.get('v')
  const video = videos.find(v => v.id === id)

  return (
    <div className="relative">
      {
        isLargeOpen && 
          <div className="absolute bg-white z-1">
            <Sidebar />
          </div>
      }
      <div className="overflow-x-hidden px-8 pb-4">
        <div
          className="grid grid-cols-[1fr,auto] flex-grow-1 overflow-auto gap-4"
        >
            <div className="">
              <VideoPlay {...video!} />
            </div>
          
          <div className="md:w-[400px]">
            <CategoryPills categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory}  />
            <div className="pt-4 flex flex-col gap-2">
              {
                videos.map(video => (
                  <WatchNextItem key={video.id} {...video} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}