import Image from "next/image"
import { ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Evently",
      description: "Plataforma para gerenciamento de eventos e ingressos.",
      image: "/images/evently-thumbnail.png",
      link: "https://www.figma.com/design/1uip1WcuSgnsjinq8rbzvL/Evently--Copy-?t=5MXjtnzjQx6aO9D9-1",
      tags: ["Sistema", "Descktop", "Mobile", "Navegável"],
    },
    {
      id: 2,
      title: "Zaori Stock",
      description: "Sistema de gerenciamento de estoque e inventário.",
      image: "/images/zaori-thumbnail.png",
      link: "https://www.figma.com/design/U7iIwJk7wgm7S9S4UIsiZe/Zaori-Stock---Sistema?node-id=49-514&t=9MA5VHJuOIAEBXDU-1",
      tags: ["Sistema", "Descktop", "Mobile", "Navegável"],
    },
    {
      id: 3,
      title: "Esportes+",
      description: "Plataforma para fãs e jogadores de esports.",
      image: "/images/esport-thumbnail.png",
      link: "https://www.figma.com/design/s8veuX82aIwA9z8lPKVYhX/Esportes-?node-id=1-2&t=6qdCSw9snlbCMJlo-1",
      tags: ["Landing Page", "Descktop", "Mobile"],
    },
    {
      id: 4,
      title: "Portfólio De Membros",
      description: "Apresentação de membros e seus trabalhos para a EJECT.",
      image: "/images/portfolio-thumbnail.png",
      link: "https://www.figma.com/design/P2ri6ThXyickWkx701L06a/Portf%C3%B3lio-dos-membros---EJECT?t=JpGT4EPCVJasqiRA-1",
      tags: ["Site", "Descktop", "Navegável"],
    },
    {
      id: 5,
      title: "Pokeshop",
      description: "E-commerce de Pokemons.",
      image: "/images/pokeshop-thumbnail.png",
      link: "https://www.figma.com/design/Qg65ABIOXa3neGXTh9RCCP/Pok%C3%A9Shop?node-id=0-1&t=l5K9RZESZ3sPF60V-1",
      tags: ["E-commerce", "Descktop"],
    },
    {
      id: 6,
      title: "Finance",
      description: "App de gerenciamento financeiro.",
      image: "/images/finance-thumbnail.png",
      link: "https://www.figma.com/design/avy5GUCECchHJMBxAUqBmG/Finance---App?node-id=0-1&t=BNlPIHhcOZIDV1jC-1",
      tags: ["App", "Mobile"],
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Portfólio de Protótipos
            </h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Apresentação dos meus projetos de UI/UX design.
            </p>
            <div className="space-x-4">
              <Button asChild>
                <a href="#projects">Ver Projetos</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contato</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meus Projetos</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore meus projetos de design criados.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden transition-all hover:shadow-lg">
                <CardHeader className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                  <CardDescription className="mt-2 text-base">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild className="w-full">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Ver mais <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Entre em Contato</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Interessado em trabalhar juntos? Entre em contato comigo.
            </p>
          </div>
          <div className="mx-auto max-w-md space-y-4 pt-8">
            <div className="flex flex-col space-y-2 text-center">
              <div className="flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-primary"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a href="mailto:gomes.rayani.96@gmail.com" className="text-lg font-medium hover:underline">
                  gomes.rayani.96@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-primary"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+5584994706578" className="text-lg font-medium hover:underline">(84) 99470-6578</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-gray-950">
        <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-gray-500 md:text-left dark:text-gray-400">
              © {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
