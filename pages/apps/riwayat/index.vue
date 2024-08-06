<template>
     <div>
        <nuxt-layout :name="layout">
        <div class="max-w-md mx-auto h-full relative">
            <div class="w-full flex flex-col">
                <div class="w-full flex justify-between px-6 py-4 bg-biru1">
                    <div class="w-8/12 flex flex-col">
                        <span class="text-19 text-white font-semibold">Riwayat Transaksi</span>
                    </div>
                </div>
                <div class="h-12 bg-white border-b shadow-md flex justify-between text-12 font-normal text-biru1">
                    <div class="w-6/12 flex items-center justify-center space-x-2">
                        <IconSortAmountDown/>
                        <span>Urutkan</span>
                    </div>
                    <div class="w-6/12 flex items-center justify-center space-x-2">
                        <IconFilter/>
                        <span>Filter</span>
                    </div>
                </div>
            </div>
            <div class="w-full flex pt-4 px-6">
                <div class="w-full flex flex-col pt-4 space-y-2">
                    <div v-for="i in 100" class="w-full flex bg-abu5 rounded-lg items-center p-2 space-x-4 justify-between">
                        <div class="flex space-x-2 items-center">
                            <div class="h-12 w-12 rounded-full items-center justify-center flex bg-gray-100">
                                <img class="object-cover" src="/public/icon/file-check-01.svg" />
                            </div>
                            <div class="flex flex-col -space-y-2">
                                <span class="font-medium text-16">Pulsa</span>
                                <span class="font-light text-12">Order Id : ****232</span>
                                <span class="font-light text-12">14 No 2024 . 06:30</span>
                            </div>
                        </div>
                        <div class="flex flex-col justify-center items-end">
                            <button class="border-2 border-green-500 rounded-xl px-0.5 text-12 font-medium bg-green-200 text-center">Success</button>
                            <span class="text-12 font-medium">Rp 25.000</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex w-full h-20"></div>
        </div>
        <div class="w-full fixed bottom-0">
            <BottomMenu/>
        </div>
        </nuxt-layout>
    </div>
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