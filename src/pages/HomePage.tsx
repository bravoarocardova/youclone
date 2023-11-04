import { CategoryPills } from "components/CategoryPills";
import { VideoGridItem } from "components/VideoGridItem";
import { categories, videos } from "data/home";
import { Sidebar } from "layouts/Sidebar";
import { useState } from "react";

export const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  return (
    <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
      <Sidebar />
      <div className="overflow-x-hidden px-8 pb-4">
        <div className="sticky top-0 bg-white z-10 pb-4">
          <CategoryPills categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
        </div>
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {videos.map(video => (
            <VideoGridItem key={video.id} {...video} />
          ))}
        </div>
      </div>
    </div>
  )
}