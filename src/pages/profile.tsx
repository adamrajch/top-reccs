import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import { supabase } from "../../client";

export default function Profile(): ReactElement {
  const [profile, setProfile] = useState(null);
  const router = useRouter();
  useEffect(() => {
    fetchProfile();
  }, []);

  async function fetchProfile() {
    const profileData = await supabase.auth.user();
    if (!profileData) {
      router.push("/login");
    } else {
      setProfile(profileData);
      console.log(profile);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
    router.push("/login");
  }
  if (!profile) return null;

  return (
    <div>
      hello {profile.id} user ID: {profile.id}
      <button onClick={signOut}>sign out</button>
    </div>
  );
}
