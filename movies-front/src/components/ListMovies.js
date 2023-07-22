import React, { Fragment, useEffect, useState } from "react"

import apiServer from "./consts"

const ListMovies = () => {

    const [movies, setMovies] = useState([])

    const getMovies = async () => {
        try {
            const response = await fetch(`${apiServer}/movies`)
            const jsonData = await response.json()

            setMovies(jsonData)
            //console.log(jsonData)
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <Fragment>
            {movies.map(movie =>
                <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16" key={movie.id}>
                    <h2 class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                        </svg>

                        {movie.title}
                    </h2>
                    <p class="mb-4 text-xl font-extrabold leading-none text-gray-900 md:text-2xl dark:text-white">{movie.year}</p>
                    <dl>
                        <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Director</dt>
                        <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                            {movie.director.name}
                        </dd>
                    </dl>
                    <dl class="flex items-center space-x-6">
                        <div>
                            <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Summary</dt>
                            <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
                                {movie.description}

                            </dd>
                        </div>
                    </dl>
                </div>
            )}
        </Fragment>
    )
}

export default ListMovies