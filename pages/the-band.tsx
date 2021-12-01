import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";
import fetcher from "../utils/fetcher";

// Mui
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

// Components
import { Layout, CardMember } from "../components";

type Member = {
  id: string;
  username: string;
  avatar: string;
};

const Manifesto: NextPage = () => {
  const { data } = useSWR("/api/get-users", fetcher);

  return (
    <div>
      <Head>
        <title>The Band</title>
        <meta name="description" content="The Builder Band Members" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h2" align="center" gutterBottom>
              The Band
            </Typography>
            {!data ? (
              <LinearProgress />
            ) : (
              <Grid container spacing={3}>
                {data.users.map(({ id, username, avatar }: Member) => (
                  <Grid key={id} item xs={12} sm={6} md={3}>
                    <CardMember username={username} avatar={avatar} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
};

export default Manifesto;
