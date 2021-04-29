# FitnessApplication

Esta es una aplicación web para la reserva de clases fitness. Para el desarrollo se uso en el lado del frontend el framwork Angular y del lado del backend se uso php con el framwork Laravel

## Comandos BD data

php artisan migrate
php artisan passport:client --personal
php artisan db:seed

## Run backend app

php artisan serve

## Run frontend deveopment serve

ng serve

## Consideraciones en backend

Queda pendiente implementar un manejador de errores.

No se agregaron validaciones para que se le impida al usuario registrarse si la clase ya no tiene cupos.

Aun por realizar la resta de cupos disponibles cuando un usuario hace una reserva.

## Consideraciones en backend
Aun falta por implementar feedback hacia el usuario de procesos exitosos o fallidos