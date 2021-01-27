
  class Factura {
    constructor(cliente, elementos) {
      this.cliente = cliente;
      this.elementos = elementos;
      this.informacion = {
        baseImponible: 0,
        iva: 16,
        total:0,
        formaPago: "efectivo"
      };
  
      this.calculaTotal = () => {
        for (var i = 0; i <this.elementos.length; i++) {
          this.informacion.baseImponible += this.elementos[i].cantidad * this.elementos[i].precio;
        }
        this.informacion.total = this.informacion.baseImponible * (1+(this.informacion.iva/100));
      }
  
      this.muestraTotal = function () {
        this.calculaTotal();
        alert("total = " + this.informacion.total + " euros");
      }
    };
  }
  
  class Cliente {
    constructor(nombre, direccion, telefono, nif) {
      this.nombre = nombre;
      this.direccion = direccion;
      this.telefono = telefono;
      this.nif = nif;
    }
  }
  
  class Elemento {
    constructor(descripcion, cantidad, precio) {
      this.descripcion = descripcion;
      this.cantidad = cantidad;
      this.precio = precio;
    }
  }


const primerCliente = new Cliente("Miguel", "Murcia", "123456789", "12345649W"); 
  //var elCliente = new Cliente("Miguel", "Murcia", "123456789", "12345649W");
const arrayElementos =  [new Elemento("objeto", "1", "5"), new Elemento("objeto2", "13", "5")];
  //var losElementos = [new Elemento("objeto", "1", "5"),new Elemento("objeto2", "13", "5")];
 const facturaDelTotal = new Factura(primerCliente, arrayElementos);
  //var laFactura = new Factura(primerCliente, arrayElementos);
  facturaDelTotal.muestraTotal();