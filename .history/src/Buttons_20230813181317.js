function Buttons({filteredClothes}) {
    return(<div className="cont">
        <button onClick={() => filteredClothes('dress')} className="change">Dresses</button>
        <button onClick={() => filteredClothes('pants skirt')} className="change">Skirts</button>
        <button onClick={() => filteredClothes('skirt')} className="change">Pants</button>
        <button onClick={() => filteredClothes('shirt')} className="change">Shoes</button>
        <button onClick={() => filteredClothes('shoes')} className="change">Shirts</button>
    </div>)
}
export default Buttons;