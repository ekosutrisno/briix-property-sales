<template>
    <div class="min-h-[602px] border transition border-briix-blue-1 bg-white hover:shadow-custom-c1 rounded-[20px] pb-1 lg:pb-0">
        <div class="rounded-[20px] lg:h-[343px] overflow-hidden">
            <g-image class="h-full w-full object-cover transition lg:hover:scale-110" :src="require(`!!assets-loader!@images/villa/${villa.img}`)" :alt="villa.img"/>
        </div>

        <div class="lg:p-8 p-4">
             <div class="flex flex-col lg:flex-row lg:items-center justify-between">
                <p :class="[villa.price ? 'lg:text-[32px]' : 'lg:text-[28px]']" class="text-2xl leading-[50px] font-medium"> {{villa.name}} </p>
                <p v-if="villa.price" class="text-xl lg:text-2xl lg:leading-[33px] font-medium text-briix-primary">IDR {{ villa.price }}</p>
            </div>

            <div class="inline-flex items-start lg:space-x-2 mt-[13px]">
                <svg width="25" height="25" class="hidden lg:block text-briix-primary" viewBox="0 0 25 25"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M7.41093 6.40787C8.6344 5.1844 10.2938 4.49707 12.024 4.49707C13.7542 4.49707 15.4136 5.1844 16.6371 6.40787C17.8605 7.63133 18.5479 9.2907 18.5479 11.0209C18.5479 12.7512 17.8605 14.4105 16.6371 15.634L12.024 20.2471L7.41093 15.634C6.8051 15.0282 6.32452 14.309 5.99664 13.5175C5.66876 12.726 5.5 11.8777 5.5 11.0209C5.5 10.1642 5.66876 9.31585 5.99664 8.52433C6.32452 7.73282 6.8051 7.01364 7.41093 6.40787ZM12.024 12.8848C12.5183 12.8848 12.9924 12.6884 13.342 12.3389C13.6915 11.9893 13.8879 11.5153 13.8879 11.0209C13.8879 10.5266 13.6915 10.0525 13.342 9.70298C12.9924 9.35344 12.5183 9.15707 12.024 9.15707C11.5297 9.15707 11.0556 9.35344 10.706 9.70298C10.3565 10.0525 10.1601 10.5266 10.1601 11.0209C10.1601 11.5153 10.3565 11.9893 10.706 12.3389C11.0556 12.6884 11.5297 12.8848 12.024 12.8848Z"
                        fill="currentColor" />
                </svg>
                <p class="font-normal text-briix-body"> {{ villa.address }} </p>
            </div>

            <div class="flex flex-col lg:flex-row lg:items-center justify-between mt-4 -ml-2 lg:-ml-0">
                    <div class="flex ml-2 lg:ml-1 items-center space-x-3">
                        <g-image :src="`/icons/villa-sm.svg`" alt="vill-1" class="mb-2 lg:mb-1 mr-2 lg:mr-0"/>
                        <p class="leading-[22px] text-briix-grey-7 font-medium">{{villa.area}} m2</p>
                    </div>
                    <div class="flex   items-center space-x-3">
                        <g-image width="42" height="42"  :src="`/icons/bed.svg`" alt="bed-1"/>
                        <p class="leading-[22px] text-briix-grey-7 font-medium">{{villa.bed}} Bedrooms</p>
                    </div>
                    <div class="flex   items-center space-x-3">
                        <g-image width="42" height="42"  :src="`/icons/bath.svg`" alt="bed-1"/>
                        <p class="leading-[22px] text-briix-grey-7 font-medium">{{villa.bath}} Bathrooms</p>
                    </div>
            </div>

            <div class="mt-[22px] pt-[22px] border-t flex items-center justify-between border-[#C7E7F4]">
                <g-link :to="`/detail?id=${villa.id}&group=${villa.villaGroup}`" class="rounded-full border-2 cursor-default lg:cursor-pointer hover:bg-briix-blue-1 transition text-briix-primary border-briix-primary py-3 px-6 lg:px-10 w-auto inline-flex items-center justify-center space-x-4">
                    <p>See Details</p>
                </g-link>
                <div class="inline-flex items-center space-x-2">
                    <button type="button" class="rounded-full cursor-default lg:cursor-pointer border-2 transition text-briix-primary hover:bg-briix-primary hover:text-white border-transparent hover:border-briix-primary p-2 w-auto inline-flex items-center justify-center space-x-4">
                        <svg width="31" height="31" viewBox="0 0 31 31" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3548 17.1745C11.6077 16.6698 11.75 16.1 11.75 15.4971C11.75 14.8941 11.6077 14.3244 11.3548 13.8197M11.3548 17.1745C10.7392 18.4034 9.46811 19.2471 8 19.2471C5.92893 19.2471 4.25 17.5681 4.25 15.4971C4.25 13.426 5.92893 11.7471 8 11.7471C9.46811 11.7471 10.7392 12.5907 11.3548 13.8197M11.3548 17.1745L19.6452 21.3197M11.3548 13.8197L19.6452 9.67449M19.6452 9.67449C20.2608 10.9034 21.5319 11.7471 23 11.7471C25.0711 11.7471 26.75 10.0681 26.75 7.99707C26.75 5.926 25.0711 4.24707 23 4.24707C20.9289 4.24707 19.25 5.926 19.25 7.99707C19.25 8.60003 19.3923 9.16976 19.6452 9.67449ZM19.6452 21.3197C19.3923 21.8244 19.25 22.3941 19.25 22.9971C19.25 25.0681 20.9289 26.7471 23 26.7471C25.0711 26.7471 26.75 25.0681 26.75 22.9971C26.75 20.926 25.0711 19.2471 23 19.2471C21.5319 19.2471 20.2608 20.0907 19.6452 21.3197Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span class="sr-only">Share</span>
                    </button>
                    <a href="https://web.whatsapp.com/" target="_blank" class="rounded-full cursor-default lg:cursor-pointer border-2 transition text-briix-primary hover:bg-briix-primary hover:text-white border-transparent hover:border-briix-primary p-2 w-auto inline-flex items-center justify-center space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span class="sr-only">Live Chat</span>
                    </a>
                </div>
                
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        villa:{
            type: Object,
            required: true
        }
    }
}
</script>