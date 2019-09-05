import { React, Grid, TextField, Typography, makeStyles } from '../../utils/general-imports';
import GeoLocationSuggestions from './geo-location-component';
import { Container, Col, Row, Form, Button, ButtonGroup } from 'react-bootstrap';
import { INPUT_TYPE } from '../../utils/constants';
const {
    HOUSE_NUMBER,
    STREET_NUMBER,
    AREA_NAME,
    LAND_MARK
} = INPUT_TYPE;


class AddressComponent extends React.Component {
    _handleChange = (event) => {

    }
    componentWillMount() {

        const useStyles = makeStyles(theme => ({
            root: {
                display: 'flex',
            },
            formControl: {
                margin: theme.spacing(3),
            },
            group: {
                margin: theme.spacing(1, 0),
            },
        }));
        this.setState({});
    }

    render() {
        const { classes, setValue, value, houseNumber = '',
            streetNumber = '',
            areaName = '',
            landMark = '' } = this.state;

        return (
            <>
                <Container className="dp-form-container">
                    <h2 className="dp-section-header">Address</h2>
                    <Row>
                        <Col sm={3}> <Form.Label>Flat/ House no. </Form.Label></Col>
                        <Col sm={8}><Form.Control type="text" value={houseNumber} onChange={value => {
                            this._handleChange({ type: HOUSE_NUMBER, value })
                        }} /></Col>
                    </Row>
                    <Row>
                        <Col sm={3}> <Form.Label>Street Number </Form.Label></Col>
                        <Col sm={8}><Form.Control type="text" value={streetNumber} onChange={value => {
                            this._handleChange({ type: STREET_NUMBER, value })
                        }} /></Col>
                    </Row>
                    <Row>
                        <Col sm={3}> <Form.Label>Land Mark </Form.Label></Col>
                        <Col sm={8}><Form.Control type="text" value={landMark} onChange={value => {
                            this._handleChange({ type: LAND_MARK, value })
                        }} /></Col>
                    </Row>
                    <Row>
                        <Col sm={3}> <Form.Label>Area/Village </Form.Label></Col>
                        <Col sm={8}><Form.Control type="text" value={areaName} onChange={value => {
                            this._handleChange({ type: AREA_NAME, value })
                        }} /></Col>
                    </Row>
                    <GeoLocationSuggestions />
                </Container>

            </>


        )
    }
}

export default AddressComponent;
