<template>
    <div class="w-full h-screen">
        <div class="max-w-md h-full flex flex-col justify-center items-center">
            <div class="w-full flex flex-col items-center">
                <IconBigSuccess class=""/>
                <span class="text-23 font-medium pt-2">Berhasil</span>
                <div class="w-full flex items-center justify-center text-center pt-1 text-14 font-normal">
                    Selamat datang, Happy transaksi
                </div>
            </div>
            
        </div>
    </div>
</template>
<script setup>
// import { onMounted } from 'vue';
// import { useRouter } from 'vue-router';
const config = useRuntimeConfig();
const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push('/apps');
  }, 5000);
});
</script>
<style scoped>
</style>