import colorConverter from 'color-convert'
import { TtfHsl, TtfHex } from "../../../commons/src/model/Color"

//servizio che esegue la convert --funzione che esegue il convert
export function convert(color: TtfHsl): TtfHex {

    //il color to convert sarà color in arrivo
    const colorToConvert: TtfHsl = color;
    //coonverse eseguota da terze parti
    const convertedColor = colorConverter.hsl.hex([colorToConvert.hue,colorToConvert.saturation,colorToConvert.lightness]);
    //return del conversed color
    return { hex:convertedColor } as TtfHex;
}