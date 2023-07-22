import React, { Fragment } from "react"

const Container = ({ title, children }) => {
    return (
        <Fragment>
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        {title}
                    </h2>
                    <div class="flex flex-row pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 ">
                        {children}
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Container