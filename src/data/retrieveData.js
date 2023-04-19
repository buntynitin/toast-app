import data from './data.json'


export const getRestrauntDetail = () => {
    return data.restraunt_details;
}

export const getMenuCategory = () => {
    return ['special', ...Object.keys(data.menu)]
}

export const getSpecialMenu = () => {
    const items = []
    for (const category in data.menu) {
        if (data.menu.hasOwnProperty(category)) {
            for (const subCategory in data.menu[category]) {
                if (data.menu[category].hasOwnProperty(subCategory)) {
                    data.menu[category][subCategory].forEach((item)=>{
                        if(item.is_special){
                            items.push(item)
                        }
                    })
                }
            }
        }
    }
    return items
}

export const getMenuByCategory = (category) =>{
    const categoryMenu = data.menu[category]
    const categoryMenuArray = []
    for(const key in categoryMenu){
        if (categoryMenu.hasOwnProperty(key)){
            categoryMenuArray.push({
                subCategory : key,
                items: categoryMenu[key]
            })
        }
    }
    return categoryMenuArray
}