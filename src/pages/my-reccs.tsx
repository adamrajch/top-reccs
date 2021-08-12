import React, { ReactElement, useEffect, useState } from "react";
import { supabase } from "../../client";

export default function MyReccs(): ReactElement {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    fetchLists();
  }, []);
  async function fetchLists() {
    const { data } = await supabase.from("lists").select();
    setLists(data);
    console.log("data: ", data);
  }
  return (
    <div>
      <button>Add Recommendation List</button>
    </div>
  );
}
