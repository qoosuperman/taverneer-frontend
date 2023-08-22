import { type FC,useEffect,useState } from "react";

import { apiGetIngredients } from "../../api";
import BackStageGuardian from "./BackStageGuardian";

interface Ingredient {
  id: string;
  name: string;
}

const AdminIngredientsList: FC = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    apiGetIngredients()
      .then((res) => {
        if (!!res.data.ingredients) {
          setIngredients(
            res.data.ingredients.map((ingredient) => {
              return {
                id: ingredient.id,
                name: ingredient.name,
              };
          }));
        }
      })
      .catch((_error) => {
        // do nothing
      });
  }, []);

  return (
    <BackStageGuardian>
      <div>
        {ingredients.map(({id, name}) => {
          return <li key={id}> id: {id} name: {name}</li>
        })}
      </div>
    </BackStageGuardian>
  );
}

export default AdminIngredientsList;
