import React from "react";
import type { NextApiRequest } from "next";
import Link from "next/link";

import { Pokemon } from "../../src/types";

import PokemonCard from "../../components/PokemonCard";
import pokemonList from "../../public/pokemon.json";

// export async function getServerSideProps(req: NextApiRequest) {
//   const response = await fetch("http://localhost:3000/pokemon.json");
//   const pokemon = (await response.json()) as Pokemon[];

//   const q = (req.query?.q as string)?.toLowerCase() ?? "";

//   return {
//     props: {
//       q: req.query?.q ?? "",
//       pokemon: pokemon.filter((p: Pokemon) => p.name.toLowerCase().includes(q)),
//     },
//   };
// }

const Home: React.FunctionComponent<{
  q: string;
  pokemon: Pokemon[];
}> = () => {
  const [query, setQuery] = React.useState("");

  const [pokemon, setPokemon] = React.useState(pokemonList);

  const onSearchQueryChange = (value) => {
    setQuery(value);
    if (!value) {
      setPokemon(pokemonList);
      return;
    }
    setPokemon(
      pokemon.filter((p: Pokemon) => p.name.toLowerCase().includes(value))
    );

    console.log(value);
  };
  return (
    <>
      <form>
        <input
          type="text"
          name="q"
          value={query}
          onChange={(e) => onSearchQueryChange(e.target.value)}
          className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xl border-gray-300 border-2 rounded-md"
          placeholder="Search"
        />
      </form>
      <div className="grid grid-cols-3 gap-5 mt-3">
        {pokemon.slice(0, 10).map((pokemon) => (
          <Link href={`/solution/pokemon/${pokemon.id}`} key={pokemon.id}>
            <a>
              <PokemonCard pokemon={pokemon} />
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
