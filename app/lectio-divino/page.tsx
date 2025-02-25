'use client';

import { useState } from 'react';

export default function Page() {
  const [selectedImage, setSelectedImage]: any = useState(null);

  const images = [
    {
      src: "https://web.archive.org/web/20190104065515im_/http://monjasbeneditinas.org.br/sites/default/files/styles/p_ginas_internas/public/imagens-servico/2cad4f3c-0237-495c-b463-6f7ac676dfa2.jpg?itok=MzceXzso",
      alt: "Lectio Divina",
    },
    {
      src: "https://web.archive.org/web/20190104065515im_/http://monjasbeneditinas.org.br/sites/default/files/styles/p_ginas_internas/public/imagens-servico/3963f80d-7fbe-483d-a136-ef8d3a47ffc4.jpg?itok=PaG7nNjI",
      alt: "Lectio Divina",
    },
    {
      src: "https://web.archive.org/web/20190104065515im_/http://monjasbeneditinas.org.br/sites/default/files/styles/p_ginas_internas/public/imagens-servico/c593e651-9ad7-44eb-b015-06b04d071701.jpg?itok=DbBfNRPZ",
      alt: "Lectio Divina",
    },
    {
      src: "https://web.archive.org/web/20190104065515im_/http://monjasbeneditinas.org.br/sites/default/files/styles/p_ginas_internas/public/imagens-servico/d7a6f717-fcf2-44c3-9cdf-00a11a8a2b4c.jpg?itok=d5Yh1WqB",
      alt: "Lectio Divina",
    },
    {
      src: "https://web.archive.org/web/20190104065515im_/http://monjasbeneditinas.org.br/sites/default/files/styles/p_ginas_internas/public/imagens-servico/d385d007-bf0b-4599-b0df-bb3b733208b0.jpg?itok=hQTQewRM",
      alt: "Lectio Divina",
    },
    {
      src: "https://web.archive.org/web/20190104065515im_/http://monjasbeneditinas.org.br/sites/default/files/styles/p_ginas_internas/public/imagens-servico/e692e530-c505-4dca-8ff0-30d2261148ac.jpg?itok=Ww3WUwXC",
      alt: "Lectio Divina",
    },
    {
      src: "https://web.archive.org/web/20190104065515im_/http://monjasbeneditinas.org.br/sites/default/files/styles/p_ginas_internas/public/imagens-servico/e9007a16-163b-410a-bb30-8eb8fcec2d88.jpg?itok=A-TJneng",
      alt: "Lectio Divina",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section id="main-content">
        {/* Main Content Header */}
        <header id="main-content-header" className="mb-8 text-center">
          <h1 id="page-title" className="text-3xl font-bold">
            Lectio Divina
          </h1>
        </header>

        {/* Main Content */}
        <div id="content" className="region">
          <div
            id="block-system-main"
            className="block block-system no-title block-region-content block-main"
          >
            <article
              id="node-470"
              className="node node-page node-promoted article odd node-lang-pt-br node-full clearfix"
              about="/lectio-divina"
              role="article"
            >
              <div className="node-content">
                <div className="field-body view-mode-full prose max-w-prose mx-auto">
                  <div className="text-center mb-4">
                    <h2 className="titulo text-xl font-bold">AMOR À PALAVRA DE DEUS</h2>
                  </div>
                  <p>
                    O primeiro alimento da vida de oração é a Palavra de Deus. Deus falou pelos profetas.
                    Depois nos enviou o seu próprio Filho. Ele é o semeador da parábola que, sem cessar,
                    lança no mundo a semente divina: “Este é o meu Filho bem-amado, escutai-o”.
                    <br />
                    <br />
                    Esta palavra do Filho bem-amado, a dos profetas que a prepara, nós a escutamos várias vezes
                    ao dia. Ela é para nós mais importante que o pão do qual nos alimentamos:
                  </p>
                  <p className="citacao text-center italic my-4">
                    Não só de pão vive o homem,
                    <br />
                    <br />
                    Mas de toda a palavra
                    <br />
                    <br />
                    Que sai da boca de Deus.
                  </p>
                  <p>
                    Não basta escutar a Palavra, mesmo com alegria, para em seguida retirar-se e logo esquecê-la.
                    A assimilação do pensamento de Deus não se faz assim. É preciso não apenas acolhê-la com fé,
                    mas conservá-la no nosso coração, como fazia a Virgem Maria; e relê-la, confiá-la à memória e a
                    repetir sempre até impregnar-nos profundamente dela.
                    <br />
                    <br />
                    Este é um modo muito simples de entrar na vida de oração. É, na verdade, escutar Deus que nos
                    fala pelos profetas ou por seu Filho. É contemplar sua ação na história dos homens. É acolher sua
                    revelação na fé e no amor. Para germinar, é preciso que a semente caia numa terra boa, num coração
                    atento, nobre e generoso. A Escritura, dizem os Santos Padres, muda com a preparação daquele que a
                    recebe, com a pureza de seu coração, seu desejo de Deus, seu recolhimento. Com efeito, é aos pequenos
                    e humildes que o Pai celeste reserva o conhecimento mais profundo e mais saboroso de sua Palavra.
                  </p>
                  <p>
                    Quando Jesus vivia em nossa terra, explicava as Escrituras aos seus discípulos. Seus corações ardiam,
                    enquanto lhes falava pelo caminho. Mas após a Ascensão, é o Espírito quem abre o livro das Escrituras.
                    Ele estava presente, agia no coração dos profetas e deve estar presente no coração de todos aqueles
                    que deles acolhem a mensagem.
                    <br />
                    <br />
                    Deus lança a semente para que ela dê frutos: primeiramente, frutos de oração, pois a leitura pode
                    transformar-se em oração silenciosa, quando o Espírito passa, ou em canto de exultação. Em seguida,
                    frutos de contemplação. Era pelo perseverante contato com a Escritura que os antigos monges atingiam um
                    conhecimento profundo do mistério divino, uma teologia viva e plena de amor.
                  </p>
                  <p>
                    A Palavra dá também frutos no desenrolar do cotidiano da existência. Confirmando a fé e avivando a
                    esperança, ela nos desprende das preocupações da vida e conduz ao caminho da perfeição.
                    <br />
                    <br />
                    O Senhor pode iluminar diretamente os espíritos e os corações. Ele o faz frequentemente com os
                    pequeninos e os mais humildes. Todavia, é habitualmente através da Escritura ou da liturgia alimentada
                    pela Escritura, que penetramos na Inteligência do mistério de Deus. Por isso, cada dia devemos reservar
                    um tempo à leitura dos Livros Santos, especialmente do Evangelho, a fim de comungar o pensamento de
                    Jesus, como comungamos o seu Corpo e o seu Sangue. Esta abertura à Palavra sempre deve ser feita num
                    clima de oração, de humildade e de escuta da Igreja, pois é a ela que Deus confiou os Livros Santos.
                  </p>
                  <p>
                    Os monges e monjas sempre foram, no coração da Igreja, ouvintes atentos da Palavra. Entre eles são
                    muitos os que a transcreveram, amaram e comentaram. A Regra de São Bento reserva, de fato, longos
                    momentos a esta penetração na Palavra de Deus, que foi denominada <em>Lectio Divina</em>. Esta é um
                    dos elementos essenciais da vida contemplativa da monja. Ela pode estender-se, com a ajuda dos que, no
                    decorrer dos anos, receberam as luzes do Espírito, a todos os aprofundamentos do mistério divino
                    contido na Escritura:
                  </p>
                  <p className="citacao text-center italic my-4">
                    Quando vier o Espírito da Verdade, ele vos conduzirá à verdade plena.
                    <br />
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Jo 16, 13
                  </p>
                </div>

                {/* Galeria de Imagens com Lightbox */}
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
              <span property="dc:title" content="Lectio Divina" className="hidden" />
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
            <img
              src={selectedImage}
              alt="Imagem ampliada"
              className="max-w-full max-h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
