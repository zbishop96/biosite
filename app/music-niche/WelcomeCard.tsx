import { Link, Button, Image } from "@nextui-org/react";
import MusicCard from "./MusicCard";

export default function WelcomeCard() {

  return <div className="flex-col gap-y-5 text-center mt-20">
      <h1 className="text-3xl font-bold tracking-wide mb-4">Music Niche</h1>
      <p className="mb-4">Music Niche will pull your information from Spotify to give insights into your listening habits!</p>
      <Button as={Link} color="primary" href="/music-niche/api" variant="flat" className="mb-4" size="lg">
      <div className="flex flex-row gap-3 items-center">
        <p> Log In with Spotify</p>
        <Image
        alt="Card background"
        className="object-cover"
        src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
        width={30}
        height={30}
        />
        </div>
      </Button>

    </div>
}