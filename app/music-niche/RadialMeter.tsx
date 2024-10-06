import {CircularProgress, Card, CardBody, CardFooter, Chip} from "@nextui-org/react";

export default function RadialMeter({value, title}: {value: number, title: string}) {
  return <div>
        <Card className="md:w-[160] md:h-[160] border-none bg-gradient-to-br from-blue-700 to-cyan-500">
        <CardBody className="justify-center items-center pb-0">
        <CircularProgress
          classNames={{
            svg: "w-16 h-16 md:w-24 md:h-24 drop-shadow-lg",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-sm md:text-xl lg:text-2xl font-semibold text-white",
          }}
          value={value}
          strokeWidth={4}
          showValueLabel={true}
        />
      </CardBody>
      <CardFooter className="justify-center items-center pt-0">
        <Chip
          classNames={{
            base: "border-2 border-white",
            content: "text-white text-small font-semibold",
          }}
          variant="bordered"
        >
          {title}
        </Chip>
      </CardFooter>
    </Card>
  </div>
  
}
