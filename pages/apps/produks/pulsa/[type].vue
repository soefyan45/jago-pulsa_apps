<template>
    <nuxt-layout :name="layout">
		<div class="max-w-md mx-auto h-lvh bg-abu5 relative">
			<div class="w-full flex flex-col bg-biru1 fixed top-0">
                <div class="w-full flex justify-between px-4 py-4">
                    <div class="w-full flex items-center space-x-3">
                        <IconArrowBack/>
                        <span class="text-19 text-white font-semibold">Pulsa</span>
                    </div>
                </div>
                <div class="w-full flex px-4 py-4">
                    <div class="w-full flex flex-col px-4 py-4 bg-white mb-2 space-y-2 rounded-xl">
                        <span class="text-12 font-medium tracking-wide px-2">Masuk Nomor HP</span>
                        <div class="w-full flex space-x-2">
                            <div class="w-full rounded-2xl overflow-auto flex h-10 border-2 border-x-inherit mx-auto bg-gray-100 text-sm">
                                <div class="h-full flex flex-col justify-center items-center p-2 bg-white z-20 rounded-l-[5px]">
                                    <IconOperatorTelkomsel/>
                                </div>
                                <input type="text" pattern="[0-9]*" v-model="nomorTujuan" class="w-full h-full z-10 overflow-auto rounded-r-[5px] relative px-2 focus:outline-none focus:ring-0 focus:ring-offset-0" placeholder="Nomor Telepon"/>
                            </div>
                            <div class="flex flex-col items-end justify-center">
                                <IconContact/>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
            <div class="w-full flex flex-col px-4 pt-56 -pt-2">
                <div class="text-18 font-medium tracking-wider">Telkomsel</div>
                <div class="grid grid-cols-2 gap-2 pt-2 pb-10">
                    <div v-for="l in 30" class="w-full flex flex-col p-2 rounded-lg bg-white">
                        <div class="font-semibold pb-3 text-12">Telkomsel</div>
                        <div class="font-light tracking-wide text-12">Harga</div>
                        <div class="font-bold text-13">Rp6.000</div>
                    </div>
                </div>
            </div>
        </div>
    </nuxt-layout>
</template>
<script setup>
    let layout = ref('mobile-unauthorize')
	definePageMeta({
		middleware: [
			'un-auth',
		],
	});
    let nomorTujuan = ref('085271995583')
</script>
<style scoped>
</style>