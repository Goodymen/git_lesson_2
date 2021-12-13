'use strict'

// Какое будет выведено значение: let x = 5; alert( x++ ); ?
let x = 5;
alert( x++ ); //5

// Чему равно такое выражение: [ ] + false - null + true ?
alert( [ ] + false - null + true ); //NaN

// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
let y = 1;
let x1 = y = 2;
alert(x1); //2

// Чему равна сумма [ ] + 1 + 2?
alert( [] + 1 + 2 ); //12

// Что выведет этот код: alert( "1"[0] )?
alert( "1"[0] ); //1

// Чему равно 2 && 1 && null && 0 && undefined ?
alert( 2 && 1 && null && 0 && undefined ); //null

// Есть ли разница между выражениями? !!( a && b ) и (a && b)?
let a = false,
    b = false;
alert( (!!( a && b )) == (a && b) ); //true

// Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
alert( null || 2 && 3 || 4 ); //3

// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
let a1 = [1, 2, 3],
    b1 = [1, 2, 3];
alert( a1 == b1 ); //false 

// Что выведет этот код: alert( +"Infinity" ); ?
alert( +"Infinity" ); //Infinity

// Верно ли сравнение: "ёжик" > "яблоко"?
alert( "ёжик" > "яблоко" ); //true

// Чему равно 0 || "" || 2 || undefined || true || falsе ?
alert( 0 || "" || 2 || undefined || true || falsе ); //2