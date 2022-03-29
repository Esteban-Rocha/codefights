<?php

/**
 * PHP Add Challenge
 * @package Website Name
 * @author Esteban Rocha
 * @link https://github.com/Esteban-Rocha/
 */

declare(strict_types=1);

namespace Challenges;

class Add
{
    /**
     * @param int $a
     * @param int $b
     * @return int
     */
    public static function run(int $a, int $b): int
    {
        return $a + $b;
    }
}
