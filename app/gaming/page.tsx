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
  
  return <div className="px-64 py-16">
      <SteamProfileCard></SteamProfileCard>
      <ul className="grid grid-cols-4 justify-stretch">
        {gamesPlayed.map((game: steamGamesItem) => (
          <li key={game.appid} className="mx-3 my-3"><GameCard game={game}></GameCard></li>
        ))}
      </ul>
    </div>
}

async function getRecentGames() {
  const response = await fetch(`https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${process.env.STEAM_PROFILE_ID}&format=json` , { next: { revalidate: 3600 }})

    const data = await response.json();
    return data.response.games;
}