import { Link } from 'react-router-dom'
import './Cart.css'
import { useState } from 'react'
import AddButton from './AddButton'
import VeganStatus from './VeganStatus'
import { useStateValue } from '../state/StateProvider'
import { addAction, removeAction, addQuantityAction, decreaseQuantityAction, placeOrderAction } from '../state/actionCreator'
import { useNavigate } from "react-router-dom";
const Cart = () =>{
    const navigate = useNavigate();
    const [cartExpanded, setCartExpanded] = useState(true)
    const [previousOrdersExpanded, setPreviousOrdersExpanded] = useState(true)
    const [cart, dispatch] = useStateValue()
    const handleToggleCart = () => {
        setCartExpanded(prev=>!prev)
    }
    const handleTogglePreviousOrder = () => {
        setPreviousOrdersExpanded(prev=>!prev)
    }

    const handlePlaceOrder = () =>{
        dispatch(placeOrderAction())
        navigate("/")
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
    return (
        <main className="make_scroll place_order">
            <div className="top_panel">
                <Link className="back_link" to={'/'}>
                    <img src="/back.svg" alt="" />
                </Link>
                <h2>Place Order</h2>
                <div className="header_icon_wrapper_cart">
                <div className="header_icon_cart" ><img alt='' src="/message.svg" /></div>
                </div>
            </div>

            <section className="place_order_products">

                <div className="cart_list_items_items">
               
                <h4 style={{marginBottom: '7px'}} className="cart_list_items_title cart_list_items_title_toggle" onClick={handleToggleCart}>Current Order
                <hr /><img className={!cartExpanded ? 'toggle_rotate':'' } src="/expander.svg" alt="" />
                </h4>
                <div className={`cart_list_items_panel ${!cartExpanded ? 'display_none': '' }`}>
                    {
                        cart.current.length === 0 &&
                        <div className="place_order_content"><div className="no_orders_text">No current order!</div><p className="add_to_text">Add something from the menu.</p><Link className="btn btn_primary place_order_button" to={"/"}>START ORDERING</Link></div>
                    }
                    {
                        cart.current.map((food)=>(
                            <div key={food.item_id} className="cart_list_items_item">
                                <div className="cart_list_items_description">
                                    <div className="cart_list_items_list">
                                        <VeganStatus type={food.item_type} containsEgg={food.contains_egg}/>
                                        <div style={{marginLeft: '12px'}}>
                                            <h4 style={{fontWeight: '400', marginBottom: '5px'}}>{food.item_name}</h4>
                                            <div className="cart_list_items_info">
                                                <div className="cart_list_items_price">
                                                    <h5 style={{fontWeight: '400', marginBottom: '0'}}>₹{food.item_price_details[0].item_price}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <AddButton
                                        item={food}
                                        count={isAddedToCart(food.item_id)}
                                        addToCart={addToCart}
                                        removeFromCart={removeFromCart}
                                        addQuantity={addQuantity}
                                        decreaseQuantity={decreaseQuantity}
                                    />
                                </div>
                            </div>
                        ))
                    }
                    
                    </div>
                </div>
                <div className="cart_list_items_items">
                <h4 style={{marginBottom: '7px'}} className="cart_list_items_title cart_list_items_title_toggle" onClick={handleTogglePreviousOrder}>Previous orders
                <hr /><img className={!previousOrdersExpanded ? 'toggle_rotate':'' } src="/expander.svg" alt="" />
                </h4>
                {
                    cart.placed.map((item, index)=>(
                        <div key={index} className={`cart_list_items_panel ${!previousOrdersExpanded ? 'display_none': '' }`} style={{marginBottom: '12px'}}>
                        {
                            item.map((food)=>(
                                <div key={food.item_id} className="cart_list_items_item">
                                    <div className="cart_list_items_description">
                                        <div className="cart_list_items_list">
                                            <VeganStatus type={food.item_type} containsEgg={food.contains_egg}/>
                                            <div style={{marginLeft: '12px'}}>
                                                <h4 style={{fontWeight: '400', marginBottom: '5px'}}>{food.item_name}</h4>
                                                <div className="cart_list_items_info">
                                                    <div className="cart_list_items_price">
                                                        <h5 style={{fontWeight: '400', marginBottom: '0'}}>₹{food.item_price_details[0].item_price}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{marginRight: '12px'}}>{food.quantity}</div>
                                    </div>
                                </div>
                            ))
                        }
                        
                    </div>
                    ))
                }
                    
                </div>
                {
                    cart.current.length !== 0 &&
                    <button onClick={handlePlaceOrder} className="btn_card primary_button_card primary_button_white">
                    {cart.current.length} Items<span className="primary_button_add">PLACE ORDER
                    <div className="primary_button_right">
                        <img src="/right.svg" alt="" />
                    </div>
                    </span>
                    </button>
                }
                

            </section>

           

        </main>
    )
}

export default Cart