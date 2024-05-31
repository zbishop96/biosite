import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import Link from "next/link";

export default function Page() {
    return <div>
        <div className="bg-no-repeat bg-cover bg-center flex justify-center"
            style={{backgroundImage: `url(/IMG-20220507-WA0008[1].jpg)`,
            height: "450px"}}>
            <div className="flex size-1/2 flex-wrap">
                <Card className="shadow mx-3 my-3 col-span-3 w-fit h-fit">
                    <CardHeader className="pb-0 pt-2 mx-3 items-start">
                        <h1 className="font-semibold text-xl">Sofles</h1>
                    </CardHeader>
                    <CardBody className="mx-3">
                        <p className="max-w-[560px]">
                            I was first introduced to Sofles through an incredible timelapse of a huge project posted by Ironlak.
                            This video shows Sofles absolutely covering a warehouse with massive murals and street art. That was
                             11 years ago, and he hasn't stopped producing some of the most impressive work I've seen since. You
                             can see more on his instagram <Link href={'https://www.instagram.com/sofles'} className="text-blue-400 font-semibold">here</Link>.
                         </p>
                        <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Pv-Do30-P8A?si=mGreLs87chttK4L5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        
                    </CardBody>
                </Card>
                <Card className="shadow mx-3 my-3 w-fit h-fit">
                    <CardHeader className="pb-0 pt-2 mx-3 items-start">
                        <h1 className="font-semibold text-xl">Digital Does</h1>
                    </CardHeader>
                    <CardBody className="mx-3">
                        <p className="max-w-[620px]">
                        Digital Does is a Dutch artist who has a long history in street art and has been branching out to other
                        mediums while keeping the same vibrant influences. I found Does because I wanted to bring the vibrant pop
                        of street art into my apartment. At the time, Sofles didn't have much in the way of a store so I started
                        looking to other artists. Sofles had featured Does in a post or two and as I dug deeper I found some incredible
                        pieces. I now have many pieces of art from Does on my wall and couldn't be happier with them. His work with
                        concrete and resin are some of my favorite pieces of his. You can see more of his work on <Link href={'https://www.instagram.com/digitaldoes'} className="font-semibold text-blue-400">
                            Instagram
                            </Link>. He also has a website (<Link href={'https://digitaldoes.com/'} className="font-semibold text-blue-400">https://digitaldoes.com/</Link>) that breaks down the different projects and shows he's been a part of.
                        </p>
                        <div className="flex gap-[10px]">
                            <Image
                                src="https://digitaldoes.com/cdn/shop/files/lrGraffiti_art_DOES_Mexico_City_copy.jpg"
                                width={300}
                                height={300}
                            />
                            <Image
                                src="https://scontent.cdninstagram.com/v/t39.30808-6/434039563_18429092491034882_5607825447157887777_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=khhkQJfZPAoQ7kNvgGEqCgW&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzMzMjI1NDc2NzA2NzE2ODY4NQ%3D%3D.2-ccb7-5&oh=00_AYBsRSPZuBeJds0Pq-PlRIssTjsRrpI4uJ4g4Xrj7WHsiw&oe=665F5126&_nc_sid=10d13b"
                                width={300}
                                height={300}
                            />
                        </div>
  
                        </CardBody>
                </Card>

            </div>
        </div>
      </div>
      
    
  }
  