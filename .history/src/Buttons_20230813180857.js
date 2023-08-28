function Buttons({filteredClothes}) {
    return(<div className="cont">
        <button onClick={() => filteredClothes('dress')} className="change">Dresses</button>
        <button onClick={() => filteredClothes('pants')} className="change">Skirts</button>
        <button onClick={() => fi} className="change">Pants</button>
        <button className="change">Shoes</button>
        <button className="change">Shirts</button>
    </div>)
}
export default Buttons;