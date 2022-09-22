<template>
        <ClientOnly>
            <Carousel easing="ease" :speed="1000" :paginationEnabled="false" :scrollPerPage="true" :perPage="1">
                <Slide v-for="(img, i) in images" :key="i">
                    <div class="w-full h-full">
                        <g-image class="h-full w-full object-cover" :src="require(`!!assets-loader!@images/${img}`)" :alt="img" />
                    </div>
                </Slide>
            </Carousel>
        </ClientOnly>
    
</template>

<script>
export default {
    components: {
        Carousel: () =>
            import('vue-carousel')
                .then(m => m.Carousel)
                .catch(),
        Slide: () =>
            import('vue-carousel')
                .then(m => m.Slide)
                .catch()
    },
    props:['images']
}
</script>