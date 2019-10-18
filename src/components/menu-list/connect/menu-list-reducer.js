import { isEqual, Immutable } from '../../../utils/general-imports';
let InitilaData = {
    menuTypeSelected: 'basic',
    menuId: 0,
    leftMenuData: [
        {
            icon: "face",
            primaryText: "personal",
            isOpen: false,
            subMenu: [{
                icon: "person",
                primaryText: "Basic",
                type: 'basic'

            },
            {
                icon: "contact_mail",
                primaryText: "Contact Information",
                type: 'contact'

            },
            {
                icon: "location_on",
                primaryText: "Address",
                type: 'address'

            }
            ]
        },
        {
            icon: "school",
            primaryText: "Educations",
            isOpen: false,
            type: 'education'
        },
        {
            icon: "work",
            primaryText: "Professional",
            isOpen: false,
            type: 'professional',
            subMenu: [{
                icon: "add_circle",
                primaryText: "Add Company",
                type: 'add_experience'
            }]
        }
    ]
};

InitilaData = Immutable.fromJS(InitilaData)
export default function menuListReducer(state = InitilaData, action) {
    const data = Immutable.fromJS(action.data);
    switch (action.type) {
        case 'LEFT_MENU':
            return state.set('leftMenuData', data);
        case 'SUB_MENU_TYPE':
            return state.set('menuTypeSelected', data);
        case 'MENU-ID':
            return state.set('menuId', data);
        default:
            return state;
    }
}