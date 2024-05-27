import { Link, Button, Image } from "@nextui-org/react";

export default function WelcomeCard() {

  return <div className="flex-col gap-y-5 text-center mt-20">
      <h1 className="text-3xl font-bold tracking-wide mb-4">Music Niche</h1>
      <p className="mb-4">Music Niche will pull your information from Spotify to give insights into your listening habits!</p>
      <Link href="/music-niche/api">
        <Button color="primary"  variant="flat" className="mb-4" size="lg">
          <div className="flex flex-row gap-3 items-center">
            <p className="text-white"> Log In with Spotify</p>
            <Image
            alt="Card background"
            className="object-cover"
            src="/Spotify-Icon-Logo.svg"
            width={60}
            height={60}
            />
          </div>
        </Button>
      </Link>
    </div>
}