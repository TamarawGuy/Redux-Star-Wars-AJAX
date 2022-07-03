import { useSelector } from "react-redux";
import Character from "./Character";
import Loading from "./Loading";

const Characters = () => {
  const characters = useSelector((state) => state.characters.data);
  const loading = useSelector((state) => state.characters.loading);
  return (
    <section className="Characters">
      {loading && <Loading />}
      {characters.map((char) => (
        <Character key={char.id} character={char} />
      ))}
    </section>
  );
};

export default Characters;
