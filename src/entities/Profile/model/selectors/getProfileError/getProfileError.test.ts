import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileError } from './getProfileError'

describe('getProfileError.test', () => {
  test('should return 123', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: '123',
      },
    }
    expect(getProfileError(state as StateSchema)).toEqual('123')
  })

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileError(state as StateSchema)).toEqual(undefined)
  })
})
