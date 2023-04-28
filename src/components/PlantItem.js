import "../styles/PlantItem.css"
import CareScale from "./CareScale";

const PlantItem = ({id, name, cover, light, water}) => {
    return (

        <li className='lmj-plant-item' key={id}>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`}/>
            {name}
            <div>
                <CareScale careType='water' scaleValue={water}/>
                <CareScale careType='light' scaleValue={light}/>
            </div>
        </li>
    )
}


export default PlantItem