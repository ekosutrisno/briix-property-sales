<template>
    <section class="min-h-screen lg:min-h-[918px] h-full relative w-full">
        <!-- Image and Overlay -->
        <g-image class="h-full w-full object-cover absolute inset-0" src="@/assets/images/imgs/hero_master.jpg" alt="hero-master-img"/>
        <div class="absolute mx-auto w-full h-full inset-0 lg:min-h-[918px] bg-gradient-to-b from-black/75 to-black/25">

        <div class="flex h-full min-h-screen lg:min-h-[918px] flex-col justify-between briix-container">
            <Header/>
            <div class="flex-1">
                <div class="grid lg:grid-cols-3 mt-[30vh] lg:mt-[300px]">
                    <div class="text-white w-full lg:col-span-2">
                        <h1 class="mt-20 lg:mt-0 text-3xl lg:text-[40px] font-medium leading-[40px] lg:leading-[60px] tracking-[0.02em]">Unique <span class="text-briix-blue-3">Investment Opportunity</span> <br class="hidden lg:block"> in Lombok Island</h1>
                        <button type="button" class="rounded-full mt-[30px] py-2 px-4 lg:px-10 border-2 text-[20px] hover:border-transparent hover:bg-briix-blue-1 hover:text-briix-primary transition-colors">Discover More</button>
                    </div>
                    <div class="lg:col-span-1 hidden animate-pulse lg:flex flex-col items-center justify-start lg:mt-10">
                        <svg width="110" height="110" class="hover:scale-110 transition-transform" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="55" cy="55" r="55" fill="white" fill-opacity="0.6"/>
                            <path d="M38.4004 28.6V81.4L82.4004 55L38.4004 28.6Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        </div>

    </section>
</template>

<script>
import Header from './Header.vue';
export default {
    components: { Header }
}
</script>