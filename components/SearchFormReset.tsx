import React from 'react'
import Link from 'next/link'
import { MdCancel } from "react-icons/md";

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.search-input') as HTMLFormElement
        if (form) form.reset();
    }
  return (
    <button type="reset" onClick={reset}>
        <Link href="/"><MdCancel className='size-7' /></Link>
    </button>
  )
}

export default SearchFormReset
