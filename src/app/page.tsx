import Link from "@/components/link";

export default function Home() {
  return (
    <div className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
      <div className="flex-auto min-w-0 mt-6 flex flex-col px-2 pt-50 md:px-0">
        {/* <Image
          className="rounded-full"
          src="/ski-square.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
        <div className="my-10">
          <div className="my-5 text-4xl font-bold">Leo Tian🏂</div>
          <div className="text-lg">
            <span className="transition-all duration-300 hover:bg-gray-200">
            Hi, I&apos;m a student at the University of Washington majoring in <Link to="https://www.cs.washington.edu/">Computer Science</Link>.
            </span>
            <span>
              &nbsp;
            </span>
            <span className="transition-all duration-300 hover:bg-gray-200">
            My interests include intelligent systems and their applications. 
            </span>
            <span>
              &nbsp;
            </span>
            <span className="transition-all duration-300 hover:bg-gray-200">
            I&apos;m a developer for Prof. Amy Ko&apos;s Wordplay Lab and assistant for the CSE 12x courses at UW.
            </span>
          </div>
        </div>
      </div>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
