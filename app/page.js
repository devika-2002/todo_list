<<<<<<< HEAD
import Todoinput from "./Todoinput.js";
const page=()=>{
    return(
        <div className="main-container">
            <Todoinput  />
        </div>
    )
}
export default page;
=======

import Priority_box from "./priority_box.js";
import Time_box from "./time_box.js";
import Input_box from "./Input_box.js";

const Page=()=>{
    return(
    	<>
        	<Priority_box/>
        	<Time_box/>
        	<Input_box/>
        </>
    );
};
export default Page;
>>>>>>> 5b8ccc6ef4c7e5c38e2e707c58fb95462ec753b1
