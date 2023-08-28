function Clothes({clothes}) {
    return (<div>
        {clothes.map((item => {
            const {id, name, searchTerm, price, image} = item;
        }))}
    </div>)
}

export default Clothes;