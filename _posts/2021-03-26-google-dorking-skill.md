---
layout: post
title: Google Dorking - Seni Dalam Mencari
tags: [google, dork, cheatsheet]
---

Kita hidup di —yang para pakar menyebutnya sebagai— Jaman Informasi. Di mana data merupakan bagian terkecil dari sebuah informasi, menyatukan data, mencari korelasinya, lalu mengambil kesimpulan merupakan suatu keterampilan yang sangat dibutuhkan pada jaman ini. Big Data, Machine Learning, dan Artificial Intelligent adalah sedikit contoh dari teknologi pemanfaatan data yang saat ini sedang *booming*, para praktisinya dicari dan dibayar mahal. Betapa data menjadi sebuah "mata uang". 

Mencari data di Internet, baik nama orang ataupun artikel penunjang skripsi, merupakan kegiatan yang lazim dilakukan pada jaman ini. Ketika kita ingin mencari sesuatu di Internet, sudah pasti yang hal terlintas dipikiran kita adalah Google.com, mesin pencari nomor satu di dunia. Saking besarnya peran Google dalam kehidupan kita, sampai kata google masuk kedalam [kamus Oxford](https://www.oxfordlearnersdictionaries.com/definition/english/google). 

> **google (somebody/something)** to type words into the search engine Google™ in order to find information about somebody/something

Sebagian besar dari kita pernah mendengar atau berkata *googling*, yang memiliki makna mencari sesuatu dengan menggunakan google. Begitu besar dampaknya mesin pencari ini dalam kehidupan modern kita. Padahal, ada begitu banyak [mesin pencari](https://www.niagahoster.co.id/blog/daftar-mesin-pencari-selain-google/) selain Google, ada Bing, Yahoo Search, DuckDuckGo, dan lainnya. Jika kamu konten kreator, sudah pasti kamu belajar bagaimana mengoptimalkan mesin pencari agar konten kamu berada di halaman paling depan pada mesin pencari, kegiatan optimalisasi ini biasa disebut *Search Engine Optimization* (SEO). Sekarang ini banyak sekali konten atau data yang "berserakan" tersebar di Internet, dari yang baik sampai yang buruk, dari yang legal sampai illegal. Data-data tersebut melimpah ruas, siap diambil siapa saja. Masalahnya kemudian adalah, bagaimana kita mencari sesuatu yang kita inginkan diantara data-data yang berserakan tersebut? Di sinilah manfaatnya Google Dorking.

## Google Dorking

Pada dasarnya Google Dorking merupakan teknik pencarian informasi spesifik menggunakan mesin pencari Google. Google Dorking dikenal juga dengan [Google Hacking](https://en.wikipedia.org/wiki/Google_hacking) karena umumnya para peretas menggunakan Google dalam fase pengintaian (reconnaissance). Seperti yang kita tahu, Google merupakan mesin pencari nomor satu, maka sudah pasti para konten kreator, pebisnis, dan sebagainya mempercayakan Google untuk dapat meng-indeks atau meng-*crawl* website atau kontennya. Sehingga ketika orang mencari hal yang berkaitan dengan bisnisnya, maka Google akan menampilkan website dengan SEO yang paling baik. Semakin banyak yang mencari suatu website, semakin tinggi kemungkinan website tersebut berada di halaman pertama Google. Tapi mesin pencari Google tidak hanya mengindeks website saja, melainkan seluruh konten yang ada di website tersebut termasuk gambar, video, animasi, dan file. 

Terkadang, ketika kita mencari sesuatu, yang kita temukan bukanlah yang kita inginkan. Misal kita mencari mouse komputer, kita hanya tulis "mouse" di kolom pencarian, yang akan kita temukan adalah seperti gambar berikut:

![mouse](/assets/img/posts/google-dorking/mouse.png)

Hal ini disebabkan karena algoritma pencarian Google menggunakan statistik, yang mana "mouse" adalah film korea yang sedang ramai dicari orang. kata kunci terbaik yang bisa kita pakai ketika mencari mouse komputer adalah "mouse komputer". Google akan mencari dua kata: mouse, komputer. Ketika dua kata ini ditemukan dalam sebuah konten, Google akan menganggap telah menemukan "mouse komputer"

![mouse-komputer](/assets/img/posts/google-dorking/mouse-komputer.png)

Lihat pada gambar di atas, kata "mouse" dan "komputer" ditebalkan dalam hasil pencarian. Sehingga dapat kita simpulkan bahwa semakin banyak kata kunci yang kita masukan, akan semakin baik hasilnya. Tapi ini bukanlah Google Dorking. Google Dorking adalah mencari informasi **spesifik** yang biasanya sukar ditemukan dengan kata kunci umum.

### Cheatsheet

Google Dorking memiliki formula atau pola tertentu yang dimasukan ke dalam kolom pencarian. Berikut adalah pola-pola yang biasa digunakan:


| Pola          | Deskripsi                                       | Contoh                            |
| :-------------- |:---------------------------------------------------| :------------------------------------|
| allintext      | Mencari halaman yang sesuai kata kunci. | `allintext:"keyword"` |
| intext      | Mencari halaman yang sesuai kata kunci. | `intext:"keyword"` |
| inurl      | Mencari alamat URL yang sesuai kata kunci. | `inurl:"keyword"` |
| allinurl      | Mencari alamat URL yang sesuai kata kunci. | `allinurl:"keyword"` |
| intitle      | Mencari judul yang sesuai kata kunci. | `intitle:"keyword"` |
| allintitle      | Mencari judul yang sesuai kata kunci. | `allintitle:"keyword"` |
| site      | Mencari konten hanya dari website tertentu. | `site:"www.google.com"` |
| filetype      | Mencari konten dengan tipe file tertentu. | `filetype:"pdf"` |
| link      | Mencari tautan ke kata kunci. | `link:"keyword"` |
| before/after      | Mencari konten berdasarkan rentang waktu tertentu. | `filetype:pdf & (before:2000-01-01 after:2001-01-01)` |
| related      | Mencari halaman web yang "mirip" dengan kata kunci. | `related:www.google.com` |


Misal kita ingin mencari mouse komputer dengan hasil pencarian hanya dari tokopedia saja. Maka di kolom pencarian kita tulis
`mouse komputer site:tokopedia.com`. *Well* ini hanya contoh saja. 

Pola-pola di atas hanya sebagian kecil dari pola yang bisa diterapkan, silakan kamu cari sendiri, aplikasikan langsung Google Dorking untuk mencari Google Dorking. :)

### Exploit-DB - Google Hacking Database

![ghdb](/assets/img/posts/google-dorking/ghdb.png)

Seperti yang sudah disebutkan sebelumnya, Google Dorking biasa disebut Google Hacking. Peretas memanfaatkan pola-pola tersebut untuk mencari informasi sensitif, seperti mencari alamat email atau mencari file yang berisikan data rahasia. 

Dalam dunia *Cyber Security*, dikenal website [Explot-DB](https://www.exploit-db.com/) yang memiliki database eksploit berupa kode atau artikel, dan juga Google Dork dengan kata kunci sensitif. 


## Penutup
Selalu ingat bahwa gunakan ilmu yang ada di blog ini untuk kebaikan. Saya hanya berbagi ilmu agar kita bisa berkembang bersama.
