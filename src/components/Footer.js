import './Footer.css'
import { useStateValue } from '../state/StateProvider'
import { Link } from 'react-router-dom'
const Footer = ({tab, setTab}) => {
    const [cart, ] = useStateValue()
    return(
    <footer className="footer">
        <ul className="footer_nav">
            <li>
                <div>
                   <img src="/bolt.svg" alt="" />
                </div>
            </li>
            <li>
                <Link to={'/'}>
                    <div className={tab === 'menu' ? 'active': ''} >
                        <img src="/book.svg" alt="" />
                    </div>
                </Link>
            </li>
            <li >
                {cart.current.length > 0 && <span className="cart_count">{cart.current.length}</span>}
                <Link to={'/place-order'}>
                <div className={tab === 'cart' ? 'active': ''}>
                    <img src="/bag.svg" alt="" />
                </div>
                </Link>
            </li>
        </ul>
        </footer>
    )
}

export default Footer