[![Build Status](https://travis-ci.org/aviklai/react-leaflet-kml.svg?branch=master)](https://travis-ci.org/aviklai/react-leaflet-kml) 
[![Coverage Status](https://coveralls.io/repos/github/aviklai/react-leaflet-kml/badge.svg?branch=master)](https://coveralls.io/github/aviklai/react-leaflet-kml?branch=master) 
[![npm version](https://img.shields.io/npm/v/react-leaflet-kml.svg)](https://www.npmjs.com/package/react-leaflet-kml)

React leaflet v3 and v4 wrapper of leaflet-kml.

## Requirements
The current version of this library supports React Leaflet v3 and v4. <br/>
If you are using React Leaflet v2, please use the previous version of this library. Please see the documentation here: <br/>
https://github.com/aviklai/react-leaflet-kml/tree/v1

## Installation instructions:
run `npm install --save react-leaflet-kml`

Usage example:
```javascript
import * as React from 'react';
import { MapContainer } from 'react-leaflet';
import ReactLeafletKml from 'react-leaflet-kml'; // react-leaflet-kml must be loaded AFTER react-leaflet

const kmlText='YOUR KML FILE AS TEXT';
const parser = new DOMParser();
const kml = parser.parseFromString(kmlText, 'text/xml');

export const App = () => { 
  return (
      <MapContainer zoom={15} center={[45, 20]}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <ReactLeafletKml kml={kml} />
      </MapContainer>
  );
};
```

## Basic usage example
https://codesandbox.io/s/basic-usage-react-leaflet-v3-pzcvt
