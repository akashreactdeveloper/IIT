<template>
  <div class="flex h-screen">
    <!-- Main Content -->
    <main class="bg-slate-200 flex flex-col w-full p-6">
      <div>
        <div class="">
          <div class="card">
            <Drawer v-model:visible="visible">
              <template #container="{ closeCallback }">
                <div class="flex flex-col h-full">
                  <div class="flex items-center justify-between px-6 pt-4 shrink-0">
                    <span class="inline-flex items-center gap-2">
                      <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                          fill="var(--p-primary-color)"
                        />
                        <path
                          d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                          fill="var(--p-text-color)"
                        />
                      </svg>
                      <span class="font-semibold text-2xl text-primary">Your Logo</span>
                    </span>
                    <span>
                      <Button type="button" @click="closeCallback" icon="pi pi-times" rounded outlined></Button>
                    </span>
                  </div>
                  <div class="overflow-y-auto">
                    <ul class="list-none p-4 m-0">
                      <li>
                        <div
                          v-ripple
                          class="p-4 flex items-center justify-between text-surface-500 dark:text-surface-400 cursor-pointer p-ripple"
                          @click="toggleVisibility"
                        >
                          <span class="font-medium">FAVORITES</span>
                          <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul v-show="isFavoritesVisible" class="list-none p-0 m-0 overflow-hidden">
                          <li>
                            <router-link to="/" v-ripple class="flex items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                              <i class="pi pi-home mr-2"></i>
                              <span class="font-medium">Dashboard</span>
                            </router-link>
                          </li>
                            <li>
                            <router-link to="/courses" v-ripple class="flex items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                              <i class="pi pi-bookmark mr-2"></i>
                              <span class="font-medium">Courses</span>
                            </router-link>
                            </li>
                          <li>
                            <a v-ripple class="flex items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                              <i class="pi pi-comments mr-2"></i>
                              <span class="font-medium">Announcements</span>
                              <span class="inline-flex items-center justify-center ml-auto bg-primary text-primary-contrast rounded-full" style="min-width: 1.5rem; height: 1.5rem">3</span>
                            </a>
                          </li>
                          <li>
                            <a v-ripple class="flex items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                              <i class="pi pi-calendar mr-2"></i>
                              <span class="font-medium">Calendar</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <ul class="list-none p-4 m-0">
                      <li>
                        <div
                          v-ripple
                          class="p-4 flex items-center justify-between text-surface-500 dark:text-surface-400 cursor-pointer p-ripple"
                        >
                          <span class="font-medium">APPLICATION</span>
                          <i class="pi pi-chevron-down"></i>
                        </div>
                        <ul class="list-none p-0 m-0 overflow-hidden">
                          <li>
                            <a v-ripple class="flex items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                              <i class="pi pi-folder mr-2"></i>
                              <span class="font-medium">Projects</span>
                            </a>
                          </li>
                          <li>
                            <a v-ripple class="flex items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                              <i class="pi pi-chart-bar mr-2"></i>
                              <span class="font-medium">Performance</span>
                            </a>
                          </li>
                          <li>
                            <a v-ripple class="flex items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                              <i class="pi pi-cog mr-2"></i>
                              <span class="font-medium">Settings</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div class="mt-auto">
                    <hr class="mb-4 mx-4 border-t border-0 border-surface-200 dark:border-surface-700" />
                    <a v-ripple class="m-4 flex items-center cursor-pointer p-4 gap-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                      <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                      <span class="font-bold">Amy Elsner</span>
                    </a>
                  </div>
                </div>
              </template>
            </Drawer>
            <div class="flex items-center space-x-4 pb-5" >
              <Button icon="pi pi-bars" @click="visible = true" class="h-8" />
            <div class="card w-full ">
        <MegaMenu :model="items" class="p-4 bg-surface-0" style="border-radius: 3rem">
            <template #start>
                <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8">
                    <path
                        d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                        fill="var(--p-primary-color)"
                    />
                    <path
                        d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                        fill="var(--p-text-color)"
                    />
                </svg>
            </template>
            <template #item="{ item }">
                <a v-if="item.root" class="flex items-center cursor-pointer px-4 py-2 overflow-hidden relative font-semibold text-lg uppercase" style="border-radius: 2rem">
                    <span>{{ item.label }}</span>
                </a>
                <a v-else-if="!item.image" class="flex items-center p-4 cursor-pointer mb-2 gap-3">
                    <span class="inline-flex items-center justify-center rounded-full bg-primary text-primary-contrast w-12 h-12">
                        <i :class="[item.icon, 'text-lg']"></i>
                    </span>
                    <span class="inline-flex flex-col gap-1">
                        <span class="font-bold text-lg">{{ item.label }}</span>
                        <span class="whitespace-nowrap">{{ item.subtext }}</span>
                    </span>
                </a>
                <div v-else class="flex flex-col items-start gap-4 p-2">
                    <img alt="megamenu-demo" :src="item.image" class="w-full" />
                    <span>{{ item.subtext }}</span>
                    <Button :label="item.label" outlined />
                </div>
            </template>
            <template #end>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            </template>
        </MegaMenu>
    </div>
            </div>
          </div>
          <!-- <h1 class="text-xl font-bold ml-10">{{ componentName }}</h1> -->
        </div>
        <div class="flex justify-between items-center">
          <div class="mb-2">
            <div class="relative">
              <input placeholder="Search" class="p-2 rounded-xl w-96  pl-10" />
              <i class="pi pi-search absolute left-3 top-1/2 transform -translate-y-1/2"></i>
            </div>
          </div>
          <div class="flex space-x-2 mr-60">
            <i class="pi pi-envelope bg-white p-2 rounded-full"></i>
            <i class="pi pi-bell bg-white p-2 rounded-full"></i>
          </div>
        </div>
      </div>
      <div class="flex-1 overflow-auto">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import 'primeicons/primeicons.css';
