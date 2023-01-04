const fetchProducts = async () => {
    try {
      const { data } = await axios.get('https://nodejsforlearn.herokuapp.com/product')
      
      addProductToTable(data.data)
    } catch (error) {
      console.error(`[ERROR FETCHING PRODUCT]: ${error.message}`)
    }
  }
  
  const main = async () => {
    await fetchProducts()
  }
  
  const addProductToTable = (products) => {
    const productTable = document.getElementById('products-table')
  
    let bodyHtml = `
    <tr>
      <th>ID</th>
      <th>TITLE</th>
      <th>PRICE</th>
    </tr>
    `
  
    products.forEach((product) => {
      bodyHtml += `
      <tr>
        <td>${product._id}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
      </tr>
      `
    })
  
    productTable.innerHTML = bodyHtml
  }
  
  const createButton = document.getElementById('create-button')
  
  createButton.addEventListener('click', async () => {
    const nameElement = document.getElementById('create-title-form')
    const priceElement = document.getElementById('create-price-form')
  
    const name = nameElement.value
    const price = +priceElement.value
  
    if (!name || !price) {
      return
    }
  
    try {
      const { data }= await axios.post('https://nodejsforlearn.herokuapp.com/product', {name, price})
      
      if (data.success) {
        await fetchProducts()
      }
    } catch (error) {
      console.error(`[ERROR CREATING PRODUCT]: ${error.message}`)
    }
  })
  
  main()