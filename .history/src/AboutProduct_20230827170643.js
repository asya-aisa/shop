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
                        <h3>{elem.name}</h3>
                        <img
                        src={elem.image}
                        alt="product"
                        width='400px'
                        />

                        <button className="btn" onClick={()}>Go back</button>
                    </div>
                )
            })}
        </div>
    )
}

export default AboutProduct;