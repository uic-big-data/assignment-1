import { environment } from '../../environments/environment.prod';
import { Component, AfterViewInit, Output, EventEmitter } from '@angular/core';
import {Map, View} from 'ol';
import {Image as ImageLayer, Tile as TileLayer} from 'ol/layer';
import {transform, toLonLat} from 'ol/proj';
import RasterSource from 'ol/source/Raster';
import {createXYZ} from 'ol/tilegrid';
import OSM from 'ol/source/OSM';
import XYZ from 'ol/source/XYZ';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  
  constructor() { }

  ngAfterViewInit(): void {
    // Create map
  }

  updateValues() {
    // Emit new values to chart component
  }

}
