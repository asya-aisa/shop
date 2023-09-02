import { useState } from "react";

function Buttons({filteredClothes, allClothes, data, setClothes}) {
    const [arrayChecked, setArrayChecked] = useState([]);

    const isChecked = (arr, val) => {
        return arr.some(function (arrVal) {
            return val === arrVal;
        })
    }

    const addItem = (e) => {
        const value = e.target.value;
        if (isChecked(arrayChecked, value)) {
            setArrayChecked(arrayChecked.filter(item => item !== value))
        } else {
            setArrayChecked(arrayChecked => ([...arrayChecked, value]))
        }
    }


    const filterClothes = (e) => {
        e.preventDefault();
        const filterResult = [];

        data.forEach(item => {
            let searchTerm = item.searchTerm;

            if(arrayChecked.includes(searchTerm)) {
                filterResult.push(item);
                setClothes(filterResult);
            }
            else if(arrayChecked.length < 1) {
                setClothes(data);
            }
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
            <form>
            <label className="btn-filtr">Dresses
            <input onClick={addItem} type="checkbox"  value='dress' />
            </label>

            <label className="btn-filtr">Shoes
            <input onClick={addItem} type="checkbox"  value='shoes' />
            </label>

            <label className="btn-filtr">Skirts
            <input onClick={addItem} type="checkbox"  value='skirt' />
            </label>

            <label className="btn-filtr">Pants
            <input onClick={addItem} type="checkbox"  value='pants' />
            </label>

            <label className="btn-filtr">Shirts
            <input onClick={addItem} type="checkbox"  value='shirt' />
            </label>

            <button className="btn" onClick={filterClothes}>Show results</button>
            </form>
            
        </div>
    
    </div>)
}
export default Buttons;