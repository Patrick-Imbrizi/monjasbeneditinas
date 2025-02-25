'use client';

import { Link } from "lucide-react";

export default function Page() {
    return (
        <div className="container mx-auto px-4 py-8">
            <section id="main-content">
                {/* Main Content Header */}
                <header id="main-content-header" className="clearfix mb-8">
                    <h1 id="page-title" className="text-3xl font-bold text-center">
                        Regra
                    </h1>
                </header>

                {/* Main Content */}
                <div id="content" className="region">
                    <div
                        id="block-system-main"
                        className="block block-system no-title odd first last block-count-2 block-region-content block-main"
                    >
                        <article
                            id="node-477"
                            className="node node-sao-bento node-promoted article odd node-lang-pt-br node-full clearfix"
                            about="/sao-bento/regra"
                            typeof="sioc:Item foaf:Document"
                            role="article"
                        >
                            <div className="node-content">
                                <div className=" flex flex-col gap-3 field-body view-mode-full prose max-w-prose mx-auto">
                                    <p className="text-center">
                                        <img
                                            alt=""
                                            src="/regra-sao-bento.jpg"
                                            className="mx-auto w-[450px] h-[373px]"
                                        />
                                    </p>
                                    <p>
                                        A Regra de São Bento não é a única Regra monástica. Porém no Ocidente é a Regra que se notabilizou por ser utilizada na maioria dos mosteiros. A grande sabedoria da Regra é não definir as minúcias da vida monástica, mas conceder parâmetros que são válidos até os dias de hoje. Obviamente São Bento não conseguiu isso sem esforço. Aliás, analisando sua Regra podemos perceber a evolução de sua forma de pensar e em como ela foi construída mediante sua experiência e não apenas por elucubrações.
                                    </p>
                                    <p>
                                        São Bento conseguiu unir as grandes características monásticas daqueles que o precederam. Com os grandes anacoretas do deserto (como Antão, Moisés Etíope e Pambo) aprendeu o valor do silêncio, da solidão e da oração constante; com os primeiros cenobitas (Pacômio e sua koinonia) aprendeu a enxergar na primeira comunidade de Jerusalém o exemplo fundamental para a vida compartilhada entre os cristãos; com Basílio Magno aprendeu a comunhão carismática, ou seja, a imagem do Corpo de Cristo paulino, em que cada um é precioso para a dinâmica do mosteiro (por isso o processo pedagógico penitencial é tão “lento” em sua Regra) e assim com muitos outros Pais monásticos.
                                    </p>
                                    <p>
                                        Outro ponto importante na Regra de Bento é sacralizar todo ritual dentro do mosteiro. Isso faz com que a vida monástica não seja uma sucessão de eventos que parecem desconectados entre si, mas a ressignificar mostrando que nada se faz por acaso ou mera vontade dentro do mosteiro. Por isso, os múltiplos lava-pés citados relembram que o monge é convocado para servir; as inúmeras advertências sobre nada fazer por vontade própria recolocam o monge no caminho de renúncia a si mesmo; a figura do abade não nos deixa esquecer que temos um Pai que está vigilante e atento a tudo que fazemos.
                                    </p>
                                    <p>
                                        Finalmente, mesmo aquilo que parece ultrapassado para a vida monástica de hoje, continua sendo aproveitável para a nossa realidade. Por exemplo, a questão das crianças no mosteiro, mesmo que não recebamos crianças na idade corporal, quantos não se comportam como crianças em nossa sociedade. Para esses, a Regra aponta um caminho para educação e formação monástica. O mesmo vale para as exclusões temporárias e as punições corporais da Regra, não as praticamos; contudo há um valor intrínseco nelas que precisamos ter sempre diante dos olhos. Esse valor é o de “em tudo glorificar a Deus”. Caso tenha mais curiosidade, veja nossa seção de Artigos, onde temos vários comentários sobre a Regra.
                                    </p>

                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
}
