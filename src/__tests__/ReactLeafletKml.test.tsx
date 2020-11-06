import * as React from 'react';
import ReactDOM from 'react-dom';
import { MapContainer } from 'react-leaflet';
import ReactLeafletKml from '../index';
import * as ReactTestUtils from 'react-dom/test-utils';

test('ReactLeafletKml', () => {
  expect(ReactLeafletKml);

  const dom = ReactTestUtils.renderIntoDocument(
    <div>
      <MapContainer>
        <ReactLeafletKml kml={new Document()}/>
      </MapContainer>
    </div>
  ) as any;
  const component = ReactDOM.findDOMNode(dom.childNodes[0]) as any;
  expect(component).toBeInstanceOf(HTMLElement);  

});
