import './Header.css'
const Header = ({categories, selectedCategory, setSelectedCategory, restaurantDetail}) => {
    return (
        <header className="header">
        <div className="header_top">
            <h3>
                <span></span> <img src={restaurantDetail.restraunt_image} alt="restraunt" width="24" height="15" className="restRoundImage" />
                <div className="dropdown">
                    <span>{restaurantDetail.restraunt_name}</span>
                </div>
                
            </h3>
                    <ul>
                        <li>
                            <div className="header_icon" ><img alt='' src="/tag.svg" /></div>
                        </li>
                        <li>
                            <div className="header_icon" ><img alt='' src="/voice.svg" /></div>
                        </li>
                    </ul>
                </div>

                    <nav className="nav_bar">
                        <ul id="superCat" className="list_items">
                            {
                            categories.map(category =>(
                                <li key={category}><div className={category === selectedCategory ? 'active': ''} onClick={()=>setSelectedCategory(category)}>{category}</div></li>
                            ))
                            }
                        </ul>
                    </nav>
        </header>
    )
}

export default Header