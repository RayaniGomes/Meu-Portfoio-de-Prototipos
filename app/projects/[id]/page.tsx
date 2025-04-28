import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ProjectPage({ params }: { params: { id: string } }) {
  const projects = [
    {
      id: "1",
      title: "Evently",
      description: "Plataforma para gerenciamento de eventos e ingressos.",
      fullDescription:
        "Evently é uma plataforma completa para gerenciamento de eventos, venda de ingressos e experiência do usuário. O design foi criado com foco na usabilidade e experiência do usuário, com uma interface limpa e intuitiva.",
      image: "/images/evently-thumbnail.png",
      link: "https://www.figma.com/proto/uobQsGZhIAQFPN4EsWzeN6/Evently?t=ire2f6nN4y5p4qRp-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=1-2&starting-point-node-id=75%3A1129",
      tags: ["UI/UX", "Eventos", "Mobile"],
      features: ["Busca e filtro de eventos", "Compra de ingressos", "Perfil do usuário", "Notificações de eventos"],
    },
    {
      id: "2",
      title: "Zaori Stock",
      description: "Sistema de gerenciamento de estoque e inventário.",
      fullDescription:
        "Zaori Stock é um sistema completo para gerenciamento de estoque e inventário, com funcionalidades para controle de produtos, fornecedores, vendas e relatórios.",
      image: "/images/zaori-thumbnail.png",
      link: "https://www.figma.com/proto/U7iIwJk7wgm7S9S4UIsiZe/Zaori-Stock---Sistema?node-id=66-2047&p=f&t=Y1ZfE3I2yScsdpxU-1&scaling=scale-down&content-scaling=fixed&page-id=49%3A514",
      tags: ["Dashboard", "Sistema", "Estoque"],
      features: ["Dashboard com métricas", "Cadastro de produtos", "Controle de estoque", "Relatórios e análises"],
    },
    {
      id: "3",
      title: "Esport+",
      description: "Plataforma para fãs e jogadores de esports.",
      fullDescription:
        "Esport+ é uma plataforma dedicada aos fãs e jogadores de esports, com informações sobre torneios, times, jogadores e notícias do mundo dos esports.",
      image: "/images/esport-thumbnail.png",
      link: "https://www.figma.com/proto/s8veuX82aIwA9z8lPKVYhX/Desafio-trainee--Copy-?node-id=1-2&t=ugUsllAkHAkotNYS-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A35",
      tags: ["Esports", "Gaming", "Social"],
      features: ["Perfil de jogador", "Calendário de torneios", "Notícias e atualizações", "Comunidade e fóruns"],
    },
    {
      id: "4",
      title: "Portfólio De Membros",
      description: "Showcase de membros e seus trabalhos para a EJECT.",
      fullDescription:
        "Portfólio De Membros é uma plataforma para showcasing dos membros da EJECT e seus trabalhos, com perfis detalhados, projetos e informações de contato.",
      image: "/images/portfolio-thumbnail.png",
      link: "https://www.figma.com/proto/P2ri6ThXyickWkx701L06a/Portf%C3%B3lio-dos-membros---EJECT?node-id=1-2&t=mFFPBCo1UDQfpO7e-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A4",
      tags: ["Portfólio", "Equipe", "Showcase"],
      features: ["Perfis de membros", "Galeria de projetos", "Informações de contato", "Filtro por habilidades"],
    },
  ]

  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    return <div>Projeto não encontrado</div>
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Voltar para o portfólio
          </Link>
        </Button>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{project.title}</h1>
              <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">{project.fullDescription}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Funcionalidades</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
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
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Button size="lg" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Ver Protótipo no Figma <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tighter mb-6">Outros Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.id !== params.id)
              .map((p) => (
                <Card key={p.id} className="overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={p.image || "/placeholder.svg"}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{p.description}</p>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link href={`/projects/${p.id}`}>Ver Detalhes</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </main>
  )
}
