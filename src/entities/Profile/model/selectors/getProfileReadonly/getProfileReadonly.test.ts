import { StateSchema } from 'app/providers/StoreProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { getProfileReadonly } from './getProfileReadonly'

describe('getProfileReadonly.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    }
    expect(getProfileReadonly(state as StateSchema)).toEqual(true)
  })

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined)
  })
})
