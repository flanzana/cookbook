const localStorageMock = (store: { [key: string]: string }): Partial<Storage> => ({
  getItem(key) {
    return store[key]
  },
  setItem(key, value) {
    store[key] = value
  },
})

const mockLocalStorage = (store: Record<string, string>): void => {
  Object.defineProperty(window, "localStorage", {
    writable: true,
    value: localStorageMock(store),
  })
}

export default mockLocalStorage
