<template>
    <div>
        <nuxt-layout :name="layout">
            <div class="max-w-md mx-auto h-lvh flex flex-col bg-abu5">
                <div class="w-full flex flex-col">
                    <div class="w-full flex justify-between px-6 py-4 bg-biru1">
                        <div class="w-8/12 flex flex-col">
                            <span class="text-19 text-white font-semibold">Profile</span>
                        </div>
                    </div>
                </div>
                <div class="w-full flex flex-col">
                    <div class="px-4 pt-4 flex w-full items-center justify-center space-x-2">
                        <div class="w-10 h-10 flex flex-col items-center justify-center">
                            <img class="w-10 my-auto items-center rounded-full" src="/public/Avatar.png"/>
                        </div>
                        <div class="w-full flex flex-col -space-y-1">
                            <p class="text-14 font-medium">Soefyan Syah</p>
                            <p class="text-12 font-light">soefyan.syah@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div class="w-full flex px-4 pt-6 text-16 font-semibold">Menu</div>
                <div class="w-full flex px-4 pt-2">
                    <div class="bg-white w-full flex flex-col rounded-xl">
                        <div class="w-full flex h-12 border-b items-center justify-between p-4">
                            <div class="flex space-x-2 items-center">
                                <div class="justify-center flex flex-col items-center">
                                    <img src="/public/icon/config-user.svg"/>
                                </div>
                                <div class="flex items-center">Pengaturan Akun</div>
                            </div>
                            <div>
                                <img src="/public/icon/chevron-right.svg"/>
                            </div>
                        </div>
                        <div class="w-full flex h-12 border-b items-center justify-between p-4">
                            <div class="flex space-x-2 items-center">
                                <div class="justify-center flex flex-col items-center">
                                    <img src="/public/icon/lock1.svg"/>
                                </div>
                                <div class="flex items-center">Ubah Kata Sandi</div>
                            </div>
                            <div>
                                <img src="/public/icon/chevron-right.svg"/>
                            </div>
                        </div>
                        <div class="w-full flex h-12 border-b items-center justify-between p-4">
                            <div class="flex space-x-2 items-center">
                                <div class="justify-center flex flex-col items-center">
                                    <img src="/public/icon/reward.svg"/>
                                </div>
                                <div class="flex items-center">Reward Poin</div>
                            </div>
                            <div>
                                <img src="/public/icon/chevron-right.svg"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full flex px-4 pt-6 text-16 font-semibold">Info</div>
                <div class="w-full flex px-4 pt-2">
                    <div class="bg-white w-full flex flex-col rounded-xl">
                        <div class="w-full flex h-12 border-b items-center justify-between p-4">
                            <div class="flex space-x-2 items-center">
                                <div class="justify-center flex flex-col items-center">
                                    <img src="/public/icon/bantuan.svg"/>
                                </div>
                                <div class="flex items-center">Bantuan</div>
                            </div>
                            <div>
                                <img src="/public/icon/chevron-right.svg"/>
                            </div>
                        </div>
                        <div class="w-full flex h-12 border-b items-center justify-between p-4">
                            <div class="flex space-x-2 items-center">
                                <div class="justify-center flex flex-col items-center">
                                    <img src="/public/icon/syarat.svg"/>
                                </div>
                                <div class="flex items-center">Syarat & Ketentuan</div>
                            </div>
                            <div>
                                <img src="/public/icon/chevron-right.svg"/>
                            </div>
                        </div>
                        <div class="w-full flex h-12 border-b items-center justify-between p-4">
                            <div class="flex space-x-2 items-center">
                                <div class="justify-center flex flex-col items-center">
                                    <img src="/public/icon/kebijakan.svg"/>
                                </div>
                                <div class="flex items-center">Kebijakan Privasi</div>
                            </div>
                            <div>
                                <img src="/public/icon/chevron-right.svg"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col w-full space-y-1 items-center pt-8 px-4">
                    <div class="h-12 w-full uppercase bg-gold1 rounded-lg flex items-center text-white text-16 justify-center text-center p-1 shadow-md" >
                        Keluar
                    </div>
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