import Drawer from 'primevue/drawer';
import MegaMenu from 'primevue/megamenu';

export default defineComponent({
  name: 'MainLayout',
  components: {
    Drawer,
    MegaMenu
  },
  setup() {
    const componentName = ref('Home');
    const visible = ref(false);
    const isFavoritesVisible = ref(false);  // Track the visibility of the "Favorites" section
    
    // Toggle dropdown visibility
    const toggleVisibility = () => {
      isFavoritesVisible.value = !isFavoritesVisible.value;
    };
    const items = ref([
    {
        label: 'Company',
        root: true,
        items: [
            [
                {
                    items: [
                        { label: 'Features', icon: 'pi pi-list', subtext: 'Subtext of item' },
                        { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item' },
                        { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item' }
                    ]
                }
            ],
            [
                {
                    items: [
                        { label: 'Solutions', icon: 'pi pi-shield', subtext: 'Subtext of item' },
                        { label: 'Faq', icon: 'pi pi-question', subtext: 'Subtext of item' },
                        { label: 'Library', icon: 'pi pi-search', subtext: 'Subtext of item' }
                    ]
                }
            ],
            [
                {
                    items: [
                        { label: 'Community', icon: 'pi pi-comments', subtext: 'Subtext of item' },
                        { label: 'Rewards', icon: 'pi pi-star', subtext: 'Subtext of item' },
                        { label: 'Investors', icon: 'pi pi-globe', subtext: 'Subtext of item' }
                    ]
                }
            ],
            [
                {
                    items: [{ image: 'https://primefaces.org/cdn/primevue/images/uikit/uikit-system.png', label: 'GET STARTED', subtext: 'Build spectacular apps in no time.' }]
                }
            ]
        ]
    },
    {
        label: 'Resources',
        root: true
    },
    {
        label: 'Contact',
        root: true
    }
]);

    return {
      componentName,
      visible,
      Drawer,
      toggleVisibility,
      isFavoritesVisible,
      items
    };
  }
});
</script>
