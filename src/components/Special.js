import { useState } from 'react'
import './Special.css'
import VeganStatus from './VeganStatus'
import AddButton from './AddButton'
import { useStateValue } from '../state/StateProvider'
import { addAction, removeAction, addQuantityAction, decreaseQuantityAction } from '../state/actionCreator'
const Special = ({restaurantDetail, specialMenu}) => {
    const [cart, dispatch] = useStateValue()
    const [expanded, setExpanded] = useState(true)

    const handleToggle = () => {
        console.log(cart)
        setExpanded(prev=>!prev)
    }
    const isAddedToCart = (id) => {
        const index = cart.current.findIndex((item)=>item.item_id === id)
        return index > -1 ? cart.current[index].quantity : 0
    }

    const addToCart = (item) => {
        dispatch(addAction(item))
    }

    const removeFromCart = (item) =>{
        dispatch(removeAction(item))
    }

    const addQuantity = (item) => {
        dispatch(addQuantityAction(item))
    }

    const decreaseQuantity = (item) => {
        dispatch(decreaseQuantityAction(item))
    }
    return(
    <>
        <section><div className="special_banner"><div className="special_image"><img src={restaurantDetail.feature_image} alt="banner" /><h3>Welcome to <br /> {restaurantDetail.restraunt_name}</h3></div></div></section>
        <section>
            <div className="grid_items">

                <h4 className="grid_items_title grid_items_title_toggle" onClick={handleToggle}>Today’s Special
                <hr /><img className={!expanded ? 'toggle_rotate':'' } src="/expander.svg" alt="" />
                </h4>
                
                
                <div className={`grid_items_panel ${!expanded ? 'display_none':''}`}>
                    {
                        specialMenu.map((item)=>(
                            <div className="grid_items_item" key={item.item_id}>
                                <div className="grid_items_image">
                                    <img src={item.item_image_url} alt={item.item_name} />
                                </div>
                                <div className="grid_items_description">
                                    <h4 className="grid_items_item_title">
                                        <VeganStatus type={item.item_type} containsEgg={item.contains_egg}/>{item.item_name}
                                    </h4>
                                    <div className="grid_items_info">
                                        <div className="grid_items_price">
                                            <h4>₹{item.item_price_details[0].item_price}</h4>
                                        </div>
                                        <AddButton
                                         item={item}
                                         count={isAddedToCart(item.item_id)}
                                         addToCart={addToCart}
                                         removeFromCart={removeFromCart}
                                         addQuantity={addQuantity}
                                         decreaseQuantity={decreaseQuantity}
                                         />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </section>

    </>
    )
}

export default Special