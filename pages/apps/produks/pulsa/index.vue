<template>
    <nuxt-layout :name="layout">
		<div class="max-w-md mx-auto h-lvh">
			<div class="w-full flex flex-col bg-biru1">
                <div class="w-full flex justify-between px-4 py-4">
                    <div class="w-full flex items-center space-x-2">
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
            <div class="w-full flex flex-col px-4 pt-2">
                <div class="text-18 font-medium tracking-wider">Telkomsel</div>
                <div class="grid grid-cols-2 gap-2">
                    <div v-for="l in 30" class="h-20 w-full rounded-lg bg-biru1">01</div>
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