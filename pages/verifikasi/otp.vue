<template>
    <div class="w-full h-screen ">
		<div class="max-w-md h-full flex flex-col mx-auto">
            <div class="w-full flex pt-10 px-4">
                <div class="w-full flex flex-col items-center justify-center">
					<div class="flex w-full justify-center text-23 font-bold tracking-wide">Verifikasi</div>
					<div class="flex w-full justify-center items-center text-center text-15 font-light">Kode OTP telah kami kirimkan ke</div>
					<div class="flex w-full justify-center items-center text-center text-15 font-light">0852******83</div>
				</div>
            </div>
            <div class="px-4 pt-4 flex w-full relative">
                <div class="w-full flex flex-col space-y-2 font-semibold">
                    <div class=" flex flex-col space-y-1">
                        <div class="flex flex-col ">
                            <div class="text-xs font-poppins text-red-500">{{ msg }}</div>
                            <div class="flex justify-center space-x-2 mt-4">
                                <input v-model="pin1" type="password" pattern="[0-9]*" inputmode="numeric" maxlength="1" ref="InputPIN1" class="w-10 h-10 flex text-center border border-gray-400 bg-abu6 rounded-md focus:outline-none focus:ring-0 focus:ring-offset-0 ring-0" />
                                <input v-model="pin2" type="password" pattern="[0-9]*" inputmode="numeric" maxlength="1" ref="InputPIN2" class="w-10 h-10 flex text-center border border-gray-400 bg-abu6 rounded-md focus:outline-none focus:ring-0 focus:ring-offset-0 ring-0" />
                                <input v-model="pin3" type="password" pattern="[0-9]*" inputmode="numeric" maxlength="1" ref="InputPIN3" class="w-10 h-10 flex text-center border border-gray-400 bg-abu6 rounded-md focus:outline-none focus:ring-0 focus:ring-offset-0 ring-0" />
                                <input v-model="pin4" type="password" pattern="[0-9]*" inputmode="numeric" maxlength="1" ref="InputPIN4" class="w-10 h-10 flex text-center border border-gray-400 bg-abu6 rounded-md focus:outline-none focus:ring-0 focus:ring-offset-0 ring-0" />
                                <input v-model="pin5" type="password" pattern="[0-9]*" inputmode="numeric" maxlength="1" ref="InputPIN5" class="w-10 h-10 flex text-center border border-gray-400 bg-abu6 rounded-md focus:outline-none focus:ring-0 focus:ring-offset-0 ring-0" />
                                <input v-model="pin6" type="password" pattern="[0-9]*" inputmode="numeric" maxlength="1" ref="InputPIN5" class="w-10 h-10 flex text-center border border-gray-400 bg-abu6 rounded-md focus:outline-none focus:ring-0 focus:ring-offset-0 ring-0" />
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex pt-4 justify-center text-12 font-normal space-x-2">Tidak mendapatkan kode ?&nbsp<strong class="text-biru1">Kirim Ulang</strong></div>
                    <div class="pt-4 w-full flex">
						<NuxtLink to="/apps/" class="h-10 w-full flex items-center font-medium justify-center rounded-lg bg-biru1 text-white">MASUK</NuxtLink>
					</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    let pin1 = ref('')
    let pin2 = ref('')
    let pin3 = ref('')
    let pin4 = ref('')
    let pin5 = ref('')
    let pin6 = ref('')
    //
    const InputPIN1 = ref(null)
	const InputPIN2 = ref(null)
	const InputPIN3 = ref(null)
	const InputPIN4 = ref(null)
	const InputPIN5 = ref(null)
	const InputPIN6 = ref(null)
    let msg = ref('')
</script>
<style scoped>
    input {
		@apply ring-offset-0 ring-0
	}
</style>