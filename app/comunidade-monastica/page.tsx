import React from 'react';

// import { Container } from './styles';

const Page = () => {
    return (
        <div className="container mx-auto p-4">
        <section id="main-content">
          <header id="main-content-header" className="mb-6">
            <h1 id="page-title" className="text-3xl font-bold text-center">
              Comunidade Monástica
            </h1>
          </header>
      
          <div id="content" className="region">
            <div id="block-system-main" className="block">
              <article
                id="node-468"
                className="prose prose-lg mx-auto"
                about="/comunidade-monastica"
                role="article"
              >
                <div className="node-content">
                  <div className="field-body view-mode-full">
                    <div className="text-center">
                      <img
                        alt=""
                        src="https://web.archive.org/web/20190104064336im_/http://www.monjasbeneditinas.org.br/sites/default/files/u5/c.jpg"
                        className="mx-auto w-full max-w-[1000px] h-auto"
                      />
                    </div>
                    <div className="text-center mt-6">
                      <img
                        alt=""
                        src="https://web.archive.org/web/20190104064336im_/http://6ad.com.br/projetos/mosteiro/sites/default/files/css_injector/images/comunidade-monastica_0.jpg"
                        className="mx-auto w-full max-w-[600px] h-auto"
                      />
                    </div>
                    <p className="mt-6">
                      Quando o Espírito Santo desce sobre o mudo no dia de Pentecostes, forma imediatamente uma comunidade, primeira célula da Igreja nascente. Essa primeira assembleia cristã é um modelo para toda comunidade de vida que se funda na Igreja.
                    </p>
                    <p className="mt-4">
                      No primeiro capítulo da Regra de São Bento, ele define os “cenobitas” como <i>“aqueles que vivem num mosteiro, militando sob uma regra e um superior (abbas)” (RB 1,2)</i>. E são estes três elementos que distinguem uma comunidade monástica beneditina: vida comunitária, seguimento de uma regra monástica e um superior que é o pai, o guia espiritual da comunidade como um todo, bem como de cada membro.
                    </p>
                    <p className="mt-4">
                      Um mosteiro não é uma aglomeração acidental de transeuntes, mas uma comunidade intencional daquelas que, cada qual a seu modo, responderam a um chamado íntimo insistente. Esse chamado leva as monjas cenobitas a procurarem juntas a Deus; e este “procurar juntas” leva-as a estabelecerem vínculos entre si de maneira única. No mosteiro, todas somos irmãs. Trata-se de uma fraternidade tão real quanto a de sangue.
                    </p>
                    <p className="mt-4">
                      A monja, tendo se comprometido material e espiritualmente, pelo voto de Estabilidade, com uma comunidade particular, deve se interessar em conservar a comunidade centrada no que realmente deve ser: fiel ao Ofício Divino, Lectio Divina, oração pessoal; tem o compromisso de estar presente às suas irmãs no mosteiro, procurando apoiar sua vida comunitária.
                    </p>
                    <p className="mt-4">
                      Uma comunidade fraterna não são apenas irmãs que vivem juntas, mas membros umas das outras. Formam um só corpo, o de Cristo, como recorda São Paulo:
                    </p>
                    <div className="my-6 text-center">
                      <blockquote className="border-l-4 border-gray-400 pl-4 italic">
                        <p>Nós somos muitos e formamos um só corpo em Cristo,</p>
                        <p>sendo membros uns dos outros.</p>
                        <p>Rm 12, 5</p>
                      </blockquote>
                    </div>
                    <p className="mt-4">
                      Nós, monjas do Mosteiro de Nossa Senhora da Glória, temos a missão particular de realizar esta unidade entre nós, modelada sobre a unidade das Pessoas divinas, e manifestá-la a todo o mundo, pois este é o lema de nosso mosteiro: <i>Ut Unum Sint,</i>
                    </p>
                    <div className="my-6 text-center">
                      <blockquote className="border-l-4 border-gray-400 pl-4 italic">
                        <p>Para que sejam um, como nós somos um:</p>
                        <p>Eu neles e tu em mim, para que sejam perfeitos na unidade...</p>
                        <p>Jo 17, 22-23</p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
      
    )
}

export default Page;