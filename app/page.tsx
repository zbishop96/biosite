import { Button, Image } from "@nextui-org/react"

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

      <p className="flex-1 text-large font-sans">Hello! I'm Zach, a Seattle based full stack web developer currently looking for new opportunities. My experience has been primarily in PHP and Typescript development but I am always looking to learn something new. This site acts as a portfolio as well as a way to share my interests. Have a look around!</p>
    </div>
}
