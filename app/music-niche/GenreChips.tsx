import { Chip } from "@nextui-org/react";

export default function GenreChips({genres} : {genres: string[]}) {

  return <div className="flex flex-row flex-wrap justify-center gap-2 lg:mx-16">
        {genres.map((genre) => ( <Chip variant="shadow"
          classNames={{
            base: "bg-gradient-to-br from-sky-500 to-blue-800 border-small border-white/50 shadow-blue-800/30",
            content: "drop-shadow shadow-black text-white",
          }}>
            {genre}
          </Chip> ))}
    </div>
  
}
