import React from "react";
import BookList from "../book-list";
import ShoppingCartTable from '../shopping-cart-table'

const HomePage = () => {
    // const books = [
    //     {
    //         id: 1,
    //         title: 'Production-ready Microservices',
    //         author: 'Susan J. Flower'
    //     },
    //     {
    //         id: 2,
    //         title: 'Release It!',
    //         author: 'Michael T. Nygard'
    //     }
    // ]
    return (
        <div>
            <BookList />
            <ShoppingCartTable />
        </div>
    )
}

export default HomePage;