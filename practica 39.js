/*<html>

<body>

    <h2>Mi Primera vez metiendo mano en Java</h2>
   <script>
       document.write('Gilbert Santos')
   </script>
       <br>
    <script>
        document.write(17);
    </script>

</body>

</html>

<!DOCTYPE html>
<html>
<head>
  <title>Practica 3</title>
  <meta charset="UTF-8">
</head>
<body>

<script>
  var nombre= 'Gilbert Santos';
  var sueldo=50000;
  document.write(nombre);
  document.write('<br>');
  document.write(sueldo); 
  document.write('<br>');
</script>

</body>
</html>

<html>

<head>
    <title>Practica 4</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        var nombre;
        var correo;
        nombre = prompt('Ingrese su nombre:', '');
        correo = prompt('Ingrese su correo:', '');
        document.write('Hola ');
        document.write(nombre);
        document.write('<br>');
        document.write('Tu correo es:');
        document.write(correo);
    </script>

</body>

</html>

<!DOCTYPE html>
<html>

<head>
    <title>Practica 5</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        var valor1;
        valor1 = prompt('Ingrese un numero para calcular el perimetro', '');
        var perimetro = valor1 * 4;
        document.write('El perimetro es:');
        document.write(perimetro);
        document.write('<br>');
        var valor2;
        var valor3;
        var valor4;
        var valor5;
        valor2 = prompt('Ingresa un numero:', '');
        valor3 = prompt('Ingresa un numero:', '');
        valor4 = prompt('Ingresa un numero:', '');
        valor5 = prompt('Ingrese un numero:', '');
        var suma = parseInt(valor2) + parseInt(valor3);
        var producto = valor4 * valor5;
        document.write('La suma es:')
        document.write(suma);
        document.write('<br>');
        document.write('El producto es:');
        document.write(producto);

    </script>

</body>

</html>

<!DOCTYPE html>
<html>

<head>
    <title>Practica 6</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        var nombre;
        var nota;
        var nota2;
        var nota3;
        nombre = prompt('Ingrese nombre:', '');
        nota = parseInt(prompt('Ingrese su nota:', ''));
        nota2 = parseInt(prompt('Ingrese su nota:', ''));
        nota3 = parseInt(prompt('Ingrese su nota:', ''));
        suma = nota + nota2 + nota3;
        promedio = suma / 3;
        if (nota, nota2, nota3 >= 7) {
            document.write(nombre + ' esta aprobado con un ' + nota);
        }
    </script>
    <br>
    <br>
    <br>
    <script>
        var nombre;
        var clave;
        var clave2;
        nombre = prompt('Ingrese nombre:', '');
        nota = parseInt(prompt('Ingrese su clave :', ''));
        nota2 = parseInt(prompt('Ingrese nuevamente su clave:', ''));
        if (clave, clave2 == clave) {
            document.write(nombre + ' La clave se ha cambiado correctamente ');
        }
    </script>

</body>

</html>

<!DOCTYPE html>
<html>
<head>
  <title>Practica 7</title>
  <meta charset="UTF-8">
</head>
<body>
    
    <br>
    <br>
    <script>
        var num1,num2;
        num1=prompt('Ingrese el primer número:','');
        num2=prompt('Ingrese el segundo número:','');
        num1=parseInt(num1);
        num2=parseInt(num2);
        if (num1>num2)
        {
           var suma = parseInt(num1) + parseInt(num2);
           var resta = parseInt(num1) - parseInt(num2);
          document.write('Su suma es '+ suma);
          document.write('<br>');
          document.write('Su resta es '+ resta);
        }
        else
        {
           var mult = parseInt(num1) * parseInt(num2);
           var div = parseInt(num1) / parseInt(num2);
          document.write('Su producto es '+ mult);
          document.write('<br>');
          document.write('Su division es '+ div);
        }
      </script> 
<br>
<br>
    <script>
        var nota1,nota2,nota3;
        nota1=prompt('Ingrese su primera nota:','');
        nota2=prompt('Ingrese su segunda nota:','');
        nota3=prompt('Ingrese su tercera nota:','');
        suma= parseInt(nota1) + parseInt(nota2) + parseInt(nota3);
        promedio= suma / 3;
        if (promedio >= 4)
        {
          document.write('Regular');
        }
        else
        {
          document.write('Reprobado');
        }
      </script>
      <br>
      <br>
      <script>
        var num;
        num=parseInt(prompt('Ingrese un numero:',''));
        if (num >= 9)
        {
          document.write('El número tiene 2 digito');
        }
        else
        {
            document.write('El número tiene 1 digito');
        }
      </script>
   
</body>
</html>

<!DOCTYPE html>
<html>

<head>
    <title>Practica 8</title>
    <meta charset="UTF-8">
</head>

<body>
    <script>
        var num1, num2, num3;
        num1 = prompt('Introduzca el primer valor:', '');
        num2 = prompt('Introduzca el segundo valor:', '');
        num3 = prompt('Introduzca el tercer valor:', '');
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        num3 = parseInt(num3);
        if (num1 > num2 && num1 > num3) {
            document.write(num1);
        }
        else {
            if (num2 > num1 && num2 > num3) {
                document.write(num2);
            }
            else {
                document.write(num3);
            }
        }
    </script>
    <br>
    <br>
    <script>
        var num1, num2, num3;
        num1 = prompt('Introduzca un numero:', '');
        num1 = parseInt(num1);
        if (num1 > 0) {
            document.write("El numero es positivo");
        }
        else {
            if (num1 == 0) {
                document.write("Es igual a cero");
            }
            else {
                document.write("El numero es negativo negativo");
            }
        }
    </script>
    <br>
    <br>
    <script>
        var num1;
        num1 = prompt('Introduzca un numero:', '');
        num1 = parseInt(num1);
        if (num1 < 10) {
            document.write("El numero es de una cifra");
        }
        else {
            if (num1 < 99) {
                document.write("El numero es de dos cifras");
            }
            else {
                document.write("El numero es de tres cifras");
            }
        }
    </script>
</body>

</html>
<!DOCTYPE html>
<html>

<head>
    <title>Practica 9</title>
    <meta charset="UTF-8">
</head>

<body>
    <script>
        var dia;
        var mes;
        dia = prompt('Ingrese la fecha de hoy:', '');
        mes = prompt('Ingrese el mes:', '');
        dia = parseInt(dia);
        mes = parseInt(mes);
        if (dia == 25 & mes == 12) {
            document.write('Hoy es el dia de navidad');
        }
        elses
        {
            document.write('Hoy no es navidad');
        }
    </script>
    <br>
    <br>
    <script>
        var valor1;
        var valor2;
        var valor3;
        valor1 = prompt('Ingrese un numero:', '');
        valor2 = prompt('Ingrese el mismo numero:', '');
        valor3 = prompt('Ingrese el mismo numero:', '');
        valor1 = parseInt(valor1);
        valor2 = parseInt(valor2);
        valor3 = parseInt(valor3);
        if (valor1 == valor2 & valor1 == valor3) {
            operacion = parseInt(valor1) + parseInt(valor2);
            mult = operacion * parseInt(valor3);
            document.write(mult);
        }
        else {
            document.write('Lo sentimos lo numeros no son iguales...');
        }
    </script>
    <br>
    <br>
    <script>
        var numero1;
        var numero2;
        var numero3;
        numero1=prompt('Ingrese un numero:','');
        numero2=prompt('Ingrese un numero:','');
        numero3=prompt('Ingrese un numero:','');
        numero1=parseInt(numero1);
        numero2=parseInt(numero2);
        numero3=parseInt(numero3);
        if (numero1<10 && numero2<10 && numero3<10)
          {
            document.write('Todos los números son menores que 10'); 
          }
          else
          {
              document.write('Lo sentimos uno de los numeros es mayor a 10'); 
          }
      </script>
</body>
<br>
<br>
<script>
    var numero1;
    var numero2;
    var numero3;
    numero1=prompt('Ingrese X:','');
    numero2=prompt('Ingrese Y:','');
    numero1=parseInt(numero1);
    numero2=parseInt(numero2);
    if (numero1>0 && numero2>0)
      {
        document.write('Primer cuadrante'); 
      }
      else
      {
        if (numero1<0 && numero2>0)
        {
          document.write('Segundo cuadrante'); 
        }
        else{
          if (numero1<0 && numero2<0){
            document.write('Tercer cuadrante'); 
          }
          else{
            if (numero1>0 && numero2<0)
            {
              document.write('Cuarto cuadrante'); 
            }
          }
        }
      }
  </script> 
  

</html>
<!DOCTYPE html>
<html>

<head>
    <title>Practica 10</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        var numero1, numero2, numero3;
        numero1 = prompt('Ingrese un numero:');
        numero1 = parseInt(numero1);
        numero2 = prompt('Ingrese un numero:');
        numero2 = parseInt(numero2);
        numero3 = prompt('Ingrese un numero:');
        numero3 = parseInt(numero3);
        if (numero1 < 10 || numero2 < 10 || numero3 < 10) {
            document.write('Alguno de los numeros es menor que diez');
        }
        else{
            document.write('Ningun numero es menor que 10');
        }
    </script>

</body>

</html>
<!DOCTYPE html>
<html>

<head>
    <title>Practica 11</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        var palabra;
        palabra = prompt('Ingrese una de estas palabras (casa, mesa, perro, gato):');
        switch (palabra) {
            case 'casa': document.write('En ingles se dice house');
                break;
            case 'mesa': document.write('En ingles se dice table');
                break;
            case 'perro': document.write('En ingles se dice dog');
                break;
            case 'gato': document.write('En ingles se dice cat');
                break;
        }
    </script>

</body>

</html>
<!DOCTYPE html>
<html>

<head>
    <title>Practica 12</title>
    <meta charset="UTF-8">
</head>

<body>
    <script>
        var valor;
        valor = 11;
        var x;
        x = 1;
        while (x <= 25) {
            document.write(valor);
            document.write('<br>');
            x = x + 1;
            valor = valor + 11;
        }
    </script>
    <br>
    <br>
    <script>
        var valor;
        valor = 8;
        while (valor <= 500) {
            document.write(valor);
            document.write('<br>');
            valor = valor + 8;
        }
    </script>

</body>

</html>
<html>

<head>
    <title>Practica 13</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        document.write('Múltiplos de 10');
        document.write('<br>');
        document.write('<br>');
        var multiplo = 10;
        while (multiplo <= 1500) {
            document.write(multiplo + ' ');
            multiplo = multiplo + 10;
        }
    </script>
    <br>
    <br>
    <script>
        var x = 0;
        var suma = 0;
        while (x < 5) {
            var altura;
            altura = prompt('Introduzca su altura:');
            altura = parseInt(altura);
            suma = suma + altura;
            x = x + 1;
        }
        var promedio = suma / 5;
        document.write('La altura promedio de las cinco personas es:' + promedio);
    </script>
    <br>
    <br>
    <script>
        var serie = 5;
        var x = 0;
        while (x < 20) {
            document.write(serie + ' ');
            x = x + 1;
            serie = serie + 5;
        }
    </script>



</body>

</html>

<!DOCTYPE html>
<html>

<head>
    <title>Practica 14</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        var valor;
        var suma = 0;
        do {
            valor = prompt('Introduzca un valor entre 0 y 9999:', '');
            valor = parseInt(valor);
            if (valor != 9999) {
                suma = suma + valor;
            }
        } while (valor != 9999);
        document.write('la suma de sus numeros es:' + suma);
        document.write('<br>');
        document.write('Lo sentimos introdujo el 9999 por eso se a detenido.........');
        document.write('<br>');
        if (suma > 0) {
            document.write('La suma de los numeros es mayor a 0');
        }
        else {
            if (suma == 0) {
                document.write('La suma de los numeros es igual a 0');
            }
            else {
                document.write('La suma de los numeros es menor a 0');
            }
        }    
    </script>
    <br>
    <br>
    <script>
        var num;
        var nombre;
        var saldo = 0;
        var suma = 0;
        do {
            num = prompt('Numero de cuenta:', '');
            num = parseInt(num);
            if (num > 0) {
                nombre = prompt('Nombre del cliente:', '');
                saldo = prompt('Saldo que posee:', '');
                saldo = parseInt(saldo);
                if (saldo > 0) {
                    suma = suma + saldo;
                    document.write('Su nombre de cuenta: ' + nombre);
                    document.write('<br>');
                    document.write('Su numero de cuenta: ' + num);
                    document.write('<br>');
                    document.write('Su saldo: Acredor');
                    document.write('<br>');
                    document.write('Suma de todos los saldos: ' + suma);
                    document.write('<br>');
                    document.write('<br>');
                }
                else {
                    if (saldo < 0) {
                        document.write('Su nombre de cuenta: ' + nombre);
                        document.write('<br>');
                        document.write('Su numero de cuenta: ' + num);
                        document.write('<br>');
                        document.write('Su saldo: Deudor');
                        document.write('<br>');
                        document.write('Suma de todos los saldos: ' + suma);
                        document.write('<br>');
                        document.write('<br>');
                    }
                    else {
                        if (saldo == 0) {
                            saldo = "Nulo";
                            document.write('Su nombre de cuenta: ' + nombre);
                            document.write('<br>');
                            document.write('Su numero de cuenta: ' + num);
                            document.write('<br>');
                            document.write('Su saldo: nulo');
                            document.write('<br>');
                            document.write('Suma de todos los saldos: ' + suma);
                            document.write('<br>');
                            document.write('<br>');
                        }
                    }
                }
            }
        } while (numc > 0);
        document.write('Su nombre de cuenta: empty');
        document.write('<br>');
        document.write('Su numero de cuenta: ' + num);
        document.write('<br>');
        document.write('Su saldo: ?');
        document.write('<br>');
        document.write('Suma de todos los saldos: ' + suma);
        document.write('<br>');
        document.write('<br>');
    </script>

</body>

</html>

<!DOCTYPE html>
<html>

<head>
    <title>Practica 16</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        function mostrarMensaje() {
            document.write("Yo no se usar Java<br>");
            document.write("No me gusta programar<br>");
        }

        mostrarMensaje();
        mostrarMensaje();
        mostrarMensaje();
    </script>

</body>

</html>


<!DOCTYPE html>
<html>

<head>
    <title>Practica 17</title>
    <meta charset="UTF-8">
</head>

<body>
    <script>
        function mostrarComprendidos(x1, x2, x3) {
            if (x1 < x2 && x1 < x3) {
                document.write('El primer numero es el menor' + x1);
            } else {
                if (x2 < x1 && x2 < x3) {
                    document.write('El segundo numero es el menor' + x2);
                } else {
                    document.write('El tercer numero es el menor' + x3);
                }
            }
        }
        var valor1, valor2, valor3;
        valor1 = prompt('Ingrese un numero: ', '');
        valor1 = parseInt(valor1);
        valor2 = prompt('Ingrese un numero:', '');
        valor2 = parseInt(valor2);
        valor3 = prompt('Ingrese un numero:', '');
        valor3 = parseInt(valor3);
        mostrarComprendidos(valor1, valor2, valor3);
    </script>
    
    </body>
    </html>

    <!DOCTYPE html>
    <html>
    
    <head>
        <title>Practica 18</title>
        <meta charset="UTF-8">
    </head>
    
    <body>
    
        <script>
    
            function retornarMayor(x1, x2, x3) {
                if (x1 > x2 && x1 > x3) {
                    return x1;
                }
                else {
                    if (x2 > x3) {
                        return x2;
                    }
                    else {
                        return x3;
                    }
                }
            }
    
            var valor1, valor2, valor3;
            valor1 = prompt('Introduzca el primer valor:', '');
            valor1 = parseInt(valor1);
            valor2 = prompt('Introduzca el segundo valor:', '');
            valor2 = parseInt(valor2);
            valor3 = prompt('Introduzca el tercer valor:', '');
            valor3 = parseInt(valor3);
            document.write('Los tres valores que ingreso fueron ' + valor1 + ' ' + valor2 + ' ' + valor3 + '<br>');
            var may;
            may = retornarMayor(valor1, valor2, valor3);
            document.write('El mayor de los tres valores es :' + may);
        </script>
        <br>
        <br>
        <script>
    
            function retornarPerimetro(lado) {
                var perimetro;
                perimetro = lado * 4;
                return perimetro;
            }
    
            var lado;
            lado = prompt('Introduzca la medida del lado de un cuadrado:', '');
            lado = parseInt(lado);
            document.write('El perímetro del cuadrado es:' + retornarPerimetro(lado));
        </script>
        <br>
        <br>
        <script>
    
            function cargar5Valores() {
                var suma = 0;
                var valor;
                var f;
                for (f = 1; f <= 5; f++) {
                    valor = prompt('Introduzca un valor:', '');
                    valor = parseInt(valor);
                    suma = suma + valor;
                }
                return suma;
            }
    
            var s = cargar5Valores();
            document.write('Aqui es la suma de todos los valores: ' + s);  
        </script>
    
    
    
    </body>
    
    </html>

    <!DOCTYPE html>
    <html>
    
    <head>
        <title>Practica 20</title>
        <meta charset="UTF-8">
    </head>
    
    <body>
    
        <script>
            var fecha
            fecha = new Date();
            var mes = fecha.getMonth();
            if (mes < 4) {
                document.write('Estamos en el primer cuatrimestre del año');
            }
            else {
                if (mes < 8) {
                    document.write('Estamos en el segundo cuatrimestre del año');
                }
                else {
                    document.write('Estamos en el tercer cuatrimestre del año');
                }
            }
        </script>
    
    </body>
    
    </html>
    <!DOCTYPE html>
<html>
<head>
  <title>Practica 21</title>
  <meta charset="UTF-8">
</head>
<body>

<script>
  function cargar(vec)
  {
    var f;
    for(f=0;f<vec.length;f++)
    {
      var valor;
      valor=prompt('introduzca un componente:','');   
      vec[f]=parseInt(valor);
    }
  }

  function sumar(vec)
  {
    var f;
    var suma=0;
    for(f=0;f<vec.length;f++)
    {
      suma=suma+vec[f];
    }
    document.write('Este es el valor acumulado de las componentes:'+suma+'<br>');
  }

  function sumarMayor36(vec)
  {
    var f;
    var suma=0;
    for(f=0;f<vec.length;f++)
    {
      if (vec[f]>36)
      { 
        suma=suma+vec[f];
      }
    }
    document.write('Este es el valor acumulado de las componentes mayores a 36:'+suma+'<br>');
  }

  function cantidadMayores50(vec)
  {
    var f;
    var cant=0;
    for(f=0;f<vec.length;f++)
    {
      if (vec[f]>50)
      { 
        cant=cant+1;
      }
    }
    document.write('Estos son componentes mayores a 50:'+cant+'<br>');   
  }

  var vec;
  vec=new Array(8);
  cargar(vec);
  sumar(vec);
  sumarMayor36(vec);
  cantidadMayores50(vec);
</script>
<br>
<br>
<script>
    function cargarVectores(vec1,vec2)
    {
      var f;
      for(f=0;f<vec1.length;f++)
      {
        var valor;
        valor=prompt('Introduzca componente del primer vector:','');
        vec1[f]=parseInt(valor);
      }
      for(f=0;f<vec2.length;f++)
      {
        var valor;
        valor=prompt('Introduzca componente del segundo vector:','');
        vec2[f]=parseInt(valor);
      }
    }
  
    function sumarVectores(vec1,vec2,vecsuma)
    {
      var f;
      for(f=0;f<vecsuma.length;f++) 
      {
        vecsuma[f]=vec1[f]+vec2[f];
      }
    }
  
    function imprimirVector(vecsuma)
    {
      var f;
      for(f=0;f<vecsuma.length;f++)
      {
        document.write(vecsuma[f]+' ');
      }
    }
  
    var vec1;
    vec1=new Array(5);
    var vec2;
    vec2=new Array(5);
    var vecsuma;
    vecsuma=new Array(5);
    cargarVectores(vec1,vec2);
    sumarVectores(vec1,vec2,vecsuma);
    imprimirVector(vecsuma);
  </script>

</body>
</html>
<!DOCTYPE html>
<html>

<head>
    <title>Practica 22</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        var valor;
        valor = prompt('Introduzca un numero:', '');
        valor = parseInt(valor);
        var resu;
        resu = Math.pow(valor, 3);
        document.write('El numero ' + valor + ' con potencia de 3: ' + resu);
    </script>
    <br>
    <br>
    <script>
        var valor;
        valor = prompt('Introduzca un numero:', '');
        valor = parseInt(valor);
        var resu;
        resu = Math.sqrt(valor);
        document.write('La raiz cuadrada de ' + valor + ' es ' + resu);
    </script>


</body>

</html>
<!DOCTYPE html>
<html>

<head>
    <title>Practica 23</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        var nombre;
        var cant = 0;
        do {
            nombre = prompt('Ingrese un nombre:', '');
            cant++;
        } while (nombre != 'Fin');
        cant--;
        document.write('Se ingresaron ' + cant + ' nombres');
    </script>
    <br>
    <br>
    <script>
        var nombre;
        var cant = 0;
        do {
            nombre = prompt('Ingrese un nombre:', '');
            cant++;
            nombre = nombre.toUpperCase();
        } while (nombre != 'FIN');
        cant--;
        document.write('Se ingresaron ' + cant + ' nombres');
    </script>
    <br>
    <br>
    <script>
        var frase;
        frase = prompt('Introduzca una oración:', '');
        document.write(frase + '<br><br>');
        var palabra;
        palabra = prompt('Introduza la palabra palabra que desea verificar:', '');
        if (frase.indexOf(palabra) != -1) {
            document.write('La oracion  contiene la palabra: ' + palabra);
        }
        else {
            document.write('La oracion no contiene la palabra: ' + palabra);
        }
    </script>


</body>

</html>
<!DOCTYPE html>
<html>

<head>
    <title>practica 24</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        function presion1() {
            alert('Presionaste el boton 1');
        }

        function presion2() {
            alert('Presionaste el boton 2');
        }

        function presion3() {
            alert('Presionaste el boton 3');
        }
    </script>

    <form>
        <input type="button" onClick="presion1()" value="Boton 1">
        <input type="button" onClick="presion2()" value="Boton 2">
        <input type="button" onClick="presion3()" value="Boton 3">
    </form>
</body>

</html>
<!DOCTYPE html>
<html>

<head>
    <title>Practica 25</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        function calcularCubo() {
            var v = document.getElementById('num').value;
            v = parseInt(v);
            var cubo = v * v * v;
            alert(cubo);
        }
    </script>

    <form>
        Introduza un numero:
        <input type="text" id="num">
        <br>
        <input type="button" value="Calcular cubo" onClick="calcularCubo()">
    </form>
</body>
<br>
<br>
<script>
    function mostrarMayor() {
        var num1 = document.getElementById('num1').value;
        var num2 = document.getElementById('num2').value;
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        if (num1 > num2) {
            alert('El numero mayor es ' + num1);
        }
        else {
            alert('El numero mayor es ' + num2);
        }
    }
</script>

<form>
    Ingrese primer numero:
    <input type="text" id="num1">
    <br>
    Ingrese segundo numero:
    <input type="text" id="num2">
    <br>
    <input type="button" value="mostrar mayor" onClick="mostrarMayor()">
</form>

</html>
<html>

<head>
    <title>Practica 26</title>
</head>

<body>

    <script type="text/javascript">
        function verificar() {
            var clave1 = document.getElementById('clave1').value;
            var clave2 = document.getElementById('clave2').value;
            if (clave1 == clave2) {
                alert('Las dos claves son iguales');
            }
            else {
                alert('Las dos claves son distintas');
            }
        }
    </script>

    <form>
        Introduzca la clave:
        <input type="password" id="clave1">
        <br>
        Repita la clave:
        <input type="password" id="clave2">
        <br>
        <input type="button" value="Verificar clave" onClick="verificar()">
    </form>

</body>

</html>
<!DOCTYPE html>
<html>

<head>
    <title>Practica 27</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        function mostrarSeleccionPizza() {
            document.getElementById('mensaje').value =
                document.getElementById('pizza').options[document.getElementById('pizza').selectedIndex].value;
        }
    </script>

    <form>
        Pizzas:
        <select id="pizza" onChange="mostrarSeleccionPizza()">
            <option value="500">Jamon y Queso</option>
            <option value="350">Muzzarella</option>
            <option value="250">Morrones</option>
        </select>
        <br>
        <input type="text" id="mensaje">
    </form>
</body>

</html>
<!DOCTYPE html>
<html>

<head>
    <title>practica 28</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        function verificar() {
            var deportes = '';
            if (document.getElementById("checkbox1").checked) {
                deportes = deportes + 'Fútbol ';
            }
            if (document.getElementById("checkbox2").checked) {
                deportes = deportes + 'Baloncesto ';
            }
            if (document.getElementById("checkbox3").checked) {
                deportes = deportes + 'Tenis';
            }
            alert('Los deportes seleccionados son:' + deportes);
        }
    </script>

    <form>
        Seleccione los deportes que practica:<br>
        <input type="checkbox" id="checkbox1">Fútbol<br>
        <input type="checkbox" id="checkbox2">Básquet<br>
        <input type="checkbox" id="checkbox3">Tenis<br>
        <input type="button" value="Controlar" onClick="verificar()">
    </form>
</body>

</html>
<!DOCTYPE html>
<html>

<head>
    <title>Practica 29</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        function verificar() {
            if (document.getElementById('radio1').checked) {
                alert('Eres mayor de edad y por eso puedes ver las peliculas de adutos');
            }
            if (document.getElementById('radio2').checked) {
                alert('No eres mayor de edad vete a ver muñequitos');
            }
        }
    </script>

    <form>
        La persona es mayor de edad?
        <br>
        <input type="radio" id="radio1" name="edad">si<br>
        <input type="radio" id="radio2" name="edad">no<br>
        <input type="button" value="Verificar" onClick="verificar()">
    </form>
</body>

</html>
<!DOCTYPE html>
<html>

<head>
    <title>Practica 30</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        function verificar() {
            var nombre = document.getElementById('nombre').value;
            var mail = document.getElementById('mail').value;
            var comentarios = document.getElementById('comentarios').value;
            alert(nombre + '\n' + mail + '\n' + comentarios);
        }
    </script>

    <form>
        Introduce tu nombre:
        <input type="text" id="nombre"><br>
        Introduce tu mail:
        <input type="text" id="mail"><br>
        Deja tu comentarios Comentarios:<br>
        <textarea id="comentarios" rows="10" cols="50"></textarea><br>
        <input type="button" value="confirmar" onClick="verificar()">
    </form>
</body>

</html>
<!DOCTYPE html>
<html>

<head>
    <title>Practica 31</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        function verificar(control) {
            if (control.value.length < 7 || control.value.length > 20) {
                alert('No puede utilizar esta clave (debe tener entre 7-20 caracteres)');
            }
        }
    </script>

    <form>
        Introduzca su nombre de usuario:
        <input type="text" id="usuario"><br>
        Introduzca la clave:
        <input type="password" id="clave" onBlur="verificar(this)"><br>
        <input type="button" value="confirmar">
    </form>
</body>

</html>
<!DOCTYPE html>
<html>

<head>
    <title>Practica 32</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        function pintar(objeto, col) {
            objeto.style.backgroundColor = col;
        }
    </script>

    <table border="1">
        <tr>
            <td onMouseOver="pintar(this,'#ff0000')" onMouseOut="pintar(this,'#ffffff')">
                <a href="http://www.gmail.com">Gmail</a>
            </td>
            <td onMouseOver="pintar(this,'#00ff00')" onMouseOut="pintar(this,'#ffffff')">
                <a href="http://www.outlook.com">Outlook</a>
            </td>
            <td onMouseOver="pintar(this,'#0000ff')" onMouseOut="pintar(this,'#ffffff')">
                <a href="http://www.yahoo.com">Yahoo</a>
            </td>
        </tr>
    </table>
</body>
</html>
<!DOCTYPE html>
<html>

<head>
    <title>Practica 33</title>
    <meta charset="UTF-8">
</head>

<body onLoad="mostrarMensaje()">

    <script>
        function mostrarMensaje() {
            alert('NUESTROS MIEDOS NO DETIENEN A LA MUERTE, SINO A LA VIDA....');
        }
    </script>

    <h1>NO SALGAS DE CASA</h1>
</body>

</html>
<!DOCTYPE html>
<html>

<head>
    <title>Practica 34</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        function abrirVentana() {
            var ventana = open('', '', 'height=300,width=600');
        }
    </script>

    <form>
        <input type="button" value="abrir ventana" onClick="abrirVentana()">
    </form>
</body>

</html>
<!DOCTYPE html>
<html>

<head>
    <title>Practica 35</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        function redireccionar() {
            var num;
            num = Math.random() * 3;
            num = parseInt(num);
            if (num == 0) {
                window.location = 'http://www.outlook.com';
            }
            if (num == 1) {
                window.location = 'http://www.yahoo.com';
            }
            if (num == 2) {
                window.location = 'http://www.gmail.com';
            }
        }
    </script>

    <button onClick="redireccionar()">Click y veras la magia</button>
</body>

</html>
<!DOCTYPE html>
<html>

<head>
    <title>Practica 36</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        function avanzar() {
            window.history.go(1);
        }
    </script>

    </head>

    <body>
        <a href="pagina 36.html">Dale y click y mira klk</a>
        <br>
        <br>
        <a href="javascript:avanzar()">NO SALGAS DE CASA</a>
    </body>

</html>
<!DOCTYPE html>
<html>

<head>
    <title>Practica 37</title>
    <meta charset="UTF-8">
</head>

<body>

    <script>
        function abrirVentana() {
            var ventana = open('', '', 'width=' + screen.availWidth + ',height=' + screen.availHeight / 2);
        }
    </script>

    <form>
        <input type="button" value="Click y veras klk" onClick="abrirVentana()">
    </form>
</body>

</html>
<!DOCTYPE html>
<html>

<head>
    <title>Practica 38</title>
    <meta charset="UTF-8">
</head>

<body onLoad="verificar()">

    <script>
        function verificar() {
            if (navigator.cookieEnabled == true) {
                alert('Las cookies estan activadas');
            }
            else {
                alert('No se han activado las cookies');
            }
        }
    </script>

    <h1>NO SALGAS DE CASA</h1>
</body>*/



function retornarFecha() {
    var fecha
    fecha = new Date();
    var cadena = fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear();
    return cadena;
}

function retornarHora() {
    var fecha
    fecha = new Date();
    var cadena = fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();
    return cadena;
}

