<?php

/**
 * Root
 * @package Website Name
 * @author Esteban Rocha
 * @link https://github.com/Esteban-Rocha/
 */

declare(strict_types=1);

/**
 * This file will autoload all classes that are necessary for this application.
 */
// spl_autoload_register(function ($class_name) {
//     $Class = 'Challenges\\';
//     if (strpos($class_name, $Class) !== false) {
//         // Filters the dependencies namespaces so that it can be called when instanciated
//         // $class_file = str_ireplace($Class, strtolower($Class), $class_name);
//         $class_file = str_ireplace("\\", "/", $class_name);
//         $class_file = sprintf('%1$s/%2$s.php', dirname(__FILE__), $class_file);
//         echo var_dump($class_file);

//         include_once $class_file;
//     }
// });

spl_autoload_register();

use Challenges\Add;

// echo Add::run(1, 2);
