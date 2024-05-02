import MusicCard from "../MusicCard";

export interface spotifySongItem {
    name: string,
    artists: spotifyArtist[],
    album: object[]
}

export interface spotifyArtist {
    name: string
}

export default async function Page({searchParams}: {searchParams: { [key: string]: string | string[] | undefined }}) {
    const code = searchParams['code'];
    const accessToken = await getAccessToken(code as string);
    
    const topSongs = await getTopSongs(accessToken);
    
    return <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold tracking-wide text-center my-4"> Your Top Songs</h1>
        <ul className="grid gap-0 grid-cols-4 items-start grid-flow-dense">
            {topSongs.map((songInfo: spotifySongItem) => (
                <li className="mx-3 my-3"><MusicCard trackName={songInfo.name} artists={songInfo.artists} /></li>
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

async function getTopSongs(accessToken: string) {
    const response = await fetch('https://api.spotify.com/v1/me/top/tracks', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + `${accessToken}`
        }
    })

    const data = await response.json();
    return data.items;
}