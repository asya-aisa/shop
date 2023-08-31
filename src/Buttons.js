
function Buttons({filteredClothes, allClothes, data, setClothes}) {
    const arrayChecked = [];

    const isChecked = (arr, val) => {
        return arr.some(function (arrVal) {
            return val === arrVal;
        });
    }
  
    const addItem = (e) => {
        const value = e.target.value;

        if(isChecked(arrayChecked, value)) {
            let index = arrayChecked.indexOf(value)

            arrayChecked.splice(index,1)
            console.log(arrayChecked)
        }

        else{arrayChecked.push(value);
        console.log(arrayChecked)
    }
    }


    const filterClothes = (e) => {
        e.preventDefault();
        const filterResult = [];

        console.log(arrayChecked)

        data.forEach(item => {
            let searchTerm = item.searchTerm;
                if(arrayChecked.includes(searchTerm)) {
                    filterResult.push(item);
                    setClothes(filterResult);
                    console.log(arrayChecked)
                }
        })
        console.log(arrayChecked)
    }
    
    console.log(arrayChecked)


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
            <label>DRESS
            <input onClick={addItem} type="checkbox" name="dress" value='dress'/>
            </label>

            <label>SHOES
            <input onClick={addItem} type="checkbox" name="shoes" value='shoes' />
            </label>

            <button onClick={filterClothes}>Show results</button>
            </form>
            
        </div>
    
    </div>)
}
export default Buttons;