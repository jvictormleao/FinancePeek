<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <nav>
            <RouterLink class="item" to="/">
                <div class="icon"><v-icon name="fa-home" scale="1.3" /></div><span class="text">Home</span><span
                    class="indicator"></span>
            </RouterLink>
            <RouterLink class="item" to="/about">
                <div class="icon"><v-icon name="fa-credit-card" scale="1.3" /></div>

                <span class="text">Earnings</span>
                <span class="indicator"></span>
            </RouterLink>
            <RouterLink class="item" to="/about">
                <div class="icon"><v-icon name="fa-regular-credit-card" scale="1.3" /></div>
                <span class="text">Expenses</span>
                <span class="indicator"></span>
            </RouterLink>
            <RouterLink class="item" to="/about">
                <div class="icon"><v-icon name="md-flag-round" scale="1.3" /></div>
                <span class="text">Goal</span>
                <span class="indicator"></span>
            </RouterLink>




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
        padding: 0 2rem;
        background-color: blue;
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
        width: 25%;
        height: 3rem;
    }

    .icon {
        position: absolute;
        z-index: 5;

    }

    .indicator {
        position: absolute;
        z-index: 4;
        height: 3.5rem;
        width: 3.5rem;
        background-color: red;
        border-radius: 50%;
        visibility: hidden;
    }

    .text {
        font-size: 1rem;
        position: absolute;
        text-align: center;
        bottom: -20px;
        visibility: hidden;
    }

    nav a.router-link-exact-active {
        color: white
    }

    nav a.router-link-exact-active .icon {
        transform: translateY(-100%);
    }

    nav a.router-link-exact-active .indicator {
        transform: translateY(-50%);
        visibility: visible;
        border: 8px solid #181818;
    }

    nav a.router-link-exact-active .text {
        transform: translateY(-20px);
        visibility: visible;
        color: white
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
  