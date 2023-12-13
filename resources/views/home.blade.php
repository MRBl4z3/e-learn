@section('css')
  {{ asset('css/HOme.css') }}
@endsection

@extends('layout.main')

@section('containers')
  <!-- Rekomendasi atas -->
  <div class="rekomendasi-pembelajaran-atas">
    <div class="card bg-slate-50 shadow-xl text-black">
      <div class="card-body mt-10 w-auto">
        <h2 class="card-title text-3xl font-bold">Belajar dengan mudah di internet</h2>
        <p class="text-xl">
          Platform e-learning ini menawarkan pengalaman belajar digital yang praktis, memadukan inovasi teknologi untuk menciptakan akses pendidikan online yang efisien dan terjangkau.
        </p>
        <div class="card-actions justify-start">
          <a class="btn btn-default" href="/quiz">Jelajah Lebih</a>
        </div>
      </div>
    </div>
      <div class="gambar">
          <img src="{{ asset('pic/bebes.jpg') }}" alt="" class="rounded-xl">
      </div>
  </div>
  
  <!-- Rekomendasi Bawah -->
  <div class="rekomendasi-pembelajaran-bawah pb-10">

      <div class="judul">
        <p class="text-white text-4xl font-bold">
          Kategori Quiz
        </p>
      </div>

      <div class="isi-rekomendasi justify-center">

        <div class="card w-96 bg-slate-50 shadow-xl">
          <div class="card-body text-black">
            <h2 class="card-title justify-center">Pelajaran Akademik</h2>
            <p class="text-center">Pelajaran yang berhubungan dengan materi atau angka</p>
          </div>
        </div>

        <div class="card w-96 bg-slate-50 shadow-xl">
          <div class="card-body text-black">
            <h2 class="card-title justify-center">Pelajaran Non-Akademik</h2>
            <p class="text-center">Pelajaran yang berhubungan dengan olahraga</p>
          </div>
        </div>

        <div class="card w-96 bg-slate-50 shadow-xl">
          <div class="card-body text-black">
            <h2 class="card-title justify-center">Non-Pelajaran</h2>
            <p class="text-center">Pelajaran yang tidak terhubung dengan Akademik maupun Non-Akademik</p>
          </div>
        </div>

      </div>

  </div>

  <div class="rekomendasi-quiz pb-16">

    <div class="judul text-center">
      <p class="text-white text-4xl font-bold">
        Quiz yang sedang populer
      </p>
    </div>

    <div class="isi-rekomendasi justify-center gap-10">

      <div class="card w-96 bg-slate-50 shadow-xl text-black">
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-start">
            <button class="btn btn-default">Buy Now</button>
          </div>
        </div>
      </div>

      <div class="card w-96 bg-slate-50 shadow-xl text-black">
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-start">
            <button class="btn btn-default">Buy Now</button>
          </div>
        </div>
      </div>

      <div class="card w-96 bg-slate-50 shadow-xl text-black">
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-start">
            <button class="btn btn-default">Buy Now</button>
          </div>
        </div>
      </div>

    </div>

  </div>
  
@endsection

