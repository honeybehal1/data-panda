import { React, Grid, Box, connect, withRouter } from '../../utils/general-imports';

import MenuList from '../../components/menu-list/menu-list-component';
import Personal from '../../components/personal/personal-component';

import ContactInformation from '../../components/personal/contact-information-component'
import AddressComponent from '../../components/address/address-component'

class Profile extends React.Component {
    _getDataComponent = () => {
        const { menuTypeSelected } = this.props;
        switch (menuTypeSelected) {
            case 'basic':
                return <Personal />
            case 'contact':
                return <ContactInformation />
            case 'address':
                return <AddressComponent />
        }
    }
    render() {
        return (
            <Box mx="auto" mt='5rem'>
                <Grid container p="2rem" >
                    <Grid direction="row" p="2rem" item xs={4}> <MenuList /></Grid>
                    <Grid direction="row" className='grid-component' xs={8}>
                        {this._getDataComponent()}
                    </Grid>
                </Grid>
            </Box>)
    }
}

const mapStateToProps = (state) => ({
    menuTypeSelected: state.menuListReducer.get('menuTypeSelected')
});


export default withRouter(
    connect(
        mapStateToProps
    )(Profile));

