function ArrowIcon() {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
            />
        </svg>
    );
}

function GithubIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.58C4 13.91 3.48 12.73 3.32 12.21C3.23 11.94 2.84 11.13 2.5 10.94C2.22 10.79 1.82 10.41 2.49 10.4C3.12 10.39 3.57 10.98 3.72 11.21C4.44 12.42 5.59 12.08 6.05 11.87C6.12 11.35 6.33 11 6.56 10.8C4.78 10.6 2.91 9.91 2.91 6.85C2.91 5.98 3.22 5.27 3.74 4.72C3.66 4.52 3.39 3.69 3.82 2.58C3.82 2.58 4.49 2.37 6.02 3.43C6.66 3.25 7.34 3.16 8.02 3.16C8.7 3.16 9.38 3.25 10.02 3.43C11.55 2.36 12.22 2.58 12.22 2.58C12.65 3.69 12.38 4.52 12.3 4.72C12.82 5.27 13.13 5.97 13.13 6.85C13.13 9.92 11.25 10.6 9.47 10.8C9.76 11.05 10.01 11.54 10.01 12.3C10.01 13.38 10 14.88 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.54 16 8C16 3.58 12.42 0 8 0Z" />
        </svg>
    );
}

function ScholarIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 3L1 9L12 15L21 11.18V17H23V9L12 3ZM5 13.18V17C5 19.21 8.13 21 12 21C15.87 21 19 19.21 19 17V13.18L12 17L5 13.18Z" />
        </svg>
    );
}

function EmailIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M2 4H22V20H2V4ZM12 13L20 6H4L12 13ZM4 18H20V8L12 15L4 8V18Z" />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer className="mb-16">
            <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
                {/* <li>
                    <a
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="/rss"
                    >
                        <ArrowIcon />
                        <p className="ml-2 h-7">rss</p>
                    </a>
                </li> */}
                <li>
                    <a
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="mailto:jsaurith@unal.edu.co"
                    >
                        <EmailIcon />
                        <p className="ml-2 h-7">email</p>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/combinatorical"
                    >
                        <GithubIcon />
                        <p className="ml-2 h-7">github</p>
                    </a>
                </li>
                {/* <li>
                    <a
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://vercel.com/templates/next.js/portfolio-starter-kit"
                    >
                        <ArrowIcon />
                        <p className="ml-2 h-7">source</p>
                    </a>
                </li> */}
                <li>
                    <a
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://scholar.google.com/citations?user=s80Of3sAAAAJ&hl"
                    >
                        <ScholarIcon />
                        <p className="ml-2 h-7">scholar</p>
                    </a>
                </li>
            </ul>
            <p className="mt-8 text-neutral-600 dark:text-neutral-300">
                © {new Date().getFullYear()} Juan Saurith
            </p>
            <p className="mt-1 text-neutral-600 dark:text-neutral-300">
                Built with Next.js and Tailwind CSS. Hosted on Vercel.
            </p>
        </footer>
    );
}
