
import {convert} from '../service/Service';
import {Express} from 'express';
// import le interface che mi servono 
import { TtfHsl, TtfHex } from "../../../commons/src/model/Color"

class HttpController {
    constructor(server: Express) {
        server.get('/', (req, res) => {
            //parsing della query
            const color = JSON.parse(req.query.color) as TtfHsl;
            //assegno color al convert
            const convertedColor: TtfHex = convert(color);
            //sendo il convert color
            res.send(convertedColor);
        });
    }
}

export default HttpController;