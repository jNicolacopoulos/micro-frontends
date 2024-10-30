<template>
    <div class="product-container" v-if="variant">
        <div id="image">
            <div><img :src="variant.image" :alt="variant.name" /></div>
        </div>
        <div id="info">
            <div id="name">
                <h3>{{ productData.name }}</h3>
                <small>{{ variant.price }}</small>
            </div>
            <span id="description">{{ variant.name }}</span>
            <p id="description-long">{{ variant.description }}</p>
        </div>
        <div id="styles">
            <button
                v-for="variant in productData.variants"
                :key="variant.sku"
                :class="{ active: selectedVariant === variant.sku }"
                type="button"
                :data-sku="variant.sku"
                @click="styleSelected(variant.sku)"
            >
                <img :src="variant.image" :alt="variant.name" />
            </button>
        </div>
    </div>
    <div v-else class="product-container">No product found</div>
</template>

<script lang="ts" src="./ProductDetails.ts"></script>
