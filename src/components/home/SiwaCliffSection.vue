<template>
    <section class="border-t-2 border-t-briix-primary/20 mt-20 lg:mt-72 pb-20">
        <div class="-mt-14 font-semibold w-max py-4 px-8 rounded-xl mx-auto bg-white text-center leading-[72px] text-2xl lg:text-5xl">
            Siwa Cliff</div>

            <!-- Images Hero With Carrousel -->
            <HeroCarrousel :images="images"/>

        <!-- Masterplan -->
        <div class="relative mt-20 lg:mt-56">
            <div class="lg:absolute px-5 lg:px-0 text-right lg:right-[100px] top-0 lg:max-w-lg  ">
                <div class="inline-flex items-center space-x-5">
                    <div class="h-0.5 lg:mb-5 bg-briix-primary w-[100px]"></div>
                    <h1 class="lg:text-[40px] text-2xl lg:mb-[30px] font-semibold leading-[56px] text-right">The Master
                        Plan</h1>
                </div>
                <p class="lg:text-xl text-briix-body leading-relaxed lg:leading-[36px] tracking-[0.02em] text-right">The
                    SIWA Cliffs property marks a new dawn in luxury property development and management in South Lombok
                    with it's unique approach to sustainability through design, service and living.</p>
            </div>
            <g-image src="@/assets/images/imgs/master_plan.jpg" alt="master-plan" />
        </div>


        <!-- Carrousel Section-->
        <SiwaCliffCarrousel/>

        <!-- Facilities -->
        <div class="  briix-container mt-20 lg:mt-[170px]">
            <div>
                <div class="inline-flex items-center space-x-5">
                    <div class="h-0.5 bg-briix-primary w-[100px]"></div>
                    <h1 class="lg:text-[40px] text-2xl lg:mb-[5px] font-semibold leading-[56px] text-left">The
                        Facilities.</h1>
                </div>
                <p class="lg:text-xl leading-relaxed lg:leading-[30px] tracking-[0.02em] text-briix-body text-left">The
                    resort offers a club house, fitness center, spa and an area for business travelers to work and host
                    meetings.</p>
            </div>

            <div class="bg-white min-h-[351px] rounded-[15px] shadow-custom-c1 px-4 py-10 lg:mt-10 lg:p-[65px]">
                <div class="grid gap-4 lg:gap-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    <CardFacility v-for="fac in facilities" :key="fac.id" :facility="fac" />
                </div>
            </div>
        </div>

        <!-- Available Villas on the Market -->
        <div class="lg:mt-[170px] mt-20 px-5 lg:briix-container">
           
            <div class="inline-flex items-center space-x-5">
                <div class="h-0.5 bg-briix-primary w-[100px]"></div>
                <h1 class="lg:text-[40px] text-2xl font-semibold leading-[56px] text-left">Available Villas <span class="hidden lg:inline">on the Market</span></h1>
            </div>

            <!-- Card Available -->
            <div
                class="w-full overflow-hidden min-h-[488px] lg:mt-[100px] mt-5 grid lg:grid-cols-2 bg-white rounded-[15px] shadow-custom-c1">
                <div class="rounded-[15px] overflow-hidden lg:pr-10">
                    <g-image class="h-full w-full object-cover rounded-[15px]" src="@/assets/images/siwa_cliff_villa_k.jpg"
                        alt="available-img" />
                </div>
                <div class="lg:p-8 p-4 py-8">
                    <div class="flex flex-col lg:flex-row lg:items-center justify-between">
                        <p class="lg:text-4xl text-2xl leading-[50px] font-semibold">Villa K</p>
                        <p class="lg:text-2xl leading-[33px] font-medium text-briix-primary">IDR 23,640,750,000</p>
                    </div>

                    <div class="inline-flex items-start lg:space-x-2 mt-4">
                        <svg width="25" height="25" class="hidden lg:block" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.41093 6.40787C8.6344 5.1844 10.2938 4.49707 12.024 4.49707C13.7542 4.49707 15.4136 5.1844 16.6371 6.40787C17.8605 7.63133 18.5479 9.2907 18.5479 11.0209C18.5479 12.7512 17.8605 14.4105 16.6371 15.634L12.024 20.2471L7.41093 15.634C6.8051 15.0282 6.32452 14.309 5.99664 13.5175C5.66876 12.726 5.5 11.8777 5.5 11.0209C5.5 10.1642 5.66876 9.31585 5.99664 8.52433C6.32452 7.73282 6.8051 7.01364 7.41093 6.40787ZM12.024 12.8848C12.5183 12.8848 12.9924 12.6884 13.342 12.3389C13.6915 11.9893 13.8879 11.5153 13.8879 11.0209C13.8879 10.5266 13.6915 10.0525 13.342 9.70298C12.9924 9.35344 12.5183 9.15707 12.024 9.15707C11.5297 9.15707 11.0556 9.35344 10.706 9.70298C10.3565 10.0525 10.1601 10.5266 10.1601 11.0209C10.1601 11.5153 10.3565 11.9893 10.706 12.3389C11.0556 12.6884 11.5297 12.8848 12.024 12.8848Z" fill="#0C3F54"/>
                        </svg>
                        <p class="font-normal text-briix-body"> Prabu, Pujut, Central Lombok Regency, West Nusa Tenggara </p>
                    </div>

                    <!-- Facility -->
                    <div class="mt-4 grid lg:gap-3 lg:grid-cols-2 -ml-2 lg:-ml-0">
                        <div class="flex flex-row items-center space-x-5   mb-3 lg:mb-0 ml-2">
                            <g-image :src="`/icons/${v.icon}`" :alt="v.icon" />
                            <p class="text-briix-grey-7 ml-2 lg:ml-0 lg:font-semibold">{{  v.title  }}</p>
                        </div>
                        <CardFacility v-for="fac in villaKs" :key="fac.id" :facility="fac" />
                    </div>

                    <div class="lg:inline-flex space-y-5 lg:space-y-0 mt-5 items-center justify-between lg:space-x-20 w-full">
                        <button type="button"
                            class="rounded-full w-full border-2 hover:bg-briix-blue-1 transition text-briix-primary border-briix-primary py-3 px-10 inline-flex items-center justify-center space-x-3">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5 12.4619H8.51M12.5 12.4619H12.51M16.5 12.4619H16.51M21.5 12.4619C21.5 16.8799 17.47 20.4619 12.5 20.4619C11.0286 20.4669 9.57479 20.1427 8.245 19.5129L3.5 20.4619L4.895 16.7419C4.012 15.5039 3.5 14.0359 3.5 12.4619C3.5 8.04391 7.53 4.46191 12.5 4.46191C17.47 4.46191 21.5 8.04391 21.5 12.4619Z" stroke="#1F9ED3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Live Chat</p>
                        </button>
                        <button type="button"
                            class="rounded-full w-full text-white bg-briix-primary hover:bg-briix-primary/90 transition py-3 px-10 inline-flex items-center justify-center space-x-3">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.00002 6.46193C6.80224 6.46193 6.6089 6.52058 6.44445 6.63046C6.28 6.74034 6.15182 6.89652 6.07614 7.07925C6.00045 7.26197 5.98065 7.46304 6.01923 7.65702C6.05782 7.851 6.15306 8.02918 6.29291 8.16904C6.43276 8.30889 6.61095 8.40413 6.80493 8.44272C6.99891 8.4813 7.19997 8.4615 7.3827 8.38581C7.56543 8.31012 7.7216 8.18195 7.83149 8.0175C7.94137 7.85305 8.00002 7.65971 8.00002 7.46193C8.00002 7.19671 7.89466 6.94236 7.70712 6.75482C7.51959 6.56729 7.26523 6.46193 7.00002 6.46193ZM21.71 12.2419L12.23 2.78193C12.1368 2.68139 12.0239 2.60111 11.8983 2.54606C11.7727 2.49101 11.6371 2.46237 11.5 2.46193H5.50002C5.36841 2.46117 5.23795 2.48639 5.11611 2.53616C4.99427 2.58592 4.88346 2.65925 4.79002 2.75193L2.29002 5.24193C2.19734 5.33537 2.12401 5.44619 2.07425 5.56802C2.02448 5.68986 1.99926 5.82032 2.00002 5.95193V11.9519C2.0037 12.2167 2.10728 12.4703 2.29002 12.6619L11.78 22.1619C11.9717 22.3447 12.2253 22.4482 12.49 22.4519C12.6216 22.4527 12.7521 22.4275 12.8739 22.3777C12.9958 22.3279 13.1066 22.2546 13.2 22.1619L21.71 13.6519C21.8027 13.5585 21.876 13.4477 21.9258 13.3258C21.9756 13.204 22.0008 13.0735 22 12.9419C21.9938 12.6806 21.8904 12.431 21.71 12.2419ZM12.49 20.0519L4.00002 11.5519V6.36193L5.90002 4.46193H11.08L19.58 12.9519L12.49 20.0519Z" fill="white"/>
                            </svg>
                            <p>Enquire Now</p>
                        </button>
                    </div>

                </div>
            </div>
        </div>


        <!-- Card of Properties -->
        <div class="briix-container grid lg:grid-cols-2 gap-10 lg:gap-20 mt-20 lg:mt-[100px]">
            <CardProperty v-for="(villa, idx) in villasFiltered" :key="idx" :villa="villa" />
        </div>


    </section>
