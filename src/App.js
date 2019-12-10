import React, {Component} from 'react';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: window.matchMedia("(min-width: 648px)").matches,
    };
  }
  componentDidMount() {
    const handler = e => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 648px)").addListener(handler);
  }
  render(){
    const { matches } = this.state;
    return(
        <div className="wrapper with-image">
            <div matches className="text">
                Save your Earth
            <div className="text1" >
                Menanam satu pohon, menghasilkan sejuta manfaat</div>
            </div>
            <div className="component">
             <div className="donasi">Donasi Pohon</div>
            </div>
            <div>
            <div className="component1">
             <div className="kontak"><i class="fa fa-phone-alt"></i>Hubungi Kami</div>
            </div>
            </div>
            </div>
              

    )
  }
}
  
    export default App;