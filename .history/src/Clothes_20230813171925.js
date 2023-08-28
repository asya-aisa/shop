function Clothes({clothes}) {
    return (<div>
        {clothes.map((item => {
            const {id, name, searchTerm, price, image} = item;

            return(<div></div>)
        }))}
    </div>)
}

export default Clothes;