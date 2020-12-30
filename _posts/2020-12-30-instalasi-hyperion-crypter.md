---
layout: post
title: Instalasi Hyperion Crypter 2.3.1 di Ubuntu 
tags: [security, hyperion, runtime, crypter, instalasi]
---

*Crypter* adalah program yang dibuat untuk mengaburkan (menyembunyikan)  *source code* sebuah file. Tujuan dasarnya adalah untuk mengubah bentuk data dan mengenkripsinya sehingga tidak dapat dipahami oleh pembacanya. Ada beberapa jenis *crypter*, salah satunya adalah *Runtime Crypter*. *Runtime Crypter* sendiri merupakan *crypter* yang mengenkripsi sebuah file dan menambahkan bagian untuk *decrypt* yang digunakan untuk mengembalikan file yang telah dienkripsi. Biasa digunakan untuk mem-*bypass* atau melewati pindaian oleh anti-virus.

[Hyperion](http://www.phobosys.de/hyperion.html) merupakan sebuah *Runtime Crypter* yang mengubah file *windows portable executables* (PE) menjadi sebuah versi terenkripsi dengan mempertahankan *behaviour* aslinya. File terenkripsi akan men-dekripsi-kan diri pada *startup* dan mengeksekusi file aslinya. Ini untuk mencegah *reverse engineering* pada suatu file atau program.

*Runtime crypter* menjadi wajib bagi keamanan jaringan karena mengizinkan program berbahaya dapat dieksekusi pada lingkungan yang dilindungi, misal, Anti-Virus yang berfungsi sebagai sebuah solusi deteksi pola mencurigakan dan mencegah eksekusi program berbahaya.

<h2> Tabel Konten </h2>
- [Prasyarat](#prasyarat)
  - [C-Compiler](#c-compiler)
  - [Make](#make)
- [Instalasi Hyperion Crypter](#instalasi-hyperion-crypter)
- [Penutup](#penutup)

## Prasyarat

Sebelum dapat menginstall Hyperion, ada beberapa prasyarat yang harus diinstal terlebih dahulu. Sebelum ke *section* berikutnya, silakan ikut langkah berikut agar tidak ada kendala saat instalasi prasyaratnya:

1. `sudo apt-get update -y` untuk mengecek pembaharuan sistem.
2. `sudo apt install build-essential` akan menginstal banyak paket yang dibutuhkan dalam instalasi prasyarat maupun Hyperion.

### C-Compiler

C-Compiler adalah sebuah penerjemah bahasa C. Saya menyarankan untuk menggunakan [mingw-w64](http://mingw-w64.org/doku.php) adapun untuk cara instalasi mingw-w64 adalah berikut:


1. Jalankan perintah `sudo apt-get install -y mingw-w64` untuk menginstal mingw-w64 langsung dari `aptitude`

Setelah selesai, silakan jalankan `apt-cache search mingw-` untuk mengetahui mingw-w64 yang terinstall. Hasilnya akan seperti di bawah ini.

```zsh
libassuan-mingw-w64-dev - IPC library for the GnuPG components -- Windows port
libgcrypt-mingw-w64-dev - LGPL Crypto library - Windows development
libgpg-error-mingw-w64-dev - library of error values and messages in GnuPG (Windows development)
libksba-mingw-w64-dev - X.509 and CMS support library (Windows development)
libnpth-mingw-w64-dev - replacement for GNU Pth using system threads (Windows dev)
binutils-mingw-w64 - Cross-binutils for Win32 and Win64 using MinGW-w64
binutils-mingw-w64-i686 - Cross-binutils for Win32 (x86) using MinGW-w64
binutils-mingw-w64-x86-64 - Cross-binutils for Win64 (x64) using MinGW-w64
g++-mingw-w64 - GNU C++ compiler for MinGW-w64
g++-mingw-w64-i686 - GNU C++ compiler for MinGW-w64 targeting Win32
g++-mingw-w64-x86-64 - GNU C++ compiler for MinGW-w64 targeting Win64
gcc-mingw-w64 - GNU C compiler for MinGW-w64
gcc-mingw-w64-base - GNU Compiler Collection for MinGW-w64 (base package)
gcc-mingw-w64-i686 - GNU C compiler for MinGW-w64 targeting Win32
gcc-mingw-w64-x86-64 - GNU C compiler for MinGW-w64 targeting Win64
gdb-mingw-w64 - Cross-debugger for Win32 and Win64 using MinGW-w64
gdb-mingw-w64-target - Cross-debugger server for Win32 and Win64 using MinGW-w64
gfortran-mingw-w64 - GNU Fortran compiler for MinGW-w64
gfortran-mingw-w64-i686 - GNU Fortran compiler for MinGW-w64 targeting Win32
gfortran-mingw-w64-x86-64 - GNU Fortran compiler for MinGW-w64 targeting Win64
gnat-mingw-w64 - GNU Ada compiler for MinGW-w64
gnat-mingw-w64-base - GNU Ada compiler for MinGW-w64 (base package)
gnat-mingw-w64-i686 - GNU Ada compiler for MinGW-w64 targeting Win32
gnat-mingw-w64-x86-64 - GNU Ada compiler for MinGW-w64 targeting Win64
gobjc++-mingw-w64 - GNU Objective-C++ compiler for MinGW-w64
gobjc++-mingw-w64-i686 - GNU Objective-C++ compiler for MinGW-w64 targeting Win32
gobjc++-mingw-w64-x86-64 - GNU Objective-C++ compiler for MinGW-w64 targeting Win64
gobjc-mingw-w64 - GNU Objective-C compiler for MinGW-w64
gobjc-mingw-w64-i686 - GNU Objective-C compiler for MinGW-w64 targeting Win32
gobjc-mingw-w64-x86-64 - GNU Objective-C compiler for MinGW-w64 targeting Win64
libz-mingw-w64 - compression library - Windows runtime
libz-mingw-w64-dev - compression library - Windows development files
mingw-ocaml - ocaml-mingw-w64 transitional dummy package
mingw-w64 - Development environment targeting 32- and 64-bit Windows
mingw-w64-common - Common files for Mingw-w64
mingw-w64-i686-dev - Development files for MinGW-w64 targeting Win32
mingw-w64-tools - Development tools for 32- and 64-bit Windows
mingw-w64-x86-64-dev - Development files for MinGW-w64 targeting Win64
ocaml-mingw-w64 - OCaml cross-compiler based on mingw -- Meta-package
ocaml-mingw-w64-i686 - OCaml cross-compiler based on mingw -- 32 bit compiler
ocaml-mingw-w64-x86-64 - OCaml cross-compiler based on mingw -- 64 bit compiler
```

### Make

[Make](https://www.gnu.org/)  untuk menentukan secara otomatis bagian mana dari program yang perlu dikompilasi ulang, dan mengeluarkan perintah yang diperlukan untuk mengkompilasi ulang. Cara instalasinya cukup simpel, yaitu hanya dengan `sudo apt install make` dan selesai.

## Instalasi Hyperion Crypter

{: .box-note}
**Note:** Saat post ini dibuat, versi terakhir adalah 2.3.1

Hyperion dapat diunduh pada salah satu link berikut:

- [Github](https://github.com/nullsecuritynet/tools/tree/master/binary/hyperion/release) 
- [Nullsecruty.net](https://nullsecurity.net/tools/binary.html)

Unduh dan unzip folder Hyperion ke direktori yang kamu inginkan, kemudian ikuti langkah berikut ini:

- Pada terminal, gunakan `cd direktori-hyperion` untuk pergi ke direktori tempat kamu mengekstrak Hyperion.
- `ls` untuk melihat isi direktori. isinya seharusnya adalah `Fasm  Makefile  Src  license.txt  readme.txt`
- Terdapat file Makefile. Dengan tetap dalam direktori Hyperion, jalankan file makefile tersebut dengan perintah `sudo make`.
- Jika terdapat error berikut :
```
gcc -std=c99 -Wall -pedantic -O2 -m32 -ISrc/Payloads/Aes/c   -c -o Src/Crypter/pe64.o Src/Crypter/pe64.c
In file included from Src/Crypter/pe64.c:1:
Src/Crypter/hyperion.h:4:10: fatal error: windows.h: No such file or directory
    4 | #include <windows.h>
      |          ^~~~~~~~~~~
compilation terminated.
make: *** [<builtin>: Src/Crypter/pe64.o] Error 1
```
- Buka file Makefile dengan code editor kamu.
- File Makefile tersebut berisi sebagai berikut:
{% highlight c linenos %}
CC = gcc
AES_INCLUDE_DIR = Src/Payloads/Aes/c
CFLAGS = -std=c99 -Wall -pedantic -O2 -m32 -I$(AES_INCLUDE_DIR)
SRC = $(wildcard Src/Crypter/*.c) $(wildcard Src/Payloads/Aes/c/*.c)
OBJ = $(SRC:.c=.o)
EXECUTABLE=hyperion.exe
 
all: hyperion
 
hyperion: $(OBJ)
	$(CC) $(CFLAGS) -o $(EXECUTABLE) $^
{% endhighlight %}

- Perhatikan `CC = gcc` menerangkan bahwa CC (C-Compiler) yang digunakan adalah `gcc`, kita ubah `gcc` menjadi `i686-w64-mingw32-gcc` sehingga file Makefile menjadi seperti di bawah dan simpan.

{% highlight c linenos %}
CC = i686-w64-mingw32-gcc
AES_INCLUDE_DIR = Src/Payloads/Aes/c
CFLAGS = -std=c99 -Wall -pedantic -O2 -m32 -I$(AES_INCLUDE_DIR)
SRC = $(wildcard Src/Crypter/*.c) $(wildcard Src/Payloads/Aes/c/*.c)
OBJ = $(SRC:.c=.o)
EXECUTABLE=hyperion.exe
 
all: hyperion
 
hyperion: $(OBJ)
	$(CC) $(CFLAGS) -o $(EXECUTABLE) $^
{% endhighlight %}



- Jalankan kembali `sudo make` dan sekarang harusnya sudah ada file hyperion.exe pada direktori Hyperion kamu.


## Penutup

Akhir kata, semoga bermanfaat dan gunakan Hyperion dengan sebaik-baiknya. 
