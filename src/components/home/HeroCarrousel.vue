<template>
    <div class="lg:mt-10 w-full">
        <ClientOnly>
            <Carousel class="bg-transparent" paginationActiveColor="#1F9ED3" paginationColor="#9ee2fe" :paginationSize="10" easing="ease" :scrollPerPage="true" :perPageCustom="[[320, 1],[768, 1], [1024, 1]]">
                <Slide v-for="(img, i) in images" :key="i">
                    <div class="w-full h-full">
                        <g-image class="h-full w-full object-cover" :src="require(`!!assets-loader!@images/imgs/${img}`)" :alt="img" />
                    </div>
                </Slide>
            </Carousel>
        </ClientOnly>
    </div>
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