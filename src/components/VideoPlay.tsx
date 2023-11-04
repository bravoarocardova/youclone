import { Button } from "./Button"
import { MoreHorizontal, Share2, ThumbsDown, ThumbsUp } from "lucide-react"

type VideoPlayProps = {
  id: string
  title: string
  channel: {
    id: string
    name: string
    profileUrl: string
  }
  views: number
  postedAt: Date
  duration: number
  thumbnailUrl: string
  videoUrl: string
}

export const VideoPlay = ({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}: VideoPlayProps) => {
  return (
    <div className="flex flex-col gap-2">
      <video
      className={`rounded-md`}
      // muted
      // playsInline
      autoPlay
      controls
      src={videoUrl}
    />
      <p className="font-bold text-2xl">
        {title}
      </p>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <a href={`/@${channel.id}`} className="flex-shrink-0">
            <img className="w-12 h-12 rounded-full" src={channel.profileUrl} alt="profil images"/>
          </a>
          <div className="flex flex-col">
            <a href={`/@${channel.id}`} className="text-secondary-text text-sm">
              {channel.name}
            </a>
            <div className="text-secondary-text text-sm">
              1k subscriber
            </div>
          </div>
          <Button 
            variant="ghost"
            className="rounded-full bg-neutral-700 text-white hover:text-neutral-700"
          >
            <p>Subscribe</p>
          </Button>
        </div>

        <div className="flex gap-2 items-center">
          <div className="flex items-center gap-0">
            <Button
              variant="ghost"
              className="w-22 hover:text-neutral-700  bg-neutral-700 text-white rounded-l-full"
            >
              <div className="flex">
                <ThumbsUp/>
                <p>781</p>
              </div>
            </Button>
            <div className="h-8 border-l"></div>
            <Button
              variant="ghost"
              className="w-15 hover:text-neutral-700  bg-neutral-700 text-white rounded-r-full"
            >
              <ThumbsDown/>
            </Button>
          </div>
          <Button
            variant="ghost"
            className="hover:text-neutral-700  bg-neutral-700 text-white rounded-full"
          >
            <div className="flex gap-2">
                <Share2/>
                <p>Share</p>
              </div>
          </Button>
          <Button
            variant="ghost"
            className="hover:text-neutral-700  bg-neutral-700 text-white rounded-full">
            <MoreHorizontal />
          </Button>
        </div>
      </div>
    </div>
  )
}