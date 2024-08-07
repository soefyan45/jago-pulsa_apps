<template>
    <div class="w-full h-screen">
        <div v-if="loading" class="h-screen w-full flex flex-col justify-center">
            <div class="text-biru1 items-center flex justify-center">Loading...</div>
        </div>
		<BordingSatu v-if="OnBordingActive==1 && !loading"/>
		<BordingDua v-if="OnBordingActive==2 && !loading"/>
		<BordingTiga v-if="OnBordingActive==3 && !loading"/>
        <div v-if="!loading" class="w-full fixed bottom-0 flex items-center">
			<div class="w-full items-start">
                <div class="h-full max-w-md mx-auto flex flex-col space-y-4 pb-10 p-2 px-20">
                    <div class="w-10/12 mx-auto h10 flex justify-between space-x-2">
                        <div class="h-1 w-3/12 bg-abu6 rounded-3xl"></div>
                        <div class="h-1 w-3/12 bg-gray-400 rounded-3xl"></div>
                        <div class="h-1 w-3/12 bg-gray-400 rounded-3xl"></div>
                    </div>
                    <div class="flex flex-col w-full space-y-1 items-center">
                        <div @click="NextStepBording()" class="h-10 w-full bg-biru1 rounded-lg flex items-center text-white text-16 justify-center text-center p-1 shadow-md" >
                            Selanjutnya
                        </div>
                    </div>
                    <div class="flex flex-col w-full space-y-1 items-center">
                        <div class="h-10 w-full bg-gold1 rounded-lg flex items-center text-white text-16 justify-center text-center p-1 shadow-md" >
                            Lewati
                        </div>
                    </div>
                </div>
            </div>
		</div>
    </div>
</template>
<script setup>
    const config = useRuntimeConfig();
    const router = useRouter();
    let OnBordingActive = ref(1)
    let OnBordingStatus = JSON.parse(localStorage.getItem("OnBordingStatus"));
    let loading = ref(true)
    console.log(OnBordingStatus)
    onMounted(() => {
        if(OnBordingStatus==3){
            return router.push('/apps/');
        }
        setTimeout(() => {
            loading.value = false
        }, 1000);
        
    });
    const NextStepBording=async()=>{
        if(OnBordingActive.value==3){
            localStorage.setItem("OnBordingStatus", OnBordingActive.value);
            return router.push('/apps/');
        }
        OnBordingActive.value +=1
    }


</script>
<style>

</style>