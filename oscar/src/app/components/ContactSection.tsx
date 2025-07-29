import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
        <p className="text-xl text-gray-600 mb-12">
          I'm always interested in discussing new opportunities, innovative
          projects, and ways to leverage AI for meaningful impact.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Mail className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">oscarkaruga1@gmail.com</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Phone className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+254 719696313</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <MapPin className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-600">Kiambu, Kenya</p>
            </CardContent>
          </Card>
        </div>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="mailto:oscarkaruga1@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link
              href="https://linkedin.com/in/oscar066-karuga"
              target="_blank"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
