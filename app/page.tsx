"use client";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  const handleSayHello = () => {
    // open mailto link

    window.open('mailto:mnsgloriaube@gmail.com');

  }
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full">
        <Image
          src="/mosteiro-bg.jpg"
          alt="Mosteiro de Nossa Senhora da Glória"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-cinzel text-4xl font-bold sm:text-5xl md:text-6xl">
              U.I.O.G.D.
            </h1>
            <p className="mt-6 text-xl font-extralight sm:text-2xl">
              "Que em todas as coisas Deus seja glorificado"
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Button asChild size="lg" variant="default" className="bg-white text-black hover:bg-zinc-300">
                <Button onClick={handleSayHello}>
                  Fale conosco
                </Button>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white hover:bg-white hover:text-black border-white">
                <Link href="/historia">Conheça</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Prayer Times */}
      <section className="border-b border-zinc-800 border-dashed py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-cinzel text-xl md:text-3xl font-bold text-center mb-12">Nossos horários</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
            <div className="relative overflow-hidden rounded-lg bg-primary-foreground border bg-white dark:bg-zinc-800 ">
              <Image
                src="/santa-missa.jpeg"
                alt="Spiritual Direction"
                width={400}
                height={300}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-cinzel text-xl font-semibold mb-4">Santa Missa</h3>
                <p className="text-zinc-600 font-bold dark:text-zinc-300">Segunda a Sábado</p>
                <p className="text-zinc-600 dark:text-zinc-300 mb-4">7:00 AM</p>
                <p className="text-zinc-600 font-bold dark:text-zinc-300">Domingo e solenidades</p>
                <p className="text-zinc-600 dark:text-zinc-300">7:30 AM</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-primary-foreground border bg-white dark:bg-zinc-800 ">
              <Image
                src="/oficio-divino.jpeg"
                alt="Spiritual Direction"
                width={400}
                height={300}
                className="h-64 w-full object-cover"
              />
              <div className="p-6 text-sm h-full">
                <h3 className="font-cinzel text-xl font-semibold mb-2">Ofício Divino</h3>
                <div className='grid grid-cols-2'>
                  <div className='flex flex-col'>
                    <p className="text-zinc-600 font-bold dark:text-zinc-300">Vigílias</p>
                    <p className="text-zinc-600 dark:text-zinc-300 mb-1 ml-2">4:45 AM</p>
                  </div>
                  <div className='flex flex-col'>
                    <p className="text-zinc-600 font-bold dark:text-zinc-300">Terça</p>
                    <p className="text-zinc-600 dark:text-zinc-300 mb-1 ml-2">8:30 AM</p>
                  </div>
                  <div className='flex flex-col'>
                    <p className="text-zinc-600 font-bold dark:text-zinc-300">Sexta</p>
                    <p className="text-zinc-600 dark:text-zinc-300 mb-1 ml-2">12:00 PM</p>
                  </div>
                  <div className='flex flex-col'>
                    <p className="text-zinc-600 font-bold dark:text-zinc-300">Noa</p>
                    <p className="text-zinc-600 dark:text-zinc-300 mb-1 ml-2">2:00 PM</p>
                  </div>
                  <div className='flex flex-col'>
                    <p className="text-zinc-600 font-bold dark:text-zinc-300">Vésperas</p>
                    <p className="text-zinc-600 dark:text-zinc-300 mb-1 ml-2">5:00 PM</p>
                  </div>
                  <div className='flex flex-col'>
                    <p className="text-zinc-600 font-bold dark:text-zinc-300">Completas</p>
                    <p className="text-zinc-600 dark:text-zinc-300 ml-2">7:45 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-primary-foreground border bg-white dark:bg-zinc-800">
              <Image
                src="/bazar-monjas.jpeg"
                alt="Spiritual Direction"
                width={400}
                height={300}
                className="h-64 w-full object-cover object-top"
              />
              <div className="p-6">
                <h3 className="font-cinzel text-xl font-semibold mb-4">Atendimento ao Bazar</h3>
                <p className="text-zinc-600 font-bold dark:text-zinc-300">Segunda a Sábado</p>
                <p className="text-zinc-600 dark:text-zinc-300 mb-4">9:00 AM - 11:00 AM</p>
                <p className="text-zinc-600 dark:text-zinc-300 mb-4">2:00 PM - 5:00 PM</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center py-12">
            <a href='/nossos-horarios' className="text-zinc-500 hover:text-zinc-400 dark:text-zinc-300 dark:hover:text-white text-center underline underline-offset-4">
              Ver tabela completa de horários
            </a>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-cinzel text-xl md:text-3xl font-bold text-center mb-12">Nos conheça um pouco mais</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg bg-primary-foreground border ">
              <Image
                src="/Home-historia.jpg"
                alt="Spiritual Direction"
                width={400}
                height={300}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-cinzel text-xl font-semibold">
                  Nossa história
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                  O Mosteiro de Nossa Senhora da Glória foi fundado por um grupo de seis monjas, duas candidatas dinamarquesas e um monge provindos do Mosteiro de Nossa Senhora de Aasebakken, na Dinamarca, em 8 de setembro de 1948, festa da Natividade da Bem-Aventurada Virgem Maria, na Cidade e Arquidiocese de Uberaba.
                </p>
                <Button asChild className="mt-4" variant="outline">
                  <Link href="/historia">Saiba mais</Link>
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-primary-foreground border">
              <Image
                src="/monja-vocacional.jpg"
                alt="Spiritual Direction"
                width={400}
                height={300}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-cinzel text-xl font-semibold">
                  Vocacional
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                  "E procurando o senhor o seu operário na multidão do povo ao qual clama, diz ainda: "Qual o homem que quer a vida e deseja ver dias felizes? O que há de mais doce para nós, caríssimos irmãos, do que esta voz do Senhor a convidar-nos ?" (Prólogo, RB)
                </p>
                <Button asChild className="mt-4" variant="outline">
                  <Link href="/vocacional">Saiba mais</Link>
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-primary-foreground border ">
              <Image
                src="/oblatas.jpg"
                alt="Spiritual Direction"
                width={400}
                height={300}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-cinzel text-xl font-semibold">
                  Oblatos
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                  O Oblato secular é o fiel (leigo, consagrado ou sacerdote) que, chamado por Deus pelo Sacramento do Batismo, e em conformidade com seu estado de vida, associa-se a uma comunidade monástica beneditina, a fim de viver coerentemente a sua consagração batismal, em comunhão com a Igreja, no espírito da Regra de São Bento.
                </p>
                <Button asChild className="mt-4" variant="outline">
                  <Link href="/oblatos">Saiba mais</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}