import { Card, CardHeader, CardBody, Image } from "@nextui-org/react"
import { spotifyArtistItem, spotifyAlbumItem } from "./callback/page"

export default function MusicCard({trackName, artists, album}: {trackName: string, artists: spotifyArtistItem[], album: spotifyAlbumItem}) {
  return <Card className="max-w-[220px] shadow-lg shadow-slate-800">
    <CardHeader className="pb-0 pt-2 px-4 items-start">
    </CardHeader>
    <CardBody className="overflow-visible flex-col gap-4 py-2">
        <Image
          alt="Card background"
          className="object-cover"
          src={album.images[0].url}
          width={240}
          height={240}
          isBlurred
        />
        <div className="flex-col">
            <h1 className="text-large font-bold line-clamp-1 truncate text-ellipsis">{trackName}</h1>
            <h2 className="text-default-500 line-clamp-1 truncate text-ellipsis">{artists.map(artist => artist.name).join(', ')}</h2>
            <h2 className="text-default-500 line-clamp-1 truncate text-ellipsis">{album.name}</h2>
        </div>
      </CardBody>
    </Card>
  
}
