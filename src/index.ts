// @ts-nocheck
import * as React from 'react';
import * as L from 'leaflet';
import { ContextProps, MapLayer, withLeaflet } from 'react-leaflet';
import 'leaflet-kml';

interface IProps extends ContextProps {
  kml: XMLDocument;
}

class ReactLeafletKml extends MapLayer<IProps> {
  public createLeafletElement(props: IProps) {
    const { kml } = props;
    this.leafletElement = new L.KML(kml);    
    if (this.props.leaflet.map.options.preferCanvas) {
      setTimeout((map: LeafletContext.map) => {        
          // Handling react-leaflet bug of canvas renderer not updating
          map._renderer._update();
      }, 0, this.props.leaflet.map) 
    }
    return this.leafletElement;
  }

  public updateLeafletElement () {
    if (this.props.leaflet.map.options.preferCanvas) {
      this.props.leaflet.map._renderer._update();
    }   
  }
  
  public componentWillUnmount() {
    super.componentWillUnmount();  
    if (this.props.leaflet.map.options.preferCanvas) {
      this.props.leaflet.map._renderer._update();
    }    
  }
}

export default withLeaflet(ReactLeafletKml);