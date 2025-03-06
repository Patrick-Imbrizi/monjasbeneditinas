'use client';

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section id="main-content">
        {/* Main Content Header */}
        <header id="main-content-header" className="mb-8">
          <h1 id="page-title" className="text-3xl font-bold text-center">
            Doações
          </h1>
        </header>

        {/* Main Content */}
        <div id="content" className="region">
          <div
            id="block-system-main"
            className="block block-system no-title block-region-content block-main"
          >
            <article
              id="node-474"
              className="node node-page node-promoted article odd node-lang-pt-br node-full"
              about="/doacoes"
              role="article"
            >
              <div className="node-content">
                <div className="field-body view-mode-full flex justify-center">
                  <div className="card bg-white p-6 shadow-lg rounded-lg text-center max-w-md w-full">
                    <div className="mb-4">
                      <img
                        src="/logo-pix.png"
                        alt="PIX Logo"
                        className="mx-auto h-16 w-auto"
                      />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Doações via PIX</h2>
                    <p className="text-zinc-700">Envie sua doação para:</p>
                    <p className="mt-2 font-mono text-lg">
                      18256933000100
                    </p>
                  </div>
                </div>
              </div>
              <span
                property="dc:title"
                content="Doações"
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
  );
}
