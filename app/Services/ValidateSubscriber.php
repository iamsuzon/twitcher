<?php

namespace App\Services;

use App\Models\User;

class ValidateSubscriber
{
    public static function isSubscribable(User $subscriber, User $streamer): bool
    {
        $showModal = false;
        $streamer = User::where('username', $streamer->username)->first();

        if (!$subscriber->hasSubscriptionTo($streamer)) {
            $showModal = true;
        }

        return $showModal;
    }
}