'use client';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export function Math({
    children,
    block = false,
}: {
    children: string;
    block?: boolean;
}) {
    return block ? (
        <BlockMath math={children} />
    ) : (
        <InlineMath math={children} />
    );
}

export function MathText({ text }: { text: string }) {
    const parts = text.split(/(\$[^$]+\$)/g).filter(Boolean);

    return (
        <>
            {parts.map((part, idx) => {
                if (part.startsWith('$') && part.endsWith('$')) {
                    return <InlineMath key={idx} math={part.slice(1, -1)} />;
                }

                return <span key={idx}>{part}</span>;
            })}
        </>
    );
}
