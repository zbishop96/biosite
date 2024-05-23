import { Card, CardHeader, CardBody, Image } from "@nextui-org/react"

export default async function SteamProfileCard() {

  const profileData = await getProfileData()
  console.log(profileData)
  return <Card className="shadow max-w-96 min-w-36 mx-3 my-3">
    <CardHeader className="pb-0 pt-2 px-3 items-start">
    </CardHeader>
    <CardBody className="overflow-visible flex-row gap-4 py-3 px-3 items-end">
        <Image
          alt="Card background"
          className="object-cover"
          src={profileData.avatarmedium}
          width={64}
          height={64}
          isBlurred
        />
        <div className="flex-col">
            <h1 className="text-large align-bottom font-bold line-clamp-1">{profileData.gameid === undefined ? `Not currently playing` : `Currently playing ${profileData.gameextrainfo}`}</h1>
        </div>
      </CardBody>
    </Card>
  
}

async function getProfileData() {
    const response = await fetch(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${process.env.STEAM_API_KEY}&steamids=${process.env.STEAM_PROFILE_ID}`, { next: { revalidate: 120 }})
  
    const data = await response.json()
    return data.response.players[0]
  }
  