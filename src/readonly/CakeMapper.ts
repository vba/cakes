

import {CakeDto} from "./CakeDto";

export class CakeMapper {
    public static mapFromJson(json: any): CakeDto {
        if (json == null) { throw "json cannot be a null"; }
        return {
            id: json.id,
            comment: json.comment,
            imageUrl: json.imageUrl,
            name: json.name,
            yumFactor: json.yumFactor
        };
    }
}