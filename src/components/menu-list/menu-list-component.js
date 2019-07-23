import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import menuListReducer from './connect/menu-list-reducer';
import setMenu from './connect/menu-list-actions';
import { withRouter } from "react-router-dom";

import { React, map, size, isEmpty, connect, result } from '../../utils/general-imports';

import {
    ExpandLess,
    ExpandMore
} from '../../utils/general-imports';


class MenuList extends React.Component {
    handleClick = item => {
        let { leftMenuData } = this.props;
        leftMenuData = result(leftMenuData, 'toJS', []);
        const { type = '', index,
            subMenuItemType } = item;
        if (!isEmpty(type)) {
            leftMenuData[index]['isOpen'] = !leftMenuData[index]['isOpen'];
            this.props.setData(leftMenuData);
        }
        if (!isEmpty(subMenuItemType)) {
            this.props.setSubMenuType(subMenuItemType);
        }
    }

    getMenuItem = data => {
        const { index, listItem, type, subMenuItemType } = data
        const { icon = '', primaryText, subMenu = [], isOpen = false } = listItem;
        return (
            <div><ListItem button onClick={() => this.handleClick({ index, type, subMenuItemType })
            }><ListItemIcon>
                    <i class="material-icons" > {icon} </i>
                </ListItemIcon>
                < ListItemText primary={primaryText} />
                {(size(subMenu) > 0) && this.getExpandIcon(isOpen)}
            </ListItem>
            </div>);
    }

    getExpandIcon = isOpen => {
        return isOpen ? <ExpandLess /> : < ExpandMore />;
    }

    getMenu = () => {
        let { leftMenuData } = this.props;
        leftMenuData = result(leftMenuData, 'toJS');
        return map(leftMenuData, (listItem, index) => {
            const { subMenu, isOpen = false } = listItem;
            return (<div>
                {this.getMenuItem({ listItem, type: 'menu', index })}
                {
                    size(subMenu) > 0 &&
                    <Collapse in={isOpen} timeout="auto" unmountOnExit style={{ paddingLeft: "1rem" }
                    }>
                        {map(subMenu, (subMenuItem) => { return this.getMenuItem({ listItem: subMenuItem, subMenuItemType: subMenuItem.type }) })
                        }
                    </Collapse>}
            </div>);
        });
    }


    render() {

        return (
            <List component="nav" aria-labelledby="nested-list-subheader" subheader={< ListSubheader component="div" id="nested-list-subheader" > Your Profile < /ListSubheader>
} style = {{ "background": "#fff" }} >
    {this.getMenu()}
                            </List >
                                );
                            }
}


const mapStateToProps = (state) => {

    return {
        leftMenuData: state.menuListReducer.get('leftMenuData'),
        menuTypeSelected: state.menuListReducer.get('menuTypeSelected')
    }
};

const mapDispatchToProps = dispatch => ({
    setData: id => dispatch(setMenu(id)),
    setSubMenuType: subMenuType => dispatch({ type: 'SUB_MENU_TYPE', data: subMenuType })

});


export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(MenuList));


