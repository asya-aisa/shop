function Clothes({clothesList}) {
    return (<div>
        {clothesList.map((item => {
            const {id, name, searchTerm, price, image} = item;

            return(<div key={id}>
                <div>
                    <div className="product-card">
                        <img src={image} width='400px' alt="thing" />
                        <h4>{name}</h4>
                        <h4>{price}</h4>
                    </div>
                </div>
            </div>)
        }))}
    </div>)
}

export default Clothes;