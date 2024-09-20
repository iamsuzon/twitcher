@extends('errors::layout')

@section('content')
<div class="max-w-4xl mx-auto my-20 px-5">
    <div class="mt-5 py-5 px-4 text-center bg-white rounded-lg">
        <h3 class="text-3xl text-indigo-800 heading-gradient font-black mb-5">{{ __('404 - Page Not Found') }}</h3>
        <center>
            <a href="{{route('home')}}">
                <img src="{{asset('images/404.png')  }}" alt="404 image" class="rounded-lg" />
            </a>
        </center>

        <div class="text-2xl text-center text-stone-600 mt-10 font-bold">
            {{ __('The page you were looking for was not found') }}
            <br /><br />
            <a href="{{route('home')}}" class="font-black text-3xl heading-gradient">
                <i class="fa-solid fa-arrow-left"></i>
                {{ __('HOME') }}
            </a>
        </div>
    </div>
</div>
@endsection