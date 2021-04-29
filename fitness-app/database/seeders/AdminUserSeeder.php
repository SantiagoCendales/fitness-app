<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
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
    }
}
