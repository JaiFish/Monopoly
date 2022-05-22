import ComponentBase from '../Data/base/ComponentBase';
import CloudItem from '../Item/CloudItem';
export default class DataCloud extends ComponentBase {

    rangeX: number = 1280
    rangeY: number = 720
    baseTime_Left: number = 3
    rangeTime_Left: number = 5;
    randomTime_Left: number;
    baseTime_Right: number = 3
    rangeTime_Right: number = 7;
    randomTime_Right: number;
    temp_Left: number;
    temp_Right: number;
    tempNumber;
    baseSpeed: number = 30
    rangeSpeed: number = 60;
    CloudClass: Map<number, CloudItem> = new Map()
}