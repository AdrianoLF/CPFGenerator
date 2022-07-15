import ValidaCPF from './ValidaCPF';

export default class GeraCPF {//this class will create a CPF

    //Getting a random number that is included between min and max
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min))//Returning this one in string format
    }

    formatarCPF(cpf){//Formatting CPF
        return (
            cpf.slice(0,3)+ '.' +
            cpf.slice(3,6)+ '.' +
            cpf.slice(6,9)+ '-' +
            cpf.slice(9,11)
        )
    }

    geraNovoCPF() {//Creating CPF number
        const cpfSemDigito = this.rand()

        const digito1 = ValidaCPF.geraDigito(cpfSemDigito)//Getting the tenth number using the const "cpfSemDigito" with a static method "geradDigito" that is inside the class "ValidaCPF"

        const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1)//Getting the eleventh number using "cpfSemDigito" plus "digito1"

        //Generation of CPF Number completed
        const novoCPF = cpfSemDigito + digito1 + digito2
        //Formatting this one and returning out of this module
        return this.formatarCPF(novoCPF)
    }
}