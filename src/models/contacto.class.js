export class Contacto {
    name = '';
    last = '';
    mail = '';
    estado = false;

    constructor(name, last, mail, estado){
        this.name = name;
        this.last = last;
        this.mail = mail;
        this.estado = estado;
    }

}