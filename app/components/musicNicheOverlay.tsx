
import { topSongs } from '../../topSongs'
import { spotifySongItem } from '../music-niche/callback/page'
import MusicCard from '../music-niche/MusicCard'
import { analysisAverages } from '../../analysisAverages'
import RadialMeter
 from '../music-niche/RadialMeter'
import GenreChips from '../music-niche/GenreChips'
import { topGenres } from '@/topGenres'

export default function MusicNicheOverlay() {

  const mySongs = JSON.parse(topSongs)

  return <div className="flex flex-col justify-center items-center max-w-[60%]">
    <h1 className="text-xl lg:text-3xl font-bold tracking-wide text-center my-4 mt-6">My Results from the Music Niche App</h1>
        <div className="flex md:flex-nowrap flex-wrap justify-center gap-3">
            <RadialMeter value={analysisAverages.energy * 100} title="Energy"></RadialMeter>
            <RadialMeter value={analysisAverages.danceability * 100} title="Danceability"></RadialMeter>
            <RadialMeter value={analysisAverages.valence * 100} title="Valence"></RadialMeter>
            <RadialMeter value={analysisAverages.acousticness * 100} title="Acousticness"></RadialMeter>
            <RadialMeter value={analysisAverages.speechiness * 100} title="Speechiness"></RadialMeter>
        </div>
        <h1 className="text-xl lg:text-3xl font-bold tracking-wide text-center my-4 mt-6">Genres from my top artists</h1>
        <GenreChips genres={topGenres}></GenreChips>
        <h1 className="text-xl lg:text-3xl font-bold tracking-wide text-center my-4 mt-6">My Top Songs</h1>
        <ul className="grid gap-0 grid-cols-2 items-start grid-flow-dense max-w-80 max-h-[100%]">
        {mySongs.map((songInfo: spotifySongItem) => (
            <li key={songInfo.id} className="mx-3 my-3"><MusicCard trackName={songInfo.name} artists={songInfo.artists} album={songInfo.album} /></li>
        ))}
        </ul>
  </div>
  
}
