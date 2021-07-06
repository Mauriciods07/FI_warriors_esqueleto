import cafe from "./images/cafe_grano.jpg"
import miel from "./images/miel.jpg"
import cacao from "./images/cacao.jpg"
import manzana from "./images/manzana.jpg"

const products = [
    {
        id: 1,
        name: "Café de grano",
        productType: "Café de grano",
        price: 50,
        rating: 4,
        measure: "kg",
        image: 
            cafe,
        description: 
            "Este es café de grano bien bueno.",
    },
    {
        id: 2,
        name: "Miel artesanal",
        productType: "Miel artesanal",
        price: 130,
        rating: 5,
        measure: "lt",
        image: 
            miel,
        description: 
            "Rica miel artesanal que sabe rico.",
    },
    {
        id: 3,
        name: "Cacao del bueno",
        productType: "Cacao",
        price: 70,
        rating: 4,
        measure: "kg",
        image: 
            cacao,
        description: 
            "De aquí salen un buen de productos chidos.",
    },
    {
        id: 4,
        name: "Manzana mexicana",
        productType: "Manzana",
        price: 30,
        rating: 5,
        measure: "kg",
        image: 
            manzana,
        description: 
            "Manzana roja de los campos mexicanos.",
    },
];

export default products;