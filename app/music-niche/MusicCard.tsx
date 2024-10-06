import { Card, CardHeader, CardBody, Image, Link } from "@nextui-org/react"
import { spotifyArtistItem, spotifyAlbumItem } from "./callback/page"

export default function MusicCard({trackName, artists, album}: {trackName: string, artists: spotifyArtistItem[], album: spotifyAlbumItem}) {
  return <Card className="shadow-lg shadow-slate-800" radius="none">
    <CardHeader className="pb-0 pt-2 px-4 items-start">
    </CardHeader>
    <CardBody className="overflow-visible flex-col py-2">
        <Image
          alt="Card background"
          className="object-cover"
          src={album.images[0].url}
          isBlurred
          radius="none"
        />
        <div className="flex-col">
            <Link href={album.external_urls.spotify}><h1 className="font-bold line-clamp-1 truncate text-ellipsis text-white text-sm md:text-base">{trackName}</h1></Link>
            <h2 className="text-default-500 line-clamp-1 truncate text-ellipsis text-sm lg:text-base">{artists.map(artist => artist.name).join(', ')}</h2>
            <h2 className="text-default-500 line-clamp-1 truncate text-ellipsis text-sm lg:text-base">{album.name}</h2>
        </div>
      </CardBody>
    </Card>
  
}
