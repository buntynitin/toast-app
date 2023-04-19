import { useEffect, useRef, useState } from 'react';
import './Main.css';
import Header from './Header'
import { getRestrauntDetail, getMenuCategory, getSpecialMenu, getMenuByCategory } from '../data/retrieveData'
import Footer from './Footer'
import Special from './Special'
import Menu from './Menu'
function App() {
  const [menuCategory, setMenuCategory] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [restaurantDetail, setRestaurantDetail] = useState({})
  const [specialMenu, setSpecialMenu] = useState([])
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState('')
  const [menu, setMenu] = useState([])
  const mainRef = useRef(null)
  useEffect(()=>{
    setTab('menu')
    setMenuCategory(getMenuCategory())
    setSelectedCategory('special')
    setRestaurantDetail(getRestrauntDetail())
    setSpecialMenu(getSpecialMenu)
    setLoading(false)
  },[])

  useEffect(()=>{
    if(selectedCategory !== 'special'){
      setMenu(getMenuByCategory(selectedCategory))
    }
    if(mainRef.current){
      mainRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      })
    }

  }, [selectedCategory])
  return (
   
        
        !loading &&
        <> 
        <Header categories={menuCategory} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} restaurantDetail={restaurantDetail}  />
        
        <main ref={mainRef} className={`special ${selectedCategory !== 'special'? 'main_body':''}`} style={{height: 'calc(100vh - 146px)', overflow: 'auto'}} >
          {
            selectedCategory === 'special' ?
             <Special restaurantDetail={restaurantDetail} specialMenu={specialMenu} /> : 
             <Menu menu={menu} />
          }
          
        </main>
        
        <Footer tab={tab} setTab={setTab} />
        </>
        
     
    
  );
}

export default App;
