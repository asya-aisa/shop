import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { data } from "./data";

const AboutProduct = () => {
    const navigate = useNavigate();
    const {data} = useParams();

    return (
        <div>
            {data.filter((item) => )}
        </div>
    )
}

export default AboutProduct;