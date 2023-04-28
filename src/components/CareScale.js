const CareScale = ({scaleValue, careType}) => {
    const scaleType = careType === 'light' ? '☀️' : '💧'
    return (
        <div onClick={() => alertCare(careType,scaleValue)}>
            <span>{scaleType.repeat(scaleValue)}</span>
        </div>
    )

}

function alertCare(careType, scaleValue){
    let quantity = {
        1:'peu',
        2:'modérement',
        3:'beaucoup'
    }

    alert(`Cette plante requiert ${quantity[scaleValue]} ${careType==="light" ? "de lumière" : "d'arrosage!"}`)
}
export default CareScale