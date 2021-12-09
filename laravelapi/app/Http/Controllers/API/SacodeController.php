<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Sacode;

class SacodeController extends Controller
{
   public function store(Request $request)
   {
        $sacode = new Sacode;
        $sacode->nama = $request->input('nama');
        $sacode->topik = $request->input('topik');
        $sacode->tanggal = $request->input('tanggal');
        $sacode->kategori = $request->input('kategori');
        $sacode->save();

        return response()->json([
            'status' => 200,
            'message' => 'Tambah Data berhasil',
        ]);
   }
   public function tes()
   {
       return 'ssss';
   }
}
