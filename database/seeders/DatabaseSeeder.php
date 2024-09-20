<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        User::create([
            'username' => 'super_admin',
            'name' => 'Super Admin',
            'email' => 'admin@admin.com',
            'password' => Hash::make('12345678'),
            'profile_picture' => 'profilePics/1-63d7bb912a93b.jpg',
            'cover_picture' => 'profilePics/1-63d7bb912a93b.jpg',
            'headline' => 'Headline',
            'about' => 'Streaming about chess tricks',
            'tokens' => 0,
            'is_streamer' => 'no',
            'is_streamer_verified' => 'yes',
            'streamer_verification_sent' => 'yes',
            'live_status' => "offline",
            'popularity' => 1369,
            'is_admin' => 'yes',
            'ip' => '127.0.0.2'
        ]);
    }
}
