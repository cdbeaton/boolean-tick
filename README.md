# boolean-tick

An alternative to the Boolean component in Laravel Nova for colourblind users.

## Installation

In order to use this package, you need a Laravel installation which uses [Nova](https://nova.laravel.com).

**Composer**

```bash
composer require cdbeaton/boolean-tick
```

## Usage

You can use the BooleanTick field just as you would normally use the Boolean field.

```
use Cdbeaton\BooleanTick\BooleanTick;

...

BooleanTick::make('Is live'),
```
