import Age from './components/Age';
import { BlogPosts } from './components/posts';

export default function Page() {
    return (
        <section>
            <h1 className="font-mono mb-2 text-5xl font-semibold tracking-tight">
                <a href="./">Juan Saurith</a>
            </h1>

            <p className="text-sm text-neutral-300">
                Email: jsaurith (at) unal.edu.co
            </p>

            <Age />

            <p className="mt-10 mb-4">
                I am a statistics student at the{' '}
                <a href="https://unal.edu.co/" className="underline">
                    National University of Colombia
                </a>
                , interested in simulations, physics-based systems, and
                computational modeling.
            </p>

            <p className="mb-10">
                My current work focuses on combinatorics, particularly graph
                theory. I am also interested in probability distributions and
                generalized additive models, with an emphasis on computational
                and simulation-driven approaches.
            </p>

            {/* <p>Recent posts:</p> */}

            <div className="my-2">
                <BlogPosts limit={3} />
            </div>
        </section>
    );
}
