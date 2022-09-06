<template>
    <Layout>
        <section class="wrapper-section-detail">
            <section class="min-h-screen lg:min-h-[918px] h-full relative w-full">
                <!-- Clean Carrouses Master Individual -->
                <IndividualCarrousel/>
                <div
                    class="absolute mx-auto w-full inset-0 lg:min-h-[918px] bg-gradient-to-b from-black/75 to-black/25">
                    <div class="flex h-full min-h-screen lg:min-h-[918px] flex-col justify-between briix-container">
                        <header class="pt-8">
                            <LogoBriix />
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

                        <div class="inline-flex items-center justify-between lg:space-x-3 mt-8 lg:mt-0">
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

                    <!-- Facility -->
                    <div class="mt-8 grid lg:grid-cols-6 -ml-2 lg:-ml-0">
                        <div class="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-y-4 lg:col-span-4">
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
                        <div class="lg:col-span-2 text-right">
                            <p class="lg:text-[32px] hidden mt-3 sm:block leading-[33px] font-medium text-briix-primary">IDR {{property.price || '13,000,000,000'}}</p>
                        </div>
                    </div>

                    <div class="w-full">
                        <div class="lg:flex max-w-screen-lg mx-auto space-y-5 px-10 py-16 lg:space-y-0 mt-20 lg:mt-[150px] items-center justify-center lg:space-x-20 w-full rounded-[15px] shadow-custom-c1">
                            <button type="button"
                                class="rounded-full w-full border-2 border-briix-primary transition text-briix-primary hover:bg-briix-blue-1 py-3 px-10 lg:px-20 inline-flex items-center justify-center space-x-4">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.5 12.4619H8.51M12.5 12.4619H12.51M16.5 12.4619H16.51M21.5 12.4619C21.5 16.8799 17.47 20.4619 12.5 20.4619C11.0286 20.4669 9.57479 20.1427 8.245 19.5129L3.5 20.4619L4.895 16.7419C4.012 15.5039 3.5 14.0359 3.5 12.4619C3.5 8.04391 7.53 4.46191 12.5 4.46191C17.47 4.46191 21.5 8.04391 21.5 12.4619Z" stroke="#1F9ED3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p>Live Chat</p>
                            </button>
                            <button type="button"
                                class="rounded-full w-full text-white bg-briix-primary shadow-custom hover:bg-briix-primary/80 transition py-3.5 px-10 lg:px-20 inline-flex items-center justify-center space-x-4">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.00002 6.46193C6.80224 6.46193 6.6089 6.52058 6.44445 6.63046C6.28 6.74034 6.15182 6.89652 6.07614 7.07925C6.00045 7.26197 5.98065 7.46304 6.01923 7.65702C6.05782 7.851 6.15306 8.02918 6.29291 8.16904C6.43276 8.30889 6.61095 8.40413 6.80493 8.44272C6.99891 8.4813 7.19997 8.4615 7.3827 8.38581C7.56543 8.31012 7.7216 8.18195 7.83149 8.0175C7.94137 7.85305 8.00002 7.65971 8.00002 7.46193C8.00002 7.19671 7.89466 6.94236 7.70712 6.75482C7.51959 6.56729 7.26523 6.46193 7.00002 6.46193ZM21.71 12.2419L12.23 2.78193C12.1368 2.68139 12.0239 2.60111 11.8983 2.54606C11.7727 2.49101 11.6371 2.46237 11.5 2.46193H5.50002C5.36841 2.46117 5.23795 2.48639 5.11611 2.53616C4.99427 2.58592 4.88346 2.65925 4.79002 2.75193L2.29002 5.24193C2.19734 5.33537 2.12401 5.44619 2.07425 5.56802C2.02448 5.68986 1.99926 5.82032 2.00002 5.95193V11.9519C2.0037 12.2167 2.10728 12.4703 2.29002 12.6619L11.78 22.1619C11.9717 22.3447 12.2253 22.4482 12.49 22.4519C12.6216 22.4527 12.7521 22.4275 12.8739 22.3777C12.9958 22.3279 13.1066 22.2546 13.2 22.1619L21.71 13.6519C21.8027 13.5585 21.876 13.4477 21.9258 13.3258C21.9756 13.204 22.0008 13.0735 22 12.9419C21.9938 12.6806 21.8904 12.431 21.71 12.2419ZM12.49 20.0519L4.00002 11.5519V6.36193L5.90002 4.46193H11.08L19.58 12.9519L12.49 20.0519Z" fill="white"/>
                                </svg>
                                <p>Enquire Now</p>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <WhyUseBriix />

            <!-- The Masterplan -->
            <section class="relative my-24 lg:mt-[250px]">
                <div class="float-right px-5 lg:px-0 text-right lg:max-w-lg w-full lg:mr-[100px] mb-12">
                    <div class="inline-flex items-center space-x-5">
                        <div class="h-0.5 lg:mb-5 bg-briix-primary w-[100px]"></div>
                        <h1 class="lg:text-[36px] text-2xl lg:mb-4 font-semibold leading-[56px] text-right">Site Plan</h1>
                    </div>
                    <p
                        class="lg:text-xl leading-relaxed lg:leading-[36px] tracking-[0.02em] text-briix-black-100 text-right">
                        The SIWA Cliffs property marks a new dawn in luxury property development and management in South
                        Lombok with it's unique approach to sustainability through design, service and living.</p>
                </div>
                <g-image :src="require(`!!assets-loader!@images/plan/${property.planImg||'villa_a.png'}`)" :alt="property.planImg" />
            </section>


            <!-- Half 1 -->
            <section class="grid lg:grid-cols-2 p-5 lg:p-0 lg:mt-[215px]">
                <div class="lg:px-[100px] mt-3 lg:mt-0   order-last lg:order-first">
                    <h1 class="font-medium  text-xl lg:text-2xl text-briix-primary leading-[33px] tracking-[0.2em]">
                        VILLA K</h1>
                    <h2 class="font-semibold lg:mt-4 text-2xl lg:text-4xl lg:leading-[50px] tracking-[0.03em]">Fully managed
                        wellness resort</h2>

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
                <div class="lg:px-[100px] mt-5 lg:mt-0   lg:text-right">
                    <h1 class="font-medium  text-xl lg:text-2xl text-briix-primary leading-[33px] tracking-[0.2em]">
                        VILLA K</h1>
                    <h2 class="font-semibold lg:mt-4 text-2xl lg:text-4xl lg:leading-[50px] tracking-[0.03em]">Providing world
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
            <section class="briix-container   lg:mt-[190px]">
                <div class="inline-flex items-center space-x-5">
                    <div class="h-0.5 lg:mb-5 bg-briix-primary w-[100px]"></div>
                    <h1 class="lg:text-[40px] text-2xl lg:mb-[30px] font-semibold leading-[56px] text-right">Floor Plan.
                    </h1>
                </div>
                <div class="mt-10 lg:mt-[100px]">
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

            <!-- Discover More -->
            <section class="briix-container lg:mt-[287px] mt-20">

                <!-- Header -->
                <div class="flex items-center justify-between">
                    <div>
                        <h1 class="font-medium  text-xl lg:text-2xl text-briix-primary leading-[33px] tracking-[0.2em]">
                            DISCOVER MORE</h1>
                        <h2 class="font-semibold text-2xl lg:text-4xl lg:leading-[50px] tracking-[0.03em]">Similar
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
import LogoBriix from '@/components/svg/LogoBriix.vue';
import CardFacility from '@/components/cards/CardFacility.vue';
import CardProperty from '@/components/cards/CardProperty.vue';
import properties from '@/data/properties.json'
import IndividualCarrousel from '../components/home/IndividualCarrousel.vue';
export default {
    components: { Hero, OurProperties, WhyUseBriix, SiwaCliffSection, Footer, KuVillaSection, AraVillaSection, SiwaUluwatuVillaSection, LogoBriix, CardFacility, CardProperty, IndividualCarrousel },
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