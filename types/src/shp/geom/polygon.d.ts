import { Coordinate } from './coordinate';
import { ShapeType, ShpGeometryBase } from './geometry';
import { GeoJsonGeom, GeoJsonCoordinateSequence } from './geoJson';
import { LineString } from './polyLine';
export declare class LinerarRing extends LineString {
    area(): number;
    isClockWise(): boolean;
    containsPoint(point: Coordinate): boolean;
    contains(other: LinerarRing): boolean;
    toGeoJson(): GeoJsonCoordinateSequence;
}
export declare class ShpPolygonPart {
    readonly exteriorRing: LinerarRing;
    readonly interiorRings: Array<LinerarRing>;
    constructor(exterior: LinerarRing);
    toJson(): Array<GeoJsonCoordinateSequence>;
    toGeoJson(): GeoJsonGeom;
}
export declare type ShpPolygonType = ShapeType.Polygon | ShapeType.PolygonZ | ShapeType.PolygonM;
export declare class ShpPolygon extends ShpGeometryBase {
    readonly parts: Array<ShpPolygonPart>;
    toGeoJson(): GeoJsonGeom;
}
