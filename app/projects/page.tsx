
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
  <div className="">
    <div className="flex justify-center">
        <div className="md:grid grid-cols-3 lg:max-w-[80%] xl-max-w-[70%] ">
            <Card className="shadow my-3 mx-3 col-span-2 max-w-[600px]">
                <CardHeader className="pb-0 items-start">
                <h1 className="font-semibold text-xl">Machine Learning with Unity</h1>
                </CardHeader>
                <CardBody>
                  <p>Inspired from what I saw B2Studios doing on <Link href={'https://www.youtube.com/@b2stud'} className="text-blue-400 font-semibold">their youtube channel</Link>,
                  I decided to dive into machine learning with Unity. I chose Unity because it is so easy to get started with and has machine learning packages for python to tap into the game engine easily.
                   Because I was largely interested in the ML portion and not in learning Unity, I decided to start with their <Link href={'https://learn.unity.com/course/ml-agents-hummingbirds'} className="text-blue-400 font-semibold">ml-agents tutorial </Link>
                   so that I would have a base Unity project to go off of. From there I was able to apply the same techniques to my own use cases to try and create a well designed reward system that trained agents quickly.
                  Finding the right reward values for the different goals in mind was a careful balancing act that took a lot of trial and error but made for some interesting challenges.
                  </p>
                  <Image
                  src="/hummingbirds.gif"
                  />
                </CardBody>
            </Card>
            <Card className="shadow mx-3 my-3 col-span-2 col-start-2 max-w-[600px]">
                <CardHeader className="pb-0 pt-2 items-start">
                  Halloween Costume Roasting AI
                </CardHeader>
                <CardBody>
                  <p>
                    This was a quick and fun project that acted as a party trick for halloween. Over on the <Link href={'/costumeRoast'} className="text-blue-400 font-semibold"> Costume Roast page</Link>, users would submit a picture of their costume and AI would roast it.
                    For this project I used Claude, as it allowed me to submit the image and prompt in one request which reduced the query time. Most AIs have some restriction on how mean they will be
                    so I had to get creative with the prompt. I prompted Claude to roast the costume and not the person wearing it which was the most successful strategy. This got about an 80% success 
                    rate with the other 20% returning a message along the lines of "I'd rather not do that. I can't be mean.". Overall this was a hit and friends found the results very entertaining.
                    A good line from a roast on a couple dressed as a burrito and a bottle of Tapatio was:<br /> <br /> "Together, they're the dynamic duo of things you'll regret eating at 2 AM. One's wrapped in regret,
                    the other's bottled in disappointment."
                  </p>
                
                </CardBody>
            </Card>
            <Card className="shadow mx-3 my-3 col-span-2 max-w-[600px]">
                <CardHeader className="pb-0 pt-2 items-start">
                  Music Niche
                </CardHeader>
                <CardBody>
                  <p>
                    I initially started with the Spotify API in college where I took on an independent study building an android app that would leverage it. The intent was to build an app where users could 
                    join a session together and collaboratively add to the queue of music to be played. Ultimately I stopped working on that project when I saw news of Spotify developing this exact feature. 
                    More recently, I came back to the Spotify API and discovered the large amount of interesting data they provide but is not available through their UI. This includes their audio analysis of 
                    songs and all of the sub-genres artists are tagged with. The idea for <Link href={'/music-niche'} className="text-blue-400 font-semibold"> Music Niche</Link> was to aggregate this data into a fun UI that would give insights to user's listening habits.
                  </p>
                  <Image
                  src="/musicNiche.png"
                  />
                </CardBody>
            </Card>
            <Card className="shadow mx-3 my-3 col-span-2 col-start-2 max-w-[600px]">
                <CardHeader className="pb-0 pt-2 items-start">
                  Steam API integration
                </CardHeader>
                <CardBody>
                  <p>
                    Steam is a gaming store and platform for PC games. It is a titan in the space, acting as the defacto way to buy and play games. I noticed that they have an API that anyone can request a key 
                  for and use at no cost. This project / integration was largely a continuation of my goal to fill the frontend gap in my experience. Over on the about
                  me 
                  <Link href={'/gaming'} className="text-blue-400 font-semibold"> gaming page</Link>,
                  you can see the games I've been playing recently, how much play time I have in those 
                  games ( please no judgement 💀), and what my current Steam activity is. All of that data is provided by the Steam API.
                  </p>
                  <Image
                  src="/gaming.jpg"
                  />
                </CardBody>
            </Card>

        </div>
    </div>
  </div>
)
}
