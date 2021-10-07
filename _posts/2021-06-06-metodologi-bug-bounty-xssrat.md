---
layout: post
title: "Metodologi Bug Bounty V3.0 by XSSRAT"
tags: [xssrat, bug bounty, metodologi]
---

Ada begitu banyak metodologi bug bounty, masing-masing memiliki gaya unik dan arsenal toolsnya tersendiri. Kali ini, kita akan mempelajari Metodologi Bug Bounty yang dibuat oleh XSSRAT. Bagi yang belum mengetahui siapa XSSRAT, ia adalah seorang bug bounty hunter yang terkenal dan _humble_, sering membagikan tips, trik, dan tantangan serta menggratiskan kursus onlinenya. tertarik? silakan pantau saja [twitternya](https://twitter.com/theXSSrat).

Oke, tak perlu berlama-lama mari kita mulai..

# Metodologi

## Memilih platform

Merupakan hal yang paling penting menurut saya. Ada 3 platform utama yang saya fokuskan dengan masing-masing memiliki kelebihan dan kekurangan yang unik. Saya pribadi akan selalu merekomendasikan Intigriti tetapi itu adalah preferensi pribadi dan kamu akan melihat alasannya.

Poin-poin berikut adalah berdasarkan opini pribadi saya. Opini dapat berubah seiring waktu, jadi tentukan sendiri. Kamu harus memilih program yang tepat untuk diri kamu. Saya menyarankan untuk memerika kembali poin-poin yang akan saya berikan, kamu memiliki beberapa opsi di sini. kamu dapat menggunakan salah satu platform utama atau mencoba Google Dorking untuk menemukan program hadiah bug yang sesuai dengan kebutuhan Anda.

- Intigriti
- HackerOne
- Bugcrowd
- Synack (harus daftar)
- yeswehack
- Google dorking: [sushiwushi/bug-bounty-dorks](https://github.com/sushiwushi/bug-bounty-dorks)

### Integriti

Tentu saja ini adalah platform preferensi saya yang karena saya sudah pernah _hunting_ di sini, jadi saya memiliki lebih banyak informasi tentang platform ini.

**+ Positif**

- Tidak terlalu ramai
- *Triagers* yang luar biasa yang akan membantu kamu.
- Setelah melaporkan beberapa bug yang valid, kamu akan dapat undangan ke Intigriti Slack Workspace di mana manajer komunitas dan *triagers* selalu ada dan siap membantu pertanyaan-pertanyaanmu
- Rentang program yang luas untuk dipilih (mobile, web, vps hosters,..)
- Tidak menghukummu ketika kamu melaporkan bug yang invalid, tidak seperti platform lain di mana kamu dapat negatif karma


**- Negatif**

- Jumlah program yang sedikit jika dibandingkan dengan platform besar lain seperti HackerOne atau BugCrowd
- Kebanyakan program berbahasa Belanda atau bahasa Eropa lainnya. 
- Mungkin ada lebih banyak program publik. Kamu sebaiknya memilih VPD (vulnerability disclosure program - points atau swag, tidak ada bayaran)karena lebih sedikit kompetisi daripada program berbayar dan melaporkan beberapa bug. Ini akan membuat kamu diundang ke program pribadi yang banyak dinikmati Intigriti.


### HackerOne

Saya tidak terlalu memiliki banyak pengalaman dengan platform ini, jadi saya tidak akan banyak bicara tetapi inilah opini saya selama saya menggunakannya

**+ Positif**

- Pemilik CTF (Capture the Flag) akan mengundangmu jika kamu menemukan flagnya
- Punya banyak pilihan program
- Memiliki *triagers* yang akan membantu kamu ketika kamu menulis laporan invalid dengan komentar yang membantu.
- Mereka biasa mengadakan event untuk meningkatkan pengetahuan komunitas

**- Negatif**
- Jika kamu menulis laporan yang invalid, kamu dapat negatif karma, terlalu banyak negatif karma maka kamu harus membuktikan dirimu sendiri pada masa trial di mana kamu tidak dapat mensubmit ke beberapa program dan harus menunggu 30 hari sebelum kami dapat membuat submission apapun kembali
- Karena ini adalah platform besar, ada banyak kompetisi tapi ada banyak juga program sehingga kompetisi lebih terdistribusi

### BugCrowd

Saya juga tidak terlalu banyak memiliki pengalaman di sini. Yah, beginilah yang bisa saya sebutkan

**+ Positif**

- Memiliki banyak program
- Memiliki *triagers* yang akan membantu kamu ketika kamu menulis laporan invalid dengan komentar yang membantu.
- BugCrowd Academy, di mana kamu dapat belajar semua tentang kerentanan.

**- Negatif**

- Karena ini adalah platform besar, ada banyak kompetisi tapi ada banyak juga program sehingga kompetisi lebih terdistribusi


## Memilih program

Memilih program sama seperti memilih sepatu, pastikan kamu memilih program yang sesuai denganmu dan kamu senang menjalankannya. Untuk tujuan bab ini, saya selalu mencoba untuk aplikasi di mana saya dapat membuat pengguna dengan tingkat priviledge yang berbeda. Saya suka menguji program tersebut karena mereka mengandung _business logic_, dan kita semua tahu akan ke mana kita di bawa. Berikut adalah contoh program:

- [Suivo](https://app.intigriti.com/programs/suivo/suivoweb/detail)
- [Sentiance](https://app.intigriti.com/programs/sentiance/sentiance/detail)
- [Hoplr](https://app.intigriti.com/programs/hoplr/hoplr/detail)

Saya juga punya tips untuk kamu. Kebanyakan orang akan memiliki kecenderungan mengejar target yang lebih luas. Ini ide buruk menurut saya. 

_Reconnaissance_(Pengintaian) hanya membantu kamu untuk menemukan target. Setelah pengintaian, kamu masih harus perlu meretas dan inilah yang dilupakan banyak orang. Setelah kamu habiskan berjam-jam melakukan pengintaian, semua pekerjaan itu hanyalah untuk membantu kamu memulai. Inilah sebabnya mengapa saya merekomendasikna kamu mencoba dan menyempurkana strategi serangan kamu di aplikasi utama terlebih dahulu, bukan pada seluruh domain *.target.com.

## Vulnerability Disclosure Program (VDP) atau yang berbayar?

VDP adalah program yang bounty atau hadiahnya berupa poin atau swag (souvenir), bukan sejumlah uang.

Saya sangat merekomendasikan untuk memulai pada program VDP, karena:

- VDP tidak ramai, tidak ada bayaran = sedikit hackers
- VDP mungkin tidak terlalu sulit dikarenakan "sifat"nya. Karena mereka tidak perlu membayar, maka mereka hanya meluangkan sedikit bounty dan mengambil lebih banyak risiko.
- Poin akan membuat kamu diundang ke private program, ini akan berisi lebih sedikit hackers dan mungkin akan ada bayaran.

Sesuaikan strategi kamu, dan saya yakinkan kamu bahwa uang akan mengikuti tapi kamu harus memberinya waktu!

## Strategi Serangan ala Uncle Rat

### Memulai

Pada pertama kali kamu melakukan serangan pada targetmu, saya harap kamu dapat mengacu pada hal berikut:

- Memulai dengan mendaftarkan sebuah akun jika memungkinkan atau ubah akun kamu dan pastikan kamu melakukan hal berikut:
    - Di manapun yang memungkinkan, masukan serangan vektor Cross Site Scripting (XSS) dan Server Side Template Injection (SSTI). Ini akan dilakukan melalui pengujian manual dan mungkin mengekspos masalah integrasi yang sulit ditemukan.
    - Contoh serangan vektor: ```<img src=x onerror=alert()>${{7*7}}```
    - Masukan serangan vektor tersebut ke setiap field yang mungkin
    - Buat serangan vektor mu sendiri!
- Setelah mendaftar, jelajahi website seperti pengguna normal.
- Buat mindmap fungsionalitas
- Selalu biarkan proxy Burp Suite atau aplikasi Man in the Middle terbuka pada background.

### Jelajahi aplikasi secara manual

Setelah memilih platform, dan memilih program, akhirnya kita sampai pada bagian yang _juicy_, menarik.

Ketika saya memiliki target baru, hal pertama yang saya lakukan adalah mengenal target saya. Saya perlu mengetahui semua fungsi yang tersedia dan saya melakukannya dengan mendaftarkan akun dan menggunakan aplikasi seperti pengguna biasa. sementara saya melakukan ini, saya memberikan perhatian khusus pada tingkat priviledge yang tersedia dan fungsionalitas yang ditambahkan kemudian seperti fungsi impor atau ekspor. Setiap fungsi yang ditambahkan di atas fungsi lain membawa titik integrasi karena kedua fungsi tersebut perlu berkomunikasi. Seringkali fitur asli mungkin diamankan dengan baik tetapi fungsionalitas tambahan mungkin tidak berisi fitur keamanan yang sama seperti aslinya.

Ketika saya menjelajah manual, saya akan buka Burp Suite dan mengatur scope dengan tepat. Ini akan membuat sitemap terisi ketika saya menggunakan aplikasi. Saya butuh itu nanti. Saya juga dapat baca manual (kalau tidak ada, bisa coba google dorking). Membaca manual sangat penting, kita adalah pencari bug bounty dan kita sedang "berperang" dengan target kita. Manual itu seperti _blue print_ dari sebuah aplikasi dan dalam peperangan, informasi adalah kekuatan. Hal terakhir yang dapat kita lakukan adalah membaca dokumentasi Application Programming Interface (API) jika ada atau membaca dokumen swagger.

Saya akan memastikan untuk memasukan sebuah serangan vektor XSS dan injeksi template sesegera setelah saya membuat akun di manapun yang mungkin, ini memberikan peluang terbesar untuk memunculkan sebuah serangan XSS nanti saat saya menggunakan aplikasi.

Keseluruhan proses menjelajahi target dan mengumpulkan informasi memakan beberapa hari setidaknya. Saya ingin tahu siapa musuh yang kita sedang perangi. Jika ini membantumu, buat sebuah mindmap dari targetmu dengan [XMind](https://www.xmind.net/)

## PoC || GTFO

Ketika kamu sedang melakukan recon awal, dan khususnya jika kamu menggunakan Burp Suite Pro, kamu mungkin menemukan banyak peringatan/alarm berbunyi. Sebagai contoh, jika kamu menggunakan Burp Suite Pro, mungkin ia akan menampilkan beberapa isu yang ia temukan. Jangan terlalu senang, bisa saja itu hanya false positif. Sangat penting untuk kamu mengkonfirmasi **setiap** temuan dari **setiap** tool secara manual.

Dalam bug bounty, kami menyebutnya "PoC or GTFO" yang artinya kamu harus membuktikan dampaknya atau _Get The F*** Out_. Kami menyebut ini karena itu penting, beberapa laporan mungkin sama sekali tidak dapat dieksploitasi atau bahkan tidak berdampak bagi perusahaan.

## Menjelahi request pada Burp Suite

Setelah saya mengerti cara aplikasi bekerja, sekarang saya siap dan berbekal pengetahuan yang akan membantu saya mengenali kerentanan lebih cepat. Saya harus tahu bagaimana seharusnya aplikasi bekerja sebelum saya dapat memulai serangan dan sekarang kita memiliki peta permukaan dari aplikasi, kita perlu menggali lebih dalam. Saatnya buka Burp Suite di mana sitemap sudah terisi.

![burp-01](/assets/img/posts/metodologi-bug-bounty-xssrat/burp-01.png)

Burp Suite memiliki trik ajaib yang tersimpan untuk kita. Kita dapat menggunakan filter sehingga Burp Suite hanya akan menampilkan request yang berparameter saja dalam sitemap. Arahkan ke site map tab dan klik kotak besar di atas untuk menetapkan filter dan sekarang klik kotak yang dicentang di sebelah "show only parameterised requests"

![burp-02](/assets/img/posts/metodologi-bug-bounty-xssrat/burp-02.png)

Sebagai sebuah bug bounty, langkah berikutnya adalah mendalami request-request dan melihat apakah saya dapat parameter yang menarik yang dapat saya "rusaki". Masuk akal untuk mengetahui parameter mana yang kamu selidiki secara manual tetapi paremeter seperti "view=week" di kalender tidak begitu menarik bagi kita.Kita mencari request dengan parameter yang memicu beberapa _business logic_.

Contohnya facebook, kita semua tahu facebook dan facebook memiliki beberapa fitur yang dapat kita pakai. Kita akan fokus pada membuat sebuah post, bayangkan kita memiliki request-request berikut pada Burp Suite kita:

- POST /CreatePost
- {Content=text}
- GET /comments
- GET /post
- POST /comment
- {Content=text}
- POST /Like
- {PostID=id}
- POST /Unlike
- {PostID=id}

Ketika seseorang membuat sebuah request `POST /CreatePost` kita dapat mencoba beberapa hal seperti XSS, SSTI,.. pada parameter Content yang tentu merupakan serangan permukaan yang menarik yang dapat kita jelajahi.

Tapi mungkin itu memiliki kemungkinan yang besar sebagai sebuah duplikasi karena itu terlalu jelas. Namun, jika kamu me-like sebuah post, sebuah request `POST /Like` sedang dikirim. Jika kamu dapat memanipulasi seberapa banyak like yang post dapatkan, maka ini bisa jadi sebuah kerentanan yang valid maka investigasi panggilan ini lebih jauh.

![burp-post01](/assets/img/posts/metodologi-bug-bounty-xssrat/burp-post01.png)

Panggilan sedang dikirim ketika kita klik tombol like dan kemudian tombol like berubah menjadi biru dan ketika kita klik lagi, sebuah request `POST /Unlike` dikirim ke server sehingga jumlah like ditambahkan 1 jika kamu klik tombol like dan dikurangi 1 jika kamu klik lagi.

![burp-postid1](/assets/img/posts/metodologi-bug-bounty-xssrat/burp-postid1.png)

![burp-likesplus1](/assets/img/posts/metodologi-bug-bounty-xssrat/burp-likesplus1.png)

![burp-postid1](/assets/img/posts/metodologi-bug-bounty-xssrat/burp-postid1.png)

![burp-likesminus1](/assets/img/posts/metodologi-bug-bounty-xssrat/burp-likesminus1.png)

Seorang hunter yang cerdas akan kirim request `POST /Like` ke repeater di Burp Suite dan mencoba mengirim beberapa kali dan melihat apakah jumlah like tetap bertambah. Jika iya, maka kita memiliki sebuah kerentanan.

## Parameter apa yang saya uji dan untuk kerentanan apa?

Saya akan mencoba memeriksa semua permintaan dan melihat apakah saya dapat menemukan parameter yang menarik. Parameter terlihat menarik bagi saya dalam kasus berikut:

- Jika tampaknya berinteraksi dengan logika dari web aplikasi. Inilah mengapa sangat penting untuk mengetahui aplikasi secara tepat.
- Parameter apapun yang tampak mengandung sebuah URL. Jika target resolve URL yang saya masukan, mungkin rentan terhadap Server Side Request Forgery (SSRF)
- Parameter apapun yang tampak mengambil file dari local file system seperti gambar yang disimpan di penyimpanan dari webserver dan disebut sebagai image=file.png. Ini mungkin rentan terhadap Local File Inclusion (LFI) atau Remote File Inclusion (RFI)
- Setiap parameter Cross Site Request Forgery (CSRF)
- Di manapun saya dapat mengunggah sebuah gambar, saya akan mencoba  via gambar berformat .SVG
- Di manapun saya dapat mengunggah sebuah file dengan format .DOCX atau .XLSX, saya akan mencoba XXE
- Saya akan mencoba menyimpan pengaturan akun, pengaturan personal dan pengaturan lain yang saya temukan dan mencari parameter tersembunyi.

## Pengujian otomatis

Ini akan terdiri dari pengujian Insecure Direct Object References (IDOR) yang saya lakukan tetapi metode saya berbeda. Saya akan mencoba memilik sebuah target di mana saya dapat mengundang pengguna dalam akun yang sama dan saya juga dapat membuat pengguna yang berbeda tingkat priviledge. Inilah yang saya lakukan:

- Buat dua akun dan uji terhadap IDOR
- Buat dua pengguna dalam satu akun yang memiliki tingkat priviledge yang sama dan uji terhadap IDOR.
- Buat dua pengguna dalam satu akun yang memiliki tingkat priviledge yang berbeda dan uji terhadap Broken Access Control (BAC).

Pastikan kamu menguji **semua** tingkat priviledge, dan jika kamu dapat membuatnya sendiri, lakukanlah.

Beberapa target akan menyebut ini sebagai "roles", yang lain menyebutnya "groups" tapi sepanjang kamu dapat mengatur perbedaan tingkat priviledge, kamu akan baik-baik saja.

Setelah semua dilakukan, saya akan mencoba untuk fuzz beberapa endpoint untuk menguji Command Injection dan saya akan mencoba mengidentifikasi beberapa endpoint lain untuk diserang.

## Mengidentifikasi extra endpoint untuk diserang

Kadang kita dapat menggunakan keberadaan sebuah API untuk menentukan keberadaan API lain. Sebagai contoh, kita membuat sebuah request GET ke endpoint /api/v2/getInvoices. Dalam kasus ini kita mungkin akan menebak bahwa ada kemungkinan juga v1 dari API itu jadi saya akan mencoba secara manual untuk menavigasi menuju URL tersebut. Ini disebut sebagai menyimpulkan endpoint API baru dan dapat sangat bermanfaat karena versi yang lebih lama sering kali kurang aman dibandingkan versi terkini.

Cara lain menemukan endpoint yang tidak terlihat adalah membuka file javascript. Tentu saja kita dapat menggunakan tool seperti [linkfinder](https://github.com/GerbenJavado/LinkFinder). Tool-tool ini akan memindai file javascript untuk kita dan menampilkan sebuah daftar semua URL yang ditemukan dalam file javascript. Ini mungkin akan mengungkap beberapa enpoint yang belum diuji yang mana kita sebagai hacker mencintainya tapi kita juga dapat mencari secara manual memerika file javascript yang akan mengurangi kemungkinan endpoint tersebunyi tetap bersembunyi untuk waktu yang lama.

Kemungkinan terakhir yang bisa kita tuju adalah [Google Dorking](https://www.sans.org/security-resources/GoogleCheatSheet.pdf) atau [GitHub Dorking](https://shahjerry33.medium.com/github-recon-its-really-deep-6553d6dfbb1f). Jika ini tidak memberikan saya endpoint baru, saya beralih ke target baru.

## Tips umum

- Ketahui aplikasimu, luangkan beberapa waktu untuk mencobanya dengan normal tapi tetap buka Burp Suite.
- Awali dengan XSS dan SSTI sesegera mungkin jika termasuk ke dalam scope, masukan mereka ke setiap field yang kamu lihat
- Buat daftar fuzzing mu sendiri
- Perluas daftar tersebut dengan temuanmu
- VDP dibandingkan berbayar jika kamu tidak ingin terlalu kompetitif.
- PoC atau GTFO
- Buktikan dampaknya

## Catatan Yuraveon

WOW, sebuah metodologi yang menarik. Simpel dan padat. Saya pribadi banyak belajar dari menerjemahkan ini. Artikel ini merupakan hasil terjemahan dari tulisan Uncle XSSRat, kamu dapat membacanya dalam bahasa inggris di link berikut:

> [Bug Bounty Methodology V3.0: Hunt like a rat](https://thexssrat.medium.com/bug-bounty-methodology-v3-0-hunt-like-a-rat-9e030fc54363)

Sangat worth untuk dibaca! 

### Ucapan terima kasih
Terima kasih kepada Uncle XSSRat yang memberikan [ijin](https://twitter.com/theXSSrat/status/1400215371404152833) (bahkan sebenarnya undangan!)untuk menerjemahkan tulisannya ke dalam berbagai bahasa. 

## Yuraveon's notes

WOW. What a methodology. Simple but solid. I learn a lot just by translating it. This article is a translation of Uncle XSSRat's Methodology. You can read it in english at:

> [Bug Bounty Methodology V3.0: Hunt like a rat](https://thexssrat.medium.com/bug-bounty-methodology-v3-0-hunt-like-a-rat-9e030fc54363)

Worth to read!

### Thank-you note

Thank you to Uncle XSSRat that gives us a [permission](https://twitter.com/theXSSrat/status/1400215371404152833) (even an actual inviation!) to translate your methodology into our mother language. Terima kasih!