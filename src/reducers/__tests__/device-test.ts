import {windowResize,WINDOW_RESIZE} from '../../actions/device';
import {device} from '../device';

describe('reducer', () => {
  it('should update the state with the new device state', () => {
    const expectedState = {
      width: 222,
      height: 111
    }

    let currentState = device(undefined,windowResize(222,111));

    expect(currentState).toEqual(expectedState)
  })
})

