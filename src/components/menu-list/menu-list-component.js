import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import { ContactPhone, LocationOn, map, size, isEmpty } from '../../utils/general-imports';

import {
    ExpandLess,
    ExpandMore
} from '../../utils/general-imports';

class MenuList extends React.Component {
    state = {
        data:
            [
                {
                    icon: "face",
                    primaryText: "personal",
                    isOpen: false,
                    subMenu: [{
                        icon: "person",
                        primaryText: "Basic",

                    },
                    {
                        icon: "contact_mail",
                        primaryText: "Contact Information",

                    },
                    {
                        icon: "location_on",
                        primaryText: "Address",

                    }
                    ]
                },
                {
                    icon: "school",
                    primaryText: "Educations",
                    isOpen: false
                },
                {
                    icon: "work",
                    primaryText: "Professional",
                    isOpen: false

                }
            ]
    };
    handleClick = item => {
        const { data } = this.state;
        const { type = '', index } = item;
        debugger;
        if (!isEmpty(type)) {
            data[index]['isOpen'] = !data[index]['isOpen'];
            this.setState({ data });
        }
    }

    getMenuItem = (listItem = {}, type = '', index) => {
        const { icon = '', primaryText, subMenu = [], isOpen = false } = listItem;
        return (
            <div>
                <ListItem button onClick={() => this.handleClick({ index, type })}>
                    <ListItemIcon >
                        <i class="material-icons">{icon}</i>
                    </ListItemIcon>
                    <ListItemText primary={primaryText} />
                    {(size(subMenu) > 0) && this.getExpandIcon(isOpen)}
                </ListItem>
            </div>);
    }

    getExpandIcon = isOpen => {
        return isOpen ? <ExpandLess /> : < ExpandMore />;
    }

    getMenu = () => {
        return map(this.state.data, (listItem, index) => {
            const { subMenu, isOpen = false } = listItem;
            return (<div>
                {this.getMenuItem(listItem, 'menu', index)}
                {size(subMenu) > 0 &&
                    <Collapse in={isOpen} timeout="auto" unmountOnExit style={{ paddingLeft: "1rem" }}>
                        {map(subMenu, (subMenuItem) => { return this.getMenuItem(subMenuItem) })}
                    </Collapse>}
            </div>);
        });
    }


    render() {

        return (
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" > Your Profile </ListSubheader>
                }
                style={{ "background": "#fff" }}

            >
                {this.getMenu()}
            </List >
        );
    }
}

export default MenuList;
