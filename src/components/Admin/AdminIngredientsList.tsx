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
        {ingredients.map((ingredient) => {
          return <li key={ingredient.id}> id: {ingredient.id} name: {ingredient.name}</li>
        })}
      </div>
    </BackStageGuardian>
  );
}

export default AdminIngredientsList;
