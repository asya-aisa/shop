function Buttons({filteredClothes, allClothes, data, setClothes}) {
    const arrayChecked = []


    const addItem = (e) => {
        e.preventDefault();
        const value = e.target.value;
        arrayChecked.push(value);
        console.log(arrayChecked)

    }

    const filterClothes = searchTerm => {
        const filterResult = [];

        data.forEach(item => {
            item.searchTerm.forEach(term => {
                if(arrayChecked.includes(term)) {
                    filterResult.push(item);
                    setClothes(filterResult);
                }
            })
        })
    }
    return(<div>
    <div className="cont">
        <button onClick={() => allClothes()} className="change">All</button>
        <button onClick={() => filteredClothes('dress')} className="change">Dresses</button>
        <button onClick={() => filteredClothes('skirt')} className="change">Skirts</button>
        <button onClick={() => filteredClothes('pants')} className="change">Pants</button>
        <button onClick={() => filteredClothes('shoes')} className="change">Shoes</button>
        <button onClick={() => filteredClothes('shirt')} className="change">Shirts</button>
        </div>

        <div className="cont">
            <form
            <label>DRESS
            <input onClick={addItem} type="radio" name="dress" value='dress'/>
            </label>

            <label>SHOES
            <input onClick={addItem} type="radio" name="shoes" value='shoes'/>
            </label>
        </div>
    
    </div>)
}
export default Buttons;