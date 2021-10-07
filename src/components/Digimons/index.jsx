import { useSelector } from "react-redux";

const Digimons = () => {
  const { digimons } = useSelector((state) => state);

  return (
    <ul>
      {digimons.map((digimon, index) => (
        <li key={index}>{digimon.name}</li>
      ))}
    </ul>
  );
};

export default Digimons;
