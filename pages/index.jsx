import React from 'react'
import Link from "next/link";
import Axios from "axios";
import '../css/pokemon.css'

const Home = (props) => {
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

export default Home
