import './AddButton.css'

const AddButton = ({item, count, addToCart, removeFromCart, addQuantity, decreaseQuantity}) => {

    const handleAddToCart = () =>{
        addToCart(item)
    }

    const handleAddQuantity = ()=> {
        addQuantity(item)
    }

    const handleDecreaseQuantity = () =>{
        if(count === 1){
            removeFromCart(item)
        }else{
            decreaseQuantity(item)
        }
    }
    return (
        <>
        {
            count === 0 ? <button className="add_button_add" style={{width: 'auto'}} type="button" onClick={handleAddToCart}>
                <span className="add_button_plus" ></span>ADD
            </button> : <button className="add_button_add" style={{width: 'auto'}} type="button">
            <span className="add_button_minus" onClick={handleDecreaseQuantity}></span>{count}
            <span style={{marginRight: 0, marginLeft: '12px'}} onClick={handleAddQuantity} className="add_button_plus"></span>
        </button>
        }
        </>
        
    )
}

export default AddButton