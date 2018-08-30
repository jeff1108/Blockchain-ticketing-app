import React from 'react';
import Concert from './Concert';
import { mount } from 'enzyme';
import { concert, details } from '../data/fixtures';
import { fakeServer } from 'sinon';


const props = { concert };

describe('concerts component', () => {
  let event = mount (<Concert.WrappedComponent {...props} />);

  it('renders a concert name', () => {
    expect(event.find('p').at(0).text()).toEqual(`Concert: ${concert.displayName}`);
  });

  it('render a concert location', () => {
    expect(event.find('p').at(1).text()).toEqual(`Location: ${concert.location.city}`);
  });

  it('render a concert date in the correct format', () => {
    expect(event.find('p').at(2).text()).toEqual('Date: 8/31/2018');
  });

  it('render a concert price', () => {
    expect(event.find('p').at(3).text()).toEqual('Price: 217');
  });

  describe('buy button', () => {
    var server = fakeServer.create();
    beforeEach(() => {
      server.respondWith(
        'POST',
        '/blocks/create',
        [
          200,
          {'Content-Type': 'application/json'},
          JSON.stringify(details)
        ]
      );
    });

    it('fetch a post request', (done) => {
      fetch('/blocks/create', {
        method: 'POST',
        body: JSON.stringify(
          {
            'params':
              {
                'sender': '000000000',
                'receiver': '000000000',
                'name': 'this.props.concert.displayName',
                'value': '12341234312'
              }
          })
      }).then(response => {
        expect(response.status).toEqual(200);
        done();
      });
      server.respond();
    });
  });

  it('should render correctly', () => {
    const historyMock = { push: jest.fn() };
    const wrapper = mount (<Concert.WrappedComponent history={historyMock} {...props} />);
    const handelClickSpy = jest.spyOn(wrapper.instance(), 'handleClick');
    wrapper.find('Button').at(0).simulate('click', {
      preventDefault: () => {
      }
    });
    expect(handelClickSpy).toHaveBeenCalled();
  });
});
