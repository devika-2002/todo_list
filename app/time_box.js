"use client"
import React,{useState} from "react";

const Time_box=()=>{
	const [hours,setHours]=useState('');

  	const handleInputChange=(e)=>{
    	setHours(e.target.value);
	};
	const handleAddHours=()=>{
		if (parseInt(hours)>0){
			console.log("added hours in project")
		}else{
			alert("please add a valid number of hour")
		}
		setHours("");
	};
	return(
		<div>
			<lable>Time:</lable>
  			<button onClick={handleAddHours}></button>
    		<input
      			type="number"
      			value={hours}
      			onChange={handleInputChange}
      			min="0"
    		/>
  		</div>	
	)
}
export default Time_box;
