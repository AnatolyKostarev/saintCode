// функция для обработки данных input

export const handleChange = (e, setValue) => {
  setValue(prev => ({
    ...prev,
    [e.target.name]: e.target.value.trimStart(),
  }))
}
