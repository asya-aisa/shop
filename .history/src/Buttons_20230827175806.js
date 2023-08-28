function Buttons({filteredClothes, allClothes}) {
    const arrayChecked = []


    const addItem = () => {
        const arrayChecked = []

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
            <label>DRESS</label>
            <input onClick={addItem} type="radio" name="dress"/>

            <label>SHOES</label>
            <input type="radio" name="shoes"/>
        </div>
    
    </div>)
}
export default Buttons;