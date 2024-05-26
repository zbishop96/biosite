import { Button, Chip, Image } from "@nextui-org/react"
import Link from "next/link"

export default function Home() {
  return <div className="flex justify-center my-6 mx-6 gap-6">
          <div className="flex flex-col">
            <Image
              className="object-cover"
              src='/profilePic.jpg'
              alt="profilePic"
              width={300}
              height={300}
              isBlurred
              radius="full"
            />
            <div className="flex flex-row mx-3 my-3 gap-3 justify-center">
            <a href="https://github.com/zbishop96">
              <Button className="flex-1 bg-gradient-to-tr from-sky-500 to-blue-800" >
              <Image
                  className="object-cover"
                  src="/github-mark.svg"
                  width={30}
                  height={30}
                  isBlurred
                  radius="none"
                />
                Github
              </Button>
              </a>
              <a href="https://www.linkedin.com/in/zbishop96/">
                <Button className="flex-1 bg-gradient-to-tl from-sky-500 to-blue-800" variant="shadow">
                  <Image
                    className="object-cover"
                    src="/In-White-72.png"
                    width={30}
                    height={30}
                    isBlurred
                    radius="none"
                  />
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>
      <div className="flex flex-col size-1/2">
        <p className="font-sans">Hello! I'm Zach, a Seattle based full stack web developer currently looking for new opportunities.
          My experience has been primarily in PHP and Typescript development but I am always looking to learn something new. This site acts as a portfolio
          as well as a way to share my interests. Have a look around!
        </p>
        <h1 className="text-xl font-bold mt-3">Experience</h1>
        <h2 className="text-large font-semibold text-sky-300 mt-2">TaxBit</h2>
        <p>
          My last position was at TaxBit, a company providing tax services for cryptocurrency transactions. I worked on the forms team, responsible for
          generating tax forms for users and filing them with the IRS. I was active across the entire stack of technologies including but not limited to:
        </p>
        <div className="flex flex-row flex-wrap justify-center gap-2 my-2">
          <Chip className="bg-blue-500">Typescript / NodeJS backend</Chip>
          <Chip className="bg-gradient-to-br from-slate-800 to-blue-500">Typescript React frontend</Chip>
          <Chip className="bg-gradient-to-b from-slate-800 to-blue-700">AWS DynamoDB</Chip>
          <Chip className="bg-orange-600">AWS RDS PostgreSQL</Chip>
          <Chip className="bg-green-700">AWS Cloudformation / Terraform</Chip>
          <Chip className="bg-gradient-to-br from-blue-700 to-yellow-400">Python</Chip>
          <Chip className="bg-orange-600">AWS ECS / Docker</Chip>
          <Chip className="bg-orange-600">AWS Lambda</Chip>
      </div>
        <p>
          Initially, the codebase was heavily dependent on AWS Lambdas. As things scaled and modernized, it made more sense to transition many of the microservices
          to ECS where they were more readily available without cold-starts. In my time at TaxBit, I worked on some great projects including several built from scratch
          starting with some vague requirements. One of those projects was the FIRE file service. FIRE files are a specific format from the IRS that include all of the
          required information to sumbit taxes for a set of users. This was a particularly complex project as the tax code is anything but simple. Adding on top of that,
          users are able to submit corrections to their taxes in which a new FIRE file has to be created as a diff of their previous transactions and the new correction.
        </p>
        <h2 className="text-large font-semibold text-orange-500 mt-2">Quantivate</h2>
        <p>
          My first position was at Quantivate, a governance and risk compliance software company. Typically used by banks and credit unions, Quantivate's software enabled
          users to create custom workflows and reporting around federally required processes. This meant the platform was incredibly dynamic as it was all user content driven.
          The tech stack at Quantivate was a typical LAMP stack:
        </p>
        <div className="flex flex-row flex-wrap justify-center gap-2 my-2">
            <Chip className="bg-gradient-to-br from-slate-900 to-yellow-500">Linux</Chip>
            <Chip className="bg-gradient-to-br from-purple-800 to-orange-400">Apache</Chip>
            <Chip className="bg-gradient-to-r from-blue-600 to-orange-500">MySQL</Chip>
            <Chip className="bg-purple-500">PHP</Chip>
            <Chip className="bg-yellow-500">Javascript</Chip>
            <Chip className="bg-orange-700">Laravel</Chip>
        </div>
        <p>When I joined Quantivate, they were missing a lot of tech that I would consider necessary and standard pratice. I personally built out a CI/CD pipeline, added testing
          as next to nothing existed beforehand, and built a docker container to normalize the local development process. "It works on my machine" was a common occurence prior.
          Following that I worked on modernizing the codebase which was a mess including PHP functions 1000 lines long. We then had the opportunity to rebuild the reporting side
          of the software from scratch which let me introduce a framework, Laravel, and a fresh DB schema that was actually human-readable. Quantivate had an incredibly small
          engineering team of 5-6. With some devs in and out the door, I quickly became one of the most knowledgable about how Quantivate works and led the reporting rebuild
          project.
        </p>
        <h1 className="text-xl font-bold mt-3">Interests</h1>
        <h2 className="text-large font-semibold mt-2">Movies</h2>
        <p>Movies are a big interest of mine as I actually started college as a cinema / media communications major! I was looking to do visual effects for movies. I had started
          with some simple projects in highschool that made use of greenscreens and some 3d rendering. Now I keep up with it by occasionally editing together short clips from
          hanging out with friends into longer videos. My favorite directors are Edgar Wright and Christopher Nolan, and my favorites from them are Hot Fuzz and The Prestige respectively.
        </p>
        <h2 className="text-large font-semibold mt-2">Gaming</h2>
        <p>I've invested a significant amount of time into playing games over the years and still can't get enough from competitive team games. My peak competitive game was Rocket League,
          a game I landed in the top 0.2% of players and started a team for in college. I recruited players, organized practice and matches, and played in the Tespa collegiate qualifiers and
          open season. In the open season we managed to beat teams from schools 10x the size such as the University of Washington! You can see what I've been playing recently on the
          <Link href={"/gaming"} className="font-semibold text-blue-400"> gaming page.</Link>
        </p>
        <h2 className="text-large font-semibold mt-2">Art</h2>
        <p>
          I'm not personally an artist but I've definitely curated a specific taste. I've gotten into street art but I distinctly seperate that from graffiti or tagging.
          I like big loud murals and strong colors in art. My favorite street artists are Sofles out of Australia and Digital Does out of the Netherlands. Both of them
          have very distinct and striking styles that really pop in my opinion. If you're anything like me, you might like some of the artists / art over on the
          <Link href={"/gaming"} className="font-semibold text-blue-400"> art page.</Link>
        </p>
        <h2 className="text-large font-semibold mt-2">Music</h2>
        <p>
          If I'm not talking to someone, I'm probably listening to music. I like to think I've got pretty broad tastes and can enjoy a large range of music. My favorite genres are
          hip hop, rock, and edm. I love going to concerts and have had the opportunity to see some great artists recently! The next big music event for me is the When We Were Young
          festival in October this year. If you want to see a bit more about what I've been listening to, check out the
          <Link href={"/music"} className="font-semibold text-blue-400"> Music Page</Link>.
          Alternatively, get better insight into your own music tastes with
          <Link href={"/music-niche"} className="font-semibold text-blue-400"> Music Niche</Link>
          , a project of mine that leverages the Spotify API to gather data about your listening habits.
        </p>
        
      </div>

    </div>
}
