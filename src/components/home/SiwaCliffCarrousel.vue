<template>
    <!-- Carrousel Fake Image -->
    <div class="lg:mt-[200px] w-full">
        <ClientOnly>
            <Carousel class="bg-transparent" paginationActiveColor="#1F9ED3" paginationColor="#9ee2fe" :paginationSize="10" easing="ease" :scrollPerPage="false" :perPageCustom="[[320, 1], [1024, 2]]">
                <Slide class="mx-2">
                    <div class="w-full h-52 lg:h-[596px] lg:w-[850px] rounded-lg overflow-hidden shadow-custom">
                        <g-image class="w-full h-full object-cover" src="@/assets/images/SIWA_DRONE_01.jpg" />
                    </div>
                </Slide>
                <Slide class="mx-2">
                    <div class="w-full h-52 lg:h-[596px] lg:w-[850px] rounded-lg overflow-hidden shadow-custom">
                        <g-image class="w-full h-full object-cover" src="@/assets/images/SIWA_DRONE_02.jpg" />
                    </div>
                </Slide>
                <Slide class="mx-2">
                    <div class="w-full h-52 lg:h-[596px] lg:w-[850px] rounded-lg overflow-hidden shadow-custom">
                        <g-image class="w-full h-full object-cover" src="@/assets/images/SIWA_DRONE_03.jpg" />
                    </div>
                </Slide>
                <Slide class="mx-2">
                    <div class="w-full h-52 lg:h-[596px] lg:w-[850px] rounded-lg overflow-hidden shadow-custom">
                        <g-image class="w-full h-full object-cover" src="@/assets/images/SIWA_DRONE_04.jpg" />
                    </div>
                </Slide>
                <Slide class="mx-2">
                    <div class="w-full h-52 lg:h-[596px] lg:w-[850px] rounded-lg overflow-hidden shadow-custom">
                        <g-image class="w-full h-full object-cover" src="@/assets/images/SIWA_DRONE_05.jpg" />
                    </div>
                </Slide>
                <Slide class="mx-2">
                    <div class="w-full h-52 lg:h-[596px] lg:w-[850px] rounded-lg overflow-hidden shadow-custom">
                        <g-image class="w-full h-full object-cover" src="@/assets/images/SIWA_DRONE_06.jpg" />
                    </div>
                </Slide>
                <Slide class="mx-2">
                    <div class="w-full h-52 lg:h-[596px] lg:w-[850px] rounded-lg overflow-hidden shadow-custom">
                        <g-image class="w-full h-full object-cover" src="@/assets/images/SIWA_DRONE_07.jpg" />
                    </div>
                </Slide>
                <Slide class="mx-2">
                    <div class="w-full h-52 lg:h-[596px] lg:w-[850px] rounded-lg overflow-hidden shadow-custom">
                        <g-image class="w-full h-full object-cover" src="@/assets/images/SIWA_DRONE_08.jpg" />
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
                url: '@/assets/images/SIWA_DRONE_01.jpg'
            },
            {
                id: '5191b8ef-5019-4891-ac96-0ff9216f7c41',
                url: '@/assets/images/SIWA_DRONE_01.jpg'
            },
            {
                id: '768a5cbd-a8bc-4345-9fc3-e26002b85428',
                url: '@/assets/images/SIWA_DRONE_01.jpg'
            },
            {
                id: '354e6e2e-7511-4e21-b77e-d4bf503e8f9c',
                url: '@/assets/images/SIWA_DRONE_01.jpg'
            },
        ]
    })
}
</script>