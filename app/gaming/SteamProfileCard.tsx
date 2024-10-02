import { Card, CardHeader, CardBody, Image } from "@nextui-org/react"

export default async function SteamProfileCard() {

  const profileData = await getProfileData()
  let profileStatus = 'Currently offline'
  if (profileData.personastate === 1 && profileData.gameid === undefined) {
    profileStatus = 'Currently online'
  } else if (profileData.personastate === 1 && profileData.gameid) {
    profileStatus = `Currently playing ${profileData.gameextrainfo}`
  } else if (profileData.personastate === 3) {
    profileStatus = 'Currently away'
  }

  return <Card className="shadow">
    <CardBody className="overflow-visible flex-row gap-3 items-end">
        <Image
          alt="Card background"
          className="object-cover max-h-12 shadow md:max-h-24"
          src={profileData.avatarmedium}
          isBlurred
        />
        <div className="flex-col">
            <h1 className="text-large font-bold line-clamp-1">{profileData.personaname}</h1>
            <h1 className="text-base font-semibold line-clamp-1">{profileStatus}</h1>
        </div>
      </CardBody>
    </Card>
  
}

async function getProfileData() {
    const response = await fetch(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${process.env.STEAM_API_KEY}&steamids=${process.env.STEAM_PROFILE_ID}`, { next: { revalidate: 10 }})
    const data = await response.json()
    return data.response.players[0]
  }
  