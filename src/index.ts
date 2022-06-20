// @ts-ignore
import 'leaflet-kml';
import * as L from 'leaflet';
import {  LayerProps, LeafletContextInterface, createLayerComponent } from '@react-leaflet/core';
import { useEffect } from 'react';


interface IProps {
  kml: XMLDocument;
  kmlOptions?: {
    iconOptions : object;
  }
}

const updateOnCanvas = (map: L.Map) => {
  if (map.options.preferCanvas) {
    // @ts-ignore  
    map._renderer._update();
  }   
}


const createLeafletElement = (props: IProps, context: LeafletContextInterface) => {
  useEffect(() => {
    return () => {
      updateOnCanvas(context.map);
    }
  }, []);
  
  const { kml, kmlOptions } = props;
  // @ts-ignore
  const instance = new L.KML(kml, kmlOptions);    
  if (context.map.options.preferCanvas) {
    setTimeout((map: L.Map) => {        
        // Handling react-leaflet bug of canvas renderer not updating
        // @ts-ignore
        map._renderer._update();
    }, 0, context.map) 
  }
  return { instance, context }; 
}

const updateLeafletElement = (instance: L.Layer, props: IProps, prevProps: IProps) => {
  // @ts-ignore
  updateOnCanvas(instance._map);
}


export default createLayerComponent<L.Layer, LayerProps & IProps>(createLeafletElement, updateLeafletElement);