import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React from 'react';

function getTabProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

class MainNav extends React.Component {

    render () {
        return (
            <Tabs value={this.props.clickedIdx} onChange={this.props.onClick} aria-label="simple tabs">
                <Tab label="hopes" {...getTabProps(1)} />
                <Tab label="fears" {...getTabProps(2)} />
            </Tabs>
        );
    }

}

export default MainNav;
