<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Sacode;

class SacodeController extends Controller
{
   public function index()
   {
       $sacodes = Sacode::all();
       return response()->json([
           'status' => 200,
           'sacodes' => $sacodes
       ]);
   }
   public function store(Request $request)
   {
        $sacode = new Sacode;
        $sacode->nama = $request->input('nama');
        $sacode->topik = $request->input('topik');
        $sacode->tanggal = $request->input('tanggal');
        $sacode->kategori = $request->input('kategori');
        $sacode->save();

        return response()->json([
            'status' =>200,
            'message' =>'Tambah Data berhasil',
        ]);
   }
   public function edit($id)
   {
       $sacode = Sacode::find($id);
       return response()->json([
        'status' => 200,
        'sacode' => $sacode
    ]);
   }
   public function update(Request $request, $id)
   {
    $sacode = Sacode::find($id);
    $sacode->nama = $request->input('nama');
    $sacode->topik = $request->input('topik');
    $sacode->tanggal = $request->input('tanggal');
    $sacode->kategori = $request->input('kategori');
    $sacode->update();

    return response()->json([
        'status' =>200,
        'message' =>'Ubah Data berhasil',
    ]);
   }
   public function destroy($id)
   {
       $sacode = Sacode::find($id);
       $sacode->delete();

       return response()->json([
        'status' =>200,
        'message' =>'Data berhasil dihapus',
    ]);
   }
}
