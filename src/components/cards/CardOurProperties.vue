<template>
    <div class="lg:min-h-[300px] relative lg:p-4 lg:rounded-xl overflow-hidden lg:hover:scale-125 transition-all lg:cursor-pointer">
        <g-image class="object-cover w-full h-full rounded-xl" :src="`/prop/${data.bgImg}`" :alt="data.bgImg"/>
        <div class="absolute inset-0 lg:inset-4 flex flex-col items-center justify-center rounded-xl bg-gradient-to-t from-black/20 to-black/5">
            <g-image :src="`/prop/${data.logo}`" :alt="data.logo"/>
            <g-image v-show="data.subLogo" :src="`/prop/${data.subLogo}`" :alt="data.subLogo"/>
            <p v-if="data.soon" class="text-white/70 mt-8   font-bold">Comming Soon</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            data: {
                type: Object
            }
        }
    }
</script>