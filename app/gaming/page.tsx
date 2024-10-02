import GameCard from "./GameCard";
import SteamProfileCard from "./SteamProfileCard";

export interface steamGamesItem {
  appid: string,
  name: string,
  playtime_2weeks: number,
  playtime_forever: number,
  img_icon_url: string,
  img_logo_url: string
}

export default async function Page() {

  const gamesPlayed = await getRecentGames()
  
  return <div className="m-2">
      <ul className="grid grid-cols-2 gap-2 md:grid-cols-4">
        <li className="col-span-2 md:col-span-4"><SteamProfileCard></SteamProfileCard></li>
        {gamesPlayed.map((game: steamGamesItem) => (
          <li key={game.appid}><GameCard game={game}></GameCard></li>
        ))}
      </ul>
    </div>
}

async function getRecentGames() {
  const response = await fetch(`https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${process.env.STEAM_PROFILE_ID}&format=json` , { next: { revalidate: 3600 }})
    const data = await response.json();
    console.log(data.response)
    return data.response.games;
}