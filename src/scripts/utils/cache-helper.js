import CONFIG from '../globals/config';

const CacheHelper = {
  async cachingAppShell(request) {
    const cache = await this.openCache();
    cache.addAll(request);
  },

  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName));
  },

  async revalidateCache(request) {
    const response = await caches.match(request);
    if (response) {
      this.fetchRequest(request);
      return response;
    }
    return this.fetchRequest(request);
  },

  async openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },

  async fetchRequest(request) {
    const reqMethod = request.method;
    const response = await fetch(request);
    if (!response || response.status !== 200 || reqMethod === 'POST') {
      return response;
    }

    await this.addCache(request);
    return response;
  },

  async addCache(request) {
    const cache = await this.openCache();
    cache.add(request);
  },

};

export default CacheHelper;
