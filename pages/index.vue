<template>
    <div>
		<nuxt-layout :name="layout">
			<div class="w-full h-screen flex flex-col">
				<div class="w-full flex justify-between px-6 py-4 bg-biru1">
					<div class="w-8/12 flex flex-col">
						<span class="text-12 text-white font-normal">Selamat Datang,</span>
						<span class="text-19 text-white font-medium tracking-0-15">Soefyan Syah</span>
					</div>
					<div class="w-4/12 flex flex-col items-end">
						<div class="flex flex-col items-center justify-center">
							<icon-jago-logo class="flex flex-col mx-auto h-12 w-12 items-center justify-center"/>
						</div>
					</div>
				</div>
				<div class="h-48 bg-biru1 flex flex-col rounded-b-2xl">
					<div class="bg-white flex rounded-xl p-2 mx-6 mt-2 justify-center">
						<div  class="grid grid-cols-4 gap-y-8 gap-x-6 px-2 py-4 items-center justify-center text-xxs font-medium">
							<div class="flex flex-col items-center">
								<img src="/public/icon/mobile.svg"/>
								<div class="flex text-black font-normal pt-1 text-12">Pulsa</div>
							</div>
							<div class="flex flex-col items-center">
								<img src="/public/icon/mobile.svg"/>
								<div class="flex text-black font-normal pt-1 text-12">Data</div>
							</div>
							<div class="flex flex-col items-center">
								<img src="/public/icon/mobile.svg"/>
								<div class="flex text-black font-normal pt-1 text-12">Telp&SMS</div>
							</div>
							<div class="flex flex-col items-center">
								<img src="/public/icon/bolt.svg"/>
								<div class="flex text-black font-normal pt-1 text-12">Token PLN</div>
							</div>
							<div class="flex flex-col items-center">
								<img src="/public/icon/gamepad.svg"/>
								<div class="flex text-black font-normal pt-1 text-12">Game</div>
							</div>
							<div class="flex flex-col items-center">
								<img src="/public/icon/digital.svg"/>
								<div class="flex text-black font-normal pt-1 text-12">Digital</div>
							</div>
							<div class="flex flex-col items-center">
								<img src="/public/icon/wallet.svg"/>
								<div class="flex text-black font-normal pt-1 text-12">e-Money</div>
							</div>
							<div class="flex flex-col items-center">
								<img src="/public/icon/th-large.svg"/>
								<div class="flex text-black font-normal pt-1 text-12">Lainya</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-col w-full pt-20 px-4">
					<div class="w-full flex font-semibold text-15">Belanja Makin Hemat !!!</div>
				</div>
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

<style>

</style>