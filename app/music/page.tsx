import { topSongs } from '../../topSongs'
import { spotifySongItem } from '../music-niche/callback/page'
import MusicCard from '../music-niche/MusicCard'
import { analysisAverages } from '../../analysisAverages'
import RadialMeter
 from '../music-niche/RadialMeter'
import GenreChips from '../music-niche/GenreChips'
import { topGenres } from '@/topGenres'

export default function Page() {

  const mySongs = JSON.parse(topSongs)

  return <div className="flex flex-col justify-center items-center">
    <h1 className="text-3xl font-bold tracking-wide text-center my-4 mt-6">My Results from the Music Niche App</h1>
        <div className="flex flex-nowrap gap-6">
          <RadialMeter value={analysisAverages.energy * 100} title="Energy"></RadialMeter>
          <RadialMeter value={analysisAverages.danceability * 100} title="Danceability"></RadialMeter>
          <RadialMeter value={analysisAverages.valence * 100} title="Valence"></RadialMeter>
          <RadialMeter value={analysisAverages.acousticness * 100} title="Acousticness"></RadialMeter>
          <RadialMeter value={analysisAverages.speechiness * 100} title="Speechiness"></RadialMeter>
      </div>
      <GenreChips genres={topGenres}></GenreChips>
      <h1 className="text-3xl font-bold tracking-wide text-center my-4 mt-6">My Top Songs</h1>
      <ul className="grid gap-0 grid-cols-6 items-start grid-flow-dense">
        {mySongs.map((songInfo: spotifySongItem) => (
            <li key={songInfo.id} className="mx-3 my-3"><MusicCard trackName={songInfo.name} artists={songInfo.artists} album={songInfo.album} /></li>
        ))}
      </ul>
    </div>
  
}
