import faker from '@faker-js/faker/locale/id_ID'
import Role from './Role'

export class Profile {
  constructor ({
    id = null,
    name = null,
    email = null,
    gender = null,
    phone = null,
    watch_status = null,
    roles = [],
    birthdate = new Date(),
    created_at = new Date(),
    updated_at = new Date()
  } = {}) {
    this.id = id
    this.name = name
    this.email = email
    this.gender = gender
    this.phone = phone
    this.dob = birthdate
    this.watchStatus = watch_status
    this.roles = roles
    this.timestamp = {
      created: created_at,
      updated: updated_at
    }
  }

  createItem (data) {
    return Object.freeze(new Profile(data))
  }

  createDummy(id = 1) {
    // assign random role from the list to user
    const roleContext = new Role()
    const roles = roleContext.roles()
    const userRoles = []
    let i = 0
    while (i < (Math.floor(Math.random() * 5) + 1)) {
      userRoles.push(faker.helpers.arrayElement(roles))
      i++
    }

    const data = {
      id: faker.datatype.uuid(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.email(),
      gender: faker.helpers.arrayElement(['Laki - laki', 'Perempuan']),
      phone: faker.phone.phoneNumber(),
      location: `${faker.address.city()} ${faker.address.secondaryAddress()} ${faker.address.country()}`,
      dob: faker.datatype.datetime(),
      watch_status: faker.helpers.arrayElement(['Belum menonton', 'Sedang menonton', 'Sudah menonton']),
      roles: userRoles
    }
    return Object.freeze(new Profile(data))
  }
}

export default Profile
