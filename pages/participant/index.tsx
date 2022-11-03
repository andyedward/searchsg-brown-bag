import React from "react";
import type { NextApiRequest } from "next";
import Link from "next/link";

import { Pokemon } from "../../src/types";

import PokemonCard from "../../components/PokemonCard";
import pokemonList from "../../public/pokemon.json";

const Home: React.FunctionComponent<{
  q: string;
  pokemon: Pokemon[];
}> = () => {
  const [query, setQuery] = React.useState("");

  return (
    <>
      <form>
        <input
          type="text"
          name="q"
          value={query}
          className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xl border-gray-300 border-2 rounded-md"
          placeholder="Search"
        />
      </form>
      <div className="grid grid-cols-3 gap-5 mt-3"></div>
    </>
  );
};

export default Home;
