import * as React from 'react';
import ReactLeafletKml from '../index';
import { Map } from 'react-leaflet';
import * as ReactTestUtils from 'react-dom/test-utils';

test('ReactLeafletKml', () => {
  expect(ReactLeafletKml);

  const component = ReactTestUtils.renderIntoDocument(
    <Map>
      <ReactLeafletKml kml='' />
    </Map>
  ) as any;
  expect(component.leafletElement._container).toBeDefined()  

});
