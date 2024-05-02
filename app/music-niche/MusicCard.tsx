import { Card, CardHeader, CardBody, Image } from "@nextui-org/react"
import { spotifyArtist } from "./callback/page"

export default function MusicCard({trackName, artists}: {trackName: string, artists: spotifyArtist[]}) {
  return <Card className="max-w-[300px] shadow">
    <CardHeader className="pb-0 pt-2 px-4 items-start">
    </CardHeader>
    <CardBody className="overflow-visible flex-col gap-4 py-2">
        <Image
          alt="Card background"
          className="object-cover"
          src="https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x2040/750x750/filters:focal(1020x1020:1021x1021):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/20073637/runTheJewels_3_cover.jpg"
          width={240}
          height={240}
          isBlurred
        />
        <div className="flex-col">
            <h1 className="text-large font-bold line-clamp-1 truncate">{trackName}</h1>
            <h2 className="text-default-500 line-clamp-1 truncate">{artists.map((artist) => (
              artist.name
            ))}</h2>
            <h2 className="text-default-500">Album Name</h2>
        </div>
      </CardBody>
    </Card>
  
}
