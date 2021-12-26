import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";
import fetcher from "../utils/fetcher";

// Mui
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import LinearProgress from "@mui/material/LinearProgress";

// Components
import { Layout, CardMember } from "../components";
import {type} from "os"

type Member = {
  id: string;
  username: string;
  avatar: string;
};

const Manifesto: NextPage = () => {
  const { data } = useSWR("/api/get-users", fetcher);
  const [members, setMembers] = useState([] as Member[]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (data) {
      setMembers(data.users);
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;

    setSearch(search);
    setMembers(
      data.users.filter((user: Member) =>
        user.username.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <div>
      <Head>
        <title>The Band</title>
        <meta name="description" content="The Builder Band Members" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Grid container spacing={3} direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h2" align="center">
              The Band
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Search Members"
              placeholder="Search by name, skills, etc."
              sx={{
                minWidth: "300px",
                textAlign: "center",
                [`& fieldset`]: {
                  borderRadius: 5,
                },
              }}
              value={search}
              onChange={handleChange}
            />
          </Grid>

          {!data ? (
            <LinearProgress sx={{ width: "100%", marginTop: 2 }} />
          ) : (
            members.map(({ id, username, avatar }: Member) => (
              <Grid key={id} container item xs={12} sm={6} md={3}>
                <CardMember username={username} avatar={avatar} />
              </Grid>
            ))
          )}
        </Grid>
      </Layout>
    </div>
  );
};

export default Manifesto;
