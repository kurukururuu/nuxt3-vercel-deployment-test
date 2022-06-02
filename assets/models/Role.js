
import faker from '@faker-js/faker/locale/id_ID'

export class Profile {
  constructor ({
    id = null,
    name = null,
    created_at = new Date(),
    updated_at = new Date()
  } = {}) {
    this.id = id
    this.name = name
    this.timestamp = {
      created: created_at,
      updated: updated_at
    }
  }

  LIST_ROLES = [
    'Phase 1 Viewer',
    'Phase 3 Viewer',
    'Sutradara',
    'Penulis Skenario Asli',
    'Penulis Skenario Adaptasi',
    'Pengarah Sinematografi',
    'Pengarah Artistik',
    'Penata Efek Visual',
    'Penyunting Gambar',
    'Penata Suara',
    'Penata Musik',
    'Pencipta Lagu Tema',
    'Penata Busana',
    'Penata Rias',
    'Aktor',
    'Aktris',
  ]

  createItem (data) {
    return Object.freeze(new Profile(data))
  }

  roles() {
    return this.LIST_ROLES
  }

  createDummies() {
    const arr = []
    this.roles().forEach(role => {
      const data = {
        id: faker.datatype.uuid(),
        name: role,
      }

      arr.push(Object.freeze(new Profile(data)))
    })

    return arr
  }
}

export default Profile
