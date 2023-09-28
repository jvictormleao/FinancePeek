<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <nav>
            <RouterLink class="item" to="/">
                <div class="icon"><v-icon name="fa-home" scale="1.3" /></div><span class="text">Home</span>
            </RouterLink>
            <RouterLink class="item" to="/earnings">
                <div class="icon"><v-icon name="fa-credit-card" scale="1.3" /></div>
                <span class="text">Earnings</span>
            </RouterLink>
            <RouterLink class="item" to="/expenses">
                <div class="icon"><v-icon name="fa-regular-credit-card" scale="1.3" /></div>
                <span class="text">Expenses</span>
            </RouterLink>
            <RouterLink class="item" to="/goals">
                <div class="icon"><v-icon name="md-flag-round" scale="1.3" /></div>
                <span class="text">Goal</span>
                
            </RouterLink>
            <span class="indicator"></span>


        </nav>
    </header>

    <RouterView />
</template>
  
<style scoped>




@media (max-width: 767px) {
    header {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 2rem 1rem 2rem;
        left: 0;
        bottom: 0;
        z-index: 1;
        height: 4rem;
        width: 100%;

    }


    nav {
        position: relative;
        padding: 0 2rem;
        background-color: white;
        border-radius: 1rem;
        height: 100%;
        display: flex;
        justify-content: center;
        z-index: 2;
        align-items: center;
        gap: 7rem;
        width: 100%;
        font-size: 12px;
        text-align: center;
    }

    .item {
        position: relative;
        display: flex;
        z-index: 3;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        height: 3rem;
        transition: .5s;
    }

    .icon {
        position: absolute;
        z-index: 5;
        transition: .6s;
        left: 0;
    }

    .indicator {
        position: absolute;
        top: -66%;
        left: 1.03rem;
        height: 3.5rem;
        width: 3.5rem;
        background-color: green;
        border: 7px solid #181818;
        border-radius: 50%;
        visibility: hidden;
        transition: .5s;
    }

    .indicator::after {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        border-top-right-radius: 20px;
        background: transparent;
        top: 60%;
        left: -20px;
        box-shadow: 1px -10px 0 0 #181818;
    }

    .indicator::before {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        border-top-left-radius: 20px;
        background: transparent;
        top: 60%;
        right: -20px;
        box-shadow: -1px -10px 0 0 #181818;
    }

    .text {
        font-size: 1rem;
        bottom: 0;
        position: absolute;
        text-align: center;
        visibility: hidden;
        transition: ease-in-out .2s;
    }

    nav a.router-link-exact-active {
        color: white
    }

    nav a.router-link-exact-active .icon {
        transform: translateY(-100%);
    }

    nav a.router-link-exact-active:nth-child(1) ~ .indicator {
        visibility: visible;
        border: 8px solid #181818;
    }

    nav a.router-link-exact-active:nth-child(2) ~ .indicator {
        transform: translateX(calc(3.5rem * 3.37));
        visibility: visible;
        border: 8px solid #181818;
    }
    nav a.router-link-exact-active:nth-child(3) ~ .indicator {
        transform: translateX(calc(3.5rem * 6.72));
        visibility: visible;
        border: 8px solid #181818;
    }
    nav a.router-link-exact-active:nth-child(4) ~ .indicator {
        transform: translateX(calc(3.5rem * 10.05));
        visibility: visible;
        border: 8px solid #181818;
    }

    nav a.router-link-exact-active .text {
        visibility: visible;
        color: white;

    }

    nav a {
        display: inline-block;
        padding: 0;
    }

    nav a:first-of-type {
        border: 0;
    }
}


@media (min-width: 320px) and (max-width: 480px) {
    header {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 1rem 1rem 1rem;
        left: 0;
        bottom: 0;
        z-index: 1;
        height: 4rem;
        width: 100%;

    }


    nav {
        padding: 0 2rem;
        background-color: white;
        border-radius: 1rem;
        height: 100%;
        display: flex;
        justify-content: center;
        z-index: 2;
        align-items: center;
        width: 100%;
        text-align: center;
    }

    .item {
        position: relative;
        display: flex;
        z-index: 3;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 25%;
        height: 3rem;
        transition: .5s;
    }

    .icon {
        position: absolute;
        z-index: 5;
        transition: .6s;
        left: 0;
    }

    .indicator {
        position: absolute;
        top: -66%;
        left: .5rem;
        height: 3.5rem;
        width: 3.5rem;
        background-color: green;
        border: 7px solid #181818;
        border-radius: 50%;
        visibility: hidden;
        transition: .5s;
    }

    .indicator::after {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        border-top-right-radius: 20px;
        background: transparent;
        top: 60%;
        left: -20px;
        box-shadow: 1px -10px 0 0 #181818;
    }

    .indicator::before {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        border-top-left-radius: 20px;
        background: transparent;
        top: 60%;
        right: -20px;
        box-shadow: -1px -10px 0 0 #181818;
    }

    .text {
        font-size: 1rem;
        bottom: 0;
        position: absolute;
        text-align: center;
        visibility: hidden;
        transition: ease-in-out .2s;
    }

    nav a.router-link-exact-active {
        color: white
    }

    nav a.router-link-exact-active .icon {
        transform: translateY(-100%);
    }

    nav a.router-link-exact-active:nth-child(1) ~ .indicator {
        visibility: visible;
        border: 8px solid #181818;
    }

    nav a.router-link-exact-active:nth-child(2) ~ .indicator {
        transform: translateX(calc(3.5rem * 2.09));
        visibility: visible;
        border: 8px solid #181818;
    }
    nav a.router-link-exact-active:nth-child(3) ~ .indicator {
        transform: translateX(calc(3.5rem * 4.17));
        visibility: visible;
        border: 8px solid #181818;
    }
    nav a.router-link-exact-active:nth-child(4) ~ .indicator {
        transform: translateX(calc(3.5rem * 6.27));
        visibility: visible;
        border: 8px solid #181818;
    }

    nav a.router-link-exact-active .text {
        visibility: visible;
        color: white;

    }

    nav a {
        display: inline-block;
        padding: 0;
    }

    nav a:first-of-type {
        border: 0;
    }
}


@media (min-width: 1024px) {}
</style>
  