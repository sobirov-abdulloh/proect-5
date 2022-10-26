import React from "react";

import Test from "../../components/Test/Test";
import { useQuestionsQuery } from "../../services/Test";
import "./Viktorina.css"
function Viktorina() {
  const { data, isLoading } = useQuestionsQuery();
  // const sds=["dsds","dsds","dsds","dsds"]
  console.log(data?.length)
  return (
    <div className="viktorina">
      <h1>Viktorina savollari</h1>
      {isLoading && <h1>loading...</h1>}
      {data && data.map((savol) => <Test key={savol.id} {...savol} />)}

     
     
    </div>
  );
}

export default Viktorina;
