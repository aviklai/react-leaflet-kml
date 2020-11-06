import React, { useEffect } from 'react';
import * as L from 'leaflet';
import {  LayerProps, LeafletContextInterface, createLayerComponent, useLeafletContext } from '@react-leaflet/core';
import 'leaflet-kml';

interface IProps {
  kml: XMLDocument;
}

// class ReactLeafletKml extends MapLayer<IProps> {  

//   public updateLeafletElement () {
//     if (this.props.leaflet.map.options.preferCanvas) {
//       this.props.leaflet.map._renderer._update();
//     }   
//   }
  
//   public componentWillUnmount() {
//     super.componentWillUnmount();  
//     if (this.props.leaflet.map.options.preferCanvas) {
//       this.props.leaflet.map._renderer._update();
//     }    
//   }
// }

// export default withLeaflet(ReactLeafletKml);


const updateOnCanvas = () => {
  const context = useLeafletContext();
  if (context.map.options.preferCanvas) {
    // @ts-ignore  
    context.map._renderer._update();
  }   
}


const createLeafletElement = (props: IProps, context: LeafletContextInterface) => {
  useEffect(() => {
    return () => {
      updateOnCanvas();
    }
  }, []);
  
  const { kml } = props;
  // @ts-ignore
  const instance = new L.KML(kml);    
  if (context.map.options.preferCanvas) {
    setTimeout((map: LeafletContextInterface["map"]) => {        
        // Handling react-leaflet bug of canvas renderer not updating
        // @ts-ignore
        map._renderer._update();
    }, 0, context.map) 
  }
  return { instance, context }; 
}

const updateLeafletElement = (instance: L.Layer, props: IProps, prevProps: IProps) => {
  updateOnCanvas();
}


export default createLayerComponent<L.Layer, LayerProps & IProps>(createLeafletElement, updateLeafletElement);