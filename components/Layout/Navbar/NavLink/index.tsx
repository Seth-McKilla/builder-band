import Link from "next/link";
import _ from "lodash";

// Mui
import Box from "@mui/material/Box";

type Props = {
  name: string;
};

const NavLink = ({ name }: Props) => {
  return (
    <Box sx={{ padding: 1 }}>
      <Link href={`/${name}`} passHref>
        <a>{_.startCase(name)}</a>
      </Link>
    </Box>
  );
};

export default NavLink;
