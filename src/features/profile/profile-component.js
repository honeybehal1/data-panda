import { React, Grid, Box, connect, withRouter, result } from '../../utils/general-imports';

import MenuList from '../../components/menu-list/menu-list-component';
import Personal from '../../components/personal/personal-component';

import { Container, Col, Row } from 'react-bootstrap';

import ContactInformation from '../../components/personal/contact-information-component'
import AddressComponent from '../../components/address/address-component'
import Experience from '../../components/experience/experience-component';

class Profile extends React.Component {
    _getDataComponent = () => {
        const { menuTypeSelected } = this.props;
        let { leftMenuData } = this.props;
        leftMenuData = result(leftMenuData, 'toJS', []);
        switch (menuTypeSelected) {
            case 'basic':
                return <Personal />
            case 'contact':
                return <ContactInformation />
            case 'address':
                return <AddressComponent />
            case 'experience':
                return <Experience id={this.props.menuId}/>
        }
    }
    render() {
        return (

            <div className="dp-body-container">
                <Row>
                    <Col item sm={4}>
                        <Container> <MenuList /></Container> </Col>
                    <Col sm={8}>
                        <div className="dp-bg-white">
                            {this._getDataComponent()}
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    menuTypeSelected: state.menuListReducer.get('menuTypeSelected'),
    leftMenuData: state.menuListReducer.get('leftMenuData'),
    menuId: state.menuListReducer.get('menuId')
});


export default withRouter(
    connect(
        mapStateToProps
    )(Profile));

