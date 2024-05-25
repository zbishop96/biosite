import { Chip } from "@nextui-org/react";

export default function GenreChips({genres} : {genres: string[]}) {

  return <div className="grid gap-2 grid-cols-4 justify-items-center grid-flow-dense size-3/4 mt-3">
        {genres.map((genre) => ( <Chip variant="shadow"
          classNames={{
            base: "bg-gradient-to-br from-sky-500 to-blue-800 border-small border-white/50 shadow-blue-800/30",
            content: "drop-shadow shadow-black text-white",
          }}>
            {genre}
          </Chip> ))}
    </div>
  
}
