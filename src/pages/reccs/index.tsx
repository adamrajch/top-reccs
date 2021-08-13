import { Button, Grid, Typography } from "@material-ui/core";
import React, { ReactElement, useEffect, useState } from "react";
import { supabase } from "../../../client";
import { MediaCard } from "../../components/mediaCard";

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
      <Typography variant="h2" component="h2" gutterBottom>
        My Reccomendation Lists
      </Typography>
      {/* <Tab>

      </Tab> */}
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Grid container justifyContent="center" spacing={spacing}>
        {lists.map((m) => (
          <Grid key={m.mal_id} item>
            <MediaCard title={m.title} img={m.image_url} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
