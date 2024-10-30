import {
    defineComponent,
    ref,
    computed,
    onMounted,
    onBeforeUnmount,
} from 'vue';
import productData from '../../data/products.json';

interface Variant {
    sku: string;
    image: string;
    name: string;
    price: string;
    description: string;
}

export default defineComponent({
    name: 'ProductDetails',
    setup() {
        const selectedVariant = ref<string>('sedan01');

        const variant = computed(() =>
            productData.variants.find(
                (v: Variant) => v.sku === selectedVariant.value
            )
        );

        const styleSelected = (sku: string) => {
            selectedVariant.value = sku;
        };

        const addListeners = () => {
            const buttons =
                document.querySelectorAll<HTMLButtonElement>('#styles button');
            buttons.forEach((button) =>
                button.addEventListener('click', () =>
                    styleSelected(button.dataset.sku!)
                )
            );
        };

        const removeListeners = () => {
            const buttons =
                document.querySelectorAll<HTMLButtonElement>('#styles button');
            buttons.forEach((button) =>
                button.removeEventListener('click', () =>
                    styleSelected(button.dataset.sku!)
                )
            );
        };

        onMounted(() => {
            addListeners();
        });

        onBeforeUnmount(() => {
            removeListeners();
        });

        return {
            productData,
            selectedVariant,
            variant,
            styleSelected,
        };
    },
});
