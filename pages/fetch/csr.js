import Card from "@/components/Card";
import Shortcut from "@/components/Shorcut";
import { useEffect, useState } from "react";

export default function Csr() {

    const [meals, setMeals] = useState();

    useEffect(() => {
        fetch(
            "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
        )
        .then((response) => response.json())
        .then(data => setMeals(data.meals))
    }, []);

    return (
        <main>
            <Shortcut/>
            <h2>Client Side Rendering</h2>
            {
                meals && (meals.map((meal) => {
                    return (<Card
                        thumb={meal.strMealThumb}
                        name={meal.strMeal}
                        id={meal.idMeal}
                        key={meal.idMeal} />
                    )
                })
                )
            }
        </main>
    );
}
