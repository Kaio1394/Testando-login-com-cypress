export class ExtrairJSON{
    constructor(arquivoJson){
        if(arquivoJson !== null){
            this.arquivoJson = JSON.stringify(arquivoJson);
        }        
    }
}