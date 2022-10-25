class Figura {
  constructor(posicion, estilo) {
    if (posicion == undefined) {
      posicion = new Posicion(0, 0);
    }
    if (estilo == undefined) {
      estilo = new Estilo("white", "black", "solid", 1);
    }

    if (!estilo instanceof Estilo) {
      throw "ERROR FATAL: el estilo tiene que ser de la clase Estilo"
    }
    if (!posicion instanceof Posicion) {
      throw "ERROR FATAL: la posicion tiene que ser de la clase Posicion"
    }

    this.estilo = estilo;
    this.posicion = posicion;
  }

  area() {
    return null;
  }

  perimetro() {
    return null;
  }

  get centro() {
    return null;
  }
}

class Estilo {
  constructor(colorRelleno, colorBorde, tipoBorde, grosorBorde) {
    this.colorRelleno = colorRelleno;
    this.colorBorde = colorBorde;
    this.tipoBorde = tipoBorde;
    this.grosorBorde = grosorBorde;
  }
}

class Posicion {
  constructor(px, py) {
    this.px = px;
    this.py = py;
  }
}


class Circulo extends Figura {
  constructor(radio = 0, posicion, estilo) {
    super(posicion, estilo);
    this.radio = radio;
  }

  get centro() {
    return [this.posicion.px + this.radio, this.posicion.py + this.radio]
  }

  area() {
    return Math.PI ** 2 * this.radio;
  }

  perimetro() {
    return 2 * Math.PI * this.radio;
  }


}

class Rectangulo extends Figura {
  constructor(alto = 0, ancho = 0, posicion, estilo) {
    super(posicion, estilo);
    if (typeof (alto) != 'number' || typeof (ancho) != 'number')
      throw "Error Fatal: El alto y ancho tienen que ser números!";
    this.alto = alto;
    this.ancho = ancho;
  }

  get centro() {
    return [this.posicion.px + this.ancho / 2, this.posicion.py + this.alto / 2];
  }

  area() {
    return this.ancho * this.alto;
  }
  perimetro() {
    return 2 * this.ancho + 2 * this.alto
  }

}

class Cuadrado extends Rectangulo {
  constructor(lado, posicion, estilo) {
    super(lado, lado, posicion, estilo);
  }
}

/*
let miCirculo = new Circulo(10);
let miRectangulo = new Rectangulo(2, 6);
let miCuadrado = new Cuadrado(4);

console.log(miCirculo.area());
console.log(miCirculo.perimetro());

console.log(miRectangulo.area() + "cm2");
console.log(miRectangulo.perimetro() + "cm");

console.log(miCuadrado.area() + "cm2");
console.log(miCuadrado.perimetro() + "cm");
console.log(miCuadrado.color);

let estilo1 = new Estilo("red", "black", "solid", 1);

console.log(miCirculo.centro);
console.log(miRectangulo.centro);
console.log(miCuadrado.centro);*/