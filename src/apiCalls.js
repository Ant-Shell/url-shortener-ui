const getUrls = async (dataSetter, errorSetter) => {
  try {
  const response = await fetch('http://localhost:3001/api/v1/urls')
  const data = await response.json()
  dataSetter(data.urls)
  } catch(error) {
    errorSetter(error.message)
  }
}

const postURL = async (newURLInfo) => {
  try {
 const response = await fetch('http://localhost:3001/api/v1/urls', {
  method: 'POST',
  body: JSON.stringify(newURLInfo),
  headers: {
  	'Content-Type': 'application/json'
  }
})
  const data = await response.json()
  return data
  }
  catch(error) {
    return error.message
   }
  }
export { getUrls,  postURL}
