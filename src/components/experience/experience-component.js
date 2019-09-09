import { React, useState } from '../../utils/general-imports';
import { Row, Col, Form } from 'react-bootstrap';
import {INPUT_TYPE} from '../../utils/constants';

const { 
    POSITION,
    COMPANY,
    LOCATION,
    START_DATE,
    HEADLINE,
    DESCRIPTION
 } = INPUT_TYPE;

export default function Experience() {

    const [ userData, setUserData ] = useState({});

    const {
        position = '',
        company = '',  
        location = '',
        startDate = '',
        headline = '',
        description = ''} = userData;

    const _handleChange = data => {
        let {type, value} = data;
        value = value.currentTarget.value;
        setUserData({...userData, [type]: value });
    }
    return(
        <div className="dp-form-container">
            <h2 className="dp-section-header">
                Experience
            </h2>
            <Row>
                <Col sm={3}>
                    <Form.Label>Position</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control 
                        type="text" 
                        value={position}
                        onChange={value => {_handleChange({type: POSITION, value})}}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <Form.Label>Company</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control 
                        type="text" 
                        value={company}
                        onChange={value => {_handleChange({type: COMPANY, value})}}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <Form.Label>Location</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control
                        type="text"
                        value={location}
                        onChange={value => _handleChange({type: LOCATION, value})}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <Form.Label>Start Date</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control
                        type="date"
                        value={startDate}
                        onChange={value => _handleChange({type: START_DATE, value})}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <Form.Label>Headline</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control
                        type="text"
                        value={headline}
                        onChange={value => _handleChange({type: HEADLINE, value})}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    Description
                </Col>
                <Col sm={8}>
                    <Form.Control
                        as="textarea" rows="3"
                        value={description}
                        onChange={value => _handleChange({type: DESCRIPTION, value})}></Form.Control>
                </Col>
            </Row>
        </div>
    );
}