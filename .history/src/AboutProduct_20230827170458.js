import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { data } from "./data";

const AboutProduct = () => {
    const navigate = useNavigate();
    const {data} = useParams();

    return (
        <div>
            {data.filter((item) => item.title === title).map((elem, index) => {
                return (
                    <div>
                        <h3>{elem.na}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default AboutProduct;