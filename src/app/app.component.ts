import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // password
  password: string = '';
  includeLetters: boolean = false;
  includeNumber: boolean = false;
  includeSymbol: boolean = false;
  length: number = 0;

  generatePass() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvxwyz';
    const symbols = '!@#$%^&*()';

    let validChars: String = '';

    // include all letters
    if (this.includeLetters) validChars += letters;

    // include all numbers
    if (this.includeNumber) validChars += numbers;

    // symbols
    if (this.includeSymbol) validChars += symbols;

    // generated pass
    this.password = '';
    console.log(this.password);

    for (let i: number = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      this.password += validChars[index];
    }
    console.log(this.password);
  }

  fetchSize(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.length = parseInt(inputElement.value);
  }

  useLetter(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.includeLetters = inputElement.value == 'true' ? true : false;
    console.log(this.includeLetters);
  }
  useNumber(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.includeNumber = inputElement.value == 'true' ? true : false;
    console.log(this.includeNumber);
  }
  useSymbol(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.includeSymbol = inputElement.value == 'true' ? true : false;
    console.log(this.includeSymbol);
  }
}
