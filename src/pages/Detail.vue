<template>
    <Layout>
        <section class="wrapper-section-detail">
            <section class="min-h-screen lg:max-h-screen h-full relative w-full">
                <!-- Clean Carrouses Master Individual -->
                <IndividualCarrousel/>
                <div class="absolute mx-auto w-full inset-0 lg:max-h-screen bg-gradient-to-b from-black/20 to-black/0">
                    <div class="flex h-full min-h-screen lg:max-h-screen flex-col justify-between briix-container">
                        <header class="pt-8 flex items-center">
                            <a href="/" class="lg:mr-[50px]">
                                <LogoBriix />
                            </a>
                            <ul class="md:inline-flex items-center font-medium hidden lg:space-x-16">
                                <li><a class="text-white transition hover:text-briix-blue-3 tracking-[0.1px]" href="/">Home</a></li>
                                <li><a class="text-white transition hover:text-briix-blue-3 tracking-[0.1px]" href="#siteplan_section">Siteplan</a></li>
                                <li><a class="text-white transition hover:text-briix-blue-3 tracking-[0.1px]" href="#facilities_section">Facilities</a></li>
                                <li><a class="text-white transition hover:text-briix-blue-3 tracking-[0.1px]" href="#floorplan_section">Floor Plan</a></li>
                                <li><a class="text-white transition hover:text-briix-blue-3 tracking-[0.1px]" href="#map_section">Map & Location</a></li>
                            </ul>
                        </header>
                    </div>
                </div>
            </section>

            <!-- Actions CTA-->
            <section class="briix-container lg:mt-[78px]">
                <div class="py-8  ">
                    <div class="flex flex-col lg:flex-row lg:items-center justify-between">
                        <p class="lg:text-5xl text-2xl leading-[50px] font-semibold">{{property.name || 'Villa K'}}</p>
                        <p class="lg:text-[32px] leading-[33px] sm:hidden font-medium text-briix-primary">IDR {{property.price || '13,000,000,000'}}</p>
                    </div>

                    <div class="flex flex-col lg:flex-row lg:items-center justify-between w-full">
                        <div class="inline-flex items-start lg:space-x-2 mt-[13px]">
                            <svg width="25" height="25" class="hidden lg:block text-briix-primary" viewBox="0 0 25 25"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M7.41093 6.40787C8.6344 5.1844 10.2938 4.49707 12.024 4.49707C13.7542 4.49707 15.4136 5.1844 16.6371 6.40787C17.8605 7.63133 18.5479 9.2907 18.5479 11.0209C18.5479 12.7512 17.8605 14.4105 16.6371 15.634L12.024 20.2471L7.41093 15.634C6.8051 15.0282 6.32452 14.309 5.99664 13.5175C5.66876 12.726 5.5 11.8777 5.5 11.0209C5.5 10.1642 5.66876 9.31585 5.99664 8.52433C6.32452 7.73282 6.8051 7.01364 7.41093 6.40787ZM12.024 12.8848C12.5183 12.8848 12.9924 12.6884 13.342 12.3389C13.6915 11.9893 13.8879 11.5153 13.8879 11.0209C13.8879 10.5266 13.6915 10.0525 13.342 9.70298C12.9924 9.35344 12.5183 9.15707 12.024 9.15707C11.5297 9.15707 11.0556 9.35344 10.706 9.70298C10.3565 10.0525 10.1601 10.5266 10.1601 11.0209C10.1601 11.5153 10.3565 11.9893 10.706 12.3389C11.0556 12.6884 11.5297 12.8848 12.024 12.8848Z"
                                    fill="currentColor" />
                            </svg>
                            <p class="font-normal text-briix-body">{{property.address || 'Prabu, Pujut, Central Lombok Regency, West Nusa Tenggara'}}</p>
                        </div>

                        <div class="inline-flex items-center justify-between lg:space-x-5 mt-8 lg:mt-0">
                            <button type="button"
                                class="rounded-full hidden border-2 transition text-briix-primary border-transparent hover:border-briix-primary px-4 w-auto lg:inline-flex items-center justify-center space-x-4">
                                <svg width="31" height="31" viewBox="0 0 31 31" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.3548 17.1745C11.6077 16.6698 11.75 16.1 11.75 15.4971C11.75 14.8941 11.6077 14.3244 11.3548 13.8197M11.3548 17.1745C10.7392 18.4034 9.46811 19.2471 8 19.2471C5.92893 19.2471 4.25 17.5681 4.25 15.4971C4.25 13.426 5.92893 11.7471 8 11.7471C9.46811 11.7471 10.7392 12.5907 11.3548 13.8197M11.3548 17.1745L19.6452 21.3197M11.3548 13.8197L19.6452 9.67449M19.6452 9.67449C20.2608 10.9034 21.5319 11.7471 23 11.7471C25.0711 11.7471 26.75 10.0681 26.75 7.99707C26.75 5.926 25.0711 4.24707 23 4.24707C20.9289 4.24707 19.25 5.926 19.25 7.99707C19.25 8.60003 19.3923 9.16976 19.6452 9.67449ZM19.6452 21.3197C19.3923 21.8244 19.25 22.3941 19.25 22.9971C19.25 25.0681 20.9289 26.7471 23 26.7471C25.0711 26.7471 26.75 25.0681 26.75 22.9971C26.75 20.926 25.0711 19.2471 23 19.2471C21.5319 19.2471 20.2608 20.0907 19.6452 21.3197Z"
                                        stroke="#1F9ED3" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <p class="text-base">Share</p>
                            </button>
                            <g-link
                                class="transition-colors rounded-full hover:bg-briix-primary hover:text-briix-white/60 font-normal leading-6"
                                to="/#">
                                <svg width="34" height="34" class="text-briix-primary hover:text-white transition"
                                    viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.951965" y="1" width="32" height="32" rx="16" stroke="currentColor"
                                        stroke-width="1.75" />
                                    <path
                                        d="M17.8899 24.2V17.6315H20.1328L20.4687 15.0717H17.8899V13.4373C17.8899 12.6961 18.0993 12.1911 19.1805 12.1911L20.5595 12.1905V9.90096C20.3209 9.86975 19.5024 9.80005 18.5501 9.80005C16.5618 9.80005 15.2007 10.993 15.2007 13.1839V15.0717H12.952V17.6315H15.2007V24.2H17.8899Z"
                                        fill="currentColor" />
                                </svg>
                            </g-link>
                            <g-link
                                class="transition-colors rounded-full hover:bg-briix-primary hover:text-briix-white/60 font-normal leading-6"
                                to="/#">
                                <svg width="34" height="34" class="text-briix-primary hover:text-white transition"
                                    viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.551941" y="1" width="32" height="32" rx="16" stroke="currentColor"
                                        stroke-width="1.75" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M16.552 9.00772C16.2871 9.00772 16.0233 9.00581 15.7615 9.00392C12.7847 8.98243 10.0675 8.96281 8.97507 11.7665C8.54129 12.8797 8.54645 14.2866 8.55353 16.2153C8.55446 16.4694 8.55543 16.7325 8.55543 17.0052C8.55543 17.2267 8.55467 17.4468 8.55391 17.6648C8.54764 19.4695 8.54187 21.1278 8.97507 22.243C10.0649 25.0481 12.8029 25.0281 15.7638 25.0065H15.7641H15.7644H15.7647C16.0252 25.0046 16.2873 25.0027 16.5502 25.0027C16.825 25.0027 17.1005 25.0052 17.3754 25.0077C20.2391 25.0337 23.0286 25.0591 24.1263 22.243C24.5603 21.1202 24.5551 19.7331 24.5479 17.8052V17.8052C24.5469 17.5483 24.5459 17.2819 24.5459 17.0052C24.5459 16.706 24.5475 16.417 24.549 16.1376C24.5634 13.4993 24.5732 11.719 23.2031 10.3497C21.8276 8.9742 20.0176 8.98642 17.4629 9.00367C17.1682 9.00566 16.8635 9.00772 16.5484 9.00772H16.552ZM17.121 10.4404L17.1211 10.4404C22.7801 10.3871 23.5084 10.3802 23.0602 20.2342C22.9054 23.6241 20.5474 23.5982 17.4991 23.5648H17.499H17.4989H17.4988C17.19 23.5614 16.8741 23.5579 16.5527 23.5579C10.1814 23.5579 9.99821 23.3756 9.99821 17.0016C9.99821 10.5536 10.5036 10.4526 15.8352 10.4471V10.4489C16.2898 10.4482 16.7179 10.4442 17.121 10.4404ZM19.8611 12.7357C19.8611 12.206 20.2907 11.7764 20.8204 11.7764C21.3501 11.7764 21.7797 12.206 21.7797 12.7357C21.7797 13.2655 21.3501 13.695 20.8204 13.695C20.2907 13.695 19.8611 13.2655 19.8611 12.7357ZM16.552 12.8981C14.2841 12.8981 12.4459 14.7373 12.4459 17.0052C12.4459 19.273 14.2841 21.1113 16.552 21.1113C18.8198 21.1113 20.6572 19.273 20.6572 17.0052C20.6572 14.7373 18.8198 12.8981 16.552 12.8981ZM16.552 14.3394C20.076 14.3394 20.0805 19.671 16.552 19.671C13.0288 19.671 13.0234 14.3394 16.552 14.3394Z"
                                        fill="currentColor" />
                                </svg>
                            </g-link>
                            <g-link
                                class="transition-colors rounded-full hover:bg-briix-primary hover:text-briix-white/60 font-normal leading-6"
                                to="/#">
                                <svg width="34" height="34" class="text-briix-primary hover:text-white transition"
                                    viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="1" width="28" height="28" rx="14" stroke="currentColor"
                                        stroke-width="1.5" />
                                    <path
                                        d="M9.75 12.6666L14.3528 15.7352C14.7447 15.9964 15.2553 15.9964 15.6472 15.7352L20.25 12.6666M10.9167 19.0833H19.0833C19.7277 19.0833 20.25 18.561 20.25 17.9166V12.0833C20.25 11.439 19.7277 10.9166 19.0833 10.9166H10.9167C10.2723 10.9166 9.75 11.439 9.75 12.0833V17.9166C9.75 18.561 10.2723 19.0833 10.9167 19.0833Z"
                                        stroke="currentColor" stroke-width="1.2895" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </g-link>
                            <g-link
                                class="transition-colors rounded-full hover:bg-briix-primary hover:text-briix-white/60 font-normal leading-6"
                                to="/#">
                                <svg width="34" height="34" class="text-briix-primary hover:text-white transition"
                                    viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="1" width="28" height="28" rx="14" stroke="currentColor"
                                        stroke-width="1.5" />
                                    <path
                                        d="M9.44461 18.6326L9.50038 18.4298L9.39439 18.2481C8.82407 17.2704 8.5 16.1318 8.5 15C8.5 11.4261 11.4261 8.5 15 8.5C16.7088 8.5 18.3305 9.15006 19.5465 10.3661C20.774 11.5936 21.5 13.2196 21.5 14.9125C21.5 18.4864 18.5739 21.4125 15 21.4125C13.9629 21.4125 12.903 21.0925 11.8986 20.5903L11.7303 20.5061L11.5483 20.5538L8.71198 21.2967L9.44461 18.6326ZM9.1825 20.3725L8.93043 21.2367L9.79731 20.994L11.7975 20.4339C12.7526 20.9988 13.8817 21.275 15 21.275C18.5136 21.275 21.275 18.4261 21.275 15.0875C21.275 13.3909 20.7048 11.8602 19.4661 10.6214L19.459 10.6144L19.4517 10.6076C18.2319 9.48163 16.7138 8.8125 15 8.8125C11.5739 8.8125 8.72499 11.6614 8.72499 15.0875C8.72499 16.223 9.00969 17.368 9.67816 18.4184L9.67807 18.4185L9.68398 18.4274L9.72979 18.4961L9.1825 20.3725ZM16.864 16.4268C16.8752 16.4124 16.8871 16.3966 16.8995 16.3799C16.9211 16.387 16.9495 16.3972 16.985 16.4109C17.0806 16.448 17.2014 16.5007 17.3292 16.5592C17.5832 16.6757 17.839 16.8035 17.9264 16.8472C17.9624 16.8652 17.9957 16.8796 18.0198 16.8899C18.0285 16.8936 18.0357 16.8966 18.0418 16.8992C18.0519 16.9034 18.0592 16.9065 18.0664 16.9097C18.0741 16.9292 18.0855 16.9646 18.0972 17.0231L18.1326 17.1998C18.1176 17.2839 18.0878 17.3967 18.0358 17.5268L18.0232 17.5583L18.0179 17.5792C18.0148 17.5844 18.002 17.6063 17.9674 17.6438C17.9165 17.6989 17.8421 17.7616 17.7523 17.8215C17.6632 17.8809 17.5707 17.9296 17.4899 17.9619C17.4116 17.9933 17.3699 17.999 17.3633 17.9998C17.3624 18 17.3622 18 17.3625 18C17.2795 18 17.1817 18.0086 17.1145 18.0145C17.093 18.0164 17.0745 18.018 17.0608 18.019C16.9857 18.0243 16.9048 18.0263 16.7943 18.014C16.5649 17.9885 16.1763 17.898 15.4529 17.6002L15.4529 17.6001L15.4482 17.5983C14.6715 17.2876 14.0095 16.7134 13.5192 16.1815C13.2769 15.9186 13.0828 15.6728 12.9435 15.4866C12.8738 15.3935 12.818 15.3155 12.7754 15.2559L12.7727 15.2521C12.7531 15.2247 12.7342 15.1983 12.7188 15.1774C12.7184 15.1768 12.7179 15.1761 12.7172 15.1752C12.7143 15.1712 12.7093 15.1643 12.7026 15.1556C12.6746 15.1075 12.6386 15.0508 12.6064 15.0001C12.5917 14.9769 12.5778 14.9549 12.5658 14.9355C12.5001 14.83 12.4243 14.7024 12.3519 14.5576C12.2039 14.2616 12.0875 13.9268 12.0875 13.6C12.0875 12.9318 12.404 12.6155 12.5489 12.4707L12.5535 12.4661C12.5674 12.4522 12.5768 12.4461 12.5809 12.4437C12.585 12.4413 12.5875 12.4405 12.5889 12.4401C12.5932 12.4389 12.5983 12.4375 12.6375 12.4375H12.6385H12.6395H12.6406H12.6416H12.6426H12.6436H12.6446H12.6456H12.6466H12.6476H12.6486H12.6497H12.6507H12.6517H12.6526H12.6536H12.6546H12.6556H12.6566H12.6576H12.6586H12.6596H12.6606H12.6615H12.6625H12.6635H12.6645H12.6654H12.6664H12.6674H12.6683H12.6693H12.6703H12.6712H12.6722H12.6731H12.6741H12.675H12.676H12.6769H12.6779H12.6788H12.6798H12.6807H12.6817H12.6826H12.6835H12.6845H12.6854H12.6863H12.6873H12.6882H12.6891H12.69H12.691H12.6919H12.6928H12.6937H12.6946H12.6955H12.6965H12.6974H12.6983H12.6992H12.7001H12.701H12.7019H12.7028H12.7037H12.7046H12.7055H12.7064H12.7073H12.7082H12.709H12.7099H12.7108H12.7117H12.7126H12.7134H12.7143H12.7152H12.7161H12.7169H12.7178H12.7187H12.7196H12.7204H12.7213H12.7221H12.723H12.7239H12.7247H12.7256H12.7264H12.7273H12.7281H12.729H12.7298H12.7307H12.7315H12.7324H12.7332H12.734H12.7349H12.7357H12.7365H12.7374H12.7382H12.739H12.7399H12.7407H12.7415H12.7423H12.7432H12.744H12.7448H12.7456H12.7464H12.7472H12.7481H12.7489H12.7497H12.7505H12.7513H12.7521H12.7529H12.7537H12.7545H12.7553H12.7561H12.7569H12.7577H12.7585H12.7593H12.7601H12.7609H12.7616H12.7624H12.7632H12.764H12.7648H12.7656H12.7663H12.7671H12.7679H12.7687H12.7694H12.7702H12.771H12.7717H12.7725H12.7733H12.774H12.7748H12.7756H12.7763H12.7771H12.7778H12.7786H12.7793H12.7801H12.7809H12.7816H12.7824H12.7831H12.7838H12.7846H12.7853H12.7861H12.7868H12.7876H12.7883H12.789H12.7898H12.7905H12.7912H12.792H12.7927H12.7934H12.7942H12.7949H12.7956H12.7963H12.797H12.7978H12.7985H12.7992H12.7999H12.8006H12.8014H12.8021H12.8028H12.8035H12.8042H12.8049H12.8056H12.8063H12.807H12.8077H12.8084H12.8091H12.8098H12.8105H12.8112H12.8119H12.8126H12.8133H12.814H12.8147H12.8154H12.8161H12.8168H12.8175H12.8181H12.8188H12.8195H12.8202H12.8209H12.8216H12.8222H12.8229H12.8236H12.8243H12.8249H12.8256H12.8263H12.827H12.8276H12.8283H12.829H12.8296H12.8303H12.831H12.8316H12.8323H12.8329H12.8336H12.8343H12.8349H12.8356H12.8362H12.8369H12.8375H12.8382H12.8389H12.8395H12.8402H12.8408H12.8414H12.8421H12.8427H12.8434H12.844H12.8447H12.8453H12.846H12.8466H12.8472H12.8479H12.8485H12.8491H12.8498H12.8504H12.851H12.8517H12.8523H12.8529H12.8536H12.8542H12.8548H12.8554H12.8561H12.8567H12.8573H12.8579H12.8586H12.8592H12.8598H12.8604H12.861H12.8616H12.8623H12.8629H12.8635H12.8641H12.8647H12.8653H12.8659H12.8666H12.8672H12.8678H12.8684H12.869H12.8696H12.8702H12.8708H12.8714H12.872H12.8726H12.8732H12.8738H12.8744H12.875H12.8756H12.8762H12.8768H12.8774H12.878H12.8786H12.8792H12.8797H12.8803H12.8809H12.8815H12.8821H12.8827H12.8833H12.8839H12.8845H12.885H12.8856H12.8862H12.8868H12.8874H12.8879H12.8885H12.8891H12.8897H12.8903H12.8908H12.8914H12.892H12.8926H12.8931H12.8937H12.8943H12.8949H12.8954H12.896H12.8966H12.8971H12.8972C12.9755 12.5963 13.0964 12.878 13.2014 13.1404C13.2547 13.2738 13.3014 13.3959 13.3341 13.4875C13.3492 13.5298 13.3598 13.5618 13.3665 13.5833C13.3673 13.5905 13.3682 13.5976 13.3692 13.6044C13.352 13.6341 13.3396 13.659 13.331 13.6763C13.3299 13.6785 13.3288 13.6806 13.3278 13.6826C13.3246 13.6891 13.322 13.6941 13.3201 13.6978L13.2027 13.8152L13.0715 13.9464C13.0695 13.9484 13.0671 13.9507 13.0643 13.9535C13.0266 13.9904 12.9136 14.1011 12.8514 14.2565C12.7665 14.4686 12.7957 14.6844 12.8903 14.8736C12.9915 15.076 13.377 15.7548 13.9752 16.2552C14.6288 16.826 15.1668 17.0608 15.3922 17.1592C15.4288 17.1752 15.4571 17.1876 15.4764 17.1972L15.582 17.25H15.7C15.7094 17.25 15.7197 17.2501 15.7307 17.2502C15.8778 17.2518 16.1646 17.255 16.4036 17.0161L16.4609 16.9587L16.4972 16.8861C16.4971 16.8863 16.4971 16.8864 16.4972 16.8863C16.4981 16.885 16.5118 16.862 16.5523 16.8096C16.5921 16.7582 16.6404 16.7 16.6966 16.6326L16.6998 16.6288C16.7522 16.5658 16.8119 16.4943 16.864 16.4268ZM18.0566 16.8891C18.0566 16.889 18.0573 16.89 18.0586 16.8924C18.0572 16.8904 18.0566 16.8892 18.0566 16.8891Z"
                                        fill="currentColor" stroke="currentColor" />
                                </svg>
                            </g-link>
                            <button type="button"
                                class="rounded-full lg:hidden border-2 transition text-briix-primary border-transparent hover:border-briix-primary px-4 w-auto inline-flex items-center justify-center space-x-4">
                                <svg width="31" height="31" viewBox="0 0 31 31" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.3548 17.1745C11.6077 16.6698 11.75 16.1 11.75 15.4971C11.75 14.8941 11.6077 14.3244 11.3548 13.8197M11.3548 17.1745C10.7392 18.4034 9.46811 19.2471 8 19.2471C5.92893 19.2471 4.25 17.5681 4.25 15.4971C4.25 13.426 5.92893 11.7471 8 11.7471C9.46811 11.7471 10.7392 12.5907 11.3548 13.8197M11.3548 17.1745L19.6452 21.3197M11.3548 13.8197L19.6452 9.67449M19.6452 9.67449C20.2608 10.9034 21.5319 11.7471 23 11.7471C25.0711 11.7471 26.75 10.0681 26.75 7.99707C26.75 5.926 25.0711 4.24707 23 4.24707C20.9289 4.24707 19.25 5.926 19.25 7.99707C19.25 8.60003 19.3923 9.16976 19.6452 9.67449ZM19.6452 21.3197C19.3923 21.8244 19.25 22.3941 19.25 22.9971C19.25 25.0681 20.9289 26.7471 23 26.7471C25.0711 26.7471 26.75 25.0681 26.75 22.9971C26.75 20.926 25.0711 19.2471 23 19.2471C21.5319 19.2471 20.2608 20.0907 19.6452 21.3197Z"
                                        stroke="#1F9ED3" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <p class="text-base">Share</p>
                            </button>
                        </div>
                    </div>

                    <div class="flex items-center justify-between my-12">
                        <div class="lg:col-span-2 text-right">
                            <p class="lg:text-[32px] hidden mt-3 sm:block leading-[33px] font-medium text-briix-primary">IDR {{property.price || '13,000,000,000'}}</p>
                        </div>
                        <button type="button" class="rounded-full w-full lg:max-w-[320px] border-2 border-briix-primary transition text-briix-primary hover:bg-briix-blue-1 py-3 px-12 inline-flex items-center justify-center space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            <p>Download Brochure</p>
                        </button>

                    </div>

                    <!-- Facility -->
                    <div class="mt-8 grid lg:grid-cols-6 -ml-2 lg:-ml-0">
                        <div class="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-y-5 lg:col-span-4">
                            <div class="flex flex-row items-center mb-2 ml-2">
                              <g-image class="mr-5" :src="`/icons/villa-sm.svg`" alt="area-villa" />
                                <p class="text-briix-grey-7 lg:font-semibold">{{  property.area || 100  }} m² building area</p>
                            </div>
                            <div class="flex flex-row items-center">
                                <g-image class="mr-4" :src="`/icons/area.svg`" alt="area" />
                                <p class="text-briix-grey-7 lg:font-semibold">{{  652  }} m² lot area</p>
                            </div>
                            <div class="flex flex-row items-center">
                                <g-image class="mr-4" :src="`/icons/pool-sm.svg`" alt="pool" />
                                <p class="text-briix-grey-7 lg:font-semibold">{{  77  }} m² pool size</p>
                            </div>
                            <div class="flex flex-row items-center">
                                <g-image class="mr-4" :src="`/icons/floor.svg`" alt="floor" />
                                <p class="text-briix-grey-7 lg:font-semibold">{{  2  }} Floors</p>
                            </div>
                            <div class="flex flex-row items-center">
                                <g-image class="mr-4" :src="`/icons/bed.svg`" alt="bed" />
                                <p class="text-briix-grey-7 lg:font-semibold">{{  property.bed || 2  }} Bedrooms</p>
                            </div>
                            <div class="flex flex-row items-center">
                                <g-image class="mr-4" :src="`/icons/bath.svg`" alt="bath" />
                                <p class="text-briix-grey-7 lg:font-semibold">{{  property.bath || 2  }} Bathrooms</p>
                            </div>
                        </div>
                        <div class="w-full lg:col-span-2 flex flex-col items-end space-y-8 mt-10 lg:mt-0">
                            <button type="button"
                                class="w-full lg:max-w-[320px] rounded-full text-white bg-briix-primary shadow-custom hover:bg-briix-primary/80 transition py-3.5 px-12 inline-flex items-center justify-center space-x-4">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.5 12.4619H8.51M12.5 12.4619H12.51M16.5 12.4619H16.51M21.5 12.4619C21.5 16.8799 17.47 20.4619 12.5 20.4619C11.0286 20.4669 9.57479 20.1427 8.245 19.5129L3.5 20.4619L4.895 16.7419C4.012 15.5039 3.5 14.0359 3.5 12.4619C3.5 8.04391 7.53 4.46191 12.5 4.46191C17.47 4.46191 21.5 8.04391 21.5 12.4619Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p>Live Chat</p>
                            </button>
                            <button type="button"
                                class="w-full lg:max-w-[320px] rounded-full text-white bg-briix-primary shadow-custom hover:bg-briix-primary/80 transition py-3.5 px-12 inline-flex items-center justify-center space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <p>Enquire by Email</p>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <WhyUseBriix />

            <!-- The Masterplan -->
            <section id="siteplan_section" class="relative my-24 lg:mt-[250px]">
                <div class="w-full briix-container mb-12">
                    <div class="inline-flex items-center space-x-5">
                        <h1 class="lg:text-[36px] text-2xl lg:mb-4 font-medium leading-[56px]">Site Plan</h1>
                    </div>
                    <p
                        class="lg:text-[18px] font-normal leading-relaxed lg:leading-[36px] tracking-[0.02em] text-briix-black-100">
                        The SIWA Cliffs property marks a new dawn in luxury property development and management in South
                        Lombok with it's unique approach to sustainability through design, service and living.</p>
                </div>
                <g-image :src="require(`!!assets-loader!@images/plan/${property.planImg||'villa_a.png'}`)" :alt="property.planImg" />
            </section>


            <!-- Half 1 -->
            <section id="facilities_section" class="grid lg:grid-cols-2 p-5 lg:p-0 lg:mt-[215px]">
                <div class="lg:px-[100px] mt-3 lg:mt-0   order-last lg:order-first">
                    <h2 class="font-medium lg:mt-4 text-2xl lg:text-3xl lg:leading-[50px] tracking-[0.03em]">Fully managed wellness resort</h2>

                    <div class="mt-5 text-briix-body font-light lg:text-xl leading-[35px] lg:leading-[40px]">
                        Villa K is situated on the first row of villas on SIWA Cliffs first phase of developments. The
                        villa comprises of three ensuite bedrooms, a spacious living and dining
                        area and a fully equipped kitchen.
                        <br><br>
                        Fully furnished with locally sourced furniture and fittings and state of the art home
                        technology.
                    </div>
                </div>
                <div class="rounded-lg lg:rounded-r-none lg:rounded-l-lg overflow-hidden">
                    <g-image class="h-full w-full object-cover" :src="require(`!!assets-loader!@images/siwa_balcony.jpg`)" alt="villa-k-bedroom" />
                </div>
            </section>

            <!-- Half 2 -->
            <section class="grid lg:grid-cols-2 p-5 lg:p-0 lg:mt-[150px]">
                <div class="rounded-lg lg:rounded-l-none lg:rounded-r-lg overflow-hidden">
                    <g-image class="h-full w-full object-cover" :src="require(`!!assets-loader!@images/siwa_living.jpg`)"
                        alt="villa-k-bedroom" />
                </div>
                <div class="lg:px-[100px] mt-5 lg:mt-0 lg:text-right">
                    <h2 class="font-medium lg:mt-4 text-2xl lg:text-3xl lg:leading-[50px] tracking-[0.03em]">Providing world
                        class services</h2>

                    <div class="mt-5 text-briix-body font-light lg:text-xl leading-[35px] lg:leading-[40px]">
                        Villa K is situated on the first row of villas on SIWA Cliffs first phase of developments. The
                        villa comprises of three ensuite bedrooms, a spacious living and dining
                        area and a fully equipped kitchen.
                        <br><br>
                        Fully furnished with locally sourced furniture and fittings and state of the art home
                        technology.
                    </div>
                </div>
            </section>

            <!-- Floor Plan 1 -->
            <section id="floorplan_section" class="briix-container lg:mt-[190px]">
                <div class="inline-flex items-center space-x-5">
                    <h1 class="lg:text-[40px] text-2xl font-medium leading-[56px] text-right">Floor Plan.</h1>
                </div>
                <div class="mt-10 lg:mt-[50px]">
                    <g-image class="h-full w-full object-cover" src="@/assets/images/plan/ground_floor.jpg" alt="ground-floor" />
                </div>
                <div class="mt-5 lg:mt-[80px]">
                    <h1 class="text-2xl lg:text-4xl font-medium leading-[54px] text-center">Ground Floor</h1>
                    <div class="lg:mt-7">
                        <ul
                            class="grid gap-4 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 leading-[22px] text-briix-body">
                            <li>A. Master Bedroom</li>
                            <li>B. Ensuite Bathroom</li>
                            <li>C. Living Area</li>
                            <li>D. Dining Area</li>
                            <li>E. Kitchen</li>
                            <li>F. Guest Bathroom</li>
                            <li>G. Swimming Pool</li>
                            <li>H. Pool Deck</li>
                            <li>I. Garden</li>
                            <li>J. Stairs</li>
                            <li>K. Entrance</li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Floor Plan 2 -->
            <section class="briix-container   mt-20 lg:mt-[190px]">
                <div class="mt-10 lg:mt-[100px]">
                    <g-image class="h-full w-full object-cover" src="@/assets/images/plan/upper_floor.jpg" alt="upper-floor" />
                </div>
                <div class="mt-5 lg:mt-[80px]">
                    <h1 class="text-2xl lg:text-4xl font-medium leading-[54px] text-center">Upper Floor</h1>
                    <div class="lg:mt-7">
                        <ul
                            class="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:justify-center lg:space-x-20 leading-[22px] text-briix-body">
                            <li>L. Bedroom</li>
                            <li>M. Ensuite Bathroom</li>
                            <li>N. Upper Living Area</li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Map Location -->
            <section class="grid lg:grid-cols-2 p-5 lg:p-0 mt-20 lg:mt-[215px] relative">
                <div id="map_section" class="absolute top-0 -mt-20"></div>
                <div class="lg:px-[100px] mt-10 lg:mt-0 order-last lg:order-first">
                    <h2 class="font-medium lg:mt-4 text-2xl lg:text-4xl lg:leading-[50px] tracking-[0.03em]">Perfectly located</h2>

                    <div class="mt-5 text-briix-body font-light lg:text-xl leading-[35px] lg:leading-[40px]">
                        Convenient central location within walking distance from all shops, restaurants, and minutes from the Mandalika MotoGP Circuit.
                    </div>

                    <div class="grid lg:grid-cols-2 space-y-10 lg:space-y-0 w-full gap-4 lg:gap-y-10 lg:gap-x-16 mt-10">
                        <div class="flex flex-col text-center lg:text-left items-center lg:items-start">
                            <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M43.8942 24.7224L41.8942 20.7224C41.811 20.5565 41.6834 20.417 41.5255 20.3195C41.3676 20.222 41.1857 20.1704 41.0002 20.1704H36.0002V15.7864L39.4182 14.0624C39.5411 14.0069 39.6516 13.927 39.7429 13.8276C39.8341 13.7283 39.9044 13.6114 39.9493 13.4842C39.9943 13.357 40.013 13.222 40.0044 13.0873C39.9958 12.9527 39.96 12.8212 39.8992 12.7007C39.8385 12.5802 39.754 12.4733 39.6508 12.3864C39.5476 12.2994 39.4279 12.2343 39.2988 12.1948C39.1698 12.1554 39.0341 12.1424 38.9 12.1568C38.7658 12.1712 38.6359 12.2125 38.5182 12.2784L34.5502 14.2784C34.385 14.3617 34.2461 14.4891 34.149 14.6466C34.0519 14.8041 34.0004 14.9854 34.0002 15.1704V20.1704H30.3882L30.0002 15.0924C29.9805 14.8409 29.8665 14.6062 29.6811 14.4352C29.4956 14.2642 29.2524 14.1696 29.0002 14.1704H24.0002V11.1704C24.0002 9.84433 23.4734 8.57256 22.5357 7.63488C21.598 6.69719 20.3263 6.17041 19.0002 6.17041C17.6741 6.17041 16.4023 6.69719 15.4646 7.63488C14.527 8.57256 14.0002 9.84433 14.0002 11.1704V14.1704H9.00017C8.74793 14.1696 8.50472 14.2642 8.31927 14.4352C8.13382 14.6062 8.01984 14.8409 8.00017 15.0924L6.00017 41.0924C5.99027 41.2301 6.00858 41.3683 6.05398 41.4986C6.09937 41.629 6.1709 41.7487 6.26417 41.8504C6.3581 41.9517 6.47199 42.0324 6.59866 42.0875C6.72533 42.1426 6.86204 42.1708 7.00017 42.1704H39.0002C39.2452 42.1723 39.4825 42.0841 39.6668 41.9226C39.8512 41.7612 39.9698 41.5376 40.0002 41.2944L41.8822 26.1704H43.0002C43.1707 26.1704 43.3384 26.1268 43.4873 26.0437C43.6362 25.9606 43.7614 25.8409 43.851 25.6958C43.9406 25.5507 43.9916 25.3851 43.9992 25.2147C44.0067 25.0443 43.9706 24.8749 43.8942 24.7224ZM41.3822 24.1704H28.6182L29.6182 22.1704H40.3822L41.3822 24.1704ZM38.6182 36.1704H31.3822L30.8822 32.1704H39.1182L38.6182 36.1704ZM16.0002 11.1704C16.0002 10.3748 16.3162 9.6117 16.8788 9.04909C17.4415 8.48648 18.2045 8.17041 19.0002 8.17041C19.7958 8.17041 20.5589 8.48648 21.1215 9.04909C21.6841 9.6117 22.0002 10.3748 22.0002 11.1704V14.1704H16.0002V11.1704ZM9.92617 16.1704H14.0002V19.1704C14.0002 19.4356 14.1055 19.69 14.2931 19.8775C14.4806 20.0651 14.735 20.1704 15.0002 20.1704C15.2654 20.1704 15.5197 20.0651 15.7073 19.8775C15.8948 19.69 16.0002 19.4356 16.0002 19.1704V16.1704H22.0002V19.1704C22.0002 19.4356 22.1055 19.69 22.2931 19.8775C22.4806 20.0651 22.735 20.1704 23.0002 20.1704C23.2654 20.1704 23.5197 20.0651 23.7073 19.8775C23.8948 19.69 24.0002 19.4356 24.0002 19.1704V16.1704H28.0742L28.4002 20.4004C28.2797 20.4848 28.1793 20.5948 28.1062 20.7224L26.1062 24.7224C26.0298 24.8749 25.9936 25.0443 26.0012 25.2147C26.0087 25.3851 26.0597 25.5507 26.1493 25.6958C26.2389 25.8409 26.3641 25.9606 26.513 26.0437C26.6619 26.1268 26.8296 26.1704 27.0002 26.1704H28.1182L29.8682 40.1704H8.08017L9.92617 16.1704ZM31.8822 40.1704L31.6322 38.1704H38.3682L38.1182 40.1704H31.8822ZM39.3682 30.1704H30.6322L30.1322 26.1704H39.8682L39.3682 30.1704Z" fill="black" stroke="black" stroke-width="0.5"/>
                                <path d="M23 26.1704H15C14.7348 26.1704 14.4804 26.2758 14.2929 26.4633C14.1054 26.6508 14 26.9052 14 27.1704V31.1704C14 31.4356 14.1054 31.69 14.2929 31.8775C14.4804 32.0651 14.7348 32.1704 15 32.1704H23C23.2652 32.1704 23.5196 32.0651 23.7071 31.8775C23.8946 31.69 24 31.4356 24 31.1704V27.1704C24 26.9052 23.8946 26.6508 23.7071 26.4633C23.5196 26.2758 23.2652 26.1704 23 26.1704ZM22 30.1704H16V28.1704H22V30.1704Z" fill="black" stroke="black" stroke-width="0.5"/>
                            </svg>
                            <div class="mt-4">
                                <h1 class="font-normal text-lg mb-3">Shops and Restaurants</h1>
                                <p class="font-medium text-lg text-briix-primary">8 Mins walk</p>
                            </div>
                        </div>
                        <div class="flex flex-col text-center lg:text-left items-center lg:items-start">
                            <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M38.5627 12.6792C38.5198 12.623 38.4724 12.5705 38.4208 12.5221C38.3004 12.3953 38.1939 12.2572 38.0684 12.1317C37.9189 11.9809 37.7541 11.8516 37.5995 11.7083C37.5603 11.6663 37.5179 11.6273 37.4727 11.5917C34.2295 8.6467 29.9759 7.06511 25.5965 7.17586C20.8424 7.28861 16.3178 9.24259 12.9762 12.626C12.7386 12.8637 12.6051 13.186 12.6051 13.5221C12.6051 13.8582 12.7386 14.1805 12.9762 14.4182L23.4849 24.9205L9.54263 38.8627H6.26748C5.93132 38.8627 5.60893 38.9963 5.37123 39.234C5.13354 39.4717 5 39.7941 5 40.1302C5 40.4664 5.13354 40.7888 5.37123 41.0265C5.60893 41.2641 5.93132 41.3977 6.26748 41.3977H34.1519C34.4881 41.3977 34.8105 41.2641 35.0482 41.0265C35.2859 40.7888 35.4194 40.4664 35.4194 40.1302C35.4194 39.7941 35.2859 39.4717 35.0482 39.234C34.8105 38.9963 34.4881 38.8627 34.1519 38.8627H13.1296L25.2796 26.714L35.7895 37.2226C36.0272 37.4602 36.3495 37.5937 36.6856 37.5937C37.0217 37.5937 37.344 37.4602 37.5817 37.2226C40.8679 34.0415 42.8031 29.7173 42.9858 25.1473C43.1685 20.5773 41.5845 16.1125 38.5627 12.6792ZM30.2988 28.1513L26.1858 24.0333L26.1757 24.0181L26.1605 24.0092L21.9778 19.8265C23.8024 17.905 26.003 16.3798 28.4426 15.3457C30.8823 14.3117 33.5087 13.791 36.1583 13.8162C36.1964 13.8542 36.2382 13.8859 36.2762 13.9239C36.2914 13.9378 36.3028 13.9543 36.3168 13.9683C36.3292 16.7625 35.7477 19.5276 34.6108 22.0801C33.572 24.3593 32.1086 26.4197 30.2988 28.1513ZM25.6497 9.71081C28.2327 9.64501 30.7869 10.2656 33.0518 11.5094C28.1396 12.1397 23.5964 14.449 20.192 18.0457L15.6988 13.5525C18.4678 11.1532 21.9868 9.79464 25.6497 9.71081ZM36.6476 34.4976L32.0847 29.9346C34.1123 27.9866 35.7529 25.6724 36.9201 23.1144C37.7734 21.183 38.3474 19.1401 38.6248 17.047C40.1114 19.8114 40.7185 22.9638 40.3652 26.0827C40.0119 29.2015 38.7149 32.1382 36.6476 34.5001V34.4976Z" fill="black"/>
                            </svg>
                            <div class="mt-4">
                                <h1 class="font-normal text-lg mb-3">Kuta Beach</h1>
                                <p class="font-medium text-lg text-briix-primary">5 Mins Drive</p>
                            </div>
                        </div>
                        <div class="flex flex-col text-center lg:text-left items-center lg:items-start">
                            <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.3998 30.1704C23.6878 30.1704 22.9918 30.3815 22.3998 30.7771C21.8077 31.1727 21.3463 31.7349 21.0738 32.3927C20.8014 33.0506 20.7301 33.7744 20.869 34.4727C21.0079 35.1711 21.3508 35.8125 21.8542 36.316C22.3577 36.8195 22.9992 37.1623 23.6975 37.3012C24.3958 37.4401 25.1197 37.3689 25.7775 37.0964C26.4353 36.8239 26.9975 36.3625 27.3931 35.7705C27.7887 35.1784 27.9998 34.4824 27.9998 33.7704C27.9998 32.8156 27.6205 31.9 26.9454 31.2248C26.2703 30.5497 25.3546 30.1704 24.3998 30.1704ZM24.3998 34.9704C24.1625 34.9704 23.9305 34.9 23.7331 34.7682C23.5358 34.6363 23.382 34.4489 23.2912 34.2296C23.2003 34.0104 23.1766 33.7691 23.2229 33.5363C23.2692 33.3035 23.3835 33.0897 23.5513 32.9219C23.7191 32.7541 23.9329 32.6398 24.1657 32.5935C24.3985 32.5472 24.6398 32.5709 24.859 32.6618C25.0783 32.7526 25.2657 32.9064 25.3976 33.1037C25.5294 33.3011 25.5998 33.5331 25.5998 33.7704C25.5998 34.0887 25.4734 34.3939 25.2483 34.6189C25.0233 34.844 24.7181 34.9704 24.3998 34.9704Z" fill="black"/>
                                <path d="M24.3998 20.5703C23.6878 20.5703 22.9918 20.7814 22.3998 21.177C21.8077 21.5726 21.3463 22.1348 21.0738 22.7927C20.8014 23.4505 20.7301 24.1743 20.869 24.8726C21.0079 25.571 21.3508 26.2124 21.8542 26.7159C22.3577 27.2194 22.9992 27.5622 23.6975 27.7011C24.3958 27.84 25.1197 27.7688 25.7775 27.4963C26.4353 27.2238 26.9975 26.7624 27.3931 26.1704C27.7887 25.5783 27.9998 24.8823 27.9998 24.1703C27.9998 23.2155 27.6205 22.2999 26.9454 21.6247C26.2703 20.9496 25.3546 20.5703 24.3998 20.5703ZM24.3998 25.3703C24.1625 25.3703 23.9305 25.2999 23.7331 25.1681C23.5358 25.0362 23.382 24.8488 23.2912 24.6295C23.2003 24.4103 23.1766 24.169 23.2229 23.9362C23.2692 23.7034 23.3835 23.4896 23.5513 23.3218C23.7191 23.154 23.9329 23.0397 24.1657 22.9934C24.3985 22.9471 24.6398 22.9708 24.859 23.0617C25.0783 23.1525 25.2657 23.3063 25.3976 23.5036C25.5294 23.701 25.5998 23.933 25.5998 24.1703C25.5998 24.4886 25.4734 24.7938 25.2483 25.0188C25.0233 25.2439 24.7181 25.3703 24.3998 25.3703Z" fill="black"/>
                                <path d="M24.3998 10.9702C23.6878 10.9702 22.9918 11.1814 22.3998 11.5769C21.8077 11.9725 21.3463 12.5347 21.0738 13.1926C20.8014 13.8504 20.7301 14.5742 20.869 15.2725C21.0079 15.9709 21.3508 16.6123 21.8542 17.1158C22.3577 17.6193 22.9992 17.9621 23.6975 18.101C24.3958 18.2399 25.1197 18.1687 25.7775 17.8962C26.4353 17.6237 26.9975 17.1623 27.3931 16.5703C27.7887 15.9783 27.9998 15.2822 27.9998 14.5702C27.9998 13.6154 27.6205 12.6998 26.9454 12.0246C26.2703 11.3495 25.3546 10.9702 24.3998 10.9702ZM24.3998 15.7702C24.1625 15.7702 23.9305 15.6998 23.7331 15.568C23.5358 15.4361 23.382 15.2487 23.2912 15.0294C23.2003 14.8102 23.1766 14.5689 23.2229 14.3361C23.2692 14.1033 23.3835 13.8895 23.5513 13.7217C23.7191 13.5539 23.9329 13.4396 24.1657 13.3933C24.3985 13.347 24.6398 13.3707 24.859 13.4616C25.0783 13.5524 25.2657 13.7062 25.3976 13.9035C25.5294 14.1009 25.5998 14.3329 25.5998 14.5702C25.5998 14.8885 25.4734 15.1937 25.2483 15.4187C25.0233 15.6438 24.7181 15.7702 24.3998 15.7702Z" fill="black"/>
                                <path d="M38.4481 22.6188C38.6159 22.451 38.7302 22.2372 38.7764 22.0044C38.8227 21.7717 38.799 21.5305 38.7082 21.3112C38.6174 21.092 38.4636 20.9046 38.2663 20.7727C38.069 20.6409 37.837 20.5705 37.5997 20.5704H32.7997V18.6672L38.4481 13.0188C38.6159 12.851 38.7302 12.6372 38.7764 12.4044C38.8227 12.1717 38.799 11.9305 38.7082 11.7112C38.6174 11.492 38.4636 11.3046 38.2663 11.1727C38.069 11.0409 37.837 10.9705 37.5997 10.9704H32.7997V7.37041C32.7997 7.05215 32.6733 6.74693 32.4483 6.52188C32.2232 6.29684 31.918 6.17041 31.5997 6.17041H17.1997C16.8815 6.17041 16.5763 6.29684 16.3512 6.52188C16.1262 6.74693 15.9997 7.05215 15.9997 7.37041V10.9704H11.1997C10.9624 10.9705 10.7305 11.0409 10.5332 11.1727C10.3359 11.3046 10.1821 11.492 10.0913 11.7112C10.0005 11.9305 9.97676 12.1717 10.023 12.4044C10.0693 12.6372 10.1836 12.851 10.3513 13.0188L15.9997 18.6672V20.5704H11.1997C10.9624 20.5705 10.7305 20.6409 10.5332 20.7727C10.3359 20.9046 10.1821 21.092 10.0913 21.3112C10.0005 21.5305 9.97676 21.7717 10.023 22.0044C10.0693 22.2372 10.1836 22.451 10.3513 22.6188L15.9997 28.2672V30.1704H11.1997C10.9624 30.1705 10.7305 30.2409 10.5332 30.3727C10.3359 30.5046 10.1821 30.692 10.0913 30.9112C10.0005 31.1305 9.97676 31.3717 10.023 31.6045C10.0693 31.8372 10.1836 32.051 10.3513 32.2188L15.9997 37.8672V40.9704C15.9997 41.2887 16.1262 41.5939 16.3512 41.8189C16.5763 42.044 16.8815 42.1704 17.1997 42.1704H31.5997C31.918 42.1704 32.2232 42.044 32.4483 41.8189C32.6733 41.5939 32.7997 41.2887 32.7997 40.9704V37.8672L38.4481 32.2188C38.6159 32.051 38.7302 31.8372 38.7764 31.6045C38.8227 31.3717 38.799 31.1305 38.7082 30.9112C38.6174 30.692 38.4636 30.5046 38.2663 30.3727C38.069 30.2409 37.837 30.1705 37.5997 30.1704H32.7997V28.2672L38.4481 22.6188ZM34.7029 22.9704L32.7997 24.8736V22.9704H34.7029ZM34.7029 13.3704L32.7997 15.2736V13.3704H34.7029ZM14.0965 13.3704H15.9997V15.2736L14.0965 13.3704ZM14.0965 22.9704H15.9997V24.8736L14.0965 22.9704ZM14.0965 32.5704H15.9997V34.4736L14.0965 32.5704ZM30.3997 39.7704H18.3997V8.57041H30.3997V39.7704ZM34.7029 32.5704L32.7997 34.4736V32.5704H34.7029Z" fill="black"/>
                            </svg>
                            <div class="mt-4">
                                <h1 class="font-normal text-lg mb-3">Mandalika International Circuits</h1>
                                <p class="font-medium text-lg text-briix-primary">12 Mins Drive</p>
                            </div>
                        </div>
                        <div class="flex flex-col text-center lg:text-left items-center lg:items-start">
                            <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5905 32.107C12.7511 32.3615 12.9972 32.5505 13.2845 32.6401C13.5719 32.7297 13.8818 32.714 14.1586 32.5959L24.2022 28.3018L27.4614 36.3175C27.5346 36.498 27.6484 36.6593 27.7941 36.7887C27.9397 36.9181 28.1133 37.0121 28.3012 37.0635C28.4099 37.0926 28.5219 37.1075 28.6344 37.1079C28.9122 37.108 29.1824 37.0167 29.4032 36.8482L33.4275 33.7841C33.5943 33.6565 33.7268 33.4895 33.8131 33.298C33.8993 33.1065 33.9366 32.8966 33.9215 32.6871L33.33 24.4055L39.9852 21.5605C41.1904 21.0285 42.1403 20.0469 42.6324 18.8248C43.1245 17.6028 43.1201 16.2369 42.6199 15.0181C42.3752 14.4055 42.01 13.8484 41.5458 13.3797C41.0817 12.911 40.5282 12.5403 39.918 12.2896C39.3242 12.0432 38.6869 11.9184 38.0439 11.9228C37.401 11.9271 36.7654 12.0605 36.175 12.3149L30.2975 14.8293L23.3244 6.61609C23.1841 6.45126 23.0039 6.32513 22.801 6.24973C22.5981 6.17434 22.3793 6.1522 22.1654 6.18542L17.205 6.9543C17.0163 6.98365 16.8366 7.05531 16.6795 7.16391C16.5223 7.27251 16.3918 7.41523 16.2976 7.58141C16.2035 7.74759 16.1481 7.93291 16.1357 8.12352C16.1232 8.31412 16.1541 8.50507 16.2259 8.68207L20.4389 19.0461L17.7674 20.1862L12.6437 16.3139C12.4651 16.1783 12.2537 16.0926 12.0312 16.0655C11.8086 16.0383 11.5829 16.0707 11.377 16.1593L5.76806 18.5597C5.59961 18.6319 5.44881 18.7397 5.32608 18.8758C5.20335 19.0118 5.1116 19.1729 5.05717 19.3479C5.00274 19.5229 4.98692 19.7076 5.01081 19.8892C5.03469 20.0709 5.09771 20.2453 5.19551 20.4002L12.5905 32.107ZM19.176 9.21028L21.8525 8.79607L27.8629 15.8718L22.7683 18.0492L19.176 9.21028ZM11.7025 18.7763L16.8263 22.6499C17.0048 22.7854 17.2162 22.8711 17.4387 22.8983C17.6613 22.9254 17.887 22.893 18.093 22.8044L37.1731 14.6444C37.4546 14.5234 37.7574 14.4601 38.0637 14.4581C38.37 14.4562 38.6737 14.5156 38.9566 14.633C39.255 14.7563 39.5255 14.9384 39.752 15.1684C39.9785 15.3984 40.1565 15.6717 40.2752 15.9719C40.5262 16.5751 40.5321 17.2524 40.2915 17.8598C40.051 18.4673 39.583 18.9569 38.987 19.2247L33.1362 21.7264L33.0754 20.8765C33.0515 20.5405 32.8952 20.2278 32.6408 20.0072C32.3864 19.7865 32.0547 19.6759 31.7187 19.6997C31.3828 19.7236 31.0701 19.8799 30.8494 20.1343C30.6287 20.3888 30.5181 20.7204 30.542 21.0564L31.3362 32.1792L29.1752 33.8259L25.1218 23.8456C24.9953 23.5344 24.7504 23.2861 24.4409 23.1555C24.1313 23.0248 23.7826 23.0225 23.4713 23.1489C23.1601 23.2754 22.9118 23.5204 22.7812 23.8299C22.6505 24.1394 22.6482 24.4882 22.7746 24.7994L23.2433 25.9509L14.1561 29.8421L8.13044 20.304L11.7025 18.7763Z" fill="black"/>
                                <path d="M41.7332 39.104H6.36337C6.02742 39.104 5.70524 39.2375 5.46768 39.475C5.23013 39.7126 5.09668 40.0347 5.09668 40.3707C5.09668 40.7066 5.23013 41.0288 5.46768 41.2664C5.70524 41.5039 6.02742 41.6374 6.36337 41.6374H41.7332C42.0691 41.6374 42.3913 41.5039 42.6289 41.2664C42.8664 41.0288 42.9999 40.7066 42.9999 40.3707C42.9999 40.0347 42.8664 39.7126 42.6289 39.475C42.3913 39.2375 42.0691 39.104 41.7332 39.104Z" fill="black"/>
                            </svg>
                            <div class="mt-4">
                                <h1 class="font-normal text-lg mb-3">Lombok International Airport</h1>
                                <p class="font-medium text-lg text-briix-primary">20 Mins Drive</p>
                            </div>
                        </div>
                    
                    </div>
                </div>
                <div class="rounded-lg w-full lg:rounded-r-none lg:rounded-l-lg overflow-hidden">
                    <iframe v-if="currentGroup == 'siwa_cliff'" class="w-full h-full aspect-square lg:aspect-auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4528.1609465590955!2d116.2634302811654!3d-8.880210156772465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcda93528501d37%3A0x1cb44e052f78b871!2sSIWA%20Cliffs%2C%20Lombok!5e0!3m2!1sen!2sid!4v1663764438170!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <iframe v-else class="w-full h-full aspect-square lg:aspect-auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.9260922214867!2d116.27207901499762!3d-8.886463793588256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcda82d85b24cd9%3A0x2de1d83e03f78d8d!2sKu%20Villas!5e0!3m2!1sen!2sid!4v1663765864261!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>

            <!-- Discover More -->
            <section class="briix-container lg:mt-[287px] mt-20">

                <!-- Header -->
                <div class="flex items-center justify-between">
                    <div>
                        <h1 class="font-medium  text-xl lg:text-2xl text-briix-primary leading-[33px] tracking-[0.2em]">
                            DISCOVER MORE</h1>
                        <h2 class="font-medium text-2xl lg:text-4xl lg:leading-[50px] tracking-[0.03em]">Similar
                            Properties.</h2>
                    </div>

                    <div class="hidden lg:inline-flex items-center space-x-4">
                        <button type="button" class="rounded-full p-2 bg-briix-primary/50">
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.1775 5.11816L2.625 9.67066L7.1775 14.2232" stroke="#C7E7F4"
                                    stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M15.3754 9.6709H2.75293" stroke="#C7E7F4" stroke-width="1.5"
                                    stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </button>
                        <button type="button" class="rounded-full p-2 bg-briix-primary">
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8223 5.11816L15.3748 9.67066L10.8223 14.2232" stroke="white"
                                    stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M2.625 9.6709H15.2475" stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            <!-- Card of Properties -->
            <div class="briix-container grid lg:grid-cols-2 gap-10 lg:gap-20 my-20 lg:mt-[100px] lg:mb-[200px]">
                <CardProperty v-for="(villa, idx) in villas" :key="idx" :villa="villa" />
            </div>

            <div class="lg:hidden inline-flex items-center justify-center w-full space-x-4 mb-10">
                <button type="button" class="rounded-full p-2 bg-briix-primary/50">
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.1775 5.11816L2.625 9.67066L7.1775 14.2232" stroke="#C7E7F4" stroke-width="1.5"
                            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.3754 9.6709H2.75293" stroke="#C7E7F4" stroke-width="1.5" stroke-miterlimit="10"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </button>
                <button type="button" class="rounded-full p-2 bg-briix-primary">
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8223 5.11816L15.3748 9.67066L10.8223 14.2232" stroke="white" stroke-width="1.5"
                            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.625 9.6709H15.2475" stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </section>
    </Layout>
