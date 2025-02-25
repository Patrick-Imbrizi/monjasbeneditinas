'use client';

import { useState } from 'react';

export default function Page() {
  const [selectedImage, setSelectedImage]: any = useState(null);

  const images = [
    {
      src: 'https://web.archive.org/web/20190104064416im_/http://monjasbeneditinas.org.br/sites/default/files/styles/p_ginas_internas/public/imagens-servico/6f4a4c17-ee86-4110-8824-fdb43a6d6d56.jpg?itok=A2vudcda',
      width: 400,
      height: 301,
    },
    {
      src: 'https://web.archive.org/web/20190104064416im_/http://monjasbeneditinas.org.br/sites/default/files/styles/p_ginas_internas/public/imagens-servico/287242bb-da77-49e4-b65c-a36e60372748.jpg?itok=OOtHOUXR',
      width: 400,
      height: 301,
    },
    {
      src: 'https://web.archive.org/web/20190104064416im_/http://monjasbeneditinas.org.br/sites/default/files/styles/p_ginas_internas/public/imagens-servico/af06d17c-1783-4d3d-a864-cbc225a7ac52.jpg?itok=AlP3AW8-',
      width: 400,
      height: 301,
    },
    {
      src: 'https://web.archive.org/web/20190104064416im_/http://monjasbeneditinas.org.br/sites/default/files/styles/p_ginas_internas/public/imagens-servico/be9bf7f5-d2b6-4bf3-8d5f-83de768423eb.jpg?itok=UPYzyeA3',
      width: 400,
      height: 301,
    },
    {
      src: 'https://web.archive.org/web/20190104064416im_/http://monjasbeneditinas.org.br/sites/default/files/styles/p_ginas_internas/public/imagens-servico/c8c835aa-456b-489a-a4a7-dc28c01be890.jpg?itok=jjGRKwnS',
      width: 400,
      height: 301,
    },
    {
      src: 'https://web.archive.org/web/20190104064416im_/http://monjasbeneditinas.org.br/sites/default/files/styles/p_ginas_internas/public/imagens-servico/e77ae1e1-6dac-422d-abf1-c284e5aac467.jpg?itok=iRZv63NT',
      width: 400,
      height: 301,
    },
    {
      src: 'https://web.archive.org/web/20190104064416im_/http://monjasbeneditinas.org.br/sites/default/files/styles/p_ginas_internas/public/imagens-servico/oblatos.jpg?itok=tAIOAjIh',
      width: 400,
      height: 301,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <main id="content-column" className="content-column" role="main">
        <div className="content-inner">
          <section id="main-content">
            {/* Cabeçalho */}
            <header id="main-content-header" className="mb-6">
              <h1 id="page-title" className="text-3xl font-bold">
                Oblatos
              </h1>
            </header>
            {/* Conteúdo */}
            <div id="content" className="region">
              <div id="block-system-main" className="block block-system no-title">
                <article
                  id="node-372"
                  className="node node-page node-promoted article odd node-lang-pt-br node-full"
                  about="/oblatos"
                  role="article"
                >
                  <div className="node-content">
                    <div className="field-body view-mode-full prose">
                      <p>
                        O Oblato secular é o fiel (leigo, consagrado ou sacerdote) que, chamado por
                        Deus pelo Sacramento do Batismo, e em conformidade com seu estado de vida,
                        associa-se a uma comunidade monástica beneditina, a fim de viver coerentemente
                        a sua consagração batismal, em comunhão com a Igreja, no espírito da Regra de
                        São Bento.
                      </p>
                      <p>
                        Os oblatos fazem parte, de certo modo, da família monástica e compartilham dos
                        bens espirituais do mosteiro. Assumem o compromisso de viver segundo o espírito
                        da Regra de São Bento.
                      </p>
                      <p>
                        O oblato torna-se irmão das monjas e deve agir testemunhando o espírito da Regra
                        no mundo. Este liame não dispensa o oblato das responsabilidades humanas
                        (familiares, profissionais, sociais, etc.) e cristãs (eclesiais e paroquiais).
                        Cumpre ao oblato nutrir vivos sentimentos de filial fidelidade à Igreja, pulsar
                        com ela e identificar-se com o seu magistério. Viverá, assim, também o espírito da
                        Regra de São Bento, que através dos séculos sempre foi uma referência para a Igreja.
                        O oblato, portanto, guardará em tudo a fé pura e ortodoxa oriunda da voz oficial da
                        Igreja.
                      </p>
                      <p>
                        O candidato à oblação beneditina passa por um tempo de discernimento e preparação
                        com formações dadas pela monja mestra dos oblatos. Passará pelo postulantado e pelo
                        noviciado antes de fazer sua oblação, que é o ato pelo qual ele se oferece a Deus e
                        se torna membro da comunidade monástica, ainda que de forma diferente da monja.
                      </p>
                    </div>
                    {/* Galeria de Imagens */}
                    <div className="field-imagem-de-capa view-mode-full mt-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {images.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedImage(image.src)}
                            className="focus:outline-none"
                          >
                            <img
                              src={image.src}
                              alt={`Imagem ${index + 1}`}
                              width={image.width}
                              height={image.height}
                              className="w-full h-auto cursor-pointer"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <span
                    property="dc:title"
                    content="Oblatos"
                    className="hidden"
                  />
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
      </main>
      {/* Modal Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-0 right-0 m-4 text-white text-2xl"
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
