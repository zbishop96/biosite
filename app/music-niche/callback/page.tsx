import MusicCard from "../MusicCard";
import RadialMeter from "../RadialMeter";
import TimeRangeTabs from "../TimeRangeTabs";
export interface spotifySongItem {
    name: string,
    id: string,
    artists: spotifyArtistItem[],
    album: spotifyAlbumItem
}

export interface spotifyAlbumItem {
    images: spotifyImageItem[],
    name: string
}

export interface spotifyImageItem {
    url: string,
    height: number,
    width: number
}

export interface spotifyArtistItem {
    id: string,
    name: string
}

export interface spotifyTrackFeatures {
    acousticness: number,
    danceability: number,
    duration_ms: number,
    energy: number,
    intrumentalness: number,
    key: number,
    liveness: number,
    loudness: number,
    speechiness: number,
    tempo: number,
    valence: number
}

export default async function Page({searchParams}: {searchParams: { [key: string]: string | string[] | undefined }}) {
    const code = searchParams['code'];
    const accessToken = await getAccessToken(code as string);
    
    const topSongs = await getTopSongs(accessToken, 'short_term');
    const analysisAverages = await getSongMetrics(topSongs, accessToken);
    const topGenres = await getArtistTopGenres(accessToken);

    return <div className="flex flex-col justify-center items-center">
        <TimeRangeTabs></TimeRangeTabs>
        <h1 className="text-3xl font-bold tracking-wide text-center my-4"> Your Music's Attributes</h1>
        <div className="flex flex-nowrap gap-6">
            <RadialMeter value={analysisAverages.energy * 100} title="Energy"></RadialMeter>
            <RadialMeter value={analysisAverages.danceability * 100} title="Danceability"></RadialMeter>
            <RadialMeter value={analysisAverages.valence * 100} title="Valence"></RadialMeter>
            <RadialMeter value={analysisAverages.acousticness * 100} title="Acousticness"></RadialMeter>
            <RadialMeter value={analysisAverages.speechiness * 100} title="Speechiness"></RadialMeter>
        </div>
        
        <h1 className="text-3xl font-bold tracking-wide text-center my-4 mt-6"> Your Top Songs</h1>



        <ul className="grid gap-0 grid-cols-4 items-start grid-flow-dense">
            {topSongs.map((songInfo: spotifySongItem) => (
                <li key={songInfo.id} className="mx-3 my-3"><MusicCard trackName={songInfo.name} artists={songInfo.artists} album={songInfo.album} /></li>
            ))}
        </ul>
    </div>
}

async function getAccessToken(code: string | undefined) {
    // Exchange authorization code for access token
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(`${process.env.SPOTIFY_CLIENT_ID}` + ':' + `${process.env.SPOTIFY_CLIENT_SECRET}`)
        },
        body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code as string,
        redirect_uri: 'http://localhost:3000/music-niche/callback',
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to fetch access token');
    }

    const data = await response.json();
    const accessToken = data.access_token;
    const expiresIn = data.expires_in;
    const refreshToken = data.refresh_token;

    return accessToken
}

async function getTopSongs(accessToken: string, timeRange: string) {
    const response = await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + `${accessToken}`
        }
    })

    const data = await response.json();
    return data.items;
}

async function getSongMetrics(songs: spotifySongItem[], accessToken: string) {
    let duration_ms: number = 0;
    let energy: number = 0;
    let intrumentalness: number = 0
    let key: number = 0
    let liveness: number = 0
    let loudness: number = 0
    let speechiness: number = 0
    let tempo: number = 0
    let valence: number = 0
    let danceability: number = 0
    let acousticness: number = 0

    await Promise.all(songs.map(async (song) => {
        const response = await fetch(`https://api.spotify.com/v1/audio-features/${song.id}`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + `${accessToken}`
            }
        })

        const data = await response.json();
        duration_ms += data.duration_ms;
        energy += data.energy;
        intrumentalness += data.intrumentalness
        key += data.key
        liveness += data.liveness
        loudness += data.loudness
        speechiness += data.speechiness
        tempo += data.tempo
        valence += data.valence
        danceability += data.danceability
        acousticness += data.acousticness
    }))

    console.log(`loudness: ${loudness / songs.length}`)
    return {
        duration_ms: duration_ms / songs.length,
        energy: energy / songs.length,
        intrumentalness: intrumentalness / songs.length,
        key: key / songs.length,
        liveness: liveness / songs.length,
        loudness: loudness / songs.length,
        speechiness: speechiness / songs.length,
        valence: valence / songs.length,
        danceability: danceability / songs.length,
        acousticness: acousticness / songs.length,
        tempo: tempo / songs.length
    };

}

async function getArtistTopGenres(accessToken: string) {
    const genreMap = new Map<string, number>()
    const response = await fetch('https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=50', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + `${accessToken}`
        }
    })

    const data = await response.json();
    data.items.forEach((artist: {genres: string[]}) => {
        artist.genres.forEach((genre: string) => {
            const count = genreMap.get(genre);
            if (!count) {
                genreMap.set(genre, 1);
            } else {
                genreMap.set(genre, count + 1)
            }
        })
    });

    const genresDescending = new Map(Array.from(genreMap.entries()).sort((a, b) => b[1] - a[1]));
    return genresDescending.keys();
}