<template>
    <div class="bottom-0 fixed w-full flex-col h-[64px] items-start">
        <div class="h-full w-full bg-biru1 flex justify-between p-2 px-20">
            <NuxtLink to="/apps/" class="flex flex-col space-y-1 items-center">
                <div class="h-[32px] w-[32px] bg-abu5 rounded-lg flex justify-center p-1 shadow-md" :class="{' bg-gold3':beranda==route['path']}">
                    <IconHome class="text-biru1"/>
                </div>
                <span class="text-12 font-normal text-abu5">Beranda</span>
            </NuxtLink>
            <NuxtLink to="/apps/riwayat" class="flex flex-col space-y-1 items-center">
                <div class="h-[32px] w-[32px] bg-abu5 rounded-lg flex justify-center p-1 shadow-md" :class="{' bg-gold3':riwayat==route['path']}">
                    <IconRiwayat class="text-biru1"/>
                </div>
                <span class="text-12 font-normal text-abu5">Riwayat</span>
            </NuxtLink>
            <NuxtLink to="/apps/profile" class="flex flex-col space-y-1 items-center">
                <div class="h-[32px] w-[32px] bg-abu5 rounded-lg flex justify-center p-1 shadow-md" :class="{' bg-gold3':profile==route['path']}">
                    <IconProfile class="text-biru1"/>
                </div>
                <span class="text-12 font-normal text-abu5">Profile</span>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
    const config = useRuntimeConfig();
	const router = useRouter();
	const route = useRoute()
	let beranda = '/apps/'
	let riwayat = '/apps/riwayat'
	let profile = '/apps/profile'
    console.log(route['path'])
    // console.log(route['name'])
    // async()=>{
	// 	console.log(val)
	// 	var re = val.replace(/\./g, "");
	// 	return formJumlahDepo.value = re
	// }
    // console.log(router)
</script>

<style>

</style>
