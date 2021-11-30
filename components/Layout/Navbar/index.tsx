import Image from "next/image";
import Link from "next/link";
import _ from "lodash";

// Mui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

// Components
import ToggleDarkMode from "./ToggleDarkMode";
import NavLink from "./NavLink";

const routes = ["manifesto", "the-band"];

const ButtonAppBar = () => {
  return (
    <Box mb={4}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start">
            <Link href="/" passHref>
              <a>
                <Image
                  src="/record-disk.svg"
                  alt="Record disk"
                  height={50}
                  width={50}
                />
              </a>
            </Link>
          </IconButton>
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            {routes.map((route, idx) => (
              <NavLink key={`${idx}-${route}`} name={route} />
            ))}
          </Box>
          <ToggleDarkMode />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
