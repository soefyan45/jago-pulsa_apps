<template>
    <div>
        <nuxt-layout :name="layout">
            <div class="max-w-md mx-auto h-full flex">
                <div class="w-full flex flex-col">
                    <div class="w-full flex justify-between px-6 py-4 bg-biru1">
                        <div class="w-8/12 flex flex-col">
                            <span class="text-19 text-white font-semibold">Profile</span>
                        </div>
                    </div>
                    <!-- <div class="h-12 bg-white border-b shadow-md flex justify-between text-12 font-normal text-biru1">
                        <div class="w-6/12 flex items-center justify-center space-x-2">
                            <IconSortAmountDown/>
                            <span>Urutkan</span>
                        </div>
                        <div class="w-6/12 flex items-center justify-center space-x-2">
                            <IconFilter/>
                            <span>Filter</span>
                        </div>
                    </div> -->
                </div>
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