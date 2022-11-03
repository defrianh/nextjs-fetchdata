import Card from "@/components/Card";
import Shortcut from "@/components/Shorcut";

export default function Ssg({ data }) {
    return (
        <main>
            <Shortcut/>
            <h2>Static Site Generation</h2>
            {
                data && (data.meals.map((meal) => {
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

export async function getStaticProps() {
    const fecthData = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
    const data = await fecthData.json()
    return {
      props: { data },
    }
  }