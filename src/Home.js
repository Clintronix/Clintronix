import './App.css';
import './pieChart';
import Me from './images/Me.jpg';
import HTML from './images/HTML5Img.png';
import CSS from './images/CSS3Img.png';
import JS from './images/JavaScript.png';


function Home() {
  return (
      <div>
      <div id="content-boxes">
        <div class="info-box large img" id="info-box-with-picture">
          <img id="info-box-picture" src={ Me } height="200" width="200" />
          <h3>Hi, my name is Clinton</h3>  
          <p>I started learning Computer Science in June 2019. First I learned HTML/CSS and javaScript 
            through Udemy. After that, I enrolled into PCC's CIS (Computer Information Systems) certification program and 
            currently maintain a 4.0 average. My recent experience is building appointment portals for Beneport 
            (an insurance company), where employees can schedule a phone interview with an agent. Enrollment periods will 
            start back up in July. At this time I am currently looking for employment.</p>
        </div>
      </div>
      <div id="content-boxes">
        <div class="info-box">
          <img src={ HTML } height="120" width="150"/> 
        </div>
          <div class="info-box">
          <img src={ CSS } height="120" width="150"/> 
        </div>
          <div class="info-box">
          <img src={ JS } height="120" width="150"/> 
        </div>
      </div>
      <div id="content-boxes">
        <div class="info-box">
          {/* add react */}
          <img src={ HTML } height="120" width="150"/> 
        </div>
          <div class="info-box">
            {/* add python! */}
          <img src={ CSS } height="120" width="150"/> 
        </div>
        
      </div>
        
      </div>

    
  );
}

 {/* pie chart */}
        {/* <div class="pieContainer" id="Pcontainer">
          <div class="pieBackground"></div>
          <div id="pieSlice1" class="hold"><div class="pie"></div></div>
          <div id="pieSlice2" class="hold"><div class="pie"></div></div>
          <div id="pieSlice3" class="hold"><div class="pie"></div></div>
          <div id="pieSlice4" class="hold"><div class="pie"></div></div>
          <div id="pieSlice5" class="hold"><div class="pie"></div></div>
          <div id="pieSlice6" class="hold"><div class="pie"></div></div> 
        </div> */}
  


export default Home;
