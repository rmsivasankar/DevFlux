import Image from "next/image";
import SearchForm from "../../components/SearchForm";

export default async function Home({searchParams}: {searchParams: Promise <{ query?: string }>}) {
  const query = (await searchParams).query;
  return (
    <>
      <section className="hero_section">
        <div className="mx-10 my-10 border-2 border-solid	border-green-300 p-3 rounded-xl bg-slate-800 backdrop-blur-sm">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl mb-5 font-extrabold bg-slate-50 text-black px-3">
              DevFlux
            </h1>
            <h2 className="text-2xl py-2 font-bold">
              Where "Finding a Project" is the Real Project
            </h2>
            <p className="italic text-red-300">
              "Connecting developers…eventually"
            </p>
            <p className="pt-5 w-4/5 text-xl text-center">
              <span className="text-yellow-500 font-semibold">Welcome to Devflux</span> – the platform where you can finally stop dreaming about working 
              with other developers and start actually browsing endless lists of profiles. 
              Find fellow devs who are as picky, exhausted, and picky about code style as you are. 
              Think of it as a dating app but with even fewer swipes and more filters you don’t really understand. 
              Ready to connect and maybe work together? Sure, you are.
            </p>
            <SearchForm query={query} />
          </div>
        </div>
      </section>

      <section className="all_projects">
        <div className="mx-10 my-10 border-2 border-solid	border-green-300 p-3 rounded-xl bg-slate-800 backdrop-blur-sm">
          <div className="flex">
            <p className="text-3xl font-semibold">
              {query ? `Search results for "${query}"` : `All Projects`}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
