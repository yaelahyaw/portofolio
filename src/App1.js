import React, {Component} from 'react';
import Background from './bg.png';
import Chevron from "./chevron-arrow-down.png";
class App extends Component {
  render(){
   
    return(
      <div style={styles.background}>
        <div style={styles.overlay}>
        <div style={styles.container}>
          <div style={styles.text}>RYAN</div>
          <div style={styles.text1}>The Most Simple & Yes Powerful Way to Launch your startup </div>
          <div style={styles.row}>
            <div style={styles.border}>
              <input type="text" name="name"placeholder="Enter Your Email..." style={{padding: 10, width: 250, borderStyle: 'none', fontSize: 14, borderRadius: 10}} />
          </div>
          <div onClick={() => alert('Clicked')} style={{display: 'flex', backgroundColor: '#2CA64E', padding: 10, marginLeft: 7, color: '#fff', borderRadius: 10}}>
            GET EARLY ACCESS
          </div>
          </div>

          <div style={styles.footer}>
          <p> Scroll Down to explore</p>    
          <img alt="chevron" src={Chevron} height="16" width="16" style={{alignSelf: 'center'}}/>
          </div>
          


        </div>
        </div>
        </div>
      
    )
  }
}
let w = window.innerWidth;
let h = window.innerHeight;
 const styles= {
   background : {
    backgroundImage: `url(${Background})`,
     height: h,
     width: w
   },
   overlay : {
    backgroundColor: "rgba(81, 77, 67, 0.5)",
    height: h, 
    width: w
   },
   container : {
    display: 'flex', 
    flexDirection: 'column'
   },
   text : {
    alignSelf: 'center', 
    marginTop: 50,
    borderStyle: 'solid',
    borderWidth:10, 
    maxWidth: 50, 
    color: '#fff',
    justifyContent: 'center',
    padding: 10
   },
   text1 : {
    alignSelf: 'center',
    marginTop: 50 ,
    color: 'white', 
    fontSize: 35, 
    maxWidth: (w/2),
    textAlign: 'center'
   },
   row : {
    display: 'flex',
    alignSelf: 'center', 
    marginTop: 60
   },
   border : {
    display: 'flex', 
    backgroundColor: '#fff', 
    borderRadius: 10, 
    marginRight: 16
   },
   footer : {
    display: 'flex', 
    alignSelf: 'center', 
    marginTop: 60, 
    flexDirection: 'column'
   }
 }

export default App;