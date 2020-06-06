const Mask = {
  apply(input, func) {
    setTimeout(function() {
      input.value = Mask[func](input.value)
    }, 1)
  },
  phone(value) {
    value = value.replace(/\D/g, "")

    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d{4})(\d)/, "$1-$2")

    return value
  }
}