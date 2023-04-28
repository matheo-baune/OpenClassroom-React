import {plantList} from "../datas/plantList";
import "../styles/ShoppingList.css"
import PlantItem from "./PlantItem";
const ShoppingList = () => {
    const categories = plantList.reduce((current, plant) =>
            current.includes(plant.category) ? current : current.concat(plant.category)
        , [])


    return (
        <div>
            <ol>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ol>
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light }) => (
                    <PlantItem key={id}
                        id={id}
                        cover={cover}
                        name={name}
                        water={water}
                        light={light}
                    />
                ))}
            </ul>
        </div>
    )
}


export default ShoppingList