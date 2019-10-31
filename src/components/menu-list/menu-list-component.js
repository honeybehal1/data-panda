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
        debugger;
        let { leftMenuData } = this.props;
        leftMenuData = result(leftMenuData, 'toJS', []);
        const { type = '', index, id,
            subMenuItemType } = item;
        if (!isEmpty(type)) {
            // leftMenuData[index]['isOpen'] = !leftMenuData[index]['isOpen'];
            leftMenuData = leftMenuData.map((item, idx) => {
                if (idx !== index) {
                    item.isOpen = false;
                    return item;
                } else {
                    item.isOpen = !item.isOpen;
                    return item;
                }
            });
            this.props.setData(leftMenuData);
            this.props.setSubMenuType(leftMenuData[index].subMenu[0].type);
        }
        if (!isEmpty(subMenuItemType)) {
            if (subMenuItemType === 'add_experience') {
                this.props.setData(leftMenuData);
                this.props.setSubMenuType('experience');
                this.props.setMenuId(-1);
            } else {
                this.props.setSubMenuType(subMenuItemType);
                this.props.setMenuId(index);
            }
        }
    }

    getMenuItem = data => {
        const { index, listItem, type, subMenuItemType, } = data
        const { icon = '', id, primaryText, subMenu = [], isOpen = false } = listItem;
        return (
            <div><ListItem button onClick={() => this.handleClick({ index, type, subMenuItemType, id })
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
                        {map(subMenu, (subMenuItem, subMenuIndex) => { return this.getMenuItem({ listItem: subMenuItem, subMenuItemType: subMenuItem.type, index: subMenuIndex }) })
                        }
                    </Collapse>}
            </div>);
        });
    }


    render() {

        return (
            <div className='dp-bg-white dp-form-container' >
                <h2 className="dp-section-header">My Profile </h2>
                <List component="nav" aria-labelledby="nested-list-subheader"
                    subheader={
                        ""
                    } style={{ "background": "#fff" }} >
                    {this.getMenu()}
                </List></div>);
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
    setSubMenuType: subMenuType => dispatch({ type: 'SUB_MENU_TYPE', data: subMenuType }),
    setMenuId: id => dispatch({ type: 'MENU-ID', data: id })
});


export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(MenuList));


