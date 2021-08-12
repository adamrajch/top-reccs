import React, { ReactElement } from "react";
import { supabase } from "../../client";

interface Props {
  user: any;
}
export default function Protected({ user }: Props): ReactElement {
  console.log({ user });
  return <div>hi from protected</div>;
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) {
    return { props: {}, redirect: { destination: "/login" } };
  }

  // user logic
  return { props: { user } };
}
