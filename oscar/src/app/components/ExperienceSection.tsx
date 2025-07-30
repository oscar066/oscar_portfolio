import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { experiences } from "@/lib/experienceData";
import ExperienceCard from "./cards/ExperienceCard";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {experiences.map((experience) => (
                <CarouselItem
                  key={experience.id}
                  className="pl-4 basis-full md:basis-1/2 xl:basis-1/3"
                >
                  <div className="p-2">
                    <ExperienceCard experience={experience} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
