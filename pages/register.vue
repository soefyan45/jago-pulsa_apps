<template>
    <div class="w-full h-screen ">
		<div class="max-w-md h-full flex flex-col mx-auto bg-white">
            <div class="pt-10 px-4">
                <div class="w-full flex flex-col items-center">
					<div class="text-23 font-bold tracking-wide">Daftar</div>
					<div class="text-15 font-light">Silahkan mendaftarkan akun anda disini</div>
				</div>
            </div>
            <div class="px-4 pt-4">
                <div class="w-full flex flex-col space-y-2 font-semibold">
                    <div class="w-full flex flex-col space-y-1">
                        <label class="px-1 text-15">Nama Usaha Kamu</label>
                        <input v-model="namaUsaha" class="h-10 w-full flex rounded-lg border-biru1 bg-abu6 px-2 text-15 font-light" placeholder="Sahabat Ponsel"/>
                    </div>
                    <div class="w-full flex flex-col space-y-1">
                        <label class="px-1 text-15">Nama Pemilik Usaha</label>
                        <input v-model="namaPemilik" class="h-10 w-full flex rounded-lg border-biru1 bg-abu6 px-2 text-15 font-light" placeholder="Budi"/>
                    </div>
                    <div class="w-full flex flex-col space-y-1">
                        <label class="px-1 text-15">Alamat Usaha Kamu</label>
                        <input v-model="alamatUsaha" class="h-10 w-full flex rounded-lg border-biru1 bg-abu6 px-2 text-15 font-light" placeholder="Alamat Usaha"/>
                    </div>
                    <div class="w-full flex flex-col">
                        <label class="px-1 text-15">Pilih Provinsi</label>
                        <select v-model="prov" class="h-10 w-full flex rounded-lg border-biru1 bg-abu6 px-1 text-15 font-light">
                            <option value="" disabled selected>Pilih</option>
                            <option value="aceh">Aceh</option>
                            <option value="riau">Riau</option>
                        </select>
                    </div>
                    <div class="w-full flex flex-col">
                        <label class="px-1 text-15">Pilih Kabupaten/Kota</label>
                        <select v-model="kabKota" class="h-10 w-full flex rounded-lg border-biru1 bg-abu6 px-1 text-15 font-light">
                            <option value="">Pilih</option>
                            <option value="pekanbaru">Pekanbaru</option>
                            <option value="dumai">Dumai</option>
                        </select>
                    </div>
                    <div class="w-full flex flex-col">
                        <label class="px-1 text-15">Pilih Kecamatan</label>
                        <select v-model="kecamatan" class="h-10 w-full flex rounded-lg border-biru1 bg-abu6 px-1 text-15 font-light">
                            <option value="">Pilih</option>
                            <option value="pekanbaru">Bangkinang</option>
                            <option value="dumai">Kampar</option>
                        </select>
                    </div>
                    <div class="w-full flex flex-col">
                        <label class="px-1 text-15">Kode Referal</label>
                        <input v-model="referal" class="h-10 w-full flex rounded-lg border-biru1 bg-abu6 px-2 text-15 font-light" placeholder="Isi Jika Ada"/>
                    </div>
                    <div class="w-full flex flex-col">
                        <label class="px-1 text-15">Kode Transaksi</label>
                        <input v-model="kodeTransaksi" class="h-10 w-full flex rounded-lg border-biru1 bg-abu6 px-2 text-15 font-light" placeholder="Minimal 4 Angka"/>
                    </div>
                    <div class="w-full hidden">
                        <label class="px-1 text-15">Koordinat</label>
                        <input v-model="koordinat" class="h-10 w-full flex rounded-lg border-biru1 bg-abu6 px-2 text-15 font-light" placeholder="Minimal 4 Angka"/>
                    </div>
                    <div class="flex flex-col">
                        <p class="text-xxs text-red-400">{{ errors }}</p>
                    </div>
                    <div class="w-full flex flex-col items-start justify-start pt-2 space-y-2">
                        <div class="flex my-auto items-center space-x-2 justify-start">
                            <input v-model="syaratApprove" id="disabled-checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600">
                            <label for="disabled-checked-checkbox" class="ms-2 text-xs font-medium text-blue-500">Syarat dan Ketentuan 1</label>
                        </div>
                        <div class="flex my-auto items-center space-x-2 justify-start">
                            <input v-model="privacyApprove" id="disabled-checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600">
                            <label for="disabled-checked-checkbox" class="ms-2 text-xs font-medium text-blue-500">Privacy Policy</label>
                        </div>
                    </div>
                    <div class="w-full flex justify-center">
                        <div v-if="!loadingSubmit" @click="register()" class="bg-biru2 py-1 px-5 uppercase text-white font-medium rounded-lg">daftar</div>
                        <div v-if="loadingSubmit" class="bg-biru3 py-1 px-5 lowercase text-abu5 font-light rounded-lg"><p class="animate-pulse">loading</p></div>
                    </div>
                    <div class="w-full flex flex-col  pt-2 items-center font-normal text-13 pb-2">
                        <p class="w-10/12 text-center text-xs font-thin text-pretty whitespace-normal">
                            Menekan tombol daftar berarti kamu telah menyetujui <b class="text-blue-400">Syarat, Ketentuan</b> dan <b class="text-blue-400">Privacy Policy </b> <b>Planet Ecosystech Indonesia</b>
                        </p>
                    </div>
                    <div class="w-full flex flex-col  pt-2 items-center font-normal text-13 pb-2">
                        <p class="w-10/12 text-center text-xs font-thin text-pretty whitespace-normal">
                            Sudah punya akun? <strong>Masuk</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    let namaUsaha = ref('')
    let namaPemilik = ref('')
    let alamatUsaha = ref('')
    let prov = ref('')
    let kabKota = ref('')
    let kecamatan = ref('')
    let referal = ref('')
    let kodeTransaksi = ref('')
    let koordinat = ref('')
    let syaratApprove = ref(false)
    let privacyApprove = ref(false)
    let errors = ref('')
    let loadingSubmit = ref(false)
</script>
<style scoped>
</style>