import { Link } from "react-router-dom";

function Clothes({clothesList}) {
    return (<div className="products">
        {clothesList.map((item => {
            const {id, name, price, image} = item;

            return(<div className="product-card" key={id}>
                <Link to={`/about/${item.title}`}>

                </Link>
                
                <h3>{name}</h3>
                <h4>$ {price}</h4>
            </div>)
        }))}
    </div>)
}

export default Clothes;