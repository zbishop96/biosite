import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import Link from "next/link";

export default function Page() {
    return <div className="flex justify-center">
        <div className="md:grid grid-cols-3 lg:max-w-[80%] xl-max-w-[60%] ">
            <Card className="shadow my-3 mx-3 col-span-2">
                <CardHeader className="pb-0 items-start">
                    <h1 className="font-semibold text-xl">Sofles</h1>
                </CardHeader>
                <CardBody>
                    <p>
                        I was first introduced to Sofles through an incredible timelapse of a huge project posted by Ironlak.
                        This video shows Sofles absolutely covering a warehouse with massive murals and street art. That was
                            11 years ago, and he hasn't stopped producing some of the most impressive work I've seen since. You
                            can see more on his instagram <Link href={'https://www.instagram.com/sofles'} className="text-blue-400 font-semibold">here</Link>.
                    </p>
                    <iframe className="m-2 md:min-h-80" src="https://www.youtube.com/embed/Pv-Do30-P8A?si=mGreLs87chttK4L5" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </CardBody>
            </Card>
            <Card className="shadow mx-3 my-3 col-span-2 col-start-2">
                <CardHeader className="pb-0 pt-2 items-start">
                    <h1 className="font-semibold text-xl">Digital Does</h1>
                </CardHeader>
                <CardBody>
                    <p>
                    Digital Does is a Dutch artist who has a long history in street art and has been branching out to other
                    mediums while keeping the same vibrant influences. I found Does because I wanted to bring the vibrant pop
                    of street art into my apartment. At the time, Sofles didn't have much in the way of a store so I started
                    looking to other artists. Sofles had featured Does in a post or two and as I dug deeper I found some incredible
                    pieces. I now have many pieces of art from Does on my wall and couldn't be happier with them. His work with
                    concrete and resin are some of my favorite pieces of his. You can see more of his work on <Link href={'https://www.instagram.com/digitaldoes'} className="font-semibold text-blue-400">
                        Instagram
                        </Link>. He also has a website (<Link href={'https://digitaldoes.com/'} className="font-semibold text-blue-400">https://digitaldoes.com/</Link>) that breaks down the different projects and shows he's been a part of.
                    </p>
                    <div className="flex gap-2">
                        <Image
                            src="https://digitaldoes.com/cdn/shop/files/lrGraffiti_art_DOES_Mexico_City_copy.jpg"
                            className="shrink max-h-96"
                        />
                        <Image
                            src="https://digitaldoes.com/cdn/shop/files/DSC07538_kopie.jpg?crop=center&height=2400&v=1695142823&width=1600"
                            className="shrink max-h-96"
                        />
                    </div>
                    </CardBody>
            </Card>
            <Card className="shadow w-fit h-fit col-span-2">
                <CardHeader className="pb-0 pt-2 items-start">
                    <h1 className="font-semibold text-xl">Blacktail Studios</h1>
                </CardHeader>
                <CardBody>
                    <p>
                    Blacktail Studio is a wood worker who builds high end furniture, mostly tables. He often takes creative risks and tries things that he doesn't know if they will even work.
                    He started the channel build epoxy resin river tables with live edge slabs but has branched out into some wild projects such as a damascus steel style table made from denim.
                    You can see his work on <Link href={'https://www.youtube.com/@BlacktailStudio'} className="font-semibold text-blue-400">
                        youtube channel
                        </Link>. He also has a website (<Link href={'https://www.blacktailstudio.com/'} className="font-semibold text-blue-400">https://www.blacktailstudio.com/</Link>) that breaks down his projects and hosts his courses.
                    </p>
                    <div className="flex gap-2">
                        <Image
                            src="https://images.squarespace-cdn.com/content/v1/5950165c86e6c024428ff886/60bbbfed-da93-4ed8-9e0a-2e7bb4fae061/How+to+build+an+epoxy+table+Blacktail+Studio.png?format=1500w"
                            className="shrink max-h-96"
                        />
                        <Image
                            src="https://images.squarespace-cdn.com/content/v1/5950165c86e6c024428ff886/48ba237a-f35f-4984-af82-a2beb3fcdc50/11+Damascus+Denim+Final+C.png?format=2500w"
                            className="shrink max-h-96"

                        />
                    </div>

                    </CardBody>
            </Card>

        </div>
    </div>
  }
  