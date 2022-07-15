//CPF Validator

export default class ValidaCPF {//Exporting class
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, '')
    });
  }

  ehSequência() {//Checking 
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  geraNovoCpf() {//Creating a new CPF
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
    const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
    this.novoCPF = cpfSemDigitos + digito1 + digito2;
  }

  static geraDigito(cpfSemDigitos) {//Creating the last 2 CPF numbers
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;

    //multiplying each character by an inverse number sequence (relative to the total size of the number)
    for(let stringNumerica of cpfSemDigitos) {
      total += reverso * Number(stringNumerica);
      reverso--;
    }
    //Math formula to find the last 2 digits
    const digito = 11 - (total % 11);
    
    return digito <= 9 ? String(digito) : '0';
  }

  valida() {//Checking if CPF number is available
    if(!this.cpfLimpo) return false;
    if(typeof this.cpfLimpo !== 'string') return false;//It must to be a string value
    if(this.cpfLimpo.length !== 11) return false;//Must have 11 characters
    if(this.éSequência()) return false;//Checking if it's a sequence
    this.geraNovoCpf();//Calling CPF generator

    return this.novoCPF === this.cpfLimpo;//Returning boolean 
  } 
}

