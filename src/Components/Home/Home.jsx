import { useState } from 'react'
import './Home.css'
import './HomeResp.css'
import Graph from '../Graph/graph.jsx'
import Pichart from '../Graph/Picharts.jsx'
import card1img from '../../assets/Effective_outreach.png'
import card2img from '../../assets/analytics and reporting.png'
import card3img from '../../assets/alert and notification.png'
import card4img from '../../assets/skill mapping.png'
import card5img from '../../assets/systematic recruitment.png';
import card6img from '../../assets/data migration.png'
import overallreport from '../../assets/overallreportimg.png';
import placevideo from '../../assets/Placemevideo.mp4';
import Gmailicon from '../../assets/Gmailicon.png';
import fbicon from '../../assets/facebook.png'
import ldinicon from '../../assets/linkedin.png'
import githubicon from '../../assets/github.png'
import subsicon from '../../assets/subscimg.png'
import resline from '../../assets/footerline.png'
function home() {
    // const [count, setCount] = useState(0)
  
    return (
      <>
        <div className='landingPage'>
        <div className='Home'>
          <div className='righthome'>
          <div className='headname'>
            <p>Placement Tracker</p>
          </div>
          <div className='headbody'>
          Welcome to Place Me, your ultimate platform for career placement success in the tech world! 
          Our website is dedicated to empowering technology students on their journey
           to secure positions in multinational companies.
           With Place Me, you can effortlessly track your daily tasks and measure
            your potential for optimal career growth. 
           Elevate your placement experience by leveraging our innovative tools 
           designed to streamline your progress and 
           guide you towards success. Join Place Me and embark on a transformative path toward
            achieving your professional aspirations in the tech industry.
          </div>
          <div className='headlink'>
          
            <a href="#" previewlistener="true">
				<span>See your Achievement</span> 
				<svg height="10px" viewBox="0 0 13 10" width="13px"> <path d="M1,5 L11,5"></path> <polyline points="8 1 12 5 8 9"></polyline> </svg> 
			</a>
            
          
            
          </div>
          </div>
          <div className='lefthome'>
          <video autoPlay loop muted playsInline id="solution-banner-video">
					<source src={placevideo} type="video/mp4"></source>
				</video>
        </div>
        </div>


        <div className='MidPage'>

        <div className='rightshadow'>

        </div>

        <div className='MidPageCont'>
        <span>
        Placement Tracker gives you three Major Features:
        </span>
        <br></br>
        <span>
          ______ ____ __ _
        </span>
        </div>
        <div className='box'>
          <div>
          <span>Knowledge Hub Access</span>
          <p>Unlock a wealth of knowledge with our "Knowledge Hub Access."
             Gain daily access to a curated collection of external resources tailored for B.Tech students.
              Stay updated with the latest industry insights, tools, and tutorials to enhance your skills
               and boost your placement prospects.</p>
          </div>
          <div>
          <span>Career Navigator Pro</span>
          <p>Take control of your career journey with "Career Navigator Pro.
            " Plan your daily activities, set milestones, and track achievements seamlessly.
             Stay organized, motivated, and focused on your goals. Elevate your placement readiness 
             by managing your progress effectively.</p>
          </div>
          <div>
          <span>Job Pursuit Manager</span>
          <p>Effortlessly manage your list of dream companies with "Job Pursuit Manager.
            " Organize and prioritize potential employers, stay informed about job openings,
             and access mock interviews to hone your skills. Elevate your job search game and increase 
             your chances of landing the perfect placement. Plus, receive certificates to showcase your 
             preparedness to prospective employers.</p>
          </div>
        </div>
        
        </div>
        <div className='trackpage'>
          <div className='trackpagecont'>
          <p>Your Progress !</p>
     
          {/* <div id='graph1'>
           
            <div>
            <Graph>

            </Graph>
            </div>
            <div id="pichart">
            <Pichart>

            </Pichart>
            </div>
            <div id='report'>
              <img id="repimg" src={overallreport}></img>
              <p>Overall Report</p>
            
            </div>

          </div> */}
          <div className='parent'>
          <div className='child'>
          <Graph>

          </Graph>

          <Pichart>

          </Pichart>
         
          </div>
          </div>

          </div>
        </div>
         
        <div className='SubscPage'>
          <div className='subscript'>
          <div className='box3'>
          <div id='firstdiv'>
          <p>Career Compass: Unlimited Access Plan</p>
          Navigate your career journey with precision through our 'Career Compass: 
          Unlimited Access Plan.' Gain monthly and yearly insights, job tracking, 
          and exclusive resources. Unlock a path to success with limitless opportunities,
           ensuring you're always on course to your dream job.
          </div>
          <div id='seconddiv'>
            <p id='seconddivhead1'>ANNUAL OFFER</p>
            <p id='seconddivhead2'>Try 1 month free, then ₹3000 for 1 year.</p>
            <div>
              START YOUR FREE TRIAL
            </div>
            <p id='seconddivhead3'>
            Digital Subscription. Billed after your 1-month
            free trial as ₹3000 for 1 year.Renews automatically each year,
            and we will notify you of any price increases in advance.
            Cancel autorenewal at any time. ₹3000 saving based on an equivalent
            monthly offer.
            </p>
          </div>
          <div id='thirddiv'>
          <p id='thirddivhead1'>MONTHLY OFFER</p>
            <p id='thirddivhead2'>Try 1 month free, then ₹300 for 1 Month.</p>
            <div>
              START YOUR FREE TRIAL
            </div>
            <p id='thirddivhead3'>
            Digital Subscription. Billed after your 1 month free trial
            as ₹300 per month. Cancel anytime.
            </p>
          </div>
          </div>
          <div className='iconimg'>
          <img id='iconimgtag' src={subsicon} alt='img'></img>
          </div>
          </div>

        </div>
        <div className='page4'>
          <div className='page41'>
            <div className='page41up'>
            <div id='card1'>
              <img src={card1img} alt='img'></img>
              <h3>Effective outreach</h3>
              The platform offers better outreach with greater employer conversions. 
              The integrated CRM makes it easy to manage and track placement-related
               actions on mobile and the web.
            </div>
            <div id='card2'>
            <img src={card2img} alt='img'></img>
              <h3>Rich data analytics</h3>
              Access data analytics and create ad-hoc reports in no time. The reports help plug the gaps
               in the existing placement process, offering better insights to the entire team.
            </div>
            <div id='card3'>
            <img src={card3img} alt='img'></img>
              <h3>Prompt alerts and notifications</h3>
              Stay up-to-date with automated alerts, notifications, 
              and reminders sent on every action done. The system enables effective 
              communication via SMS, text messages, and email alerts.
            </div>
          </div>
          
          <div className='page41dow'>
            <div id='card4'>
            <img id='im1' src={card4img} alt='img'></img>
              <h3>Perfect skill mapping</h3>
              Recruiters can target the best profiles, and students can find the
               best matching job openings from a variety of verticals using Creatrix's 
               Job Matching Templates.
            </div>
            <div id='card5'>
            <img src={card5img} alt='img'></img>
              <h3>Developing Good habits</h3>
              Optimizing performance in tech involves leveraging cognitive and behavioral
               frameworks to develop efficient, 
              sustainable habits for enhanced productivity and long-term success.
            </div>
            <div id='card5'>
            <img src={card6img} alt='img'></img>
              <h3>Interview Preparation</h3>
              Technical interview preparation focuses on refining domain knowledge, problem-solving skills, 
              and effective communication strategies to excel in the evaluation process and secure success.
            </div>
          </div>
          </div>
        </div>
        <footer>
          <div id='foot1'>
          <div id='foot2'>
            <div id='footh1'>
            <p>Place Me</p>
            <a href='#'><p>goTO Top</p></a>
            </div>
            <p id='line1'>___________________________________________________________________________________________________________________________________________________________________________________
            </p>
            <img id='resline' src={resline} alt='.....'></img>
            <div id='footabout'> 
            <p>About |</p>
            <p>Privacy Notice | Terms of Use | Our Company | Careers  | Advertise with Us</p>
        
            </div>
            <div id='footabout2'>
              <p>Contact |</p>
              <p> mob no : 7061481076 | phone-no : 8553393-334232</p>
            </div>
            <div id='footabout3'>
              <p>Connect | </p>
              <p><a href='mailto:saschoogle@gmail.com'><img id='gimg' src={Gmailicon} alt='gmail'></img></a></p>
              <p><a href='https://www.facebook.com/profile.php?id=100080501947189'><img id='fbimg' src={fbicon} alt='Fbook'></img></a></p>
              <p><a href='https://github.com/Arshsharma2500'><img id='giticon' src={githubicon} alt='github'></img></a></p>
              <p><a href='www.linkedin.com/in/arsh-sharma-95ab90220'><img id='linicon' src={ldinicon} alt='linkedIn'></img></a></p>
              {/* | <a href=''><img id='' src={} alt=''></img></a></p> */}
            </div>
            <p id='line2'>___________________________________________________________________________________________________________________________________________________________________________________
            </p>
            
          </div>
          </div>
        </footer>
        </div>
      </>
    )
  }
  
  export default home