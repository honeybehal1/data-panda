import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import { ContactPhone, LocationOn, map, size } from '../../utils/general-imports';

import {
    ExpandLess,

    ExpandMore,

} from '../../utils/general-imports'



const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

class MenuList extends React.Component {

    getMenuItem = (listItem = {}) => {
        const { icon = '', primaryText, subMenu = [] } = listItem;

        return (<div><ListItem button >
            <ListItemIcon >
                <i class="material-icons">{icon}</i>
            </ListItemIcon>
            <ListItemText primary={primaryText} />
            {(size(subMenu) > 0) && this.getExpandIcon()}
        </ListItem></div>)

    }

    getExpandIcon = () => {
        const open = true;
        return open ? <ExpandLess /> : < ExpandMore />;

    }

    getMenu = () => {
        return map(this.data, (listItem, index) => {
            const { subMenu } = listItem;
            return (<div>
                {this.getMenuItem(listItem, 'menu', index)}
                {size(subMenu) > 0 &&
                    <Collapse in={false} timeout="auto" unmountOnExit >
                        {map(subMenu, (subMenuItem) => { return this.getMenuItem(subMenuItem) })}
                    </Collapse>}
            </div>);
        });
    }

    data =
        [
            {
                icon: "face",
                primaryText: "personal",
                isOpen: false,
                subMenu: [{
                    icon: "starBorder",
                    primaryText: "Basic",

                }, ,
                {
                    icon: "Information",
                    primaryText: "Contact Information",

                },
                {
                    icon: "address",
                    primaryText: "Address",

                }
                ]
            },
            {
                icon: "school",
                primaryText: "Educations"
            },
            {
                icon: "work",
                primaryText: "Professional",

            }
        ]
    render() {
        return (
            <List component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" > Your Profile </ListSubheader>
                }
            >
                {this.getMenu()}
            </List >
        );
    }


}

export default MenuList;
