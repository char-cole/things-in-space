import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ITEM_HEIGHT = 45;

class CountryMenu extends React.Component {
  state = {
    anchorEl: null,
    error: null,
    selectedCountry: ["Chad", "td"]
  };

  button = undefined;

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index) => {
    const countryListArray = this.props.list;
    const listSelect = countryListArray[index]
    console.log(listSelect);
    this.setState({
      selectedCountry: listSelect,
      anchorEl: null
    });
    console.log(this.state.selectedCountry)
};

  handleClose = () => {
    this.setState({
      anchorEl: null,
      });
  };

  componentDidMount() {

  }

  render() {
    const { anchorEl, error, isLoaded, selectedCountry } = this.state;
    const countryList = this.props.list
      return (
        <div>
          <List component="nav">
            <ListItem
              button
              aria-haspopup="true"
              aria-controls="lock-menu"
              aria-label={selectedCountry[0]}
              onClick={this.handleClickListItem}
            >
              <ListItemText
                primary={selectedCountry[0]}
              />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 6,
                maxWidth: 400,
              },
            }}
          >
          {countryList.map((option, index) => (
            <MenuItem
              key={option[1]}
              selected={index === countryList[index]}
              onClick={event => this.handleMenuItemClick(event, index)}
            >
              <div>{option[0]}</div>
            </MenuItem>
            ))}
          </Menu>
        </div>
    );
  }
}

export default CountryMenu;
