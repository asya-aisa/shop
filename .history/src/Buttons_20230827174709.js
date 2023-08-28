function Buttons({filteredClothes, allClothes}) {
    return(
    <div className="cont">
        <button onClick={() => allClothes()} className="change">All</button>
        <button onClick={() => filteredClothes('dress')} className="change">Dresses</button>
        <button onClick={() => filteredClothes('skirt')} className="change">Skirts</button>
        <button onClick={() => filteredClothes('pants')} className="change">Pants</button>
        <button onClick={() => filteredClothes('shoes')} className="change">Shoes</button>
        <button onClick={() => filteredClothes('shirt')} className="change">Shirts</button>

        <div className="con">
            <label>Dress</label>
            <input type="radio" name="itemOne"/>

            <label>Shoes</label>
            <input type="radio" name="itemTwo"/>
        </div>
    </div>)
}
export default Buttons;