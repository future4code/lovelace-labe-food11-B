import React from "react";
import { useHistory } from "react-router";
import ToolBar from "@material-ui/core/ToolBar";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { goToHome } from "../../routes/coordinator";

export default function Footer() {
  const history = useHistory();
  return (
    <ToolBar>
      <Button
        onClick={() => {
          goToHome(history);
        }}
      >
        <HomeIcon />
      </Button>
      <Button>
        <ShoppingCartIcon />
      </Button>
      <Button>
        <AccountCircleIcon />
      </Button>
    </ToolBar>
  );
}
