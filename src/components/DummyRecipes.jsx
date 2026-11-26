import React, { useEffect, useState } from 'react'
import './DummyRecipes.css'
import axios from 'axios'

const DummyRecipes = () => {
    const [recipes, setRecipes]=useState([])
    const [error, setError]=useState(null)
    const [loading, setLoading]=useState(false)

    useEffect(()=>{
        let mounted = true;

        const fetchRecipes =async()=>{
            setLoading(true)
            setError(null)

            try {

                const res = await axios.get('https://dummyjson.com/recipes')
                if(mounted) setRecipes(res.data.recipes)
                    console.log(res.data.recipes)

            } catch (error) {
                if(mounted) setError('데이터를 불러오지 못했습니다')

            } finally{
                if(mounted) setLoading(false)
            }
        }

        fetchRecipes()

        return ()=>{
            mounted=false
        }

    },[])

    if (loading)
        return (
            <div className="dummy-wrap">
                <h2 className="dummy-title">DummyJSON Carts</h2>
                <p className="dummy-state">로딩중...</p>
            </div>
        );


    return (
        <div className='recipes-wrap'>
            <h2>recipes</h2>

            <ul>
                {recipes.map((r)=>(

                <li key={r.id}>
                    <span>{r.id}</span>
                    <div className="img-wrap">
                        <img src={r.image} alt={r.name} />
                    </div>
                    <h2>{r.name}</h2>
                    <ol>
                        {r.instructions.map((i)=>(
                            <li key={i}>{i}</li>
                        ))}
                        {/* 요리 만드는 순서 나오게 하기 */}
                    </ol>
                    {/*  tag */}
                    {r.tags.map((t)=>(
                    <span key={t}>{t}</span>
                    ))}
                </li>
                ))}
            </ul>
        </div>
    )
}

export default DummyRecipes