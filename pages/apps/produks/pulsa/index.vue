<template>
    <nuxt-layout :name="layout">
		<div class="max-w-md mx-auto h-lvh relative">
			<div class="w-full flex flex-col bg-biru1 fixed top-0">
                <div class="w-full flex justify-between px-4 py-4">
                    <div class="w-full flex items-center space-x-3">
                        <IconArrowBack/>
                        <span class="text-19 text-white font-semibold">Pulsa</span>
                    </div>
                </div>
                <!-- <div class="w-full flex px-4 py-4">
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
                </div>                 -->
            </div>
            <!-- <div class="w-full flex flex-col pt-[calc(100%-1rem)]"></div> -->

            <div class="w-full flex flex-col px-4 pt-20">
                <!-- <div class="text-18 font-medium tracking-wider">Telkomsel</div> -->
                <div class="grid grid-cols-1 gap-2">
                    <NuxtLink v-for="l in 30" to="/apps/produks/pulsa/promo" class="w-full flex space-x-3 px-4 py-2 items-center rounded-lg shadow-lg bg-white">
                        <div class="h-12 w-12 bg-gold1 rounded-full flex flex-col items-center justify-center">
                            <!-- <img src="/public/icon/mobile.svg"/> -->
                            <IconJagoLogo class="h-8 w-8 text-white mx-auto items-center justify-center flex flex-coll"/>
                        </div>
                        <div class="text-14 font-light tracking-wide">Pulsa Promo</div>
                    </NuxtLink>
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
</script>
<style scoped>
</style>