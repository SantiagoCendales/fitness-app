<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Lesson;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Jhon Doe',
            'email' => 'jhondoe@email.com',
            'password' => bcrypt('12345'),
            'document_id'=> '000000000'
        ]);
        Lesson::create([
            'name' => 'Yoga',
            'places'=> '10',
            'date'=> '20-06-2021'
        ]);

    }
}
