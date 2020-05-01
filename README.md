[![Build Status](https://travis-ci.org/aviklai/react-leaflet-kml.svg?branch=master)](https://travis-ci.org/aviklai/react-leaflet-kml) 
[![Coverage Status](https://coveralls.io/repos/github/aviklai/react-leaflet-kml/badge.svg?branch=master)](https://coveralls.io/github/aviklai/react-leaflet-kml?branch=master) 
[![npm version](https://img.shields.io/npm/v/react-leaflet-kml.svg)](https://www.npmjs.com/package/react-leaflet-kml)

React leaflet wrapper of leaflet-kml.

Installation instructions:
run `npm install --save react-leaflet-kml`

Usage example:
```
import * as React from 'react';
import { Map } from 'react-leaflet';
import ReactLeafletKml from 'react-leaflet-kml';

const kmlText='YOUR KML FILE AS TEXT';
const parser = new DOMParser();
const kml = parser.parseFromString(kmlText, 'text/xml');

export class App extends React.Component { 
  render() {    
    return (
      <Map zoom={15} center={[45, 20]}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <ReactLeafletKml kml={kml} />
      </Map>
    );
  }
}
```

## Basic usage example
https://codesandbox.io/s/basic-usage-itkpv