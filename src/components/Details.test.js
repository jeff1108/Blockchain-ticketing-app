import React from 'react';
import { mount, shallow } from 'enzyme';
import Details from './Details';

describe('Form', () => {
  const address_form = mount(<Details />);
  it('creates a Form component', () => {
    expect(address_form.find('Form').exists()).toBe(true);
  });

  it('renders a FormControl component', () =>{
    expect(address_form.find('FormControl').exists()).toBe(true);
  });

  it('renders a submit button', () => {
    expect(address_form.find('.btn').at(0).text()).toEqual('SUBMIT');
  });
  describe('when submitting user details', () => {
    let firstname = 'testfirst';
    let lastname = 'testlast';
    let email = 'test@test.com';
    beforeEach(() => {
      address_form.find('FormControl').at(0).simulate('change', {
        target: { value: firstname, name: 'firstName'}
      });
      address_form.find('FormControl').at(1).simulate('change', {
        target: { value: lastname, name: 'lastName'}
      });
      address_form.find('FormControl').at(2).simulate('change', {
        target: { value: email, name: 'email'}
      });
    });
    it('update the state', () => {
      expect(address_form.state()).toEqual({firstName: 'testfirst', lastName: 'testlast', email: 'test@test.com'});
    });

    it('should render correctly', () => {
      const historyMock = { push: jest.fn() };
      const wrapper = shallow(<Details history={historyMock} />);
      const handelSubmitSpy = jest.spyOn(wrapper.instance(), 'handleSubmit');
      wrapper.find('Button').at(0).simulate('click', {
        preventDefault: () => {
        }
      });
      expect(handelSubmitSpy).toHaveBeenCalled();
    });
  });
});
