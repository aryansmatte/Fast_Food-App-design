import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

    const [selectCategory, setselectCategory] = useState("All")

    const products = [
        {
            id: 1,
            name: "Classic Cheeseburger",
            price: "$5.99",
            description: "Juicy beef patty with melted cheese, lettuce, tomato, and special sauce on a toasted bun.",
            image:"/images/Burger2.jpg",
            rating: 4.7,
            category: "Burger"
          },
          {
            id: 2,
            name: "Bacon BBQ Burger",
            price: "$6.99",
            description: "Smoky bacon, crispy onion rings, and BBQ sauce over a grilled beef patty with cheddar cheese.",
            image:"/images/Burgur1.jpg",
            rating: 3,
            category: "Burger"
          }   ,
           {
            id: 3,
            name: "Spicy Chicken Burger",
            price: "$6.49",
            description: "Crispy fried chicken breast topped with spicy mayo, pickles, and lettuce on a soft bun.",
            image:"/images/Burger3.jpg",
            rating: 4.6,
            category: "Burger"
          },
          {
            id: 4,
            name: "Margherita Pizza",
            price: "$9.99",
            description: "Classic Italian pizza with fresh mozzarella, basil, and tomato sauce on a thin crust.",
            image: "/images/pizza1.jpg",
            rating: 4.9,
            category: "Pizza"
          },
          {
            id: 5,
            name: "Pepperoni Pizza",
            price: "$10.49",
            description: "Crispy pepperoni slices over a cheesy tomato sauce base on hand-tossed dough.",
            image:"/images/pizza2.jpg",
            rating: 4.8,
            category: "Pizza"
          },
          {
            id: 6,
            name: "Veggie Supreme Pizza",
            price: "$10.99",
            description: "Loaded with bell peppers, olives, onions, mushrooms, and tomatoes on a cheesy crust.",
            image:"/images/pizza1.jpg",
            rating: 4.7,
            category: "Pizza"
          }
    ]

    // const filterProduct = products.filter(
    //     (item) => item.category === selectCategory
    // )

    const filterProduct = selectCategory === 'All'
    ? products
    : products.filter(item => item.category === selectCategory);


  return (
    <div className='relative bg-gray-900 text-white h-screen'>
        <div className='container mx-auto px-8 py-16 flex flex-col-reverse md:flex-row items-center h-full'>
            <div className='flex-1 space-y-6 text-center md:text-left'>
                <h1 className='text-4xl md:text-6xl font-extrabold'>Express <span className='text-yellow-500'>Home Delivery</span></h1>
                <p className='text-gray-400 text-lg font-bold'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi distinctio non vero molestias explicabo numquam in vel nostrum, illum minima, harum facilis aspernatur dignissimos odio pariatur nesciunt ea porro velit.
                </p>
                <button className='bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-extrabold text-lg hover:bg-yellow-600'>Read More</button>
            </div>

            <div className='flex-1'>
                <img src='/Bike.png' className='w-full h-[20rem] object-cover md:w-[50rem] md:h-[50rem]'></img>
            </div>
        </div>

        <section className='py-16 bg-gray-200'>
            <div className='container mx-auto text-center'>
                <h3 className='text-sm text-yellow-500 uppercase font-bold'>Quick Pick</h3>
                <h2 className='text-4xl font-extrabold mt-2 text-yellow-600'> Popular Goods</h2>
                <div className='flex justify-center space-x-8 mt-6'>
                <button 
            onClick={() => setselectCategory('All')}
            className='text-yellow-500 font-bold border-b-2'>
            All
        </button>
                    <button 
                    onClick={()=>setselectCategory('Burger')}
                    className='text-yellow-500 font-bold border-b-2'>Burger</button>
                    <button
                     onClick={()=>setselectCategory('Pizza')}
                    className='text-yellow-500 font-bold border-b-2'>Hot Pizza</button>
                    <button
                     onClick={()=>setselectCategory('Asian Food')}
                    className='text-yellow-500 font-bold border-b-2'>Asian Food</button>
                    <button
                     onClick={()=>setselectCategory('Raw Meat')}
                    className='text-yellow-500 font-bold border-b-2'>Raw Meat</button>
                    
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 px-8'>
        
            {filterProduct.map((item) => (
            <div key={item.id} className='bg-gray-300 p-6'>
                
                <img src={item.image} alt={item.name} className='w-full h-48 object-cover mb-4' />
                <h2 className='text-lg font-bold text-black'>{item.name}</h2>

                {item.rating &&(
                <p>{"⭐".repeat(item.rating) + "☆".repeat(5 - item.rating)}</p>

            )}
                <p className='text-gray-500 text-sm mt-2'>{item.description}</p>
                <p className= ' text-lg font-extrabold mt-2 text-gray-800'>{item.price}</p>
                <Link to="menu">
                <button className='bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg mt-4'>Add To Cart</button>
                </Link>
            </div>
            ))}

            </div>
        </section>

        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4'> 
            <h2 className='text-3xl font-bold text-gray-800 mb-2'>Our Recommendations</h2>
            <h1 className='text-5xl font-extrabold text-yellow-600 mb-10'>Cafes & Restaurants</h1>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl'>
                <div className='relative bg-white rounded-2xl shadow-lg overflow-hidden'>
                    <img className='w-full h-full object-cover' src='/images/mainburger.jpg' />
                    <div className='absolute bottom-0 left-0 p-6 bg-white opacity-80 w-full '>
                        <h3 className='text-3xl font-bold text-gray-800 '>Burger House</h3>
                        <p className='text-gray-600 '>Monday - Friday</p>
                        <p className='text-gray-600'>09:00 - 22:00</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='relative bg-white rounded-2xl shadow-lg overflow-hidden'>
                        <img className='w-full h-56 object-cover' src="/images/pizza2.jpg" />
                        <div className='p-4'>
                            <span className='absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm'>Recommended</span>
                            <h3 className='text-2xl font-bold text-gray-800'>Restaurant</h3>
                            <p className='text-gray-600 '>Monday - Friday</p>
                        <p className='text-gray-600'>09:00 - 22:00</p>
                        </div>
                    </div>

                    <div className='relative bg-white rounded-2xl shadow-lg overflow-hidden'>
                        <img className='w-full h-56 object-cover' src="/images/pizza2.jpg" />
                        <div className='p-4'>
                            <span className='absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm'>Recommended</span>
                            <h3 className='text-2xl font-bold text-gray-800'>Restaurant</h3>
                            <p className='text-gray-600 '>Monday - Friday</p>
                        <p className='text-gray-600'>09:00 - 22:00</p>
                        </div>
                    </div>

                    <div className='relative bg-white rounded-2xl shadow-lg overflow-hidden'>
                        <img className='w-full h-56 object-cover' src="/images/pizza2.jpg" />
                        <div className='p-4'>
                            <span className='absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm'>Recommended</span>
                            <h3 className='text-2xl font-bold text-gray-800'>Restaurant</h3>
                            <p className='text-gray-600 '>Monday - Friday</p>
                        <p className='text-gray-600'>09:00 - 22:00</p>
                        </div>
                    </div>

                    <div className='relative bg-white rounded-2xl shadow-lg overflow-hidden'>
                        <img className='w-full h-56 object-cover' src="/images/pizza2.jpg" />
                        <div className='p-4'>
                            <span className='absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm'>Recommended</span>
                            <h3 className='text-2xl font-bold text-gray-800'>Restaurant</h3>
                            <p className='text-gray-600 '>Monday - Friday</p>
                        <p className='text-gray-600'>09:00 - 22:00</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className='mt-10 px-8 py-3 bg-yellow-600 text-white text-lg font-bold'>View More</button>
        </div>
        <div className='flex flex-col lg:flex-row md:flex-row items-center justify-between bg-yellow-500 text-white overflow-hidden'>
            <div className='relative'>
                <img src='/images/pizzabox.png' className='max-w-xl' />
            </div>

            <div className='max-w-full md:w-1/2 lg:max-w-1/2'>
                <h1 className='text-7xl font-extrabold leading-tight'>Always <br/> <span className='text-black font-extrabold'>The Hottest <br/>Pizza</span></h1>
                <p className='text-lf text-black mt-4'>Loaded with bell peppers, olives, onions, mushrooms, and tomatoes on a cheesy crust.</p>
                <button className='bg-black text-white w-1/2 py-4 px-8 mt-6 text-lg rounded-full shadow-lg'>Get Pizza</button>
            </div>
        </div>
            <section className='relative w-full h-[500px] bg-cover bg-center' style={{backgroundImage:"url(/images/bgimage.jpg)", backgroundAttachment:"fixed"}}>
                <div className='absolute insert-0 bg-black opacity-50'></div>
                    <div className='relative z-10 flex items-center justify-center h-full text-center text-white px-4'>
                        <div>
                            <h2 className='text-4xl font-bold mb-4'>Subscribe For Updates</h2>
                            <p className='text-xl mb-6'>Get the latest news, offers and more directly to your inbox.</p>

                            <div className='flex justify-center'>
                                <input className='px-4 py-2 rounded-l-full text-white border-2 border-white'></input>
                                <button className='bg-yellow-500 text-gray-900 px-6 py-3 rounded-r-full gont-bold'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                
            </section>

            <footer className='bg-gray-900 text-white py-8'>
                <div className='container mx-auto text-center'>
                    <div className='mb-4'>
                        <h3 className='text-xl font-bold'>DigiFood</h3>
                        <p className='text-sm'>The best food delivered to your door.</p>
                    </div>
                    <div className='mb-6'>
                        <ul className='flex justify-center space-x-6'>
                            <li><a className='hover:text-yellow'>Home</a></li>
                            <li><a className='hover:text-yellow'>Menu</a></li>
                        </ul>
                    </div>
                    <div className='text-sm'>
                        <p >&copy; 2025 DigiFood.All rights reserved.</p>
                    </div>
                </div>
            </footer>
    </div>
  )
}

export default Home