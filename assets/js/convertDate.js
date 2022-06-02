const getMonth = (item) => {
  switch (parseInt(item)) {
    case 1:
      return 'Januari'
    case 2:
      return 'Februari'
    case 3:
      return 'Maret'
    case 4:
      return 'April'
    case 5:
      return 'Mei'
    case 6:
      return 'Juni'
    case 7:
      return 'Juli'
    case 8:
      return 'Agustus'
    case 9:
      return 'September'
    case 10:
      return 'Oktober'
    case 11:
      return 'November'
    case 12:
      return 'Desember'
    default:
      return ''
  }
}

const convertDate = (input) => {
  const item = new Date(input)
  return `${item.getDate().toString().padStart(2, '0')} ${getMonth(
    item.getMonth() + 1
  )} ${item.getFullYear()}`
}

export default convertDate