import { React, useState, useEffect, connect, result } from '../../utils/general-imports';
import { Row, Col, Form, ButtonGroup, Button } from 'react-bootstrap';
import { INPUT_TYPE } from '../../utils/constants';
import { withRouter } from "react-router-dom";

const {
    POSITION,
    COMPANY,
    LOCATION,
    START_DATE,
    HEADLINE,
    DESCRIPTION,
    EMPLOYEE_ID,
    MANAGER_CONTACT_NO,
    CTC,
    JOINING_POSITION,
    HR_EMAIL,
    SALARY_SLIP,
    JOINING_LETTER,
    HIKE_LETTER
} = INPUT_TYPE;


const leftMenu = {
    icon: "add_to_queue",
    primaryText: "Experience",
    type: 'experience',
    id: 0
}

const initialData = {
    position: '',
    company: '',
    location: '',
    startDate: '',
    headline: '',
    description: '',
    employeeId: '',
    managerContactNo: '',
    ctc: '',
    joiningPosition: '',
    hrEmail: '',
    salarySlip: '',
    joiningLetter: '',
    hikeLetter: ''
}

export function Experience(props) {
    let id = null;
    const [userData, setUserData] = useState({});
    useEffect(() => {
        updateForm();
    }, [props.id]);

    const updateForm = () => {
        id = props.id;
        userData.id = id;
        let exp = result(props.userExperience, 'toJS', []);
        if (id >= 0) {
            setUserData(Object.assign(initialData, exp[id]));
        } else if (exp.length > 0 && id < 0) {
            setUserData({ ...initialData });
        }
    }


    let {
        position = '',
        company = '',
        location = '',
        startDate = '',
        headline = '',
        description = '',
        employeeId = '',
        managerContactNo = '',
        ctc = '',
        joiningPosition = '',
        hrEmail = '',
        salarySlip = '',
        joiningLetter = '',
        hikeLetter = '' } = userData;

    const _handleChange = data => {
        let { type, value } = data;
        value = value.currentTarget.value;
        setUserData({ ...userData, [type]: value, id });
    }
    const saveData = () => {
        let exp = result(props.userExperience, 'toJS', []);
        let { leftMenuData } = props;
        leftMenuData = result(leftMenuData, 'toJS', []);
        leftMenuData[2].subMenu.unshift({ ...leftMenu, primaryText: company })
        props.setData([...leftMenuData])
        props.setExperienceData([...exp, userData]);
    };
    return (
        <div className="dp-form-container">
            <h2 className="dp-section-header">
                {company || 'Experience'}
            </h2>
            <Row>
                <Col sm={3}>
                    <Form.Label>Company</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control
                        type="text"
                        value={company}
                        onChange={value => { _handleChange({ type: COMPANY, value }) }}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <Form.Label>Position</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control
                        type="text"
                        value={position}
                        onChange={value => { _handleChange({ type: POSITION, value }) }}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <Form.Label>Joining Position</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control
                        type="text"
                        value={joiningPosition}
                        onChange={value => { _handleChange({ type: JOINING_POSITION, value }) }}></Form.Control>
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
                        onChange={value => _handleChange({ type: LOCATION, value })}></Form.Control>
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
                        onChange={value => _handleChange({ type: START_DATE, value })}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <Form.Label>Employee Id</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control
                        type="text"
                        value={employeeId}
                        onChange={value => _handleChange({ type: EMPLOYEE_ID, value })}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <Form.Label>Manager Contact No.</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control
                        type="text"
                        value={managerContactNo}
                        onChange={value => _handleChange({ type: MANAGER_CONTACT_NO, value })}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <Form.Label>HR Email</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control
                        type="email"
                        value={hrEmail}
                        onChange={value => _handleChange({ type: HR_EMAIL, value })}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <Form.Label>CTC</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control
                        type="text"
                        value={ctc}
                        onChange={value => _handleChange({ type: CTC, value })}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <Form.Label>Salary Slip</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control
                        type="file"
                        multiple
                        value={salarySlip}
                        onChange={value => _handleChange({ type: SALARY_SLIP, value })}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <Form.Label>Joining Letter</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control
                        type="file"
                        value={joiningLetter}
                        onChange={value => _handleChange({ type: JOINING_LETTER, value })}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <Form.Label>Hike Letter</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control
                        type="file"
                        value={hikeLetter}
                        onChange={value => _handleChange({ type: HIKE_LETTER, value })}></Form.Control>
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
                        onChange={value => _handleChange({ type: HEADLINE, value })}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <Form.Label>Description</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control
                        as="textarea" rows="3"
                        value={description}
                        onChange={value => _handleChange({ type: DESCRIPTION, value })}></Form.Control>
                </Col>
            </Row>
            <Row>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary">Cancel</Button>
                    <Button onClick={saveData}>Save Experience</Button>
                </ButtonGroup>
            </Row>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        leftMenuData: state.menuListReducer.get('leftMenuData'),
        userExperience: state.experienceReducer.get('userExperience')
    }
};

const mapDispatchToProps = dispatch => ({
    setExperienceData: data => dispatch({ type: 'EXPERIENCE_ADDED', data: data }),
    setData: data => dispatch({ type: 'LEFT_MENU', data })
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Experience));