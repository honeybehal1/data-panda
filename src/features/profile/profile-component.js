import { React, Grid, Box } from '../../utils/general-imports';



import MenuList from '../../components/menu-list/menu-list-component';
import Personal from '../../components/personal/personal-component';


class Profile extends React.Component {
    render() {
        return (
            <Box mx="auto" mt='5rem'>
                <Grid container p="2rem" >
                    <Grid direction="row" p="2rem" item xs={4}> <MenuList /></Grid>
                    <Grid direction="row" className='grid-component' xs={8}>
                        <Personal />
                    </Grid>

                </Grid>
            </Box>)

    }
}

export default Profile;
