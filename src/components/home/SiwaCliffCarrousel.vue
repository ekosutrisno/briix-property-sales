<template>
    <!-- Carrousel Fake Image -->
    <div class="lg:mt-[150px] w-full">
        <ClientOnly>
            <Carousel class="bg-transparent" paginationActiveColor="#1F9ED3" paginationColor="#9ee2fe" :paginationSize="10" easing="ease" :scrollPerPage="false" :perPageCustom="[[320, 1], [1024, 2]]">
                <Slide class="mx-2" v-for="i in images" :key="i.id">
                    <div class="w-full h-52 lg:h-[596px] lg:w-[850px] rounded-lg overflow-hidden shadow-custom">
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