</template>

<script>
import CardFacility from '../cards/CardFacility.vue';
import CardProperty from '../cards/CardProperty.vue';
import SiwaCliffCarrousel from './SiwaCliffCarrousel.vue';
import properties from '@/data/properties.json';
import HeroCarrousel from './HeroCarrousel.vue';
export default {
    data: () => ({
        facilities: [
            {
                id: "56826f08-ce61-4ea7-bd01-52a34f6b52e5",
                icon: "villa.svg",
                col: true,
                title: "Villa"
            },
            {
                id: "a6d9c1f9-de41-46eb-9d13-7dcd7d62542e",
                icon: "restaurant.svg",
                col: true,
                title: "Restaurant"
            },
            {
                id: "7a863210-bcd0-4aa5-9d93-4af5cb2c96a7",
                icon: "bar.svg",
                col: true,
                title: "Bar"
            },
            {
                id: "1c4da027-9720-4dd1-b277-20b730b46e94",
                icon: "club.svg",
                col: true,
                title: "Club"
            },
            {
                id: "6bd4a5f1-d8b0-4b42-8288-fcff02e83fd6",
                icon: "spa.svg",
                col: true,
                title: "Day Spa"
            },
            {
                id: "52f7b449-eaa9-4463-84df-f4b809401311",
                icon: "pool.svg",
                col: true,
                title: "Swimming Pools"
            },
            {
                id: "74fa242d-cf51-45f7-8c66-6ef69027f12e",
                icon: "ocean.svg",
                col: true,
                title: "Ocean View"
            },
            {
                id: "4f795822-e15e-4195-b30d-559bac162786",
                icon: "concierge.svg",
                col: true,
                title: "Full Concierge"
            },
            {
                id: "4345b310-26a4-439e-a31f-18c917e16785",
                icon: "wellness.svg",
                col: true,
                title: "Wellness"
            },
            {
                id: "8c278fcf-fa69-4b62-beeb-d165d1b4229e",
                icon: "parking.svg",
                col: true,
                title: "Vallet Parking"
            },
        ],
        v: {
            id: "56826f08-ce61-4ea7-bd01-52a34f6b52e5",
            icon: "villa-sm.svg",
            col: false,
            title: "439 m² building area"
        },
        villaKs: [

            {
                id: "a6d9c1f9-de41-46eb-9d13-7dcd7d62542e",
                icon: "area.svg",
                col: false,
                title: "652 m² lot area"
            },
            {
                id: "7a863210-bcd0-4aa5-9d93-4af5cb2c96a7",
                icon: "pool-sm.svg",
                col: false,
                title: "77 m² pool size"
            },
            {
                id: "1c4da027-9720-4dd1-b277-20b730b46e94",
                icon: "floor.svg",
                col: false,
                title: "2 Floors"
            },
            {
                id: "6bd4a5f1-d8b0-4b42-8288-fcff02e83fd6",
                icon: "bed.svg",
                col: false,
                title: "3 Bedrooms"
            },
            {
                id: "52f7b449-eaa9-4463-84df-f4b809401311",
                icon: "bath.svg",
                col: false,
                title: "3 Bathrooms"
            }
        ],
        images:[
            "hero_siwa_cliff.jpg",
            "hero_siwa_uluwatu.jpg",
            "hero_ku_villa.jpg",
        ]
    }),
    computed:{
        villasFiltered: ()=> properties.filter(data=> data.villaGroup == 'siwa_cliff')
    },
    components: { CardFacility, CardProperty, SiwaCliffCarrousel, HeroCarrousel }
}
</script>