<template>
	<div class="w-full h-screen ">
		<div class="max-w-md h-full flex flex-col mx-auto bg-white">
			<div class="w-full flex flex-col pt-28">
				<div class="w-full flex flex-col items-center">
					<div class="text-23 font-bold">Selamat Datang</div>
					<div class="text-15 font-normal">Silahkan masuk dengan akun anda</div>
				</div>
				<div class="flex flex-col px-4 pt-4">
					<div class="w-full flex flex-col space-y-1">
						<label class="font-medium text-16">Whatsapp</label>
						<input class="w-full h-10 rounded-lg px-3 py-1 text-15 bg-abu6"  placeholder="Masukan Nomor Whatsapp">
					</div>
					<div class="pt-4 w-full flex">
						<NuxtLink to="/apps/" class="h-10 w-full flex items-center font-medium justify-center rounded-lg bg-biru1 text-white">MASUK</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
</script>
<style scoped>
</style>