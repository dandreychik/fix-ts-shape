import { Coordinate } from './coordinate';
import { ShpGeometryBase, ShapeType } from './geometry';
import { GeoJsonGeom, GeoJsonCoordinateSequence } from './geoJson';
export declare class LineString {
    readonly coords: Array<Coordinate>;
    toJson(): Coordinate[];
    toGeoJson(): GeoJsonCoordinateSequence;
}
export declare type ShpPolylineType = ShapeType.PolyLine | ShapeType.PolyLineZ | ShapeType.PolyLineM;
export declare class ShpPolyLine extends ShpGeometryBase {
    readonly parts: Array<LineString>;
    constructor(type: ShpPolylineType, parts: Array<LineString>);
    toGeoJson(): GeoJsonGeom;
}
