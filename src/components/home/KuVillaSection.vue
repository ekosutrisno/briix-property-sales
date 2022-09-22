<template>
    <section class="border-t-2 border-t-briix-primary/20 mt-52 lg:mt-48 pb-20">
    <!-- Anchor Section -->
    <div class="-mt-20" id="ku_section"></div>
    <div class="mt-8 hidden font-semibold w-max py-4 px-8 rounded-xl mx-auto bg-white text-center leading-[72px] text-2xl lg:text-5xl">KU VILLAS</div>
    
    <!-- Images Hero With Carrousel-->
    <HeroCarrousel :images="images"/>

     <!-- CTA KU VILLAS -->
     <div class="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:items-center justify-between relative briix-container mt-10">
        <div>
            <h1 class="lg:text-5xl text-2xl font-semibold leading-[56px]">KU VILLAS</h1>
            <div class="inline-flex items-start lg:space-x-2 mt-[13px]">
                <svg width="25" height="25" class="hidden lg:block text-briix-primary" viewBox="0 0 25 25"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M7.41093 6.40787C8.6344 5.1844 10.2938 4.49707 12.024 4.49707C13.7542 4.49707 15.4136 5.1844 16.6371 6.40787C17.8605 7.63133 18.5479 9.2907 18.5479 11.0209C18.5479 12.7512 17.8605 14.4105 16.6371 15.634L12.024 20.2471L7.41093 15.634C6.8051 15.0282 6.32452 14.309 5.99664 13.5175C5.66876 12.726 5.5 11.8777 5.5 11.0209C5.5 10.1642 5.66876 9.31585 5.99664 8.52433C6.32452 7.73282 6.8051 7.01364 7.41093 6.40787ZM12.024 12.8848C12.5183 12.8848 12.9924 12.6884 13.342 12.3389C13.6915 11.9893 13.8879 11.5153 13.8879 11.0209C13.8879 10.5266 13.6915 10.0525 13.342 9.70298C12.9924 9.35344 12.5183 9.15707 12.024 9.15707C11.5297 9.15707 11.0556 9.35344 10.706 9.70298C10.3565 10.0525 10.1601 10.5266 10.1601 11.0209C10.1601 11.5153 10.3565 11.9893 10.706 12.3389C11.0556 12.6884 11.5297 12.8848 12.024 12.8848Z"
                        fill="currentColor" />
                </svg>
                <p class="font-normal text-briix-body">Jl. Baturiti I, Kuta, Kec. Pujut, Kabupaten Lombok Tengah, Nusa Tenggara Bar. 83573</p>
            </div>
        </div>
        <div>
            <button type="button" class="rounded-full w-full lg:max-w-max border-2 border-briix-primary transition text-briix-primary hover:bg-briix-blue-1 py-3 px-10 inline-flex items-center justify-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <p>Download Brochure</p>
            </button>
        </div>
    </div>

    <!-- Masterplan -->
    <div class="mt-20 lg:mt-52 lg:pt-32 grid relative briix-container">
        <div class="lg:text-right lg:absolute max-w-lg top-0 right-24">
            <div class="inline-flex items-right space-x-5 lg:pl-10">
                <h1 class="lg:text-[36px] text-2xl lg:mb-4 font-medium leading-[56px] lg:text-right">Master Plan</h1>
            </div>
            <p class="lg:text-lg leading-relaxed lg:leading-[36px] tracking-[0.02em] text-briix-body">KU Villas are positioned close to the action in the exotic and unique province of Kuta Mandalika. It’s the perfect base for those looking to enjoy everything the location has to offer, while also being the ideal retreat when you’re looking to re-balance.</p>
        </div>
        <div class="lg:mt-10 text-center">
            <g-image class="h-full w-full mx-auto object-cover" src="@/assets/images/imgs/ku_master_plan_1.jpg" alt="ku-master-plan"/>
        </div>
    </div>

    <!-- Facilities -->
    <div class="briix-container mt-20 lg:mt-[170px]">
        <div>
            <div class="inline-flex items-center space-x-5">
                <h1 class="lg:text-[40px] text-2xl lg:mb-[5px] font-medium leading-[56px] text-left">The Facilities.</h1>
            </div>
            <p class="lg:text-xl leading-relaxed lg:leading-[36px] tracking-[0.02em] text-briix-body text-left">The resort offers a club house, fitness center, spa and an area for business travelers to work and host meetings.</p>
        </div>

        <div class="bg-white min-h-[351px] rounded-[15px] shadow-custom-c1 px-4 py-10 lg:mt-10 lg:p-[65px]">
            <div class="grid gap-4 lg:gap-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                <CardFacility v-for="fac in facilities" :key="fac.id" :facility="fac" />
            </div>
        </div>
    </div>

    <!-- Available Villas on the Market -->
    <div class="lg:mt-[170px] mt-20 briix-container">
        <div class="inline-flex items-center space-x-5">
            <h1 class="lg:text-[40px] text-2xl font-medium leading-[56px] text-left">Available Villas <span class="hidden lg:inline">on the Market</span></h1>
        </div>
    </div>


    <!-- Card of Properties -->
    <div class="briix-container grid lg:grid-cols-2 gap-10 lg:gap-20 mt-5 lg:mt-[50px]">
        <CardProperty v-for="(villa, idx) in villasFiltered" :key="idx" :villa="villa"/>
    </div>


    </section>
</template>

<script>
import CardFacility from '../cards/CardFacility.vue';
import CardProperty from '../cards/CardProperty.vue';
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
        images:[
            "hero_ku_villa.jpg",
            "hero_siwa_cliff.jpg",
            "hero_siwa_uluwatu.jpg",
        ]
    }),
    computed:{
        villasFiltered: ()=> properties.filter(data=> data.villaGroup == 'ku_villas')
    },
    components: { CardFacility, CardProperty, HeroCarrousel }
}
</script>