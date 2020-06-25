import { Title } from "@angular/platform-browser";

export class Movie {
    
    constructor(
        private id: number,
        private title: string,
        private synopsis: string,
        private cover: string
    ){}

}
