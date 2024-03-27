import Link from "next/link";
import Axios from "axios";
import '../css/pokemon.css'

const PokemonPage = (props) => {
  return (
    <div>
      <h1>Pokemons</h1>
      <ul>
        {props.data.results.map((pokemon, index) => (
          <li key={index}>
            <strong>
              <h3>{pokemon.name.toUpperCase()}</h3>
            </strong>
            <Link href={`/${pokemon.name}`}>
              <h4>More Details</h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps = async () => {
  const { data } = await Axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=600&offset=0");

  return {
    props: {
      data,
    },
  };
};

export default PokemonPage;










 // USING FETCH

// import Link from 'next/link'

// const PokemonPage = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>Pokemons</h1>
//       <ul>
//         {props.data.results.map((pokemon, index) => (
//           <Link href={"/server/" + pokemon.id}  key={index.id}>
//           <li>
//             <strong>
//               <h3>NAME : {pokemon.name.toUpperCase()}</h3>
//             </strong>
//           </li>
//           </Link>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export const getServerSideProps = async () => {
//   const data = await (
//     await fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
//   ).json();

//   return {
//     props: {
//       data,
//     },
//   };
// };

// export default PokemonPage;
