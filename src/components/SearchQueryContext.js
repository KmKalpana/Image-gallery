import React,{ createContext, useContext, useState } from "react";

const SearchQueryContext = createContext()
const SearchQueryUpdateContext = createContext()

export const useSearchQuery = () =>
    useContext(SearchQueryContext)

export const useSearchQueryUpdate = () =>
    useContext(SearchQueryUpdateContext)

export function SearchQueryProvider({ children }) {
    const [query, setQuery] = useState('')

    const updateQuery = newQuery => setQuery(newQuery)

    return (
        <SearchQueryContext.Provider value={query}>
            <SearchQueryUpdateContext.Provider value={updateQuery}>
                {children}
            </SearchQueryUpdateContext.Provider>
        </SearchQueryContext.Provider>
    )
}