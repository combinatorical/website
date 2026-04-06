import { MathText } from '../components/math';

export const metadata = {
    title: 'Research',
    description:
        'My research work (papers, conferences, talks, etc.) and some events i went to.',
};

export default function Papers() {
    const publications = [
        {
            title: 'On the Planarity and Maximum Degree of $K_{1,n}$-free Graphs',
            authors: 'Daniel Blanquicett, Juan G. Saurith-Moreno',
            status: 'Work in progress',
        },
        {
            title: 'Semiparametric $\\Gamma$-Regression with a Penalized Complexity Prior for the Shape Parameter',
            authors:
                'Juan G. Saurith-Moreno, Steban D. Ibarra, Daniel L. R. Orozco',
            status: 'Work in progress',
        },
        {
            title: 'Modelación Estacional del Dengue mediante Distribuciones de Mezcla en Sucre y Cauca (Colombia, 2023)',
            authors:
                'Steban D. Ibarra, Juan G. Saurith-Moreno, Daniel L. R. Orozco, Danna Cruz-Reyes',
            status: 'Unpublished manuscript',
        },
        {
            title: 'Non-Linear Optimization Methods for Parameter Estimation of the Nadarajah-Haghighi Distribution',
            authors:
                'Juan G. Saurith-Moreno, Juan D. Diaz, Daniel L. R. Orozco',
            journal: 'Revista Comunicaciones en Estadística',
            volume: '19(1)',
            year: 2026,
            status: 'In press',
        },
        {
            title: 'Optimization of Marketing Strategies Employing LLMs: A Systematic Review',
            authors:
                'Juan G. Saurith-Moreno, Daniel Blanco-Galan, Sebastian Mindiola G., Jose Francisco Ruiz-Muñoz',
            journal: 'Lúmina',
            volume: '25(2), E0058',
            location: 'Manizales, Colombia',
            date: 'August 2024',
            // link: 'https://luminajournal.com/articulo-llms-marketing',
        },
        {
            title: 'A Systematic Review of Large Language Models (LLMs) in Scientific Literature: Scientometric Analysis and Tree of Science Application',
            authors:
                'Juan G. Saurith-Moreno, Daniel Blanco-Galan, Sebastian Mindiola G., Jose Francisco Ruiz-Muñoz',
            journal: 'Revista de Ingeniería Interfaces',
            volume: '7(1), pp. 1-19',
            location: 'Cúcuta, Colombia',
            date: 'August 2024',
            // link: 'https://revistainterfaces.com/articulo-llms-scientometric',
        },
    ];

    const talks = [
        // ... (sin cambios)
        {
            title: 'Feria ITEM: Innovación, Transferencia de Conocimiento y Emprendimiento',
            date: 'Nov. 11th, 2025',
            location:
                'Universidad Nacional de Colombia, Sede La Paz; La Paz, Colombia',
            role: 'Speaker',
        },
        {
            title: 'elENA - X Encuentro Nacional de Álgebra & EMALCA Argentina 2025',
            date: 'Aug. 4th – Aug. 15th, 2025',
            location:
                'Facultad de Matemática, Astronomía, Física y Computación; Universidad Nacional de Córdoba, Córdoba, Argentina',
            note: 'In-Person',
        },
        {
            title: 'ICMAM Satellite Conference in Analysis and PDE for Central America and the Caribbean: Analysis Partial Differential Equations 2025',
            date: 'Jul. 14th – Jul. 18th, 2025',
            location:
                'Association of Mathematicians of El Salvador; School of Mathematics, University of El Salvador, El Salvador',
            note: 'Virtual & In-Person',
        },
        {
            title: 'Días de Combinatoria 2025 -- Escuela EMALCA',
            date: 'Jun. 9th – Jun. 20th, 2025',
            location: 'Pontificia Universidad Javeriana; Bogotá, Colombia',
            note: 'In-Person',
        },
        {
            title: 'ICMAM Latin America 2024',
            date: 'Oct. 14th – Oct. 18th, 2024',
            location:
                'Pontificia Universidad Javeriana; Cali, Valle del Cauca, Colombia',
            note: 'Online',
        },
    ];

    return (
        <main>
            <h1 className="font-semibold text-2xl mb-1 tracking-tighter">
                Articles & Research
            </h1>
            <p className="text-neutral-400 text-lg mb-10">
                Academic work, publications, and talks.
            </p>

            {/* Completed Articles */}
            <section className="mb-16">
                <h2 className="font-semibold text-xl tracking-tight mb-6 text-white border-b border-neutral-800 pb-3">
                    Completed Articles
                </h2>

                <div className="space-y-9">
                    {publications
                        .filter(
                            (pub) =>
                                pub.status === 'In press' ||
                                pub.status === undefined,
                        )
                        .map((pub, idx) => (
                            <article key={idx} className="group">
                                <h3 className="font-medium text-lg leading-tight text-white">
                                    <MathText text={pub.title} />
                                </h3>

                                <p className="text-neutral-400 mt-2 text-[15px]">
                                    {pub.authors}
                                </p>

                                {(pub.journal ||
                                    pub.volume ||
                                    pub.location ||
                                    pub.date ||
                                    pub.year) && (
                                    <p className="text-neutral-500 text-sm mt-1.5">
                                        {pub.journal && (
                                            <span className="italic">
                                                {pub.journal}
                                            </span>
                                        )}
                                        {pub.volume && (
                                            <span>, {pub.volume}</span>
                                        )}
                                        {pub.location && (
                                            <span>, {pub.location}</span>
                                        )}
                                        {pub.date && <span>, {pub.date}</span>}
                                        {pub.year && <span>, {pub.year}</span>}
                                    </p>
                                )}

                                {/* Enlaces */}
                                {/* <div className="flex flex-wrap gap-3 mt-4">
                                    {pub.link && (
                                        <a
                                            href={pub.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                                        >
                                            📄 Read Paper
                                        </a>
                                    )}
                                    {pub.arxiv && (
                                        <a
                                            href={pub.arxiv}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors"
                                        >
                                            arXiv
                                        </a>
                                    )}
                                </div> */}
                            </article>
                        ))}
                </div>
            </section>

            {/* Articles in Development */}
            <section className="mb-16">
                <h2 className="font-semibold text-xl tracking-tight mb-6 text-white border-b border-neutral-800 pb-3">
                    Articles in Development
                </h2>

                <div className="space-y-8">
                    {publications
                        .filter(
                            (pub) =>
                                pub.status === 'Work in progress' ||
                                pub.status === 'Unpublished manuscript',
                        )
                        .map((pub, idx) => (
                            <article key={idx}>
                                <h3 className="font-medium text-lg leading-tight text-white">
                                    <MathText text={pub.title} />
                                </h3>
                                <p className="text-neutral-400 mt-2 text-[15px]">
                                    {pub.authors}
                                </p>
                                <p className="mt-3 inline-block px-3 py-1 text-xs font-medium rounded-full bg-neutral-800 text-neutral-400">
                                    {pub.status}
                                </p>
                            </article>
                        ))}
                </div>
            </section>

            {/* Talks and Events */}
            <section>
                <h2 className="font-semibold text-xl tracking-tight mb-6 text-white border-b border-neutral-800 pb-3">
                    Talks and Events
                </h2>

                <div className="space-y-8">
                    {talks.map((talk, idx) => (
                        <article
                            key={idx}
                            className="flex flex-col sm:flex-row sm:items-start gap-4"
                        >
                            <div className="sm:w-48 flex-shrink-0">
                                <p className="text-sm font-medium text-neutral-400">
                                    {talk.date}
                                </p>
                            </div>

                            <div className="flex-1">
                                <h3 className="font-medium text-lg leading-tight text-white">
                                    {talk.title}
                                </h3>
                                <p className="text-neutral-500 text-[15px] mt-1">
                                    {talk.location}
                                </p>
                                {(talk.role || talk.note) && (
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {talk.role && (
                                            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-emerald-950 text-emerald-400">
                                                {talk.role}
                                            </span>
                                        )}
                                        {talk.note && (
                                            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-neutral-800 text-neutral-400">
                                                {talk.note}
                                            </span>
                                        )}
                                    </div>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
