'use client';

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section id="main-content">
        {/* Main Content Header */}
        <header id="main-content-header" className="mb-8 text-center">
          <h1 id="page-title" className="text-3xl font-bold">
            A vida Monástica
          </h1>
        </header>

        {/* Main Content */}
        <div id="content" className="region">
          <div
            id="block-system-main"
            className="block block-system no-title odd first last block-count-2 block-region-content block-main"
          >
            <article
              id="node-483"
              className="node node-page node-promoted article odd node-lang-pt-br node-full clearfix"
              about="/vida-monastica"
              typeof="sioc:Item foaf:Document"
              role="article"
            >
              <div className="node-content">
                <div className="field-body view-mode-full prose max-w-prose mx-auto">
                  <p>
                    O Mosteiro é o lugar que Deus custodia (cf. Zc 2, 9); é a morada da sua presença
                    singular, à imagem da tenda da Aliança, na qual se faz o encontro diário com Ele. O
                    Mosteiro, como cidade construída e governada segundo o espírito e a Regra de São Bento,
                    é também a “escola de serviço de amor ao Senhor”. Nesta escola, aprendemos a procurar
                    verdadeiramente e intensamente a Deus com todas as nossas forças, a nada antepor ao amor
                    de Cristo, na pureza e na simplicidade próprias da vida monástica.
                  </p>
                  <p>
                    Somos chamadas por Deus a vivermos toda a nossa existência orientadas para a busca de Seu
                    rosto. Aprendemos a formar o próprio coração procurando a sua harmonia e unificação,
                    restaurando a sua humanidade fragmentada, para termos um coração indiviso centrado em Deus,
                    em plena comunhão e intimidade com Ele.
                  </p>
                  <p>
                    Vivendo e conhecendo a nós mesmas, encontramos e contemplamos a Deus no coração do mundo.
                    Com a nossa vida consagrada totalmente à oração, litúrgica e pessoal, “podemos curar as
                    chagas de tantos irmãos” (Vultum Dei Quærere, 16). O claustro não nos isola do mundo, mas
                    nos aproxima dele, pois quando morremos para o mundo e para nós mesmos, o mundo vive e se
                    renova. “Quanta eficácia apostólica se irradia dos mosteiros através da oração e da imolação!
                    Quanta alegria e profecia grita ao mundo o silêncio dos claustros! (Papa Francisco)”
                  </p>
                  <p className="mt-6">
                    Para ser sustentada neste caminho, a monja encontra:
                  </p>
                  <ul className="list-disc list-inside mt-4">
                    <li>Oração litúrgica que determina o ritmo monástico;</li>
                    <li>A Lectio Divina, a leitura orante da Palavra de Deus;</li>
                    <li>O trabalho manual no silêncio e solidão;</li>
                    <li>Vida comunitária, que nos leva a caminharmos juntas para a Vida Eterna.</li>
                  </ul>
                </div>
              </div>
              <span property="dc:title" content="A vida Monástica" className="hidden" />
              <span
                property="sioc:num_replies"
                content="0"
                datatype="xsd:integer"
                className="hidden"
              />
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
