import { shallow, mount, render } from 'enzyme';
import App from './App'

describe('App ', () => {
  it('exists', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });
})