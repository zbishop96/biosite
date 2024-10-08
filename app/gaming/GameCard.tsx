import { Card, CardHeader, CardBody, Image } from "@nextui-org/react"
import { steamGamesItem } from "./page"

export default function GameCard({ game }: {game: steamGamesItem}) {
  return <Card className="shadow">
    <CardHeader className="pb-0 pt-2 px-2">
    </CardHeader>
    <CardBody className="overflow-visible gap-2">
        <Image
          alt="Card background"
          className="object-fill"
          src={`https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/header.jpg`}
          isBlurred
        />
        <div className="">
            <h1 className="text-base font-bold line-clamp-1 truncate text-ellipsis">{game.name}</h1>
            <h2 className="text-default-500 line-clamp-1">Time played {(game.playtime_forever / 60).toFixed(1)} hours</h2>
        </div>
      </CardBody>
    </Card>
  
}
