<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\SacodeController;


Route::post('/add-sacode',[SacodeController::class, 'store']);
Route::get('/tes',[SacodeController::class, 'tes'])->name('api.tess');


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
