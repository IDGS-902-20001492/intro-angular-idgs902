import { Component } from "@angular/core";

@Component({
    selector: 'app-grupos',
    template: `
    <h1>Hola grupos UTL</h1>
    <form>
    <label>Nombre</label>
    <input type="text" name="nombre" />
    <button class="btn btn-primary" type="submit">Enviar</button>
    </form>
    `
})

export class NamesGrupos{
    constructor(){}
}