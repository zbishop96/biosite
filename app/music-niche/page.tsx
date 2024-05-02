import { Link, Button} from "@nextui-org/react";

export default function Page() {
  return <div>
      <h1>Music Niche</h1>
      <p>Music Niche will pull your information from Spotify to give insights into your listening habits!</p>
      <Button as={Link} color="primary" href="#" variant="flat">
            Log In with Spotify
      </Button>
    </div>
}