import './VeganStatus.css'

const VeganStatus = ({type, containsEgg}) => {
    return (
        <span className={`vegan_status ${type === 'non-veg' ? 'nonveg': containsEgg ? 'contains_egg': 'veg' }`}></span>
    )
}

export default VeganStatus