function Buttons({filteredClothes, allClothes}) {
    const arrayChecked = []


    const addItem = (name) => {
        arrayChecked.push(name)
        console.log()

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
            <label>DRESS
            <input onClick={addItem} type="radio" name="dress"/>
            </label>

            <label>SHOES
            <input type="radio" name="shoes"/>
            </label>
        </div>
    
    </div>)
}
export default Buttons;