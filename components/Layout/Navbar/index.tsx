import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { SUPPORTED_WALLETS } from "../../../web3/wallets";
import _ from "lodash";

// Mui
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Components
import ToggleDarkMode from "./ToggleDarkMode";
import NavLink from "./NavLink";
import DialogWalletOptions from "./DialogWalletOptions";

// Hooks
import { useEagerConnect, useInactiveListener } from "../../../hooks";

const routes = ["manifesto", "the-band"];

const ButtonAppBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { activate, deactivate, account, library } =
    useWeb3React<Web3Provider>();
  const walletName = library?.connection.url;
  const walletNameUpperSnake = _.toUpper(_.snakeCase(walletName)); // Convert to match constants keys
  const walletIcon = SUPPORTED_WALLETS[walletNameUpperSnake]?.iconURL;

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager);

  const handleClose = (connector: AbstractConnector | undefined) => {
    if (connector) activate(connector);

    return setOpen(false);
  };

  return (
    <>
      <DialogWalletOptions open={open} onClose={handleClose} />
      <Box mb={4}>
        <AppBar position="static">
          <Toolbar>
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
            <Box sx={{ display: "flex", flexGrow: 1 }}>
              {routes.map((route, idx) => (
                <NavLink key={`${idx}-${route}`} name={route} />
              ))}
            </Box>

            <ToggleDarkMode />

            {!!account ? (
              <>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={(e) => setAnchorEl(e.currentTarget)}
                  sx={{
                    textTransform: "none",
                    marginLeft: 2,
                    borderRadius: 5,
                  }}
                >
                  <Image
                    src={walletIcon}
                    alt={`${walletName} icon`}
                    height={30}
                    width={30}
                  />
                  <Tooltip title={account}>
                    <Typography
                      variant="body1"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        maxWidth: 100,
                      }}
                      noWrap
                      ml={1}
                    >
                      {account}
                    </Typography>
                  </Tooltip>
                  <KeyboardArrowDownIcon />
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={!!anchorEl}
                  onClose={() => {
                    setAnchorEl(null);
                  }}
                >
                  <MenuItem onClick={() => deactivate()}>Deactivate</MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => setOpen(true)}
                sx={{ marginLeft: 2, borderRadius: 5 }}
              >
                Connect
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default ButtonAppBar;
