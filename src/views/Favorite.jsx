import React from 'react'
import { useSelector } from 'react-redux'
import CardFavorite from '../components/CardFavorite'

export default function Favorite() {
    const selector = useSelector(state => state.dataFavorite.data)
    if (selector.length === 0) {
        return (
            <div className="grid justify-items-center pt-10">
                <h1 className="pt-10 text-2xl">...Add Favorite...</h1>
            </div>
        )
    }
    return (
        <React.Fragment>
            <h1 className="text-center font-serif text-3xl pt-2 pb-4">Surah Favorite</h1>
            <div className="flex flex-wrap">
                {
                    selector.map((e) => {
                        return <CardFavorite dataFavorite={e} key={e.number}></CardFavorite>
                    })
                }
            </div>
        </React.Fragment>
    )
}
