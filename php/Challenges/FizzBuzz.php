<?php

/**
 * PHP Add Challenge
 * @package Website Name
 * @author Esteban Rocha
 * @link https://github.com/Esteban-Rocha/
 */

declare(strict_types=1);

namespace Challenges;

class FizzBuzz
{
    /**
     * @param int $a
     * @return array
     */
    public static function run(int $a): string
    {
        /** @var array<string|int> */
        $result = [];

        for ($i = (int) 1; $i <= $a; $i += 1) {
            array_push(
                $result,
                ($i % 3 === 0 ? 'Fizz' : '') .
                    ($i % 5 === 0 ? 'Buzz' : '') .
                    ($i % 3 !== 0 && $i % 5 !== 0 ? $i : '')
            );
        }

        return implode(', ', $result);
    }
}
