import { Link } from "react-router-dom"
import { formatDuration } from "utils/formatDuration"
import { formatTimeAgo } from "utils/formatTimeAgo"
import { VIEW_FORMATTER } from "utils/formatView"

type WatchNextItemProps = {
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

export const WatchNextItem = ({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}: WatchNextItemProps) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Link to={`/watch?v=${id}`} className="relative">
        <img src={thumbnailUrl} alt=""
          className={`block w-full h-full object-cover rounded-xl`}
        />
        <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
          {formatDuration(duration)}
        </div>
      </Link>
      <div>
        <Link to={`/watch?v=${id}`} className="line-clamp-2">
          {title}
        </Link>
        <Link to={`/@${channel.id}`} 
          className="text-secondary-text text-sm"
        >
          {channel.name}
        </Link>
        <div className="text-secondary-text text-sm">
            {VIEW_FORMATTER.format(views)} Views • {formatTimeAgo(postedAt)}
          </div>
      </div>
    </div>
  )
}