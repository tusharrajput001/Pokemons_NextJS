import Axios from "axios";
import '../css/pokemon.css'


const Details = (props) => {

  return (
    <div className="details-card">
      <h1>Details</h1>
      <img
        src={props.data.sprites.other.dream_world.front_default}
        alt="Dream World Image"
      />
      <br />
      <h2>{props.data.forms[0].name.toUpperCase()  }</h2>
      <p>Experience: {props.data.base_experience}</p>
      <p>Weight: {props.data.weight}</p>
      <p>Height: {props.data.height}</p>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { id } = params;
  const { data } = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

  return {
    props: {
      data,
    },
  };
};

export default Details;
