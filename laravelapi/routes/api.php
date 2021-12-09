<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\SacodeController;


Route::get('sacode',[SacodeController::class, 'index']);
Route::post('/add-sacode',[SacodeController::class, 'store']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
