function Buttons({filteredClothes}) {
    return(<div className="cont">
        <button onClick={() => filteredClothes('dress')} className="change">Dresses</button>
        <button onClick={() =} className="change">Skirts</button>
        <button className="change">Pants</button>
        <button className="change">Shoes</button>
        <button className="change">Shirts</button>
    </div>)
}
export default Buttons;