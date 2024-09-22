<?php

namespace App\Http\Middleware;

use App\Models\Subscription;
use App\Models\User;
use Closure;
use Illuminate\Http\Request;

class ValidateSubscriber
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if (auth()->check())
        {
            if ($request->route('user'))
            {
                $streamer_name = $request->route('user');
                $streamer = User::where('username', $streamer_name)->first();

                $subscriber = User::find(auth()->user()->id);

                if (! $subscriber->hasSubscriptionTo($streamer))
                {
                    if ($subscriber->is_streamer !== 'yes')
                    {
                        return redirect()->route('mySubscriptions');
                    }
                }
            }
        } else {
            return redirect()->route('login');
        }

        return $next($request);
    }
}
