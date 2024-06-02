// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Myprofile.css';
import Graph1 from './Graphone/ProfGraphone';
import Graph2 from './Graphtwo/ProfGraphtwo';
import Graph3 from './Graphthree/ProfGraphthree';
import ProfilePic from './ProfilePic/Profilepic';
import StarRate from './Rating/StartRate';
import Ltcodeimg from '../../assets/leetcodeimg.png';
import CChefImg from '../../assets/codechefimg.png';
import GithubImg from '../../assets/githubUser.png';
import LdIn from '../../assets/linkedinuserimg.png';
import ClgIcon from '../../assets/collegeicon.png';
import InternIcon from '../../assets/internship.png';
import SklIcon from '../../assets/skillicon.png';

function Profile(){
    return(
        <>
        <div className="mid">
           <div className="midback">
   
           <div className="leftbox">
            <div id="profilephoto">
            <ProfilePic />
            </div>
            <div id="handler">
                <p>arshkrs</p>
            </div>
            <div id="stars">
            <StarRate />
            </div>
            <div id="icons">
                <a href=""><img src={Ltcodeimg} alt="CodeChef" style={{ width: '2.5vw' }}></img></a>
                <a href=""><img src={CChefImg} alt="CodeChef" style={{ width: '2.5vw' }}></img></a>
                <a href=""><img src={GithubImg} alt="HackerRank" style={{ width: '2.5vw' }}></img></a>
                <a href=""><img src={LdIn} alt="LinkedIn" style={{ width: '2.5vw' }}></img></a>
            </div>
            <div id="box1">
                <p style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={ClgIcon} style={{ width: '20px', marginRight: '10px' }} />
                    <span style={{ marginLeft: '10px' }}>Lovely Professional University</span>
                </p>
                <p style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={InternIcon} style={{ width: '20px', marginRight: '10px' }} />
                    <span style={{ marginLeft: '10px' }}>Coding Geeta</span>
                </p>
            </div>
            <div id="box2">
                <img src={SklIcon} style={{ width: '20px' , height: '25px', marginTop: '5px'}}/>
                <div>java</div>
                <div>C++</div>
                <div>ReactJS</div>
                <div>NodeJs</div>
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
            <Graph1/>
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