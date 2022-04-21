import ComponentBase from '../Data/base/ComponentBase';
export default class DataCloud extends ComponentBase {

    rangeX: number = 1280 
    rangeY: number = 720
    rangeTime_Left: number = 5;
    randomTime_Left: number;
    rangeTime_Right: number = 7;
    randomTime_Right: number;
    temp_Left: number;
    temp_Right: number;
    baseSpeed:number =30
    rangeSpeed: number = 100;
}