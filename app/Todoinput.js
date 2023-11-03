
const Todoinput=()=>{
    return(
        <div>
            <input className="input-text" type="text" placeholder="Enter your task"/>
            <select className="dropwon-selecter">
                <option value="">Select priority</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <input className="time-add" type="time" placeholder="Enter Estimated Time"/>
            <button type="button" >Add</button>
        </div>
    )
}
export default Todoinput;
