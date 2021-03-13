import { shallow } from 'enzyme';
import Search from './Search'

const wrapper = shallow(<Search />);

describe('Search ', () => {
    it('exists', () => {
        expect(wrapper.exists()).toEqual(true);
    });

    it('checks input value for onChange', () => {
        wrapper.find('input').simulate("change", {target:{value:'David'}});
        expect(wrapper.find("input").props().value).toEqual('David')
    });
})