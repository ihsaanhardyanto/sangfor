<?php

use App\Http\Controllers\FormController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// Route untuk landing page (Welcome.tsx)
Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('welcome');

// Route untuk handle form submission
Route::post('/submit-form', [FormController::class, 'store'])->name('submit.form');

// Route untuk thank you page (ThankYouPage.tsx)
Route::get('/thank-you', [FormController::class, 'thankYou'])->name('thank-you');
