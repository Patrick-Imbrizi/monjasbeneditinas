'use client';

export default function Page() {
    return (
        <section id="main-content" className="py-8 p-5">
            {/* Main Content Header */}
            <header id="main-content-header" className="mb-8 clearfix">
                <h1 id="page-title" className="text-3xl font-bold text-center">
                    Nossos Horários
                </h1>
            </header>

            {/* Main Content */}
            <div id="content" className="region">
                <div
                    id="block-system-main"
                    className="block block-system no-title odd first last block-count-2 block-region-content block-main"
                >
                    <article
                        id="node-473"
                        className="node node-page node-promoted article odd node-lang-pt-br node-full clearfix"
                        about="/nossos-horarios"
                        typeof="sioc:Item foaf:Document"
                        role="article"
                    >
                        <div className="node-content">
                            <div className="field-body view-mode-full prose mx-auto">
                                {/* Título centralizado */}
                                <div className="text-center">
                                    <h2 className="titulo text-xl italic">
                                        “Louvei-vos sete vezes por dia”. (RB 16, 1)
                                    </h2>
                                    <div className="mt-4">&nbsp;</div>
                                    <p>
                                        Buscando cumprir o preceito de “orar sem cessar” (cf. 1 Ts 5, 17; Lc 18), nos reunimos sete
                                        vezes ao dia para celebrar o Ofício Divino, a Liturgia da Igreja, à qual todos os que chegam ao
                                        Mosteiro são convidados a celebrar conosco, e também para celebrar a Eucaristia diariamente, centro
                                        de todo o dia da monja.
                                    </p>
                                    <div className="mt-4">&nbsp;</div>
                                </div>

                                {/* Tabela de Horários */}
                                <div className="overflow-x-auto mt-6">
                                    <table className="min-w-full border-collapse">
                                        <thead>
                                            <tr>
                                                <th className="border px-4 py-2">Horário</th>
                                                <th className="border px-4 py-2">Atividade</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border px-4 py-2">4:30</td>
                                                <td className="border px-4 py-2">Despertar</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-4 py-2">4:45</td>
                                                <td className="border px-4 py-2">Ofício de Vigílias</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-4 py-2">5:40</td>
                                                <td className="border px-4 py-2">Ofício de Laudes</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-4 py-2">6:20</td>
                                                <td className="border px-4 py-2">Lectio divina</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-4 py-2">7:15</td>
                                                <td className="border px-4 py-2">
                                                    Celebração Eucarística (de segunda à sábado)
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border px-4 py-2">7:30</td>
                                                <td className="border px-4 py-2">
                                                    Celebração Eucarística (aos Domingos e solenidades)
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border px-4 py-2">8:30</td>
                                                <td className="border px-4 py-2">Ofício de Terça</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-4 py-2">12:00</td>
                                                <td className="border px-4 py-2">Ofício de Sexta</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-4 py-2">14:00</td>
                                                <td className="border px-4 py-2">Ofício de Noa</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-4 py-2">17:00</td>
                                                <td className="border px-4 py-2">Ofício de Vésperas</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-4 py-2">17:40</td>
                                                <td className="border px-4 py-2">Leitura espiritual</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-4 py-2">18:30</td>
                                                <td className="border px-4 py-2">Jantar</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-4 py-2">19:00</td>
                                                <td className="border px-4 py-2">Recreio</td>
                                            </tr>
                                            <tr>
                                                <td className="border px-4 py-2">19:45</td>
                                                <td className="border px-4 py-2">Ofício de Completas</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Card com atendimento do Bazar */}
                                <div className="card mt-6 p-4 border rounded bg-zinc-800">
                                    <div className="text-center">
                                        <h4 className="font-bold mb-2">Atendimento do Bazar:</h4>
                                        <p>
                                            De segunda a sábado - Das 9:00 às 12:00


                                        </p>
                                        <p>
                                            Das 14:00 às 17:00
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Metadados ocultos */}
                        <span property="dc:title" content="Nossos Horários" className="hidden" />
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
    );
}
