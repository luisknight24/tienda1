import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root',
})

export class Products {
  private products: Product[] = [
    {
    "id": 1,
    "nombre": "GOW Ragnarok",
    "descripcion": "Secuela épica de acción/aventura ambientada en la mitología nórdica, donde Kratos y Atreus luchan para evitar el Ragnarök.",
    "precio": 59.99,
    "imagen": "GOW Ragnarok.jpg"
    },
    {
      "id": 2,
      "nombre": "GTA 6",
      "descripcion": "Próxima entrega de la saga Grand Theft Auto ambientada en el estado ficticio de Leonida (inspirado en Florida/Vice City).",
      "precio": 69.99,
      "imagen": "GTA 6.jpg"
    },
    {
      "id": 3,
      "nombre": "Hades 2",
      "descripcion": "Roguelike de acción donde combates en el inframundo griego para abrirte camino a través del Caos hacia nuevos destinos.",
      "precio": 49.99,
      "imagen": "Hades 2.jpg"
    },
    {
      "id": 4,
      "nombre": "Hades",
      "descripcion": "Premiado juego de acción roguelike ambientado en la mitología griega: encarnas a Zagreus, hijo de Hades, intentando escapar del inframundo.",
      "precio": 39.99,
      "imagen": "Hades.jpg"
    },
    {
      "id": 5,
      "nombre": "Red Dead Redemption 2",
      "descripcion": "Western de mundo abierto ambientado a fines del siglo XIX, con Arthur Morgan y la banda Van der Linde explorando el ocaso del Viejo Oeste.",
      "precio": 59.99,
      "imagen": "Red dead redemption 2.jpg"
    },
    {
      "id": 6,
      "nombre": "Resident Evil 3 Remake",
      "descripcion": "Remake del clásico survival horror donde controlas a Jill Valentine tratando de escapar de Raccoon City bajo el asedio del implacable Nemesis.",
      "precio": 49.99,
      "imagen": "Resident evil 3 remake.jpg"
    },
    {
      "id": 7,
      "nombre": "Resident Evil 4 Remake",
      "descripcion": "Actualización del survival horror de culto donde Leon S. Kennedy debe rescatar a la hija del presidente en una aldea hostil llena de culto.",
      "precio": 59.99,
      "imagen": "Resident evil 4 remake.jpg"
    },
    {
      "id": 8,
      "nombre": "Resident-Evil-2-Remake",
      "descripcion": "Remake del icónico survival horror ambientado en Raccoon City, con Leon y Claire intentando sobrevivir a un brote vírico zombificante.",
      "precio": 39.99,
      "imagen": "Resident-Evil-2-Remake.jpg"
    },
    {
      "id": 9,
      "nombre": "Spiderman 2",
      "descripcion": "Videogame de acción y aventura donde Miles Morales y Peter Parker unen fuerzas para enfrentar nuevos enemigos en Nueva York.",
      "precio": 59.99,
      "imagen": "Spiderman 2.jpg"
    },
    {
      "id": 10,
      "nombre": "Spiderman Miles",
      "descripcion": "Experiencia centrada en Miles Morales como Spider-Man, explorando sus poderes y defendiendo la ciudad tras su propio legado.",
      "precio": 49.99,
      "imagen": "Spiderman Miles.jpg"
    },
    {
      "id": 11,
      "nombre": "Spiderman PS4",
      "descripcion": "Título de acción desarrollado para PS4 donde Peter Parker combate el crimen en Nueva York con una gran historia cinematográfica.",
      "precio": 39.99,
      "imagen": "Spiderman PS4.jpg"
    },
    {
      "id": 12,
      "nombre": "The Legend of Zelda BOTW",
      "descripcion": "Aventura en mundo abierto donde Link despierta tras cien años de letargo y debe salvar a Hyrule del poder de Ganon explorando libremente el reino. ",
      "precio": 59.99,
      "imagen": "The legend of zelda BOTW.jpg"
    },
    {
      "id": 13,
      "nombre": "The Witcher 3",
      "descripcion": "RPG de mundo abierto altamente aclamado: encarnas a Geralt de Rivia mientras viaja por paisajes diversos, caza monstruos y se ve envuelto en conflictos políticos y morales.",
      "precio": 49.99,
      "imagen": "The Witcher 3.jpg"
    }
  ]
  constructor() { }
  getProducts(): Product[] {
    return this.products;
  }
}
