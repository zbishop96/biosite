import * as crypto from 'crypto'
import { redirect } from 'next/navigation';

const generateRandomString = (length: number) => {
    return crypto
    .randomBytes(60)
    .toString('hex')
    .slice(0, length);
  }

export async function GET(request: Request) {
    const clientId = process.env.SPOTIFY_CLIENT_ID
    const scope = 'user-read-private user-read-email user-top-read'
    const redirectUri = 'http://localhost:3000/music-niche/callback'
    const state = generateRandomString(16);

    const queryParams = new URLSearchParams({
        response_type: 'code',
        client_id: clientId!,
        scope: scope,
        redirect_uri: redirectUri,
        state: state
    })
    const res = redirect('https://accounts.spotify.com/authorize?' + queryParams.toString())
    
    return new Response('redirecting to Spotify', {status: 200})
  }