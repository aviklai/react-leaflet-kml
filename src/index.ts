import * as React from 'react';
import * as L from 'leaflet';
import { ContextProps, MapLayer, withLeaflet, LeafletContext } from 'react-leaflet';
import 'leaflet-kml';

interface IProps extends ContextProps {
  kml: string;
}

class ReactLeafletKml extends MapLayer<IProps> {
  public createLeafletElement(props: IProps) {
    const { kml } = props;
    // @ts-ignore
    this.leafletElement = new L.KML(kml);
    // @ts-ignore
    if (this.props.leaflet.map.options.preferCanvas && this.props.leaflet.map._renderer) {
      // @ts-ignore
      setTimeout((map: LeafletContext.map) => {        
        // Handling leaflet bug of canvas renderer not updating
        map._renderer._update();
        // @ts-ignore
      }, 0, this.props.leaflet.map) 
    }
    return this.leafletElement;
  } 

  public componentWillUnmount() {
    // @ts-ignore
    super.componentWillUnmount();  
    // @ts-ignore
    if (this.props.leaflet.map.options.preferCanvas && this.props.leaflet.map._renderer) {
      // Handling leaflet bug of canvas renderer not updating
      // @ts-ignore
      this.props.leaflet.map._renderer._update();
    }    
  }
}

export default withLeaflet(ReactLeafletKml);
