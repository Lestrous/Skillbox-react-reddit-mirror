import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Dropdown } from '../Dropdown';

Enzyme.configure({ adapter: new Adapter() });

describe('Dropdown', () => {
  test('should render', () => {
    const wrapper = shallow(
      <Dropdown button={<button />}>
        <div />
      </Dropdown>
    );

    expect(wrapper).toBeDefined();
    expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
    expect(wrapper.find('button').isEmptyRender()).toBeFalsy();
  });
});
