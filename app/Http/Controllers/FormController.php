<?php

namespace App\Http\Controllers;

use App\Models\Form;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FormController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'job_title' => 'required|string|max:255',
            'company_name' => 'required|string|max:255',
            'industry' => 'required|string|max:255',
            'phone_number' => 'required|string|max:255',
            'agree_to_contact' => 'required|boolean',
        ]);

        Form::create($validated);

        // Redirect ke thank you page setelah form berhasil disimpan
        return to_route('thank-you');
    }

    public function thankYou()
    {
        return Inertia::render('ThankYouPage');
    }
}