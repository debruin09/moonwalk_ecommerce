<template>
 
  <footer class="h-96 bg-black pt-1 mt-5 w-full absolute">
    <div class="container mx-auto px-6">
      <div class="sm:flex sm:mt-8">
        <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
          <div class="flex flex-col">
            <span class="font-bold text-white uppercase mt-4 md:mt-0 mb-2">Stay Connected</span>
            <div class="flex pt-2 space-x-2 justify-start">
              <a
                href="https://instagram.com/moonwalkstore_sa"
                class="w-8 h-8 border text-white rounded-full text-center py-1 ml-2 hover:text-white hover:bg-at-instagram hover:border-at-instagram-light"
              >
                <fa :icon="['fab', 'instagram']" />
              </a>
              <a
                target="_blank"
                href="https://tiktok.com"
                class="w-8 h-8 border text-white rounded-full text-center hover:text-white hover:bg-blue-600 hover:border-blue-600"
              >
                <img src="../assets/tiktok.png"  />
              </a>
            </div>
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-white uppercase mt-4 md:mt-0 mb-2">Contact</span>

            <span class="my-2 text-white">WhatsApp: 079 056 0756</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-6">
      <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
        <div class="sm:w-2/3 text-center py-6">
          <p class="text-sm text-white font-bold mb-2">© 2021 by moonwalk</p>
        </div>
      </div>
    </div>
  </footer>
</template>




