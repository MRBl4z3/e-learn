@section('css')
    {{ asset('css/quiz.css') }}
@endsection

@extends('layout.main')

@section('containers')
<div class="containerss items-center justify-center grid-rows-4">
    
  <div class="judul">
    <h1 class="font-bold text-3xl text-white">Quiz yang mungkin anda suka</h1>
  </div>

  <div class="gride mt-14">

      <div class="card w-96 bg-slate-50 shadow-xl text-black">
        <div class="card-body">
          <h2 class="card-title">Bahasa Inggris</h2>
          <p>Great job! Now you have English questions to challenge your language skills. Answer the questions and check your score.</p>
          <div class="card-actions justify-start">
            <a class="btn btn-default">Kerjakan</a>
          </div>
        </div>
      </div>

      <div class="card w-96 bg-slate-50 shadow-xl text-black">
        <div class="card-body">
          <h2 class="card-title">PPKN</h2>
          <p>Ayo pelajari lebih banyak tentang Pancasila, pemerintahan, dan tanggung jawab sebagai warga negara yang baik</p>
          <div class="card-actions justify-start">
            <a class="btn btn-default">Kerjakan</a>
          </div>
        </div>
      </div>

      <div class="card w-96 bg-slate-50 shadow-xl text-black">
        <div class="card-body">
          <h2 class="card-title">Sejarah</h2>
          <p>Temukan sejarah peradaban, revolusi, dan peristiwa penting dengan menjelajahi fakta-fakta menarik dan tokoh bersejarah</p>
          <div class="card-actions justify-start">
            <a class="btn btn-default">Kerjakan</a>
          </div>
        </div>
      </div>

      <div class="card w-96 bg-slate-50 shadow-xl text-black">
        <div class="card-body">
          <h2 class="card-title">Matematika</h2>
          <p>Terapkan pengetahuanmu tentang operasi hitung, geometri, dan perhitungan volume melalui pertanyaan-pertanyaan menarik</p>
          <div class="card-actions justify-start">
            <a class="btn btn-default">Kerjakan</a>
          </div>
        </div>
      </div>

      <div class="card w-96 bg-slate-50 shadow-xl text-black">
        <div class="card-body">
          <h2 class="card-title">Biologi</h2>
          <p>Jelajahi dunia sel, ekosistem, dan organisme hidup melalui tantangan seru yang mengasah pengetahuanmu</p>
          <div class="card-actions justify-start">
            <a class="btn btn-default">Kerjakan</a>
          </div>
        </div>
      </div>

  </div>    
@endsection