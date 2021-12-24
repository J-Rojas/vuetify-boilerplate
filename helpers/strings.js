import initials from 'initials'
import isDarkColor from 'is-dark-color'
import stc from 'string-to-color'

export const isDarkColour = (string) => isDarkColor(string)

export const percentageColour = (percentage) => {
  if (!percentage) {
    return 'grey'
  }
  switch (true) {
    case percentage < 25:
      return 'error'
    case percentage >= 25 && percentage < 50:
      return 'warning'
    case percentage >= 50 && percentage < 75:
      return 'info'
    default:
      return 'success'
  }
}

export const stringToColour = (string) => stc(string)

export const stringToInitials = (string) => initials(string)
