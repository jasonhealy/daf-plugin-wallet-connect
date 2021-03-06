var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
import AsyncStorage from '@react-native-community/async-storage'
export function asyncStorageSave(key, value) {
  return __awaiter(this, void 0, void 0, function* () {
    const jsonValue = JSON.stringify(value)
    try {
      yield AsyncStorage.setItem(key, jsonValue)
      console.log(`AsyncStorage: saved value for key: ${key}`)
    } catch (err) {
      console.log(
        `AsyncStorage: failed to save value for key: ${key} error: ${err}`,
      )
    }
  })
}
export function asyncStorageLoad(key) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      const data = yield AsyncStorage.getItem(key)
      if (data) {
        console.log(`AsyncStorage: loaded value for key: ${key}`)
        const jsonValue = JSON.parse(data)
        return jsonValue
      }
      console.log(`AsyncStorage: value does not exist for key: ${key}`)
    } catch (err) {
      console.log(
        `AsyncStorage: failed to load value for key: ${key} error: ${err}`,
      )
    }
    return null
  })
}
export function asyncStorageDelete(key) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      yield AsyncStorage.removeItem(key)
      console.log(`AsyncStorage: removed value for key: ${key}`)
    } catch (err) {
      console.log(
        `AsyncStorage: failed to remove value for key: ${key} error: ${err}`,
      )
    }
  })
}
//# sourceMappingURL=asyncStorage.js.map
