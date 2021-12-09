<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\SacodeController;


Route::get('sacode',[SacodeController::class, 'index']);
Route::get('/edit-sacode/{id}',[SacodeController::class, 'edit']);
Route::post('/add-sacode',[SacodeController::class, 'store']);
Route::put('/update-sacode/{id}',[SacodeController::class, 'update']);
Route::delete('/delete-sacode/{id}',[SacodeController::class, 'destroy']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
