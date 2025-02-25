<template>
  <div class="relative cursor-pointer" @click="toggleDropdown()">
    <div
      class="focus:outline-none whitespace-nowrap transition-all duration-300 ease-in-out hover:text-accent-default focus:shadow-outline"
      :class="{
        'h-full': appearance === 'popup',
        'w-full rounded bg-primary-lightest p-2': appearance === 'float',
      }"
    >
      <div v-if="appearance === 'popup'" class="grid-icon-label font-semibold">
        <span class="text-center">
          {{ selectedCurrency && selectedCurrency.symbol }}
        </span>

        <span class="uppercase">{{
          selectedCurrency && selectedCurrency.code
        }}</span>
      </div>
      <div v-else class="flex items-center">
        <span
          v-if="
            display === 'symbol-code' &&
            selectedCurrency &&
            selectedCurrency.symbol !== selectedCurrency.code
          "
          class="mr-2"
        >
          {{ selectedCurrency.symbol }}
        </span>
        <span class="uppercase">{{ selectedCurrency.code }}</span>
      </div>
    </div>

    <!-- Overlay -->
    <transition name="popup" appear :duration="500">
      <div v-if="appearance === 'popup' && dropdownIsActive">
        <div
          class="overlay fixed top-0 left-0 z-30 h-full w-full bg-primary-darker opacity-50"
          @click="dropdownIsActive = false"
        />
      </div>
    </transition>

    <ul
      v-show="dropdownIsActive"
      :class="{
        'center-x absolute w-max border border-primary-med shadow-md':
          appearance === 'float',
        'center-xy fixed mx-auto w-full max-w-80': appearance === 'popup',
      }"
      class="z-40 -mt-px block rounded bg-primary-lightest"
      role="listbox"
    >
      <li
        v-for="currency in currencyList"
        :key="`option-${currency.code}`"
        :class="{
          'pointer-events-none': currency.code === currentCurrency,
        }"
        class="mb-0 flex cursor-pointer items-center border-b border-primary-light px-2 last:border-b-0 hover:bg-primary-lighter"
        role="option"
        @click="selectCurrency(currency)"
      >
        <div class="w-full p-2">
          <span v-if="!hideSymbolOnList" class="mr-2 font-semibold">{{
            currency.symbol
          }}</span>
          <span
            :class="{
              'opacity-25': currency.code === currentCurrency,
              'my-2 mx-auto': appearance === 'popup',
            }"
          >
            {{ currency.name }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CurrencySelect',

  props: {
    appearance: {
      type: String,
      default: 'float',
    },
    currentCurrency: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      dropdownIsActive: false,
      display: null,
      hideSymbolOnList: false,
      currencyList: [],
    };
  },

  async fetch() {
    // Set component data
    const { $swell } = this;

    this.display = await $swell.settings.get(
      'header.currency.display',
      'symbol-code',
    );
    this.currencyList = await $swell.currency.list();
    this.hideSymbolOnList = await $swell.settings.get(
      'header.currency.hideSymbol',
      false,
    );
  },

  computed: {
    selectedCurrency() {
      const { currencyList, currentCurrency } = this;
      return currencyList.find((currency) => currency.code === currentCurrency);
    },
  },

  mounted() {
    // Toggle off dropdown if clicked outside
    window.addEventListener('click', this.clickOutside);
  },

  beforeDestroy() {
    // Remove event listeners
    window.removeEventListener('click', this.clickOutside);
  },

  methods: {
    toggleDropdown() {
      this.dropdownIsActive = !this.dropdownIsActive;
    },

    async selectCurrency(currency) {
      this.dropdownIsActive = false;
      await this.$store.dispatch('selectCurrency', currency);
    },

    clickOutside(e) {
      if (!this.$el.contains(e.target)) {
        this.dropdownIsActive = false;
      }
    },
  },
};
</script>
