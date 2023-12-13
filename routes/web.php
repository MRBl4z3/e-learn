<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('/home', function () {
    return view('home');
});

Route::get('/quiz', function () {
    return view('quiz');
});

Route::get('/soal-bing', function () {
    return view('soal-bing');
});

Route::get('/soal', function () {
    return view('soal');
});

Route::get('/soal-metik', function () {
    return view('soal-metik');
});

Route::get('/soal-biologi', function () {
    return view('soal-biologi');
});

Route::get('/soal-pkn', function() {
    return view('soal-pkn');
});

Route::get('/soal-sejarah', function () {
    return view('soal-sejarah');
});