</template>
<script>
import Hero from '@/components/home/Hero.vue';
import OurProperties from '@/components/home/OurProperties.vue';
import WhyUseBriix from '@/components/home/WhyUseBriix.vue';
import SiwaCliffSection from '@/components/home/SiwaCliffSection.vue';
import Footer from '@/components/home/Footer.vue';
import KuVillaSection from '@/components/home/KuVillaSection.vue';
import AraVillaSection from '@/components/home/AraVillaSection.vue';
import SiwaUluwatuVillaSection from '@/components/home/SiwaUluwatuVillaSection.vue';
import CardFacility from '@/components/cards/CardFacility.vue';
import CardProperty from '@/components/cards/CardProperty.vue';
import properties from '@/data/properties.json'
import IndividualCarrousel from '../components/home/IndividualCarrousel.vue';
import Header from '../components/home/Header.vue';
import LogoBriix from '../components/svg/LogoBriix.vue';
export default {
    components: { Hero, OurProperties, WhyUseBriix, SiwaCliffSection, Footer, KuVillaSection, AraVillaSection, SiwaUluwatuVillaSection, CardFacility, CardProperty, IndividualCarrousel, Header, LogoBriix },
    metaInfo: {
        title: "Details for each property",
        meta: [
            {
                name: 'description',
                content: 'Fully managed wellness resort and Providing world class services.'
            }
        ],
    },
    data() {
        return {
            currentGroup: this.$route.query.group,
            properties,
            property: {},
            villas: [
                {
                    id: "0fe1c6d2-0141-46be-a65c-98f4bdec033c",
                    name: "Villa A",
                    price: "10,605,750,000",
                    address: "Prabu, Pujut, Central Lombok Regency, West Nusa Tenggara",
                    area: 253,
                    bed: 2,
                    bath: 2,
                    img: "card_villa_a.jpg",
                    planImg: "villa_a.png",
                    villaGroup: "siwa_cliff"
                },
                {
                    id: "0e441c16-8300-4763-bc78-9b62e69bf176",
                    name: "Villa B",
                    price: "11,790,750,000",
                    address: "Prabu, Pujut, Central Lombok Regency, West Nusa Tenggara",
                    area: 303,
                    bed: 3,
                    bath: 2,
                    img: "card_villa_b.jpg",
                    planImg: "villa_b.png",
                    villaGroup: "siwa_cliff"
                },
            ]
        }
    },

    mounted(){
        const {id, group} = this.$route.query;
        this.getSingleProperty(id, group);
    },
    methods:{
        getSingleProperty(id, group){
            const filtered = this.properties.filter(prop => prop.id == id && prop.villaGroup == group );
            if(filtered.length)
                this.property = filtered[0];
        }
    }
}
</script>