# Problema_1_Prueba_Tecnica_Neubox
Prueba técnica puesta por Neubox para vacante Front End

Descripción

Existe una técnica de encriptación que ocupa una agencia para poder enviar instrucciones a
sus agentes. Para enviar una instrucción, la agencia transmite un mensaje donde la
instrucción aparece entre otros caracteres. Por ejemplo la instrucción CeseAlFuego puede ser
enviada como XcamakCeseAlFuegoDLKmN. Al recibir el mensaje, los agentes (con la ayuda de
un libro con todas las instrucciones posibles) determinan cual es la instrucción escondida en el
mensaje. Máximo existe una instrucción escondida por mensaje aunque es posible que no
haya ninguna instrucción en el mensaje.

Desafortunadamente el transmisor que ocupan para el envío de los mensajes tiene una falla.
En lugar de enviar los caracteres una sola vez, esta enviándolos una, dos o hasta tres veces.
Por ejemplo, el mensaje anterior pudiera ser enviado así:

XXcaaamakkCCessseAAllFueeegooDLLKmmNNN. Esto hace que sea más difícil para los agentes
el encontrar una instrucción. (Nota: Ninguna instrucción en el libro de instrucciones contiene
dos letras iguales seguidas)

El programa recibe dos instrucciones y un mensaje, y el resultado debe ser si existe o no una
instrucción escondida en el mensaje.

Formato de Entrada
● La entrada al programa es un archivo de texto que consiste en cuatro líneas.
  o La primera línea son tres enteros M1, M2 y N. M1 y M2 es el número de
  caracteres de las dos instrucciones y N es el número de caracteres en el
  mensaje.
  ▪ N siempre estará entre 3 y 5000 inclusive
  ▪ M1 y M2 siempre estarán entre 2 y 50 inclusive
  o La segunda línea contiene la primera instrucción
  o La tercera línea contiene la segunda instrucción
  o La cuarta línea contiene el mensaje
  ▪ Los caracteres posibles en el mensaje son [a-zA-Z0-9]

Formato de Salida
● La salida del programa es un archivo que contiene dos líneas.
  o La primera línea contiene un SI si la primer instrucción se encuentra escondida
  en el mensaje o un NO de lo contrario
  o La segunda línea contiene un SI si la segunda instrucción se encuentra
  escondida en el mensaje o un NO de lo contrario

Ejemplo

Entrada

11 15 38
CeseAlFuego
CorranACubierto
XXcaaamakkCCessseAAllFueeegooDLLKmmNNN

Salida

SI
NO
