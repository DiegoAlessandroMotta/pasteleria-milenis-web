import cakes from '@/mocks/cakes.json';

export class CakeController {
  static getCakes = async ({ limit = 10, category = "cake" }) => {
    // const response = await fetch("https://669579244bd61d8314cb6416.mockapi.io/api/cakes")

    // if (!response.ok) {
    //   throw new Error("Error al obtener los datos")
    // }

    // const data = await response.json()

    // const cakes = data.map(cake => ({
    //   id: cake.id,
    //   imgUrl: cake.imgUrl,
    //   imgAlt: "",
    //   title: cake.title,
    //   description: cake.description,
    //   price: cake.price
    // }))

    const filteredCakes = cakes.filter(cake => cake.category.includes(category.toLowerCase()))

    if (limit < 1 || limit > 100) {
      return filteredCakes.slice(0, 10);
    }

    return filteredCakes.slice(0, limit);
  }

  static getCake = async ({ id }) => {
    const cake = cakes.find(cake => cake.id == id)

    if (cake === undefined) {
      throw new Error("Producto no encontrado")
    }

    return cake;
  }
}