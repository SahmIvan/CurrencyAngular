import { Component } from '@angular/core';
import { CambioService } from './servicios/cambio.service';
import { ICurrency } from './interfaces/money.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  datos: any = [];
  // selectedCurrency?: string;
  // amount?: number;
  // convertedAmount?: number;

  fromCurrency?: "";
  toCurrency?: "";
  amount: number = 1;
  convertedAmount: number = 0;




  constructor(private servicio: CambioService) { }

  obtenerDatos() {
    this.servicio.obtenerDatos()
      .then(response => {
        this.datos = response;
        //this.selectedCurrency = this.datos[0].unit;

        console.log(this.datos);

      })
      .catch(error => {
        console.log(error);
      });
  }

  convertCurrency(): void {
    const fromCurrencyObj = this.datos.find((currency: ICurrency) => currency.currency === this.fromCurrency); //"Mapea" el array de la api y busca que coincida la unidad con la divisa seleccionada
    //.find((elemento: Index a buscar) => elemento.propiedad === valor a buscar)
    const toCurrencyObj = this.datos.find((currency: ICurrency) => currency.currency === this.toCurrency);

    if (fromCurrencyObj && toCurrencyObj) { //Verifica que los 2 tengan unidades seleccioandas
      const exchangeRate = fromCurrencyObj.unit / toCurrencyObj.unit;
      this.convertedAmount = this.amount * exchangeRate;
    }
  }

  swapCurrencies(): void {
    [this.fromCurrency, this.toCurrency] = [this.toCurrency, this.fromCurrency]; //Destructuracion de array
    this.convertCurrency();
  }


  }





// convertCurrency(): void {

  //   try {
  //     const fromCurrencyObj = this.datos.find((currency: { unit: string; }) => currency.unit === this.fromCurrency);
  //     const toCurrencyObj = this.datos.find((currency: { unit: string; }) => currency.unit === this.toCurrency);

  //   console.log(fromCurrencyObj);
  //   if (fromCurrencyObj && toCurrencyObj) {
  //     this.fromCurrency = fromCurrencyObj.name;
  //     this.toCurrency = toCurrencyObj.name;

  //    this.exchangeRate = fromCurrencyObj.unit / toCurrencyObj.unit;
  //     this.convertedAmount = this.exchangeRate;

  //   }
  //   }catch (error) {
  //     console.log(error);
  //     throw error;
  //   }

  // }

  // convertCurrency(): void {
  //   const fromCurrencyObj = this.datos.find((currency: ICurrency) => currency.unit === this.fromCurrency);
  //   const toCurrencyObj = this.datos.find((currency: ICurrency) => currency.unit === this.toCurrency);

  //   if (fromCurrencyObj && toCurrencyObj) {
  //     const exchangeRate = fromCurrencyObj.unit / toCurrencyObj.unit;
  //     this.convertedAmount = this.amount * exchangeRate;
  //   }
  // }

  // getCurrenyName(currencyUnit: number): string {
  //   const currency = this.datos.find((currency: ICurrency) => currency.unit === currencyUnit);
  //   return currency ? currency.name : '';
  // }


// get getCurrency() {
//   return this.datos[0].name;

// }
// get getValue() {
//   return this.datos[0].unit;

// }

// getCurrency1() {







  // get getCurrency() {
  //   return this.datos[0].name;

  // }
  // get getValue() {
  //   return this.datos[0].unit;

  // }

  // getCurrency1() {





