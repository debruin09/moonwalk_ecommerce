<script setup lang="ts">
import { ref } from "@vue/reactivity";

import SearchBar from "./nav/SearchBar.vue";
import MoonwalkLogo from "./nav/MoonwalkLogo.vue";
import CartIcon from "./nav/CartIcon.vue";


const toggleMenuState = ref(false);
const toggleMenu = () => {
    toggleMenuState.value = !toggleMenuState.value
}
const toggleSearchState = ref(false);
const toggleSearch = () => {
    toggleSearchState.value = !toggleSearchState.value
}
</script>

<template>
    <!--  Mobile Menu  -->
    <div :class="toggleMenuState ? 'app-navbar-open' : 'app-navbar-close'"
        class="z-50 app-navbar fixed font-roboto overflow-x-scroll  w-full flex flex-col  bg-white top-0 h-screen">
        <div class="flex justify-between items-center px-5">
            <div class="flex content-center py-4 text-center justify-center items-center font-bold pt-5">
                MOONWALK
            </div>
            <div class="flex items-center justify-center">
                <vue-feather @click="toggleMenu()" stroke="black" type="x"></vue-feather>
            </div>

        </div>
        <div>
            <router-link @click="toggleMenu()" class="block py-2 px-4 underline" :to="{ name: 'Home' }">HOME</router-link>
            <router-link @click="toggleMenu()" class="block py-2 px-4 underline" :to="{ name: 'Login' }">LOGIN</router-link>
        </div>
    </div>
    <!--  Mobile Search  -->
    <div :class="toggleSearchState ? 'app-navbar-open' : 'app-search-close'"
        class="z-50 app-search fixed font-roboto overflow-x-scroll  w-full flex flex-col  bg-white top-0 h-screen">
        <div class="flex justify-between items-center py-5 ">
            <div class="flex flex-col">
                <div class="flex justify-between items-center px-5">
                    <div class="flex  justify-between items-center px-5 py-3">
                        <div class="flex w-full space-x-2 ease-in-out duration-500 transition">
                            <span
                                class="flex rounded-full  items-center px-3 py-1.5 text-base font-normal bg-gray-200 text-gray-700 text-center whitespace-nowrap "
                                id="basic-addon2">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search"
                                    class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="currentColor"
                                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                                    </path>
                                </svg>
                            </span>
                            <input type="search"
                                class="relative rounded-full  flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-200 bg-clip-padding  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />

                        </div>
                    </div>
                    <div class="flex items-center justify-center rounded-full p-2 bg-slate-200">
                        <vue-feather @click="toggleSearch()" stroke="black" type="x"></vue-feather>
                    </div>
                </div>
                <div class="px-5 py-5">
                    <h2 class="font-semibold">Suggestions</h2>
                    <div class="py-5 flex flex-col">
                        <a>Nike</a>
                        <a>Adida</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- Desktop Menu-->
    <nav class="bg-white">
        <div class="border-none bg-white">
            <div class="max-w-7xl mx-auto">
                <div class="flex items-center justify-between">
                    <!-- Logo -->
                    <div class="flex justify-center items-center pl-3">
                        <div class="md:hidden">
                            <vue-feather @click="toggleMenu()" stroke="black" type="menu"></vue-feather>
                        </div>
                        <moonwalk-logo />
                    </div>
                    <!--  Rest of the menu -->
                    <div class="flex space-x-5 font-extralight font-roboto">
                        <div class="md:flex space-x-3 items-center">
                            <SearchBar />
                            <router-link class="hidden ink-underline link-underline-black text-black"
                                :to="{ name: 'Home' }">
                                HOME</router-link>

                            <router-link class="hidden link-underline link-underline-black text-black"
                                :to="{ name: 'Login' }">
                                LOGIN</router-link>
                            <!-- <router-link :to="{ name: 'Account' }" class="link">Account</router-link> -->
                        </div>
                        <transition>
                            <div class="flex md:hidden items-center justify-center ">
                                <vue-feather @click="toggleSearch()" stroke="black"
                                    :type="toggleSearchState ? 'x' : 'search'">
                                </vue-feather>
                            </div>
                        </transition>

                        <CartIcon />
                    </div>
                </div>
            </div>
        </div>


        <!-- Mobile Menu-->

        <!-- <transition name="mobile-menu">
            <div class="flex flex-col bg-white pb-10 md:hidden" v-show="showMobileMenu">
                <router-link class="block py-2 px-4 hover:bg-light-dark" :to="{ name: 'Home' }">Home</router-link>
                <router-link class="block py-2 px-4 hover:bg-light-dark" :to="{ name: 'Login' }">Login</router-link>
            </div>
        </transition> -->
    </nav>

</template>

<style scoped>
/* HEADER with drop-shadow on scroll */
nav {
    height: 80px;
    /* 64 + 16px */
    position: sticky;
    -webkit-position: sticky;
    /* negative top allows for 16 pixels of movement before sticking */
    top: -16px;
    /* make sure header overlaps main*/
    z-index: 1;
}

/* PSEUDO ELEMENTS to create drop-shadow */
nav::before,
nav::after {
    content: "";
    display: block;
    height: 16px;
    /* make pseudo elements sticky as well */
    position: sticky;
    -webkit-position: sticky;
}

/* SHADOW */
nav::before {
    top: 48px;
    /* shadow is at bottom of element, so at 48 + 16 = 64px */
    box-shadow: 0px 2px 5px rgba(43, 43, 43, 0.5);
}

/* COVER */
nav::after {
    /* linear gradient from background color to transparent acts as
     a transition effect so the shadow appears gradually */
    background: linear-gradient(white 30%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0.4) 70%,
            transparent);
    top: 0;
    /* cover should fall over shadow */
    z-index: 2;
}

/* HEADER CONTENT */
nav>div {
    height: 64px;
    position: sticky;
    -webkit-position: sticky;
    top: 0px;
    /* compensate for shadow with negative margin */
    margin-top: -16px;
    /* content should fall over shadow and cover */
    z-index: 3;
}

nav>div div {
    margin: 0;
}

.link-underline {
    border-bottom-width: 0;
    background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
    background-size: 0 3px;
    background-position: 0 100%;
    background-repeat: no-repeat;
    transition: background-size 0.3s ease-in-out;
}

.link-underline-black {
    background-image: linear-gradient(transparent, transparent), linear-gradient(#f2c, #f2c);
}

.link-underline:hover {
    background-size: 100% 3px;
    background-position: 0 100%;
}

.app-navbar {
    transition: all 330ms ease-out;
}

.app-navbar-open {
    transform: translateX(0%);
}

.app-navbar-close {
    transform: translateX(-100%);
}

.app-search {
    transition: all 330ms ease-out;
}

.app-search-open {
    transform: translateX(0%);
}

.app-search-close {
    transform: translateX(100%);
}
</style>