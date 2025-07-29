import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                Oscar Karuga
                <span className="block text-2xl lg:text-3xl text-emerald-600 font-medium mt-2">
                  Machine Learning Engineer & Software Engineer
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Innovative engineer passionate about leveraging AI and machine
                learning to solve complex problems and create meaningful impact
                across healthcare, space technology, and social platforms.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>Kiambu, Kenya</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+254 719696313</span>
              </div>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button asChild>
                <Link href="#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://github.com/Oscar066" target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="https://linkedin.com/in/oscar066-karuga"
                  target="_blank"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=320&width=320"
                alt="Oscar Karuga"
                className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
