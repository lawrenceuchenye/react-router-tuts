import "./index.css";
import { useParams } from "react-router-dom";
const index = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <h1>product to fetch id:{id}</h1>
    </div>
  );
};

export default index;
