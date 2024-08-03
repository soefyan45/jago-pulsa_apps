<template>
    <div>
        <nuxt-layout :name="layout" class="bg-red-800">
            <div class="w-full flex flex-col">
                <div class="w-full flex justify-between px-6 py-4 bg-biru1">
                    <div class="w-8/12 flex flex-col">
                        <span class="text-19 text-white font-semibold">Profile</span>
                    </div>
                </div>
            </div>
            <BottomMenu/>
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