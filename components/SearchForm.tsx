"use client"

import React from 'react'
import SearchFormReset from './SearchFormReset';
import Link from 'next/link';
import { FaSearch } from "react-icons/fa";

const SearchForm = ({query}: {query?: string}) => {
  return (
    <form action="/" className='my-5 flex gap-2'>
        <input name='query' defaultValue={query} id='search-input' className='text-blue-950 p-2 rounded-full text-center border-2 border-black text-xl' placeholder='Search the Domain' type="text" />
        <div className="flex gap-2">
            {query && <SearchFormReset />}
            <button type='submit'>
                <Link href="/"><FaSearch className='size-7' /></Link>
            </button>
        </div>
    </form>
  )
}

export default SearchForm
