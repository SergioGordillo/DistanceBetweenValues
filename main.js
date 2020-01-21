function calcular(){
    let reg=new RegExp(/[0-9]+(\s)*/); 
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);

    if(reg.test(num1)&&reg.test(num2)){
        let mayor=0;
        let menor=0;
        let distancia=0;
        let puntoIntermedio=0; 

        if(num1>num2){
            mayor=num1;
            menor=num2;

            distancia=(mayor-menor)/2; 
            puntoIntermedio=menor+distancia; 
            output.innerHTML="El punto intermedio entre ambos valores es de " + puntoIntermedio; 

        } else if (num2>num1){
            mayor=num2;
            menor=num1;

            distancia=(mayor-menor)/2; 
            puntoIntermedio=menor+distancia; 
            output.innerHTML="El punto intermedio entre ambos valores es de " + puntoIntermedio; 

        } else {
            output.innerHTML="El punto intermedio entre ambos valores es de " + num1; 
        }

      

    } else {
        output.innerHTML="Los valores insertados no tienen el formato correcto";
    }


}