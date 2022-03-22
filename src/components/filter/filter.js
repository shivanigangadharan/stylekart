import React from 'react';
import './filter.css';
import { useFilter } from '../../context/filterContext';

export default function Filter() {
    const { state, dispatch } = useFilter();
    return (
        <div>
            <div class="container-filters">
                <h3 class="filter-top">
                    <b class="bold"> Filters</b>
                    <u>Clear</u>
                </h3>
                <h3 class="bold">Price</h3>
                <input class="pricerange" type="range" list="pricerange" />
                <datalist id="pricerange">
                    <option value="50" label="50"></option>
                    <option value="150" label="150"></option>
                    <option value="200" label="200"></option>
                </datalist>
                <h3 class="bold">Category</h3>
                <div class="cateory">
                    <div>
                        <input class="checkbox" id="womens-clothing" type="checkbox" />
                        <label for="womens-clothing">Women clothing</label>
                    </div>
                    <div>
                        <input class="checkbox" id="men-clothing" type="checkbox" />
                        <label for="womens-clothing">Men clothing</label>
                    </div>
                </div>
                <h3 class="bold">Rating</h3>
                <div>
                    <input type="radio" id="4+" name="rating" />
                    <label for="4+">4 stars and above</label>
                </div>
                <div>
                    <input type="radio" id="3+" name="rating" />
                    <label for="3+">3 stars and above</label>
                </div>
                <div>
                    <input type="radio" id="2+" name="rating" />
                    <label for="2+">2 stars and above</label>
                </div>
                <div>
                    <input type="radio" id="1+" name="rating" />
                    <label for="1+">1 star and above</label>
                </div>

                <h3 class="bold">Sort by</h3>
                <div>
                    <input onClick={(e) => { dispatch({ type: "SORT_BY_PRICE", payload: e.target.id }) }} type="radio" id="low-high" name="sortby" />
                    <label for="low-high">Price - Low to High</label>
                </div>
                <div>
                    <input onClick={(e) => { dispatch({ type: "SORT_BY_PRICE", payload: e.target.id }) }} type="radio" id="high-low" name="sortby" />
                    <label for="high-low">Price - High to Low</label>
                </div>
            </div>
        </div>
    )
}
