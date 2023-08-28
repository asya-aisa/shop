function First() {
    return(
        <div>
                <div>
      <div className='cont'>
        <h2 className='back'>Free Standart Shipping</h2>
      </div>
      <Buttons filteredClothes={chosenClothes} />
      <Clothes clothesList= {clothes} />
    </div>
        </div>
    )
}
export default First;