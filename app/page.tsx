import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CreditCard, DollarSign, Shield, Smartphone } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-emerald-500" />
            <span className="text-xl font-bold">Cash Chego</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              Recursos
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              Como Funciona
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              Depoimentos
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-emerald-500 transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Entrar
            </Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600">Começar Agora</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 w-fit">
                  Solução financeira simplificada
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Dinheiro rápido quando você mais precisa
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Cash Chego oferece empréstimos rápidos, seguros e sem burocracia. Receba o dinheiro na sua conta em
                  minutos.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                    Solicitar Empréstimo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Saiba Mais
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="inline-block h-8 w-8 rounded-full bg-gray-200 ring-2 ring-white" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">+10.000</span> clientes satisfeitos
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] aspect-square">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Cash Chego App"
                    width={500}
                    height={500}
                    className="rounded-2xl object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Recursos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Por que escolher o Cash Chego?</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Oferecemos a melhor experiência para você obter o dinheiro que precisa de forma rápida e segura.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Smartphone className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold">100% Digital</h3>
                <p className="text-center text-gray-500">
                  Todo o processo é feito pelo aplicativo, sem necessidade de ir a uma agência.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <CreditCard className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold">Dinheiro Rápido</h3>
                <p className="text-center text-gray-500">
                  Receba o valor aprovado em sua conta em até 10 minutos após a aprovação.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Shield className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold">Segurança Total</h3>
                <p className="text-center text-gray-500">
                  Seus dados são protegidos com a mais alta tecnologia de segurança.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Processo Simples
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Como funciona</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Obtenha seu empréstimo em apenas 3 passos simples
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold">Cadastre-se</h3>
                <p className="text-center text-gray-500">
                  Preencha seus dados pessoais e financeiros no aplicativo Cash Chego.
                </p>
                {/* Connector line for desktop */}
                <div className="absolute top-6 left-[calc(100%-12px)] h-0.5 w-full bg-emerald-200 hidden md:block" />
              </div>
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold">Solicite</h3>
                <p className="text-center text-gray-500">
                  Escolha o valor desejado e o prazo para pagamento que melhor se adapta a você.
                </p>
                {/* Connector line for desktop */}
                <div className="absolute top-6 left-[calc(100%-12px)] h-0.5 w-full bg-emerald-200 hidden md:block" />
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold">Receba</h3>
                <p className="text-center text-gray-500">
                  Após a aprovação, o dinheiro é transferido diretamente para sua conta bancária.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Depoimentos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">O que nossos clientes dizem</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Milhares de pessoas já utilizaram o Cash Chego para resolver suas necessidades financeiras
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Carlos Silva",
                  text: "Precisei de dinheiro para uma emergência médica e o Cash Chego me ajudou em menos de 1 hora. Processo super simples!",
                },
                {
                  name: "Ana Oliveira",
                  text: "Já utilizei outros aplicativos de empréstimo, mas o Cash Chego foi o mais rápido e com as melhores taxas. Recomendo!",
                },
                {
                  name: "Roberto Santos",
                  text: "O atendimento ao cliente é excelente. Tive uma dúvida e fui prontamente atendido pelo chat. Muito satisfeito!",
                },
              ].map((testimonial, i) => (
                <div key={i} className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200" />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">Cliente Cash Chego</p>
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

        {/* FAQ Section */}
        <section id="faq" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Dúvidas Frequentes
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Perguntas Frequentes</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Encontre respostas para as perguntas mais comuns sobre o Cash Chego
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 py-12">
              {[
                {
                  question: "Quais são os requisitos para solicitar um empréstimo?",
                  answer:
                    "Para solicitar um empréstimo no Cash Chego, você precisa ser maior de 18 anos, ter uma conta bancária em seu nome, um smartphone com nosso aplicativo instalado e documentos de identificação válidos.",
                },
                {
                  question: "Quanto tempo leva para o dinheiro ser depositado?",
                  answer:
                    "Após a aprovação do seu empréstimo, o dinheiro é depositado em sua conta bancária em até 10 minutos em dias úteis. Em finais de semana e feriados, o prazo pode ser um pouco maior.",
                },
                {
                  question: "Quais são as taxas de juros aplicadas?",
                  answer:
                    "As taxas de juros variam de acordo com o valor solicitado, prazo de pagamento e seu histórico de crédito. Você poderá visualizar todas as taxas e o valor total a ser pago antes de confirmar a solicitação.",
                },
                {
                  question: "Como faço para pagar o empréstimo?",
                  answer:
                    "O pagamento pode ser feito através de boleto bancário, débito automático ou transferência bancária. Todas as opções estão disponíveis no aplicativo Cash Chego.",
                },
                {
                  question: "É possível antecipar o pagamento do empréstimo?",
                  answer:
                    "Sim, você pode antecipar o pagamento do seu empréstimo a qualquer momento e obter um desconto proporcional nos juros. Basta acessar a opção 'Antecipar Pagamento' no aplicativo.",
                },
              ].map((faq, i) => (
                <div key={i} className="rounded-lg border p-6">
                  <h3 className="text-lg font-bold">{faq.question}</h3>
                  <p className="mt-2 text-gray-500">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-emerald-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Pronto para resolver sua situação financeira?
              </h2>
              <p className="max-w-[700px] md:text-xl">
                Baixe agora o aplicativo Cash Chego e tenha acesso a empréstimos rápidos e seguros.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-white text-emerald-500 hover:bg-gray-100">
                  Baixar para Android
                </Button>
                <Button size="lg" className="bg-white text-emerald-500 hover:bg-gray-100">
                  Baixar para iOS
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
                <DollarSign className="h-6 w-6 text-emerald-500" />
                <span className="text-xl font-bold">Cash Chego</span>
              </div>
              <p className="text-sm text-gray-500">
                Soluções financeiras rápidas e seguras para quando você mais precisa.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-emerald-500">
                    Sobre nós
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-emerald-500">
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-emerald-500">
                    Imprensa
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Recursos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-emerald-500">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-emerald-500">
                    Guias
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-emerald-500">
                    Ajuda e Suporte
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-emerald-500">
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-emerald-500">
                    Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-500 hover:text-emerald-500">
                    Política de Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Cash Chego. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
