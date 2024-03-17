import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Myprofile.css';
import Graph1 from './ProfGraphone';
import Graph2 from './ProfGraphtwo';
import Graph3 from './ProfGraphthree';
function Profile(){
    const [count, setCount] = useState(0)
    return(
        <>
        <div className="mid">
           <div className="midback">
   
           <div className="leftbox">
            <div id="profilephoto">

            </div>
            <div id="stars">

            </div>
            <div id="icons">

            </div>
            <div id="box1">

            </div>
            <div id="box2">
                
            </div>
           </div>
           <div className="rightbox">
            <div id="row11">
            Software Developer
            </div>
           <button id="UP">Update Profile</button>
           <div className="rightcol">
            <div id="row1">
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quas eius ut nobis qui doloribus ullam, molestias nemo repellat 
            officia pariatur dignissimos dicta voluptas itaque at quasi? Reprehenderit
             repellendus, officia voluptates esse laudantium veritatis voluptas.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus tenetur 
            pariatur sed qui doloribus cum rerum praesentium, animi reprehenderit et
             consequatur quam. Voluptate soluta sit non, mollitia consequuntur omnis sapiente.
            </div>
            <div id="row2">
            <div id="r2">
            <div id="circ1">
            <Graph1 />
            </div>
            <div id="circ2">
            <Graph2 />
            </div>
            <div id="circ3">
            <Graph3 />
            </div>
            </div>
            </div>
            <div id="row3">
                <div id="r3">
            <div id="rec1">
            
            </div>
            <div id="rec2">
            
            </div>
            <div id="rec3">
            
            </div>
            </div>
            </div>
           </div>
           </div>
           </div>
        </div>

        </>
    )
}
export default Profile