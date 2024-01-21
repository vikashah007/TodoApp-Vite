import style from "./FoodInput.module.css"

function FoodInput({handleONchange}){
    return (<>
        <input type="text" placeholder="Enter food names here" className={style.foodItem}
        onKeyDown={handleONchange}
        ></input>
        </>)
}
export default FoodInput;