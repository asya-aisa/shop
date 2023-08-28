function Clothes({clothes}) {
    return (<div>
        {clothes.map((item => {
            const {id, name, searchTerm, price, image} = item;

            return(<div key={id}>
                <div className="products">
                    <div className="product-card">
                        <img />
                    </div>
                </div>
            </div>)
        }))}
    </div>)
}

export default Clothes;