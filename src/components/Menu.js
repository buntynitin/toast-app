import { useState } from 'react'
import './Menu.css'
import VeganStatus from './VeganStatus'
import AddButton from './AddButton'
import { useStateValue } from '../state/StateProvider'
import { addAction, removeAction, addQuantityAction, decreaseQuantityAction } from '../state/actionCreator'
const Menu = ({menu}) =>{
    const [cart, dispatch] = useStateValue()
    const [expanded, setExpanded] = useState(true)
    const handleToggle = (ref) => {
        if(expanded === false){
            const scrollElement = ref.currentTarget.parentElement
            setTimeout(()=>{
                scrollElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 0)
        }
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


    return (
        <>
            <section>
                    <div className="list_items_items">
                    {
                        menu.map((item)=>(
                            <div key={item.subCategory} id={item.subCategory}>
                            <h4 style={{ marginTop: '19px', marginBottom: '20px'}} className="list_items_title list_items_title_toggle title_text" onClick={handleToggle}>{item.subCategory}
                            <hr /><img className={!expanded ? 'toggle_rotate':'' } src="/expander.svg" alt="" />
                            </h4>
                            <div className={!expanded ? 'display_none': '' }>
                                {
                                    item.items.map((food)=>(
                                        <div className="list_items_item">
                                            {food.item_image_url &&
                                            <div>
                                                <img src={food.item_image_url} alt={food.item_name} width="71" height="71" />
                                            </div>
                                            }
                                            <div className="list_items_description">
                                                <h3>{food.item_name}</h3>
                                                <div className="list_items_info">
                                                    <div className="list_items_price">
                                                        <VeganStatus type={food.item_type} containsEgg={food.contains_egg}/>
                                                        <h4>₹{food.item_price_details[0].item_price}</h4> 
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
                                        </div>
                                    ))
                                }
                            </div>
                            </div>
                        )) 
                    }
                    </div>
            </section>  
        </>

    )
}

export default Menu