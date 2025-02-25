'use client';

import { useState } from 'react';

export default function Page() {
  const [selectedImage, setSelectedImage]: any = useState(null);

  const images = [
    {
      src: "https://web.archive.org/web/20190104065329im_/http://monjasbeneditinas.org.br/sites/default/files/styles/p_ginas_internas/public/imagens-servico/a156d34f-fa2a-4cf2-b9fe-b299dc286a27.jpg?itok=D-HpC9hQ",
      alt: "Ofício Divino",
    },
    {
      src: "https://web.archive.org/web/20190104065329im_/http://monjasbeneditinas.org.br/sites/default/files/styles/p_ginas_internas/public/imagens-servico/a4957499-7f74-473f-b299-31b233cfc3a6.jpg?itok=uOM6cmKD",
      alt: "Ofício Divino",
    },
    {
      src: "https://web.archive.org/web/20190104065329im_/http://monjasbeneditinas.org.br/sites/default/files/styles/p_ginas_internas/public/imagens-servico/acc6278c-9e9c-4346-b36b-555f3e8cd244.jpg?itok=9dl7YO02",
      alt: "Ofício Divino",
    },
    {
      src: "https://web.archive.org/web/20190104065329im_/http://monjasbeneditinas.org.br/sites/default/files/styles/p_ginas_internas/public/imagens-servico/be537634-4064-46eb-9c8c-07533f295a1d.jpg?itok=Hl0uJpem",
      alt: "Ofício Divino",
    },
    {
      src: "https://web.archive.org/web/20190104065329im_/http://monjasbeneditinas.org.br/sites/default/files/styles/p_ginas_internas/public/imagens-servico/e7ce9bce-8b7c-4e8a-b769-d300eb420450.jpg?itok=rskUPOxr",
      alt: "Ofício Divino",
    },
    {
      src: "https://web.archive.org/web/20190104065329im_/http://monjasbeneditinas.org.br/sites/default/files/styles/p_ginas_internas/public/imagens-servico/fd492791-092d-4e70-b57c-acabd216db69.jpg?itok=LT6QM0Xq",
      alt: "Ofício Divino",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section id="main-content">
        {/* Main Content Header */}
        <header id="main-content-header" className="mb-8 text-center">
          <h1 id="page-title" className="text-3xl font-bold">Ofício Divino</h1>
        </header>

        {/* Main Content */}
        <div id="content" className="region">
          <div
            id="block-system-main"
            className="block block-system no-title block-region-content block-main"
          >
            <article
              id="node-386"
              className="node node-page node-promoted article odd node-lang-pt-br node-full clearfix"
              about="/oficio-divino"
              typeof="sioc:Item foaf:Document"
              role="article"
            >
              <div className="node-content">
                <div className="field-body view-mode-full prose max-w-prose mx-auto">
                  <h2 id="divino" className="text-center">OPUS DEI</h2>
                  <h4 className="text-center">A GRANDE OBRA BENEDITINA</h4>
                  <p>&nbsp;</p>
                  <p>
                    O Ofício Divino é uma das características mais significativas da vida dos mosteiros. Na Regra aos Monges, São Bento utiliza a seguinte expressão: <i>Opus Dei</i> (Obra de Deus). É, por assim dizer, um dos muitos aspectos fundamentais tratados pelo Santo Patriarca, como elemento naturalmente precioso da vida monástica. Opus Dei significa a oração litúrgica, originalmente concretizada nesta frase <i>“nihil operi Deis præponatur”</i> – nada antepor ao ofício Divino (RB 43, 1). A estrutura do Ofício Divino permite que a monja utilize esta oração da Igreja como louvor a Deus na pessoa de Jesus Cristo que nos salvou. Tal como Moisés, que reza diante de Deus (Ex 32-33), somos figuras entre o céu e a terra, pertencemos a ambos, ao Deus do Céu e à terra. Queremos a salvação da nossa humanidade, transportamos tudo isso para a nossa oração, porque nela está o Messias, Jesus Cristo, que redimiu a nossa realidade. Os nossos momentos litúrgicos nos permitem louvar e escutar a Deus, são presença orante de Cristo na realidade da Igreja, que ajuda e ensina o homem a rezar.
                  </p>
                  <p>
                    A perfeição da monja está na obra de Deus em si própria; assim sendo, o fim último da monja é a contemplação de Deus. Mas para que isso aconteça devemos ser mulheres de oração.
                  </p>
                  <p>
                    A espiritualidade da monja, mulher da palavra, deve-se sobretudo ao uso dos salmos como sua oração predileta. Através dos salmos, podemos dialogar com Deus. A função da oração será sempre um cultivo onde, no campo do coração de cada uma, Deus faz brotar colheitas abundantes.
                  </p>
                  <p>
                    Dizemos e chamamos <i>Liturgia das Horas</i> a esta forma de rezar estruturada principalmente pelos salmos da Sagrada Escritura. Nesta <i>Liturgia</i>, ao terminarmos cada salmo repetimos a invocação à Santíssima Trindade porque, desta maneira, aprova toda a nossa oração, inserindo-nos na eternidade do Pai que é amor, do Filho, que é salvação e no Espírito Santo, fonte de toda a sabedoria. É também consciência de que Ele está presente, pois assim a característica da nossa adoração complementa-se nesta função salvífica da Trindade, e que repetimos profundamente em ação de graças. Porque, quem reza os salmos sabe que a história se repete: a fé de Abraão, de Moisés, do rei Davi. Repetimos este selo de infinidade.
                  </p>
                  <p>
                    Ao colocarmos os salmos em nossos lábios, fazemos com que Deus venha à nossa realidade, ao interior de cada coração. Portanto, no Opus Dei, a monja alcança uma realização da antecipação da união com Deus, porque une a divina liturgia à vida cotidiana dos homens, intercedendo por eles, participando das primícias dos louvores eternos da Jerusalém celeste.
                  </p>
                  <p>
                    Compreender esta forma de orar, com a Sagrada Escritura, nesta escuta atenta dos salmos, poemas e cânticos compostos há muito tempo por pessoas como nós, entendemos a espiritualidade do Opus Dei num contínuo escutar e orar, pois nestas duas santas atividades, a espiritualidade da oração beneditina encontra sua harmonia.
                  </p>
                  <p>
                    O louvor Divino é, pois, a forma pela qual a Igreja reza e adora a Deus por meio de Jesus Cristo, que é o salvador de toda a humanidade. Quando celebramos a liturgia somos convidadas a viver em amor e união. A confiança nesta dinâmica do Opus Dei de São Bento, com a nossa consagração monástica, torna-se, por assim dizer, verdadeira <i>Obra de Deus</i>, por excelência, no mundo.
                  </p>
                </div>

                {/* Galeria de imagens com Lightbox */}
                <div className="field-imagem-de-capa view-mode-full mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(image.src)}
                        className="focus:outline-none"
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto cursor-pointer rounded"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <span property="dc:title" content="Ofício Divino" className="hidden" />
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-0 right-0 m-4 text-white text-3xl font-bold"
            >
              &times;
            </button>
            <img src={selectedImage} alt="Imagem ampliada" className="max-w-full max-h-full" />
          </div>
        </div>
      )}
    </div>
  );
}
