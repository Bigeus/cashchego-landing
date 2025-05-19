'use client'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, Brain, CreditCard, DollarSign, Shield, Smartphone, MessageCircle, ArrowDown } from "lucide-react"
import dynamic from "next/dynamic"
import logo from "../app/favicon.ico"
import { useEffect, useState } from "react"
import DemoModal from "@/components/DemoModal"

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  // Adicionando comportamento de smooth scroll ao carregar o componente
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="logo" height={40} width={40} />
            <span className="text-xl font-bold">
              <span className="text-black">Cash</span>
              <span className="text-amber-500">Chego</span>
            </span>
          </div>
          {/* Centralizando a navegação */}
          <nav className="hidden md:flex gap-6 mx-auto justify-center">
            <Link href="#recursos" className="text-sm font-medium hover:text-amber-500 transition-colors">
              Recursos
            </Link>
            <Link href="#como-funciona" className="text-sm font-medium hover:text-amber-500 transition-colors">
              Como Funciona
            </Link>
            <Link href="#depoimentos" className="text-sm font-medium hover:text-amber-500 transition-colors">
              Depoimentos
            </Link>
            <Link href="#sobre-nos" className="text-sm font-medium hover:text-amber-500 transition-colors">
              Sobre Nós
            </Link>
            <Link href="#fale-conosco" className="text-sm font-medium hover:text-amber-500 transition-colors">
              Fale com a Hanna
            </Link>
          </nav>
          <div className="flex items-center gap-4 ml-auto">
            {/* <Button variant="outline" className="hidden md:flex">
              Entrar
            </Button> */}
            {/* <Button className="bg-amber-500 hover:bg-amber-600">Começar Agora</Button> */}
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              {/* Coluna da esquerda: texto */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-amber-500 px-3 py-1 text-sm text-black w-fit">
                  Sistema financeiro para micro e pequenas empresas
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Simplifique a gestão financeira do seu negócio
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  O CashChego oferece controle financeiro simplificado com projeção de saldo, gerenciamento de fluxo de caixa e assistência por IA para micro e pequenas empresas.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={() => setIsDemoModalOpen(true)} size="lg" className="bg-amber-500 hover:bg-amber-600">
                    Começar Gratuitamente <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => document.getElementById('fale-conosco')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Saiba Mais <ArrowDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              {/* Coluna da direita: imagem */}
              <div className="relative mt-8 lg:mt-0 flex justify-center lg:justify-start overflow-visible z-10">
                <div className="relative overflow-hidden rounded-xl shadow-2xl w-full md:w-[120%] lg:w-[160%] xl:w-[180%] 2xl:w-[200%] lg:-ml-12 xl:-ml-20 2xl:-ml-24 lg:-mr-10 xl:-mr-16 2xl:-mr-20 transform transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent opacity-70 mix-blend-overlay"></div>
                  <Image
                    src="/dashboard.png"
                    alt="Dashboard do CashChego"
                    width={1500}
                    height={1000}
                    className="w-full h-auto object-cover"
                    priority
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="recursos" className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-700">
                  Recursos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Por que escolher o CashChego?</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Oferecemos as melhores ferramentas para que você gerencie as finanças do seu negócio de forma eficiente e inteligente.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-amber-100 p-3">
                  <Smartphone className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold">Web e Mobile</h3>
                <p className="text-center text-gray-500">
                  Acesse o sistema em qualquer lugar, seja no computador ou no celular, com sincronização em tempo real.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-amber-100 p-3">
                  <BarChart2 className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold">Fluxo de Caixa</h3>
                <p className="text-center text-gray-500">
                  Controle entradas e saídas com visualizações claras e projeções de saldo para melhor planejamento.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-amber-100 p-3">
                  <Brain className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold">Hanna AI</h3>
                <p className="text-center text-gray-500">
                  Nossa assistente virtual inteligente ajuda na análise de dados e gera insights para seu negócio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="como-funciona" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-700">
                  Processo Simples
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Como Funciona</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Gerencie suas finanças em três etapas simples
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold">Consulta</h3>
                <p className="text-center text-gray-500">
                  Consulte informações e otimize seu tempo com nossa <span className="text-amber-500 font-semibold">Hanna AI Assistente</span>.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold">Análise</h3>
                <p className="text-center text-gray-500">
                  Utilize nossas ferramentas para analisar <span className="text-amber-500 font-semibold">valores de entradas e saídas</span> e gerar relatórios de suas vendas.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold">Inspirar</h3>
                <p className="text-center text-gray-500">
                  Crie uma estratégia de negócios e visualize com base em dados e insights da <span className="text-amber-500 font-semibold">Hanna AI</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Chatbot Section */}
        <section id="fale-conosco" className="py-16 bg-amber-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-700">
                  Assistente Virtual
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Converse com a Hanna AI</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Tire suas dúvidas, obtenha insights financeiros e receba ajuda personalizada da nossa assistente virtual inteligente
                </p>
              </div>
              <div className="flex flex-col items-center space-y-6 py-8">
                <div className="rounded-full bg-amber-100 p-4">
                  <MessageCircle className="h-12 w-12 text-amber-500" />
                </div>
                <p className="max-w-[600px] text-gray-600">
                  A Hanna AI está sempre pronta para ajudar você com dúvidas sobre finanças, fluxo de caixa, relatórios e muito mais.
                  Experimente agora mesmo e descubra como nossa assistente virtual pode facilitar a gestão do seu negócio!
                </p>
                <Link target="_blank" href={"https://cdn.botpress.cloud/webchat/v2.4/shareable.html?configUrl=https://files.bpcontent.cloud/2025/05/18/16/20250518161426-IH3N327B.json"}>
                  <Button
                    onClick={() => { }}
                    size="lg"
                    className="bg-amber-500 hover:bg-amber-600"
                  >
                    Conversar com a Hanna AI <MessageCircle className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="depoimentos" className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-700">
                  Depoimentos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">O que nossos clientes acham</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Centenas de empreendedores já utilizam o CashChego para gerenciar suas finanças
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Ana Souza",
                  initials: "AS",
                  text: "Essa experiência foi incrível! Nunca vi algo tão bem feito e funcional.",
                },
                {
                  name: "Carlos Ferreira",
                  initials: "CF",
                  text: "Muito intuitivo e fácil de usar. Me ajudou demais!",
                },
                {
                  name: "Juliana Lima",
                  initials: "JL",
                  text: "Recomendo a todos! Atendimento ótimo e qualidade excepcional.",
                },
              ].map((testimonial, i) => (
                <div key={i} className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">Empreendedor(a)</p>
                    </div>
                  </div>
                  <p className="text-gray-500">{testimonial.text}</p>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="sobre-nos" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-700">
                  Sobre Nós
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Conheça o CashChego</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Somos uma Startup que busca promover mais acessibilidade e velocidade no gerenciamento financeiro de pequenas empresas e negócios
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 py-12">
              <p className="text-gray-600">
                Utilizando um sistema de controle de fluxo de caixa combinado com a acessibilidade de nossa Inteligência Artificial, a Hanna AI,
                oferecemos uma solução completa para empreendedores. Nossa Assistente Virtual ajuda a desenvolver as principais funções, além de
                analisar dados, ler tabelas e exibir relatórios que facilitam a tomada de decisões estratégicas.
              </p>
              <p className="text-gray-600">
                Desenvolvido por uma equipe multidisciplinar, o CashChego foi criado para resolver os desafios de gestão financeira enfrentados
                por 79% das micro e pequenas empresas que, segundo o SEBRAE, não dispõem de ferramentas adequadas para organização e controle de
                suas finanças.
              </p>
              <p className="text-gray-600">
                Nossa plataforma está disponível em versões Web e Mobile, com sincronização em tempo real, permitindo que você gerencie seu negócio
                de qualquer lugar, a qualquer momento.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-t from-black to-amber-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Transforme sua experiência hoje mesmo!
              </h2>
              <p className="max-w-[700px] md:text-xl">
                Junte-se a centenas de pessoas que já estão aproveitando essa solução incrível. Não perca tempo!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button onClick={() => setIsDemoModalOpen(true)} size="lg" className="bg-white text-amber-500 hover:bg-gray-100">
                  Quero Começar Agora 🚀
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-gray-50">
        <div className="container px-4 py-12 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image src={logo} alt="logo" height={40} width={40} />
                <span className="text-xl font-bold">
                  <span className="text-black">Cash</span>
                  <span className="text-amber-500">Chego</span>
                </span>
              </div>
              <p className="text-sm text-gray-500">
                Sistema financeiro simplificado para micro e pequenas empresas.
              </p>
            </div>
            {/* <div className="space-y-4">
              <h3 className="text-lg font-bold">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#sobre-nos" className="text-sm text-gray-500 hover:text-amber-500">
                    Sobre nós
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-amber-500">
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-amber-500">
                    Imprensa
                  </Link>
                </li>
              </ul>
            </div> */}
            {/*  <div className="space-y-4">
              <h3 className="text-lg font-bold">Recursos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-amber-500">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-amber-500">
                    Guias
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-amber-500">
                    Ajuda e Suporte
                  </Link>
                </li>
              </ul>
            </div> */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Entre em contato em:</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-amber-500">
                    contato@cashchego.com.br
                  </Link>
                </li>
                {/*   <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-amber-500">
                    Termos de Uso
                  </Link>
                </li> */}
                {/* <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-amber-500">
                    Política de Privacidade
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} CashChego Hanna Group.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}