<template>
    <!-- Carrousel Fake Image -->
    <div class="min-h-screen h-full">
        <ClientOnly>
            <Carousel 
                :autoplay="true"  
                :speed="1000"
                :paginationEnabled="false"
                easing="ease" 
                :autoplayHoverPause="true"
                :autoplayTimeout="7000"
                :scrollPerPage="true" 
                :perPage="1"
                :loop="true"
            >
                <Slide v-for="i in images" :key="i.id">
                    <div class="min-h-screen lg:max-h-screen h-full w-full overflow-hidden shadow-custom">
                        <g-image class="w-full h-full object-cover" :src="require(`!!assets-loader!@images/${i.url}`)" />
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
    data: () => ({
        images: [
            {
                id: 'f353026e-d32b-4820-9f7d-a71fb2d1ae3f',
                url: 'imgs/hero_villa_k_master.jpg'
            },
            {
                id: 'b73ad0cb-8d3f-4964-9bcd-95541626b50a',
                url: 'SIWA_DRONE_01.jpg'
            },
            {
                id: '5191b8ef-5019-4891-ac96-0ff9216f7c41',
                url: 'SIWA_DRONE_02.jpg'
            },
            {
                id: '768a5cbd-a8bc-4345-9fc3-e26002b85428',
                url: 'SIWA_DRONE_03.jpg'
            },
            {
                id: 'afd150e7-25f5-4059-b20b-f6bf760d5b80',
                url: 'SIWA_DRONE_04.jpg'
            },
            {
                id: '1ba29d2d-138a-4098-bf85-614357dcdcf0',
                url: 'SIWA_DRONE_05.jpg'
            },
            {
                id: 'b8528c46-446e-49f1-a378-dec27288ffec',
                url: 'SIWA_DRONE_06.jpg'
            },
            {
                id: 'ddba518d-28be-40f9-a41b-74858aa6de31',
                url: 'SIWA_DRONE_07.jpg'
            },
            {
                id: 'd6c97dd9-c05f-4f69-8b86-9c759a16ff44',
                url: 'SIWA_DRONE_08.jpg'
            },
        ]
    })
}
</script>