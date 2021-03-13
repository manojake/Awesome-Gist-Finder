import { shallow, render } from 'enzyme';
import DisplayGist from './DisplayGist'

const mockDispatch = jest.fn();
const wrapper = shallow(<DisplayGist />);

jest.mock('react-redux', () => ({
    useSelector: () => [{
        id:1,
        html_url: 'url',
        languages: ['Javascript'],
        forkedUsers:
            [
                {
                    html_url: 'url',
                    avatar_url: 'url'
                }
            ]
    }],
    useDispatch: () => mockDispatch
}));

describe('DisplayGist ', () => {
    it('exists', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    it('check if Table and Search component are rendered', () => {
        expect(wrapper.find('Search').exists()).toBeTruthy()
        expect(wrapper.find('Table').exists()).toBeTruthy()
    });

    it('check if only one <tr /> is passed as prop', () => {
        expect((wrapper.find('Table').props().children.length)).toEqual(1);
    });
})