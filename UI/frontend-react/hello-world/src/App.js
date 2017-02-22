import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Toggle from 'material-ui/Toggle';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
const nearbyIcon = <IconLocationOn />;
const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
import {Link} from 'react-router';
import './App.css';

class App extends Component {

state = {
    selectedIndex: 0,
  };

style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

   constructor(props) {
    super(props);
    this.state = {open: false};
  }

  select = (index) => this.setState({selectedIndex: index});

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
       <AppBar title="BootCamp Portal" iconClassNameRight="muidocs-icon-navigation-expand-more" onClick={this.handleToggle}> </AppBar>
        <div className="App">
          <div className="App-header">
          <div>
          <Drawer
            docked={false}
            width={200}
            open={this.state.open} 
            onRequestChange={(open) => this.setState({open})} >
            <AppBar title="Menu" showMenuIconButton={false} onClick={this.handleToggle} />
            <MenuItem containerElement={<Link to="/dashboard"/>}>Dashboard</MenuItem>
            <MenuItem containerElement={<Link to="/login"/>}>Login</MenuItem>
          </Drawer>
          {this.props.children}
          </div>
      </div>
      </div>
      </div>
   
    );
  }
}

export default App;
