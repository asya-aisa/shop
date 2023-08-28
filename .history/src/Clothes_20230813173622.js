function Clothes({clothesList}) {
    return (<div className="products">
        {clothesList.map((item => {
            const {id, name, searchTerm, price, image} = item;

            return(<div className="product-card" key={id}>
                <img src={image} width='400px' height='500px' alt="thing" />
                <h3>{name}</h3>
                <h4>{}</h4>
                <h4>{price}</h4>
            </div>)
        }))}
    </div>)
}

export default Clothes;